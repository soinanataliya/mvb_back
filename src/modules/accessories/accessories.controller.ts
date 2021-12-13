import { Controller, Get, Inject, Post } from '@nestjs/common';
import { DbConnectionService } from '../dbConnection/dbConnection.service';

@Controller('accessories')
export class AccessoriesController {
  dbConnectionService: DbConnectionService;

  constructor(
    @Inject(DbConnectionService) dbConnectionService: DbConnectionService,
  ) {
    this.dbConnectionService = dbConnectionService;
  }

  @Post()
  create(): string {
    return 'This action adds a new accessories';
  }

  @Get()
  findAll(): Promise<unknown> {
    return this.dbConnectionService.connection('acc').select();
  }
}
