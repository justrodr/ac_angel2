import { Component, OnInit } from '@angular/core';
import { Filter } from 'src/app/shared/filter';
import { NgForm } from '@angular/forms';
import { filterQueryId } from '@angular/core/src/view/util';
import { pureArrayDef } from '@angular/core/src/view';

@Component({
    selector: 'autopay',
    templateUrl: './autopay.component.html',
    styleUrls: ['./autopay.component.css']
})
export class AutopayComponent implements OnInit{

    public filters : Filter[] = [];
    public name: string = '';
    public pur: string = '';
    public exp: Date = null;
    public buy: Date = null; 
    public idCount = 1;

    constructor() {
        this.filters.push({
            name: 'filter0',
            filterId: this.idCount,
            ownerId: 1,
            purchasedFrom: 'home depot',
            expirationDate: new Date(),
            nextPurchaseDate: new Date()
        });
        this.idCount++;
        this.filters.push({
            name: 'filter1',
            ownerId: 1,
            filterId: this.idCount,
            purchasedFrom: 'amazon',
            expirationDate: new Date(),
            nextPurchaseDate: new Date()
        });
        this.idCount++;
        this.filters.push({
            name: 'fitler2',
            filterId: this.idCount,
            ownerId: 1,
            purchasedFrom: 'lowes',
            expirationDate: new Date(),
            nextPurchaseDate: new Date()
        });
        this.idCount++;
        this.filters.push({
            name: 'filter3',
            ownerId: 1,
            filterId: this.idCount,
            purchasedFrom: 'home depot',
            expirationDate: new Date(),
            nextPurchaseDate: new Date()
        });
        this.idCount++;
        this.filters.push({
            name: 'filter4',
            ownerId: 1,
            filterId: this.idCount,
            purchasedFrom: 'amazon',
            expirationDate: new Date(),
            nextPurchaseDate: new Date()
        });
        this.idCount++;
    }

    ngOnInit() {
    }

    addNewFilter(): void{
        if(this.name == '' || this.pur == '' || this.exp == null || this.buy == null) return;
        let newFilter: Filter = {name: this.name, 
            ownerId: 1,
            filterId: this.idCount,
            purchasedFrom: this.pur, 
            expirationDate: this.exp,
            nextPurchaseDate: this.buy
        };
        this.idCount++;
        this.filters.push(newFilter);
        this.name = '';
        this.pur = '';
        this.exp = null;
        this.buy = null;

    }

    removeFilter(fitlerId: number){
        this.filters.forEach( (item, index) => {
            if(item.filterId === fitlerId) this.filters.splice(index,1);
          });
    }
}
