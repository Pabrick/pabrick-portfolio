import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { WorkExperienceComponent } from './work-experience.component';
import { TimelineModule } from 'src/app/components/timeline/timeline.module';

@NgModule({
  declarations: [
    WorkExperienceComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: WorkExperienceComponent
      },
      {
        path: 'experience',
        component: WorkExperienceComponent
      }
    ]),
    TimelineModule
  ],
  exports: [
    WorkExperienceComponent
  ]
})
export class WorkExperienceModule { }
