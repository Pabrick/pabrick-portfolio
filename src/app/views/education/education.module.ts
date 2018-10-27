import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { EducationComponent } from './education.component';

@NgModule({
  declarations: [
    EducationComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: EducationComponent
      }
    ]),
  ],
  exports: [
    EducationComponent
  ]
})
export class EducationModule { }
