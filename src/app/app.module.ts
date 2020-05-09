import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AgmCoreModule } from '@agm/core';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAWTxxcLO1Q5Xg26NKfkiV4t30z7u7Qoe0'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
