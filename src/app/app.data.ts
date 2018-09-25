export interface ITLanguajeSection {
    title: string;
    text: string;
}

export class PortfolioSections {
    about: ITLanguajeSection;
    tools: ITLanguajeSection;
    experience: ITLanguajeSection;
    projects: ITLanguajeSection;
    education: ITLanguajeSection;
}

export interface ITPortfolio {
    sections: PortfolioSections;
    tools: any;
}
