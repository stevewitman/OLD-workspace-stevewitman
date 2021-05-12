import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
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
      depth: 1,
      postition: 1,
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
      depth: 1,
      postition: 2,
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
      depth: 1,
      postition: 3,
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
      depth: 1,
      postition: 4,
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
      depth: 1,
      postition: 5,
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
      depth: 1,
      postition: 6,
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
      depth: 1,
      postition: 7,
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
      depth: 1,
      position: 8
    },
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { initialNavigation: 'enabled' })],

  exports: [RouterModule],
})
export class AppRoutingModule {}
