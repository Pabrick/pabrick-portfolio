import { Component, OnInit } from '@angular/core';
import { AppService } from '../../app.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.sass']
})
export class MenuComponent implements OnInit {

  constructor(public service: AppService) {}

  ngOnInit() {
  }

  public onClick(sec) {
    this.service.setSection(sec);
  }

}
