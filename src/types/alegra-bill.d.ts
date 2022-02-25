export interface AlegraBill {
  date: string;
  dueDate: string;
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
  id: string;
}
