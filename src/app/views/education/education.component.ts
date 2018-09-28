import { Component, OnInit } from '@angular/core';
import { AppService } from '../../app.service';
import { Constants } from '../../app.consts';
import { ITSection } from '../../app.data';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.sass']
})
export class EducationComponent implements OnInit {

  public section: ITSection;
  public studies: Array<any>;
  public languajes: Array<any>;
  private education: Map<string, Array<any>>;

  constructor(private service: AppService) { }

  ngOnInit() {
    this.service.setSection(Constants.SECTIONS.EDUCATION);

    this.section = this.service.getTetxs()[Constants.SECTIONS.EDUCATION];
    this.education = this.service.getEducation();
    this.studies = this.education.get(Constants.SECTIONS.EDUCATION);
    this.languajes = this.education.get(Constants.SECTIONS.LANGUAJES);
    console.log(this.education);
  }

}
