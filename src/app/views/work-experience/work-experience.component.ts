import { Component, OnInit } from '@angular/core';
import { AppService } from '../../app.service';
import { Constants } from '../../app.consts';

@Component({
  selector: 'app-work-experience',
  templateUrl: './work-experience.component.html',
  styleUrls: ['./work-experience.component.sass']
})
export class WorkExperienceComponent implements OnInit {

  constructor(public service: AppService) { }

  ngOnInit() {
    this.service.setSection(Constants.SECTIONS.EXPERIENCE);
  }

}
