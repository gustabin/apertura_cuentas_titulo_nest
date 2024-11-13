// src/modules/items/items.service.ts
import { Injectable } from '@nestjs/common';
import { ValidationService } from './validation.service';

interface Item {
    id: number;
    name: string;
}

@Injectable()
export class ItemsService {
    private items: Item[] = [];

    constructor(private validationService: ValidationService) { }

    create(name: string): Item | null {
        if (!this.validationService.validate(name)) return null;
        const newItem = { id: this.items.length + 1, name };
        this.items.push(newItem);
        return newItem;
    }



    findAll(): Item[] {
        return this.items;
    }

    update(id: number, name: string): Item | null {
        const item = this.items.find((item) => item.id === id);
        if (!item) return null;
        item.name = name;
        return item;
    }

    delete(id: number): boolean {
        const index = this.items.findIndex((item) => item.id === id);
        if (index === -1) return false;
        this.items.splice(index, 1);
        return true;
    }
}
