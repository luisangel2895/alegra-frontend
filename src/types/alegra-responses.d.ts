export interface AlegraResponseProduct {
  id: string;
  category: Category;
  name: string;
  description: string;
  reference: string;
  status: string;
  price: Price[];
  inventory: Inventory;
  tax: any[];
  customFields: any[];
  productKey: null;
  type: string;
  itemType: null;
  settingsOnPos: SettingsOnPos;
}

export interface Category {
  id: string;
  name: string;
}

export interface Inventory {
  unit: string;
}

export interface Price {
  idPriceList: number;
  name: string;
  type: string;
  price: string;
  currency: Currency;
}

export interface Currency {
  code: string;
  symbol: string;
}

export interface SettingsOnPos {
  hide: null;
}

export interface AlegraResponseBill {
  id: string;
  date: Date;
  dueDate: Date;
  datetime: Date;
  observations: null;
  anotation: null;
  termsConditions: string;
  status: string;
  client: Client;
  numberTemplate: NumberTemplate;
  subtotal: number;
  discount: number;
  tax: number;
  total: number;
  totalPaid: number;
  balance: number;
  decimalPrecision: string;
  warehouse: Warehouse;
  operationType: string;
  seller: Seller;
  priceList: PriceList;
  items: Item[];
  costCenter: null;
}

export interface Client {
  id: string;
  name: string;
  identification: string;
  phonePrimary: null;
  phoneSecondary: null;
  fax: null;
  mobile: string;
  email: string;
  address: Address;
}

export interface Address {
  state: string;
  city: string;
  district: string;
  urbanization: null;
  ubigeoCode: string;
  address: string;
}

export interface Item {
  name: string;
  description: null;
  price: number;
  discount: number;
  reference: null;
  quantity: number;
  id: number;
  productKey: null;
  unit: Unit;
  tax: any[];
  total: number;
}

export enum Unit {
  Unit = "unit",
}

export interface NumberTemplate {
  id: string;
  prefix: string;
  number: string;
  text: null;
  documentType: string;
  fullNumber: string;
  formattedNumber: string;
}

export interface PriceList {
  id: number;
  name: string;
}

export interface Seller {
  id: number;
  name: string;
  identification: string;
  observations: string;
}

export interface Warehouse {
  id: string;
  name: string;
}
