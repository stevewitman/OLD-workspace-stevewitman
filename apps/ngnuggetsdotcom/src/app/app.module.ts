import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgnuggetsUiMainNavModule } from '@nx-stevewitman/ngnuggets/ui-main-nav';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    // RouterModule.forRoot([], { initialNavigation: 'enabled' }),
    NgnuggetsUiMainNavModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
