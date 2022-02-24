import axios from "axios";

import { AlegraSeller } from "@/types/alegra-seller";
import { AlegraResponseProduct } from "@/types/alegra-responses";
import { AlegraBill } from "@/types/alegra-bill";
import { AlegraResponseBill } from "@/types/alegra-responses";

export const urlBaseAlegra = "https://api.alegra.com/api/v1";
export const username = "luisangel2895@gmail.com";
export const password = "c7bc72f6a504039ba712";

// GET Sellers
export const getSellersAlegra = async (): Promise<AlegraSeller[]> => {
  const { data } = await axios.get(`${urlBaseAlegra}/sellers`, {
    auth: {
      username: `${username}`,
      password: `${password}`,
    },
  });
  return data;
};

// POST Products -> only used to create a products one time
export const createProduct = async (
  seller: AlegraSeller
): Promise<AlegraResponseProduct> => {
  const response: AlegraResponseProduct = await axios.post(
    `${urlBaseAlegra}/items`,
    {
      name: `${seller.name}`,
      inventory: {
        unit: "unit",
      },
      reference: `${seller.identification}`,
      description: `IDSeller => ${seller.id}`,
      price: 1,
    },
    {
      auth: {
        username: `${username}`,
        password: `${password}`,
      },
    }
  );
  return response;
};

// POST Bill
export const postBillAlegra = async (
  Bill: AlegraBill
): Promise<AlegraResponseBill> => {
  const response = await axios.post(`${urlBaseAlegra}/invoices`, Bill, {
    auth: {
      username: `${username}`,
      password: `${password}`,
    },
  });
  const { data } = response;
  return data;
};
