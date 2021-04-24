import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedMaterialModule } from '@nx-stevewitman/shared/material';
import { MainNavComponent } from './main-nav/main-nav.component';

@NgModule({
  imports: [
    SharedMaterialModule,
    CommonModule
  ],
  declarations: [MainNavComponent],
  exports: [MainNavComponent],
})
export class StevewitmanUiMainNavModule {}
