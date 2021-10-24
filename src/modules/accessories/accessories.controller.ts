import { Controller, Get, Post } from '@nestjs/common';

@Controller('accessories')
export class AccessoriesController {
  @Post()
  create(): string {
    return 'This action adds a new accessories';
  }

  @Get()
  findAll(): string {
    return 'This action returns all accessories';
  }
}
