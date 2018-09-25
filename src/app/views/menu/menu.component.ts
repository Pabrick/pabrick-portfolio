import { Component, OnInit, Output } from '@angular/core';
import { AppService } from '../../app.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.sass']
})
export class MenuComponent implements OnInit {

@Output() currentSection: string;

  public menu: Object;

  constructor(private service: AppService) { }

  ngOnInit() {
    this.currentSection = this.service.getSection();
    this.menu = {
      experience: this.service.getTetxs().experience.title,
      projects: this.service.getTetxs().projects.title,
      education: this.service.getTetxs().education.title
    };
  }

}
