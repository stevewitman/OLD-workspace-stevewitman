import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { SharedMaterialModule } from '@nx-stevewitman/shared/material';
import { MainNavComponent } from './main-nav/main-nav.component';

@NgModule({
  imports: [CommonModule, SharedMaterialModule, RouterModule],
  declarations: [MainNavComponent],
  exports: [MainNavComponent]
})
export class NgnuggetsUiMainNavModule {}
