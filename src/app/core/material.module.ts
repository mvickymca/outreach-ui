import {NgModule} from "@angular/core";
import { CommonModule } from '@angular/common';
import {
  MatButtonModule, MatCardModule, MatDialogModule, MatInputModule, MatTableModule,
  MatToolbarModule, MatMenuModule,MatIconModule, MatProgressSpinnerModule, MatSidenavModule,MatListModule
} from '@angular/material';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
@NgModule({
  imports: [
  MatSidenavModule,
  MatListModule,
  CommonModule, 
  MatToolbarModule,
  MatButtonModule, 
  MatCardModule,
  MatInputModule,
  MatDialogModule,
  MatTableModule,
  MatMenuModule,
  MatIconModule,
  MatProgressSpinnerModule,
  BrowserAnimationsModule
  ],
  exports: [
  MatListModule,
  MatSidenavModule,
   CommonModule,
   MatToolbarModule, 
   MatButtonModule, 
   MatCardModule, 
   MatInputModule, 
   MatDialogModule, 
   MatTableModule, 
   MatMenuModule,
   MatIconModule,
   MatProgressSpinnerModule
   ],
})
export class CustomMaterialModule { }