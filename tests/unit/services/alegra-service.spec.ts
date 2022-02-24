import { urlBaseAlegra, username, password } from "@/services/alegra-service";
import { getSellersAlegra } from "@/services/alegra-service";
import { postBillAlegra } from "@/services/alegra-service";
// Types
import { AlegraSeller } from "@/types/alegra-seller";

describe("Alegra Service", (): void => {
  it("Testing general variables to connect to Alegra API", () => {
    expect(urlBaseAlegra as string).toBe("https://api.alegra.com/api/v1");
    expect(username as string).toBe("luisangel2895@gmail.com");
    expect(password as string).toBe("c7bc72f6a504039ba712");
  });

  it("Testing Alegra API => GET/Sellers", async (): Promise<void> => {
    const sellers: AlegraSeller[] = await getSellersAlegra();
    const randomSeller: number = Math.floor(Math.random() * sellers.length);
    expect(sellers).toEqual(expect.any(Array));
    expect(sellers[randomSeller]).toEqual({
      id: expect.any(Number),
      name: expect.any(String),
      identification: expect.any(String),
      observations: expect.any(String),
      status: expect.any(String),
    });
  });

  it("Testing Alegra API => POST/invoice", async (): Promise<void> => {
    // const invoiceCreated = await postBillAlegra();
    console.log("post test");
  });
});
