import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { SharedMaterialModule } from '@nx-stevewitman/shared/material';

import { PostPageComponent } from './post-page/post-page.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: '', pathMatch: 'full', component: PostPageComponent },
    ]),
    SharedMaterialModule,
  ],
  declarations: [PostPageComponent],
  exports: [PostPageComponent],
})
export class NgnuggetsFeatPostModule {}
