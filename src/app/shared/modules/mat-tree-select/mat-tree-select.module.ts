import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatTreeSelectComponent } from './mat-tree-select.component';
import { ExpandCollapseModule } from '../expand-collapse/expand-collapse.module';



@NgModule({
  declarations: [
    MatTreeSelectComponent
  ],
  imports: [
    CommonModule,
    MatSelectModule,
    MatFormFieldModule,
    ExpandCollapseModule
  ],
  exports: [
    MatTreeSelectComponent
  ]
})
export class MatTreeSelectModule { }
