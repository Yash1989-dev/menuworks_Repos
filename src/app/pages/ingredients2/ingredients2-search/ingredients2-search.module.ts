import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Ingredients2SearchComponent } from './ingredients2-search.component';
import { RouterModule } from '@angular/router';
import { SearchInputModule } from '@shared/modules/search-input/search-input.module';
import { IconModule } from "@shared/modules/icon/icon.module";
import { ExpandCollapseModule } from "@shared/modules/expand-collapse/expand-collapse.module";
import { MatCheckboxModule } from '@angular/material/checkbox';
import { FormsModule } from '@angular/forms';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatFormFieldModule } from '@angular/material/form-field';



@NgModule({
  declarations: [
    Ingredients2SearchComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
        { path: '', component: Ingredients2SearchComponent }
    ]),
    SearchInputModule,
    IconModule,
    ExpandCollapseModule,
    ExpandCollapseModule,
    MatCheckboxModule,
    FormsModule,
    MatRadioModule,
    MatSelectModule,
    MatFormFieldModule,
    MatTableModule,
    MatPaginatorModule,
]
})
export class Ingredients2SearchModule { }
