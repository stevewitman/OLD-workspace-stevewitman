import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Route } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';

export const ngnuggetsFeatHomeRoutes: Route[] = [
  {
    path: '',
    component: HomePageComponent,
  },
];

@NgModule({
  imports: [CommonModule, RouterModule],
  declarations: [
    HomePageComponent
  ],
  exports: [
    HomePageComponent
  ]
})
export class NgnuggetsFeatHomeModule {}
