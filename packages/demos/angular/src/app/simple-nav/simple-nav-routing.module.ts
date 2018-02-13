import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SimpleNavPageComponent } from './simple-nav.component';

const routes: Routes = [
  {
    path: '',
    component: SimpleNavPageComponent,
    children: [
      { path: 'page-one', loadChildren: './page-one/page-one.module#PageOneModule' },
      { path: 'page-two', loadChildren: './page-two/page-two.module#PageTwoModule' },
      { path: 'page-three', loadChildren: './page-three/page-three.module#PageThreeModule' }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SimpleNavRoutingModule { }
