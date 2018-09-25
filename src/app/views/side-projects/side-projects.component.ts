import { Component, OnInit } from '@angular/core';
import { AppService } from '../../app.service';

@Component({
  selector: 'app-side-projects',
  templateUrl: './side-projects.component.html',
  styleUrls: ['./side-projects.component.sass']
})
export class SideProjectsComponent implements OnInit {

  constructor(private service: AppService) { }

  ngOnInit() {
    this.service.setSection('projects');
  }

}
