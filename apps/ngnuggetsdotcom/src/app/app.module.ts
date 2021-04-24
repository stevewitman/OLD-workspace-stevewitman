import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { NgnuggetsUiMainNavModule } from '@nx-stevewitman/ngnuggets/ui-main-nav';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot([], { initialNavigation: 'enabled' }),
    NgnuggetsUiMainNavModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
