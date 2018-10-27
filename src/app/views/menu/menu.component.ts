import { Component, OnInit } from '@angular/core';
import { AppService } from '../../app.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.sass']
})
export class MenuComponent implements OnInit {

  constructor(public service: AppService, public router: Router) {}

  ngOnInit() {
  }

  public onClick(sec) {
    this.service.setSection(sec);
    this.router.navigate([sec]);
  }

}
