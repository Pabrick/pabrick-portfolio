import { Component, OnInit } from '@angular/core';
import { AppService } from '../../app.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.sass']
})
export class FooterComponent implements OnInit {

  private map: Map<string, string>;

  constructor(private service: AppService) { }

  ngOnInit() {
    this.map = new Map<string, string>();
    this.map.set('email', 'mailto:pjbeneyto@gmail.com');
    this.map.set('twitter', 'http://twitter.com/Pabrick');
    this.map.set('github', 'http://github.com/Pabrick');
    this.map.set('linkedin', 'http://www.linkedin.com/in/pabrick');
  }

  navigateTo(key) {
    window.open(this.map.get(key), '_blank');
  }

  changeLanguage(lang) {
    this.service.setLanguage(lang);
  }

}
