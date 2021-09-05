import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from '@nx-stevewitman/ngnuggets/feat-home';

const routes: Routes = [
  // {
  //   path: '',
  //   redirectTo: 'home',
  //   pathMatch: 'full',
  // },
  // Main menu routes
  {
    path: '',
    component: HomePageComponent,
    data: {
      title: 'ngNuggets - Home',
      position: 1,
    },
  },
  {
    path: 'newsletter',
    loadChildren: () =>
      import('@nx-stevewitman/ngnuggets/feat-newsletter').then(
        (m) => m.NgnuggetsFeatNewsletterModule
      ),
    data: {
      title: 'ngNuggets - Newsletter',
      position: 2,
    },
  },
  {
    path: 'submit',
    loadChildren: () =>
      import('@nx-stevewitman/ngnuggets/feat-submit').then(
        (m) => m.NgnuggetsFeatSubmitModule
      ),
    data: {
      title: 'ngNuggets - Submit',
      position: 3,
    },
  },
  {
    path: 'about',
    loadChildren: () =>
      import('@nx-stevewitman/ngnuggets/feat-about').then(
        (m) => m.NgnuggetsFeatAboutModule
      ),
    data: {
      title: 'ngNuggets - About',
      position: 4,
    },
  },
  {
    path: 'contact',
    loadChildren: () =>
      import('@nx-stevewitman/ngnuggets/feat-contact').then(
        (m) => m.NgnuggetsFeatContactModule
      ),
    data: {
      title: 'ngNuggets - Contact',
      position: 5,
    },
  },
  {
    path: 'settings',
    loadChildren: () =>
      import('@nx-stevewitman/ngnuggets/feat-settings').then(
        (m) => m.NgnuggetsFeatSettingsModule
      ),
    data: {
      title: 'ngNuggets - Settings',
      position: 6,
    },
  },
  {
    path: 'sponsors',
    loadChildren: () =>
      import('@nx-stevewitman/ngnuggets/feat-sponsors').then(
        (m) => m.NgnuggetsFeatSponsorsModule
      ),
    data: {
      title: 'ngNuggets - Sponsors',
      position: 7,
    },
  },
  {
    path: 'donate',
    loadChildren: () =>
      import('@nx-stevewitman/ngnuggets/feat-donate').then(
        (m) => m.NgnuggetsFeatDonateModule
      ),
    data: {
      title: 'ngNuggets - Donate',
      position: 8,
    },
  },
  // Other routes
  {
    path: 'post/:slug',
    loadChildren: () =>
      import('@nx-stevewitman/ngnuggets/feat-post').then(
        (m) => m.NgnuggetsFeatPostModule
      ),
    data: {
      title: 'ngNuggets - Post Details',
    },
  },
  {
    path: '**',
    loadChildren: () =>
      import('@nx-stevewitman/shared/ui-page-not-found').then(
        (m) => m.SharedUiPageNotFoundModule
      ),
    data: {
      title: 'ngNuggets - Page Not Found',
      position: 9,
    },
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      initialNavigation: 'enabled',
      scrollPositionRestoration: 'top', // only works WITHOUT height: 100% on body,html
      preloadingStrategy: PreloadAllModules,
    }),
  ],

  exports: [RouterModule],
})
export class AppRoutingModule {}
