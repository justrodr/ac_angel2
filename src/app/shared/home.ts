import { Tenant } from './tenant';
import { Filter } from './filter';

export class Home{
    ownerId : number;
    path : string;
    address : string;
    homeTenant : Tenant;
    homeFilters : Filter[];
    constructor(ownerId : number, path : string, address : string, homeTenant : Tenant, homeFilters: Filter[]){
        this.ownerId = ownerId;
        this.path = path;
        this.address = address;
        this.homeTenant = homeTenant;
        this.homeFilters = homeFilters;
    }
}

