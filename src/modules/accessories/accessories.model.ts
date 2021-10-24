export class Accessories {
  id: string;

  src: string;

  name?: string;

  price?: string;

  category: Array<string>;

  constructor(
    src: string,
    name?: string,
    price?: string,
    id?: string,
    category?: Array<string>,
  ) {
    this.id = id;
    this.src = src;
    this.name = name;
    this.price = price;
    this.category = category;
  }
}
