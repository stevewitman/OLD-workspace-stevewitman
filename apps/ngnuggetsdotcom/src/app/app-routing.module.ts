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
  },
  {
    path: 'about',
    loadChildren: () =>
      import('@nx-stevewitman/ngnuggets/feat-about').then(
        (m) => m.NgnuggetsFeatAboutModule
      ),
  },
  {
    path: 'contact',
    loadChildren: () =>
      import('@nx-stevewitman/ngnuggets/feat-contact').then(
        (m) => m.NgnuggetsFeatContactModule
      ),
  },
  {
    path: 'donate',
    loadChildren: () =>
      import('@nx-stevewitman/ngnuggets/feat-donate').then(
        (m) => m.NgnuggetsFeatDonateModule
      ),
  },
  {
    path: 'newsletter',
    loadChildren: () =>
      import('@nx-stevewitman/ngnuggets/feat-newsletter').then(
        (m) => m.NgnuggetsFeatNewsletterModule
      ),
  },
  {
    path: 'settings',
    loadChildren: () =>
      import('@nx-stevewitman/ngnuggets/feat-settings').then(
        (m) => m.NgnuggetsFeatSettingsModule
      ),
  },
  {
    path: 'submit',
    loadChildren: () =>
      import('@nx-stevewitman/ngnuggets/feat-submit').then(
        (m) => m.NgnuggetsFeatSubmitModule
      ),
  },
  {
    path: '**',
    loadChildren: () =>
      import('@nx-stevewitman/shared/ui-page-not-found').then(
        (m) => m.SharedUiPageNotFoundModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { initialNavigation: 'enabled' })],

  exports: [RouterModule],
})
export class AppRoutingModule {}
