import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { SideProjectsComponent } from './side-projects.component';
import { TimelineModule } from 'src/app/components/timeline/timeline.module';

@NgModule({
  declarations: [
    SideProjectsComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: SideProjectsComponent
      }
    ]),
    TimelineModule
  ],
  exports: [
    SideProjectsComponent
  ]
})
export class SideProjectsModule { }
