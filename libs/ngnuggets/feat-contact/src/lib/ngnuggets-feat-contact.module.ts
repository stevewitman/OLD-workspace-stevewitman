import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ContactPageComponent } from './contact-page/contact-page.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: '', pathMatch: 'full', component: ContactPageComponent },
    ]),
  ],
  declarations: [ContactPageComponent],
  exports: [ContactPageComponent],
})
export class NgnuggetsFeatContactModule {}
