import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { JobTabPageRoutingModule } from './job-tab-routing.module';

import { JobTabPage } from './job-tab.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    JobTabPageRoutingModule
  ],
  declarations: [JobTabPage]
})
export class JobTabPageModule {}
