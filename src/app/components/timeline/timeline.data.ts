export class TimelineEvent {
    dateFrom?: string;
    dateTo: string;
    description: string;
    featured?: Array<ITFeaturedProject>;
    link?: string;
    name: string;
    position?: string;
    type: any;
}

export interface ITFeaturedProject {
    description: string;
    name: string;
}
