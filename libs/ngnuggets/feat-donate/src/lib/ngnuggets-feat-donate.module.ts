import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { DonatePageComponent } from './donate-page/donate-page.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: '', pathMatch: 'full', component: DonatePageComponent },
    ]),
  ],
  declarations: [DonatePageComponent],
  exports: [DonatePageComponent],
})
export class NgnuggetsFeatDonateModule {}
