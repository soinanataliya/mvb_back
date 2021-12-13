import { Module } from '@nestjs/common';
import { DbConnectionModule } from '../dbConnection/dbConnection.module';
import { AccessoriesController } from './accessories.controller';

@Module({
  imports: [DbConnectionModule],
  controllers: [AccessoriesController],
})
export class AccessoriesModule {}
