export interface SellRegister {
  id: number;
  name: string;
  points: number;
  products: Image[];
}

export interface SellRegisterShort {
  id: number;
  name: string;
  points: number;
}

export interface Image {
  key: string;
  url: string;
  title: string;
}

export interface ImageSelled {
  id: number;
  name: string;
  key: string;
  url: string;
  title: string;
}
