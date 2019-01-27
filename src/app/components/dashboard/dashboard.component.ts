import { Component, OnInit } from '@angular/core';
import { Home } from 'src/app/shared/home';
import { Tenant } from 'src/app/shared/tenant';
import { Filter } from 'src/app/shared/filter';

@Component({
    selector: 'dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit{
    public homes: Home[] = [];
    public house: Home = null; 
    public filters: Filter[] = [];

    constructor() {

        this.filters.push({
            name: "Living Room",
            ownerId: 0,
            purchasedFrom: "Amazon",
            expirationDate: new Date(),
            nextPurchaseDate: new Date()
        });
        this.filters.push({
            name: "Bedroom",
            ownerId: 0,
            purchasedFrom: "Amazon",
            expirationDate: new Date(),
            nextPurchaseDate: new Date()
        });
        this.filters.push({
            name: "Kitchen",
            ownerId: 0,
            purchasedFrom: "Amazon",
            expirationDate: new Date(),
            nextPurchaseDate: new Date()
        });


        this.homes.push({
            ownerId: 1,
            path: './assets/house.jpg',
            address: "1 Main St",
            homeTenant: new Tenant("John", 1, "john@gmail.com"),
            homeFilters: this.filters
        });
        this.homes.push({
            ownerId: 2,
            path: './assets/house2.jpg',
            address: "2 Main St",
            homeTenant: new Tenant("Joe", 2, "joe@gmail.com"),
            homeFilters: this.filters
        });
        this.homes.push({
            ownerId: 3,
            path: './assets/house3.jpg',
            address: "3 Main St",
            homeTenant: new Tenant("Jane", 1, "jane@gmail.com"),
            homeFilters: this.filters
        });
    }

    ngOnInit() {

    }

    chooseHome(home : Home): void{
        console.log(home.path);
        this.house = home;
    }
}
