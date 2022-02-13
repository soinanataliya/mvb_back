import { Body, Controller, Get, Inject, Post } from '@nestjs/common';
import { DbConnectionService } from '../dbConnection/dbConnection.service';
import { AccessoriesService } from './accessories.service';
@Controller('accessories')
export class AccessoriesController {
  dbConnectionService: DbConnectionService;
  accessoriesService: AccessoriesService;
  constructor(
    @Inject(DbConnectionService) dbConnectionService: DbConnectionService,
    @Inject(AccessoriesService) accessoriesService: AccessoriesService,
  ) {
    this.dbConnectionService = dbConnectionService;
    this.accessoriesService = accessoriesService;
  }

  @Post()
  addAccessory(
    @Body('src') src: string,
    @Body('name') name: string,
    @Body('price') price: string,
  ): any {
    const generatedId = this.accessoriesService.insertAccessory(
      src,
      name,
      price,
    );
    return { id: generatedId };
  }

  @Get()
  findAll(): Promise<unknown> {
    return this.dbConnectionService.connection('acc').select();
  }
}
