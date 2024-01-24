import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GroupTabPage } from './group-tab.page';

const routes: Routes = [
  {
    path: '',
    component: GroupTabPage,
    children: [
      {
        path: 'job',
        loadChildren: () => import('./../job-tab/job-tab-routing.module').then( m => m.JobTabPageRoutingModule),

      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GroupTabPageRoutingModule {}
