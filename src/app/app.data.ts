import { ITTool } from './views/tools/tools.model';

export interface ITSection {
    title: string;
    text?: string;
    subsection?: string;
}

export class PortfolioSections {
    about: ITSection;
    tools: ITSection;
    experience: ITSection;
    projects: ITSection;
    education: ITSection;
}

export interface ITPortfolio {
    sections: PortfolioSections;
    tools: Array<ITTool>;
}
