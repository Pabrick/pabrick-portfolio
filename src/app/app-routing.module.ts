import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'experience',
    pathMatch: 'full'
  },
  {
    path: 'experience',
    loadChildren: './views/work-experience/work-experience.module#WorkExperienceModule'
  },
  {
    path: 'projects',
    loadChildren: './views/side-projects/side-projects.module#SideProjectsModule'
  },
  {
    path: 'education',
    loadChildren: './views/education/education.module#EducationModule'
  }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
