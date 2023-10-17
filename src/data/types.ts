export interface ITariff {
    name: string;
    description: string;
    price: number;
    oldPrice: number;
    creditCondition: string;
    icon: string;
    color: string;
    features: string[];
}