export class PricingDTO{

    constructor(init?:Partial<PricingDTO>){
        Object.assign(this, init);
    }

    name;
    price;
    features : string[];
    
}