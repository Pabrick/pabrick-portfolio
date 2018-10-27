import { Component, OnInit, Input } from '@angular/core';
import { TimelineEvent, ITFeaturedProject } from './timeline.data';
import { ITSection } from '../../app.data';

@Component({
  selector: 'timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.sass']
})
export class TimelineComponent implements OnInit {

@Input() data: TimelineEvent;
@Input() text?: ITSection;

  constructor() { }

  ngOnInit() {
  }

}
