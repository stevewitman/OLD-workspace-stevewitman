import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgnuggetsUiMainNavModule } from '@nx-stevewitman/ngnuggets/ui-main-nav';

import { environment } from '../environments/environment';
import { AngularFireModule } from '@angular/fire';
// import { provideFirebaseApp, initializeApp } from '@angular/fire/app';
// import { getFirestore, provideFirestore } from '@angular/fire/firestore';
// import { getAuth, provideAuth } from '@angular/fire/auth';
// import { getStorage, provideStorage } from '@angular/fire/storage';
// import { getAnalytics, provideAnalytics } from '@angular/fire/analytics';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    // RouterModule.forRoot([], { initialNavigation: 'enabled' }),
    NgnuggetsUiMainNavModule,
    AngularFireModule.initializeApp(environment.firebase),
    // provideFirebaseApp(() => initializeApp(environment.firebase)),
    // provideFirestore(() => getFirestore()),
    // provideAuth(() => getAuth()),
    // provideStorage(() => getStorage()),
    // provideAnalytics(() => getAnalytics()),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
