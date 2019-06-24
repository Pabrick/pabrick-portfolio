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

  public toolsDevCurrent: ITTool[];
  public toolsDev: ITTool[];
  public toolsDesign: ITTool[];
  public toolsAgile: ITTool[];

  constructor(public service: AppService) {}

  ngOnInit() {
    this.service.getData(Constants.SECTIONS.TOOLS).subscribe((data: Array<ITTool>) => {
      const pfTools = data[Constants.SECTIONS.TOOLS];
      this.toolsDevCurrent = pfTools.filter(tool => tool.group === Constants.TOOLS.DEVELOP_CURRENT);
      this.toolsDev = pfTools.filter(tool => tool.group === Constants.TOOLS.DEVELOP);
      this.toolsDesign = pfTools.filter(tool => tool.group === Constants.TOOLS.DESIGN);
      this.toolsAgile = pfTools.filter(tool => tool.group === Constants.TOOLS.AGILE);
    });
  }

}
