import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignalrService } from './signalr.service';

@NgModule({
    declarations: [AppComponent],
    imports: [BrowserModule, AppRoutingModule],
    providers: [
        SignalrService,
        {
            provide: APP_INITIALIZER,
            useFactory: (signalrService: SignalrService) => () => signalrService.initiateSignalrConnection(),
            deps: [SignalrService],
            multi: true,
        },
    ],
    bootstrap: [AppComponent],
})
export class AppModule {}
