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
