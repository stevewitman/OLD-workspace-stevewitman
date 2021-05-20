import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { NewsletterPageComponent } from './newsletter-page/newsletter-page.component';
import { SharedMaterialModule } from '@nx-stevewitman/shared/material';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: '', pathMatch: 'full', component: NewsletterPageComponent },
    ]),
    SharedMaterialModule,
    ReactiveFormsModule,
  ],
  declarations: [NewsletterPageComponent],
  exports: [NewsletterPageComponent],
})
export class NgnuggetsFeatNewsletterModule {}
