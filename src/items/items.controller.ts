import { Controller, Get, Post, Put, Delete, Body, Req, Res, Param } from '@nestjs/common';
import { CreateItemDto } from './dto/create-item.dto';
import { Request, Response } from 'express';
import { ItemsService } from './items.service';
import { Item } from './interfaces/item.interface';

@Controller('items')
export class ItemsController {
    constructor(private readonly itemsService: ItemsService) { }
    @Get()
    findAll(@Req() req: Request, @Res() res: Response): Item[] {
        // return 'Get all items';
        // console.log(req.url);
        // return res.send('Hello World');
        return this.itemsService.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id): string {
        return `Item: ${id}`;
    }

    @Post()
    create(@Body() createItemDto: CreateItemDto): string {
        return `Name: ${createItemDto.name} Desc: ${createItemDto.description}`;
    }

    @Delete(':id')
    delete(@Param('id') id): string {
        return `Delete ${id}`;
    }

    @Put(':id')
    update(@Body() updateItemDto: CreateItemDto, @Param('id') id: string): string {
        return `Update ${id}, name: ${updateItemDto.name}`;
    }
}

