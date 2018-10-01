import { Injectable } from '@angular/core';
// import { HttpClient } from '@angular/common/http';

import { PortfolioSections } from './app.data';
import { ITTool } from './views/tools/tools.model';
import { Constants } from './app.consts';


@Injectable({
  providedIn: 'root'
})
export class AppService {

    public section: string;
    public pfTexts: PortfolioSections;
    public pfTools: Array<ITTool>;
    public pfExperience: Array<any>;
    public pfProjects: Array<any>;
    public pfEducation: Map<string, Array<any>>;


    constructor () {

        this.setLanguage('eng');
        // this.pfTexts = this.getTextMap(this.language);
    }

    public setLanguage(lang) {
        this.pfTexts = require(`../assets/data/${lang}/sections.json`);
        this.pfTools = require(`../assets/data/${lang}/tools.json`)[Constants.SECTIONS.TOOLS];
        this.pfExperience = require(`../assets/data/${lang}/experience.json`)[Constants.SECTIONS.EXPERIENCE];
        this.pfProjects = require(`../assets/data/${lang}/projects.json`)[Constants.SECTIONS.PROJECTS];
        this.pfEducation = require(`../assets/data/${lang}/education.json`)[Constants.SECTIONS.EDUCATION];

        this.pfEducation = new Map<string, Array<any>>();
        this.pfEducation.set(Constants.SECTIONS.EDUCATION , require(`../assets/data/${lang}/education.json`)[Constants.SECTIONS.EDUCATION]);
        this.pfEducation.set(Constants.SECTIONS.LANGUAGES , require(`../assets/data/${lang}/education.json`)[Constants.SECTIONS.LANGUAGES]);
    }

    public getSection(): string {
        return this.section;
    }

    public setSection(sec: string) {
        this.section = sec;
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
