import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AccessoriesModule } from './modules/accessories';
import { AppService } from './app.service';

@Module({
  imports: [AccessoriesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
