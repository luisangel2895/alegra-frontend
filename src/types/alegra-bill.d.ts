export interface AlegraBill {
  date: String;
  dueDate: String;
  client: number;
  operationType: string;
  seller: SellerBill;
  items: Item[];
}

export interface Item {
  id: number;
  price: number;
  quantity: number;
}

export interface SellerBill {
  id: String;
}
