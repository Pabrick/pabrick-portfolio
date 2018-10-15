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
