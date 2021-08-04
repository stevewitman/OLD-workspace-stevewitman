import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { SubmitPageComponent } from './submit-page/submit-page.component';
import { SharedMaterialModule } from '@nx-stevewitman/shared/material';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: '', pathMatch: 'full', component: SubmitPageComponent },
    ]),
    SharedMaterialModule,
    ReactiveFormsModule,
  ],
  declarations: [SubmitPageComponent],
  exports: [SubmitPageComponent],
})
export class NgnuggetsFeatSubmitModule {}
