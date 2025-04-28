import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { Router, RouterModule } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { MatTreeSelectModule } from '@shared/modules/mat-tree-select/mat-tree-select.module';
import { ExpandCollapseModule } from '@shared/modules/expand-collapse/expand-collapse.module';
import { ComponentsModule } from '@shared/components/components.module';
import { SearchInputModule } from '@shared/modules/search-input/search-input.module';
import { CardModule } from '@shared/modules/card/card.module';
import { IconModule } from '@shared/modules/icon/icon.module';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import {MatRadioModule} from '@angular/material/radio';


@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    MatIconModule,
    ComponentsModule,
    RouterModule.forChild([
      {
        path: '',
        component: HomeComponent
      }
    ]),
    MatTreeSelectModule,
    ExpandCollapseModule,
    SearchInputModule,
    CardModule,
    IconModule,
    MatInputModule,
    MatSelectModule,
    MatRadioModule
  ]
  
})
export class HomeModule { }
