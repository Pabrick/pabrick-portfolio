import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

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

    private lang: string;

    constructor (private http: HttpClient) {
        this.setLanguage('eng');
    }

    public setLanguage(lang: string) {
        this.lang = lang;

        this.getDataLanguage(lang, 'sections').subscribe((data: PortfolioSections) => {
            this.pfTexts = data;
        });

        this.getDataLanguage(lang, Constants.SECTIONS.EXPERIENCE).subscribe((data: Array<any>) => {
            this.pfExperience = data[Constants.SECTIONS.EXPERIENCE];
        });

        this.getDataLanguage(lang, Constants.SECTIONS.PROJECTS).subscribe((data: Array<any>) => {
            this.pfProjects = data[Constants.SECTIONS.PROJECTS];
        });

        this.getDataLanguage(lang, Constants.SECTIONS.EDUCATION).subscribe((data: any) => {
            this.pfEducation = new Map<string, Array<any>>();
            this.pfEducation.set(Constants.SECTIONS.EDUCATION , data[Constants.SECTIONS.EDUCATION]);
            this.pfEducation.set(Constants.SECTIONS.LANGUAGES , data[Constants.SECTIONS.LANGUAGES]);
        });
    }

    public getLanguage(): string {
        return this.lang;
    }

    public getSection(): string {
        return this.section;
    }

    public setSection(sec: string) {
        this.section = sec;
    }

    public getData(section): Observable<any> {
        return this.http.get<any>(`../assets/data/${section}.json`);
    }

    public getDataLanguage(lang, section): Observable<any> {
        return this.http.get<any>(`../assets/data/${lang}/${section}.json`);
    }

}
