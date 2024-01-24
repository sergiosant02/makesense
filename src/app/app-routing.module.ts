import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'makesense/user-tab',
    pathMatch: 'full'
  },
  {
    path: 'user-tab',
    loadChildren: () => import('./pages/user-tab/user-tab.module').then( m => m.UserTabPageModule)
  },
  {
    path: 'group-tab',
    loadChildren: () => import('./pages/group-tab/group-tab.module').then( m => m.GroupTabPageModule)
  },
  {
    path: 'makesense',
    loadChildren: () => import('./pages/initial-tab/initial-tab.module').then( m => m.InitialTabPageModule)
  },
  {
    path: 'job-tab',
    loadChildren: () => import('./pages/job-tab/job-tab.module').then( m => m.JobTabPageModule)
  },
  
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
