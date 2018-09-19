import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WorkExperienceComponent } from './views/work-experience/work-experience.component';
import { SideProjectsComponent } from './views/side-projects/side-projects.component';

const routes: Routes = [
  {
    path: '',
    component: WorkExperienceComponent
  },
  {
    path: 'experience',
    component: WorkExperienceComponent
  },
  {
    path: 'projects',
    component: SideProjectsComponent
  }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
