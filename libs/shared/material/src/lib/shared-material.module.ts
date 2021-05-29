import { NgModule } from '@angular/core';

import { LayoutModule } from '@angular/cdk/layout';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatRadioModule } from '@angular/material/radio';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';

@NgModule({
  imports: [
    LayoutModule,
    MatButtonModule,
    MatDialogModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatRadioModule,
    MatSidenavModule,
    MatToolbarModule,
  ],
  exports: [
    LayoutModule,
    MatButtonModule,
    MatDialogModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatRadioModule,
    MatSidenavModule,
    MatToolbarModule,
  ]
})
export class SharedMaterialModule {}
