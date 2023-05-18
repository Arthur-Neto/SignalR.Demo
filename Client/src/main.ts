import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { APP_CONFIG } from '@core/config/config.model';
import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

fetch('./configs/config.json')
    .then((res) => res.json())
    .then((config) => {
        if (environment.production) {
            enableProdMode();
        }

        platformBrowserDynamic([{ provide: APP_CONFIG, useValue: config }])
            .bootstrapModule(AppModule)
            .catch((err) => console.error(err));
    });
