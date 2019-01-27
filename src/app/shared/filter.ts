export class Filter{
    name: string;
    filterId: number;
    ownerId: number;
    purchasedFrom: string;
    expirationDate: Date;
    nextPurchaseDate: Date;
    constructor(name : string, ownerId : number, purchasedFrom : string, 
        expirationDate : Date, nextPurchaseDate : Date){
            this.name = name;
            this.ownerId = ownerId;
            this.purchasedFrom = purchasedFrom;
            this.expirationDate = expirationDate;
            this.nextPurchaseDate = nextPurchaseDate;
        }
}