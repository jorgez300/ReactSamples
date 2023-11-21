import { Product } from "./Product";
import { User } from "./User";
import uuid from 'react-uuid';

export class Order {
    Id: string;
    User: User | undefined;
    Products: Product[];

    constructor() {
        this.Id = uuid();
        this.Products =[];
    }
}