import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { SharedMaterialModule } from '@nx-stevewitman/shared/material';

import { PostCardComponent } from './post-card/post-card.component';

@NgModule({
  imports: [CommonModule, SharedMaterialModule, RouterModule],
  declarations: [PostCardComponent],
  exports: [PostCardComponent],
})
export class SharedUiPostCardModule {}
