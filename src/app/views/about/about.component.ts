import { Component, OnInit } from '@angular/core';
import { AppService } from '../../app.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.sass']
})
export class AboutComponent implements OnInit {

  public about;

  constructor(private service: AppService) {}

  ngOnInit() {
    this.about = this.service.getTetxs().about;
  }

}
