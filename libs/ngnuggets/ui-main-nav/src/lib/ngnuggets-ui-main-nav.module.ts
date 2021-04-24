import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedMaterialModule } from '@nx-stevewitman/shared/material';
import { MainNavComponent } from './main-nav/main-nav.component';

@NgModule({
  imports: [
    CommonModule,
    SharedMaterialModule
  ],
  declarations: [MainNavComponent],
  exports: [
    MainNavComponent
  ],
})
export class NgnuggetsUiMainNavModule {}
