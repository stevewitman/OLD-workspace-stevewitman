import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Route } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';

import { SharedMaterialModule } from '@nx-stevewitman/shared/material';
import { SharedUiPostCardModule } from '@nx-stevewitman/shared/ui-post-card';

export const ngnuggetsFeatHomeRoutes: Route[] = [
  {
    path: '',
    component: HomePageComponent,
  },
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    SharedMaterialModule,
    SharedUiPostCardModule,
  ],
  declarations: [HomePageComponent],
  exports: [HomePageComponent],
})
export class NgnuggetsFeatHomeModule {}
