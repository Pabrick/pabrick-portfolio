import { Component, OnInit } from '@angular/core';
import { AppService } from '../../app.service';
import { Constants } from '../../app.consts';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.sass']
})
export class MenuComponent implements OnInit {

  public menu: Object;

  constructor(private service: AppService) {}

  ngOnInit() {
    this.menu = {
      experience: this.service.getTetxs().experience.title,
      projects: this.service.getTetxs().projects.title,
      education: this.service.getTetxs().education.title
    };
  }

  public onClick(sec) {
    this.service.setSection(sec);
  }

}
