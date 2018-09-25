export interface ITLanguajeSection {
    title: string;
    text: string;
}

export class PortfolioSections {
    about: ITLanguajeSection;
    tools: ITLanguajeSection;
}

export interface ITPortfolio {
    sections: PortfolioSections;
    tools: any;
}
