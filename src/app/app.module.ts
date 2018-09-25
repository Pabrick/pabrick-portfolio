import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './views/header/header.component';
import { FooterComponent } from './views/footer/footer.component';
import { AboutComponent } from './views/about/about.component';
import { ToolsComponent } from './views/tools/tools.component';
import { MenuComponent } from './views/menu/menu.component';
import { WorkExperienceComponent } from './views/work-experience/work-experience.component';
import { SideProjectsComponent } from './views/side-projects/side-projects.component';
import { TimelineComponent } from './components/timeline/timeline.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    AboutComponent,
    ToolsComponent,
    MenuComponent,
    WorkExperienceComponent,
    SideProjectsComponent,
    TimelineComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
