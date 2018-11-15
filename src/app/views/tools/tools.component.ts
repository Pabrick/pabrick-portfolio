import { Component, OnInit } from '@angular/core';
import { AppService } from '../../app.service';
import { Constants } from '../../app.consts';
import { ITTool } from './tools.model';

@Component({
  selector: 'app-tools',
  templateUrl: './tools.component.html',
  styleUrls: ['./tools.component.sass']
})
export class ToolsComponent implements OnInit {

  public toolsWeb: ITTool[];
  public toolsDev: ITTool[];
  public toolsDesign: ITTool[];
  public toolsAgile: ITTool[];

  constructor(public service: AppService) {}

  ngOnInit() {
    this.service.getData(Constants.SECTIONS.TOOLS).subscribe((data: Array<ITTool>) => {
      this.toolsWeb = this.service.pfTools.filter(tool => tool.group === Constants.TOOLS.WEB);
      this.toolsDev = this.service.pfTools.filter(tool => tool.group === Constants.TOOLS.DEVELOP);
      this.toolsDesign = this.service.pfTools.filter(tool => tool.group === Constants.TOOLS.DESIGN);
      this.toolsAgile = this.service.pfTools.filter(tool => tool.group === Constants.TOOLS.AGILE);
    });
  }

}
