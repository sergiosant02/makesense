import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { JobTabPage } from './job-tab.page';

const routes: Routes = [
  {
    path: 'job',
    component: JobTabPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class JobTabPageRoutingModule {}
