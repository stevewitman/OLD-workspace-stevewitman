import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Route } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';

import { SharedMaterialModule } from '@nx-stevewitman/shared/material';

export const ngnuggetsFeatHomeRoutes: Route[] = [
  {
    path: '',
    component: HomePageComponent,
  },
];

@NgModule({
  imports: [CommonModule, RouterModule, SharedMaterialModule],
  declarations: [HomePageComponent],
  exports: [HomePageComponent],
})
export class NgnuggetsFeatHomeModule {}
