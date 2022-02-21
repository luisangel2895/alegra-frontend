export interface GoogleImages {
  search_metadata: SearchMetadata;
  search_parameters: SearchParameters;
  search_information: SearchInformation;
  suggested_searches: SuggestedSearch[];
  images_results: GoogleImage[];
}

export interface GoogleImage {
  position: number;
  thumbnail: string;
  source: string;
  title: string;
  link: string;
  original: string;
  is_product: boolean;
  in_stock?: boolean;
}

export interface SearchInformation {
  image_results_state: string;
  query_displayed: string;
}

export interface SearchMetadata {
  id: string;
  status: string;
  json_endpoint: string;
  created_at: string;
  processed_at: string;
  google_url: string;
  raw_html_file: string;
  total_time_taken: number;
}

export interface SearchParameters {
  engine: string;
  q: string;
  google_domain: string;
  ijn: string;
  device: string;
  tbm: string;
}

export interface SuggestedSearch {
  name: string;
  link: string;
  chips: string;
  serpapi_link: string;
  thumbnail: string;
}
