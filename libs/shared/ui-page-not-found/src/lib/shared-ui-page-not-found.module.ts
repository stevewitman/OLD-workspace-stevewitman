import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: '', pathMatch: 'full', component: PageNotFoundComponent },
    ]),
  ],
  declarations: [PageNotFoundComponent],
})
export class SharedUiPageNotFoundModule {}
