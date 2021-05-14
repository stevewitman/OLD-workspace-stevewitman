import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SponsorsPageComponent } from './sponsors-page/sponsors-page.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: '', pathMatch: 'full', component: SponsorsPageComponent },
    ]),
  ],
  declarations: [SponsorsPageComponent],
  exports: [SponsorsPageComponent],
})
export class NgnuggetsFeatSponsorsModule {}
