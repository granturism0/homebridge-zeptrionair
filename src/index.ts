import { API } from 'homebridge';

import { PLATFORM_NAME } from './settings';
import { ZeptrionAirHomebridgePlatform } from './platform';

/**
 * This method registers the platform with Homebridge
 */
export = (api: API): void => {
  api.registerPlatform(PLATFORM_NAME, ZeptrionAirHomebridgePlatform);
};
