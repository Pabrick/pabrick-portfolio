import { Injectable } from '@angular/core';
// import { HttpClient } from '@angular/common/http';

import { PortfolioSections } from './app.data';
import { ITTool } from './views/tools/tools.model';
import { Constants } from './app.consts';


@Injectable({
  providedIn: 'root'
})
export class AppService {

    private section: string;
    private language: string;
    private pfTexts: PortfolioSections;
    private pfTools: Array<ITTool>;
    private pfExperience: Array<any>;
    private pfProjects: Array<any>;
    private pfEducation: Map<string, Array<any>>;

    constructor () {
        this.language = 'eng';

        this.pfTexts = require(`../assets/data/${this.language}/sections.json`);
        this.pfTools = require(`../assets/data/${this.language}/tools.json`)[Constants.SECTIONS.TOOLS];
        this.pfExperience = require(`../assets/data/${this.language}/experience.json`)[Constants.SECTIONS.EXPERIENCE];
        this.pfProjects = require(`../assets/data/${this.language}/projects.json`)[Constants.SECTIONS.PROJECTS];
        this.pfEducation = require(`../assets/data/${this.language}/education.json`)[Constants.SECTIONS.EDUCATION];

        this.pfEducation = new Map<string, Array<any>>();
        this.pfEducation.set(Constants.SECTIONS.EDUCATION , require(`../assets/data/${this.language}/education.json`)[Constants.SECTIONS.EDUCATION]);
        this.pfEducation.set(Constants.SECTIONS.LANGUAGES , require(`../assets/data/${this.language}/education.json`)[Constants.SECTIONS.LANGUAGES]);
        // this.pfTexts = this.getTextMap(this.language);
    }

    public getSection(): string {
        return this.section;
    }

    public setSection(sec: string) {
        this.section = sec;
    }

    public getTetxs() {
        return this.pfTexts;
    }

    public getTools(): Array<ITTool> {
        return this.pfTools;
    }

    public getExperience(): Array<any> {
        return this.pfExperience;
    }

    public getProjects(): Array<any> {
        return this.pfProjects;
    }

    public getEducation(): Map<string, Array<any>> {
        return this.pfEducation;
    }

    /* PRIVATE METHODS */
    /*
    private getTextMap(lang): PortfolioSections {
        let portfolio;
        this.getData(lang).subscribe(
            (data: ITPortfolio) => {
                portfolio = new PortfolioSections();
                portfolio = data;
            }
        );
        return portfolio;
    }

    private getData(lang): Observable<any> {
        return this.http.get<any>(`../assets/data/${lang}.json`);
    }
    */

}
