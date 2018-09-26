export class TimelineEvent {
    name: string;
    type: any;
    dateFrom?: string;
    dateTo: string;
    position?: string;
    description: string;
    featured?: Array<ITFeaturedProject>;
}

export interface ITFeaturedProject {
    name: string;
    description: string;
}
