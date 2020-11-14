export interface Thumbnail {
  path: string;
  extension: string;
}
export interface Movie {
  id: number;
  title: string;
  description: string;
  resourceURI: string;
 // urls: Url[];
  startYear: number;
  endYear: number;
  rating: string;
  type: string;
  modified: Date;
  thumbnail: Thumbnail;
  imageUrl: string,
  // creators: Creators;
  // characters: Characters;
  // stories: Stories;
  // comics: Comics;
  // events: Events;
  // next: Next;
  // previous?: any;
}

