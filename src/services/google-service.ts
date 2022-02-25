import axios from "axios";

import { GoogleImages } from "@/types/google-images";

// Google API = "https://serpapi.com/search.json";

export const urlProxyGoogle = "/api_google";
export const defaultWord = "apple";

export const getGoogleImages = async (
  word: string = defaultWord
): Promise<GoogleImages> => {
  const { data } = await axios.get(`${urlProxyGoogle}/${word}`);
  return data;
};
