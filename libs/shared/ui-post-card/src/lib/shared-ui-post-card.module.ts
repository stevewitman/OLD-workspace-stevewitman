import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Route } from '@angular/router';


import { SharedMaterialModule } from '@nx-stevewitman/shared/material';

import { PostCardComponent } from './post-card/post-card.component';

@NgModule({
  imports: [CommonModule, RouterModule, SharedMaterialModule],
  declarations: [PostCardComponent],
  exports: [PostCardComponent],
})
export class SharedUiPostCardModule {}
