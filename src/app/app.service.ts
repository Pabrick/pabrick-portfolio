import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


import { PortfolioSections, ITPortfolio } from './app.data';
import { ITTool } from './views/tools/tools.model';

@Injectable({
  providedIn: 'root'
})
export class AppService {

    private currentSection: string;
    private languaje: string;
    private portfolioTexts: PortfolioSections;
    private portfolioTools: Array<ITTool>;

    constructor (private http: HttpClient) {
        this.languaje = 'eng';
        this.currentSection = 'experience';

        // this.portfolioTexts = this.getTextMap(this.languaje);
        this.portfolioTexts = require(`../assets/data/${this.languaje}.json`)['sections'];
        this.portfolioTools = require(`../assets/data/${this.languaje}.json`)['tools'];
        console.log(this.portfolioTexts);
        console.log(this.portfolioTools);
    }

    public getSection() {
        return this.currentSection;
    }

    public setSection(section) {
        this.currentSection = section;
    }

    public getTetxs() {
        return this.portfolioTexts;
    }

    public getTools() {
        return this.portfolioTools;
    }

    public getTextSection(section) {
        return this.portfolioTexts[section];
    }

    /* PRIVATE METHODS */
    private getTextMap(lang) {
        let portfolio;
        this.getData(lang).subscribe(
            (data: ITPortfolio) => {
                portfolio = new PortfolioSections();
                portfolio = data.sections;
            }
        );
        return portfolio;
    }

    private getData(lang): Observable<any> {
        return this.http.get<any>(`../assets/data/${lang}.json`);
    }

}
