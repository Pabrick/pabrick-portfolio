import { Component, OnInit } from '@angular/core';
import { AppService } from '../../app.service';
import { Constants } from '../../app.consts';
import { ITSection } from '../../app.data';

@Component({
  selector: 'app-side-projects',
  templateUrl: './side-projects.component.html',
  styleUrls: ['./side-projects.component.sass']
})
export class SideProjectsComponent implements OnInit {

  public section: ITSection;
  public timeline: Array<any>;
  constructor(private service: AppService) { }

  ngOnInit() {
    this.service.setSection(Constants.SECTIONS.PROJECTS);

    this.section = this.service.getTetxs()[Constants.SECTIONS.PROJECTS];
    this.timeline = this.service.getProjects();
  }

}
