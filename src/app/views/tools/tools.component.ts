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

  public tools;

  public toolsWeb: ITTool[];
  public toolsDev: ITTool[];
  public toolsDesign: ITTool[];
  public toolsAgile: ITTool[];

  constructor(private service: AppService) {}

  ngOnInit() {
    this.tools = this.service.getTetxs().tools;

    this.toolsWeb = this.service.getTools().filter(tool => tool.group === Constants.TOOLS.WEB);
    this.toolsDev = this.service.getTools().filter(tool => tool.group === Constants.TOOLS.DEVELOP);
    this.toolsDesign = this.service.getTools().filter(tool => tool.group === Constants.TOOLS.DESIGN);
    this.toolsAgile = this.service.getTools().filter(tool => tool.group === Constants.TOOLS.AGILE);
  }

}
