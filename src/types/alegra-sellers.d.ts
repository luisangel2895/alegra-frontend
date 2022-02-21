export interface AlegraSeller {
  id: number;
  name: string;
  identification: string;
  observations: string;
  status: Status;
}

export enum Status {
  Active = "active",
}
