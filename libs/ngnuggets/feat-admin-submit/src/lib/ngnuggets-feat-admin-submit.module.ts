import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { AdminSubmitComponent } from './admin-submit/admin-submit.component';

import { SharedMaterialModule } from '@nx-stevewitman/shared/material';



@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: '', pathMatch: 'full', component: AdminSubmitComponent },
    ]),
    SharedMaterialModule,
    ReactiveFormsModule,
  ],
  declarations: [AdminSubmitComponent],
  exports: [AdminSubmitComponent],
})
export class NgnuggetsFeatAdminSubmitModule {}
