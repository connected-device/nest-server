import { Injectable } from '@nestjs/common';
import { Item } from './interfaces/item.interface';

@Injectable()
export class ItemsService {
    private readonly items: Item[] = [
        {
            id: "1341234342",
            name: "Item One",
            qty: 100,
            description: "This is item one"
        },
        {
            id: "1341532223",
            name: "Item Two",
            qty: 22,
            description: "This is item two"
        }
    ];

    findAll(): Item[] {
        return this.items;
    }
}
