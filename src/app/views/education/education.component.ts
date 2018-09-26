import { Component, OnInit } from '@angular/core';
import { AppService } from '../../app.service';
import { Constants } from '../../app.consts';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.sass']
})
export class EducationComponent implements OnInit {

  constructor(private service: AppService) { }

  ngOnInit() {
    this.service.setSection(Constants.SECTIONS.EDUCATION);
  }

}
