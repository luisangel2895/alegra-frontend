export interface AlegraBill {
  date: Date;
  dueDate: Date;
  client: number;
  seller: number;
  items: Item[];
}

export interface Item {
  id: number;
  description: string;
  price: number;
  quantity: number;
}
