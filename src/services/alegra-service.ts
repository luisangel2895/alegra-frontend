import axios from "axios";

import { AlegraSeller } from "@/types/alegra-seller";

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

// POST Bill
export const postBillAlegra = async (): Promise<any> => {
  const response = await axios.post(
    `${urlBaseAlegra}/invoices`,
    {
      date: "2015-11-15",
      dueDate: "2015-12-15",
      client: 2,
      items: [
        {
          id: 1,
          price: 120,
          quantity: 5,
        },
        {
          id: 2,
          description: "Cartera de cuero color café",
          price: 85,
          discount: 10,
          tax: [
            {
              id: 6,
            },
          ],
          quantity: 1,
        },
      ],
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
