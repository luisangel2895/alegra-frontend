import { urlProxyGoogle, defaultWord } from "@/services/google-service";
import { getGoogleImages } from "@/services/google-service";
// Types
import { GoogleImages, GoogleImage } from "@/types/google-images";

describe("Google Service", (): void => {
  it("Testing general variables to connect to Google API", () => {
    expect(urlProxyGoogle as string).toBe("http://localhost:8000/api_google");
    expect(defaultWord as string).toBe("apple");
  });

  it("Testing Google API => GET/Images", async (): Promise<void> => {
    const googleImages: GoogleImages = await getGoogleImages();
    const { images_results } = googleImages;

    expect(images_results).toEqual(expect.any(Array));
    expect(images_results.length).toEqual(100);

    const randomImage: number = Math.floor(Math.random() * 100);

    expect(images_results[randomImage] as GoogleImage).toEqual({
      position: expect.any(Number),
      thumbnail: expect.any(String),
      source: expect.any(String),
      title: expect.any(String),
      link: expect.any(String),
      original: expect.any(String),
      is_product: expect.any(Boolean),
    });
  });
});
