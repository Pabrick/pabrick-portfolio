import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppService {

    public lang = 'eng';
    public eng: Map<string, string>;

    constructor () {
        this.eng = new Map<string, string>();
        this.eng.set('about', 'Technical Telecommunications Engineer with over 15 years of experience as Web Developer and 5 years as a Front-End Developer. Throughout my career I was able to access responsible positions where important decision-making as well as customer contact have been natural to me. Driven by my passion and hard work I have participated in different areas such as development, management, design and marketing, etc. and so I have been able to acquire a global knowledge of the projects and full understanding of the processes involved.');
    }

    public getText(text) {
        return this[this.lang].get(text);

    }

}
