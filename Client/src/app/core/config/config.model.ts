import { InjectionToken } from '@angular/core';

export const APP_CONFIG = new InjectionToken<IConfig>('config.json');

export interface IConfig {
    apiURL: string;
}
