import { Component, OnInit } from '@angular/core';
import { Home } from 'src/app/shared/home';

@Component({
    selector: 'dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit{
    public homes: Home[] = [];

    constructor() {
        
        this.homes.push({
            ownerId: 1,
            path: './pictures/house1.jpg'
          });
        this.homes.push({
            ownerId: 2,
            path: './pictures/house1.jpg'
             });
        this.homes.push({
            ownerId: 3,
            path: './pictures/house1.jpg'
        });
        console.log(this.homes[0].path);
        
    }

    ngOnInit() {

    }

    test(): void{
        console.log("hello");
    }
}
