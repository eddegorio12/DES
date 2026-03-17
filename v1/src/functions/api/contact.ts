import type { Context } from '@cloudflare/workers-types';

interface FormData {
  name: string;
  company: string;
  email: string;
  phone: string;
  service: string;
  message: string;
  turnstile_token?: string;
}

export async function onRequestPost(context: Context) {
  const { request } = context;
  const env = context.env;

  try {
    // Parse JSON body
    const body: FormData = await request.json();

    // Validate required fields
    if (!body.name || !body.company || !body.email || !body.phone || !body.service || !body.message) {
      return new Response(JSON.stringify({
        success: false,
        error: 'Missing required fields'
      }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    // Verify Turnstile token if present (skip in development if not configured)
    if (body.turnstile_token && env.TURNSTILE_SECRET_KEY) {
      const turnstileVerify = await fetch('https://challenges.cloudflare.com/turnstile/v0/siteverify', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams({
          secret: env.TURNSTILE_SECRET_KEY,
          response: body.turnstile_token
        })
      });

      const turnstileResult = await turnstileVerify.json();

      if (!turnstileResult.success) {
        return new Response(JSON.stringify({
          success: false,
          error: 'CAPTCHA verification failed'
        }), {
          status: 400,
          headers: { 'Content-Type': 'application/json' }
        });
      }
    }

    // Prepare email content
    const emailContent = `
New contact form submission from DES website:

Name: ${body.name}
Company: ${body.company}
Email: ${body.email}
Phone: ${body.phone}
Service Needed: ${body.service}

Message:
${body.message}

---
Submitted: ${new Date().toISOString()}
`;

    // Send email via Resend
    if (env.RESEND_API_KEY && env.CONTACT_EMAIL) {
      const resendResponse = await fetch('https://api.resend.com/emails', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${env.RESEND_API_KEY}`
        },
        body: JSON.stringify({
          from: 'DES Contact <contact@des-engineering.com>',
          to: [env.CONTACT_EMAIL],
          subject: `New Contact Form Submission - ${body.name} from ${body.company}`,
          text: emailContent,
          reply_to: body.email
        })
      });

      if (!resendResponse.ok) {
        const errorData = await resendResponse.json();
        console.error('Resend error:', errorData);
        return new Response(JSON.stringify({
          success: false,
          error: 'Failed to send email. Please try again later.'
        }), {
          status: 500,
          headers: { 'Content-Type': 'application/json' }
        });
      }
    } else {
      // In development without email configured, just log
      console.log('Email not sent (missing environment variables). Form data:', body);
    }

    // Success response
    return new Response(JSON.stringify({
      success: true,
      message: 'Form submitted successfully'
    }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' }
    });

  } catch (error) {
    console.error('Contact form error:', error);
    return new Response(JSON.stringify({
      success: false,
      error: 'Internal server error'
    }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    });
  }
}
