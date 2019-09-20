import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BooksModule } from './books/books.module';
import { ItemsController } from './items/items.controller';
import { AlbumsModule } from './albums/albums.module';
import { ItemsService } from './items/items.service';
import { ItemsModule } from './items/items.module';

@Module({
  imports: [BooksModule, AlbumsModule, ItemsModule],
  controllers: [AppController, ItemsController],
  providers: [AppService, ItemsService],
})
export class AppModule {}
