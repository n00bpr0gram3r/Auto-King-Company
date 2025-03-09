export interface Value {
    icon: string;
    title: string;
    description?: string;
}

export interface Benefit {
    icon: string;
    title: string;
    description?: string;
}

export interface ServiceFeature {
    icon: string;
    title: string;
    description: string;
}

export interface ContentLists {
    values: Value[];
    benefits: Benefit[];
    services: ServiceFeature[];
} 