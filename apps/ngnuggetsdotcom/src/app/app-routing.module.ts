import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from '@nx-stevewitman/ngnuggets/feat-home';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    component: HomePageComponent,
    data: {
      title: 'NgNuggets - Home',
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
      title: 'NgNuggets - Newsletter',
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
      title: 'NgNuggets - Submit',
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
      title: 'NgNuggets - About',
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
      title: 'NgNuggets - Contact',
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
      title: 'NgNuggets - Settings',
      position: 6,
    },
  },
  {
    path: 'donate',
    loadChildren: () =>
      import('@nx-stevewitman/ngnuggets/feat-donate').then(
        (m) => m.NgnuggetsFeatDonateModule
      ),
    data: {
      title: 'NgNuggets - Donate',
      position: 7,
    },
  },
  {
    path: '**',
    loadChildren: () =>
      import('@nx-stevewitman/shared/ui-page-not-found').then(
        (m) => m.SharedUiPageNotFoundModule
      ),
    data: {
      title: 'NgNuggets - Page Not Found',
      position: 8,
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
