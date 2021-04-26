import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SettingsPageComponent } from './settings-page/settings-page.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: '', pathMatch: 'full', component: SettingsPageComponent}
    ]),
  ],
  declarations: [SettingsPageComponent],
  exports: [SettingsPageComponent]
})
export class NgnuggetsFeatSettingsModule {}
