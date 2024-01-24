import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InitialTabPage } from './initial-tab.page';

const routes: Routes = [
  {
    path: '',
    component: InitialTabPage,
    children: [
      {
        path: 'user-tab',
        loadChildren: () => import('./../../pages/user-tab/user-tab-routing.module').then( m => m.UserTabPageRoutingModule)
      },
      {
        path: 'group-tab',
        loadChildren: () => import('./../../pages/group-tab/group-tab-routing.module').then( m => m.GroupTabPageRoutingModule)
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InitialTabPageRoutingModule {}
