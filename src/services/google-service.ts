import axios from "axios";

import { GoogleImages } from "@/types/google-images";
import { ParamsGoogle } from "@/types/params-google";

// Google API
const urlAPI = "https://serpapi.com/search.json";

const params: ParamsGoogle = {
  api_key: "3abc08bbf6fc6c4ac30dc6d544e6f1086d08cbb8d1b475e7cf9eccaf402891b7",
  tbm: "isch",
  ijn: 0,
  q: "",
};

export const getGoogleImages = async (word: string): Promise<GoogleImages> => {
  if (!word) {
    word = "apple";
  }
  params.q = word;
  const { data } = await axios.get(`${urlAPI}`, { params });
  return data;
};
