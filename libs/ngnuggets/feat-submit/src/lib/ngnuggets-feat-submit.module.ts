import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SubmitPageComponent } from './submit-page/submit-page.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: '', pathMatch: 'full', component: SubmitPageComponent },
    ]),
  ],
  declarations: [SubmitPageComponent],
  exports: [SubmitPageComponent],
})
export class NgnuggetsFeatSubmitModule {}
