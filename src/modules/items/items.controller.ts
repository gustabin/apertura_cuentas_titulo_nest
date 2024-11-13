// src/modules/items/items.controller.ts
import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { ItemsService } from './items.service';

@Controller('items')
export class ItemsController {
    constructor(private readonly itemsService: ItemsService) { }

    @Post()
    create(@Body('name') name: string) {
        return this.itemsService.create(name);
    }

    @Get()
    findAll() {
        return this.itemsService.findAll();
    }

    @Put(':id')
    update(@Param('id') id: number, @Body('name') name: string) {
        return this.itemsService.update(id, name);
    }

    @Delete(':id')
    delete(@Param('id') id: number) {
        return this.itemsService.delete(id);
    }
}
