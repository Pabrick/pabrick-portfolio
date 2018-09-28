import { Component, OnInit } from '@angular/core';
import { AppService } from '../../app.service';
import { Constants } from '../../app.consts';
import { ITSection } from '../../app.data';

@Component({
  selector: 'app-work-experience',
  templateUrl: './work-experience.component.html',
  styleUrls: ['./work-experience.component.sass']
})
export class WorkExperienceComponent implements OnInit {

  public section: ITSection;
  public timeline: Array<any>;
  constructor(private service: AppService) { }

  ngOnInit() {
    this.service.setSection(Constants.SECTIONS.EXPERIENCE);

    this.section = this.service.getTetxs()[Constants.SECTIONS.EXPERIENCE];
    this.timeline = this.service.getExperience();
  }

}
