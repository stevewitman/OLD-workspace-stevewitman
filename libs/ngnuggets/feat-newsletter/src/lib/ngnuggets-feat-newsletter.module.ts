import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NewsletterPageComponent } from './newsletter-page/newsletter-page.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: '', pathMatch: 'full', component: NewsletterPageComponent },
    ]),
  ],
  declarations: [NewsletterPageComponent],
  exports: [NewsletterPageComponent],
})
export class NgnuggetsFeatNewsletterModule {}
