import { Component, OnInit } from '@angular/core';
import { AppService } from '../../app.service';
import { Constants } from '../../app.consts';

@Component({
  selector: 'app-side-projects',
  templateUrl: './side-projects.component.html',
  styleUrls: ['./side-projects.component.sass']
})
export class SideProjectsComponent implements OnInit {

  constructor(public service: AppService) { }

  ngOnInit() {
    this.service.setSection(Constants.SECTIONS.PROJECTS);
  }

}
