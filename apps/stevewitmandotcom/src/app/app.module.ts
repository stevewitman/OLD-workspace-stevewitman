import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { StevewitmanUiMainNavModule } from '@nx-stevewitman/stevewitman/ui-main-nav';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    StevewitmanUiMainNavModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
