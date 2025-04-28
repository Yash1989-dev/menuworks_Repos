import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [  
  {path: '', loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule)},
  {path: 'ingredients', loadChildren: () => import('./pages/ingredients2/ingredients2.module').then(m => m.Ingredients2Module)},
  {path: '', redirectTo: '', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
