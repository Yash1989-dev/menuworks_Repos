import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { IconService } from './icon.service';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatIconModule
  ],
})
export class IconModule {
  constructor(iconService: IconService){

  }
 }
