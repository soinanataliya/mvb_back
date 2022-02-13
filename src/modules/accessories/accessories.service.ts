import { Injectable } from '@nestjs/common';
import { Accessory } from './accessories.model';

@Injectable()
export class AccessoriesService {
  accessories: Accessory[] = [];

  insertAccessory(
    src: string,
    name: string,
    price: string,
    // category?: Array<string>,
  ): string {
    const id = new Date().toString();
    const newAccessory = new Accessory(
      id,
      src,
      name,
      price,
      // category,
    );
    this.accessories.push(newAccessory);
    return id;
  }
}
