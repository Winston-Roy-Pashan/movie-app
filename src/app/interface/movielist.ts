export interface Thumbnail {
  path: string;
  extension: string;
}
export interface Movie {
  id: number;
  title: string;
  description: string;
  resourceURI: string;
  startYear: number;
  endYear: number;
  rating: string;
  type: string;
  modified: Date;
  thumbnail: Thumbnail;
  imageUrl: string,
}

