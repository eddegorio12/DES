// Service data lookup module
import cableTrayInstallation from './cable-tray-installation.json';
import cablePulling from './cable-pulling.json';
import glandingAndTermination from './glanding-and-termination.json';
import loopCheckPreCommissioning from './loop-check-pre-commissioning.json';
import instrumentConfigurationCalibration from './instrument-configuration-calibration.json';
import inspection from './inspection.json';
import operationSupport from './operation-support.json';
import maintenance from './maintenance.json';

export const servicesMap = {
  'cable-tray-installation': cableTrayInstallation,
  'cable-pulling': cablePulling,
  'glanding-and-termination': glandingAndTermination,
  'loop-check-pre-commissioning': loopCheckPreCommissioning,
  'instrument-configuration-calibration': instrumentConfigurationCalibration,
  'inspection': inspection,
  'operation-support': operationSupport,
  'maintenance': maintenance,
};

export const allServiceSlugs = Object.keys(servicesMap);