export interface SubCategory {
  id: string;
  title: string;
  slug: string;
}

export interface OtherLink {
  id: string;
  title: string;
  link: string;
}

export interface Category {
  id: string;
  title: string;
  collapsible: boolean;
  subCategories: SubCategory[];
}

export interface CategoryThemes {
  title: string;
  slug: string;
  after: string;
}

export interface ImageData {
  id: string;
  title: string;
  englishTitle: string;
  squareUrl: string;
  largeUrl: string;
  fullsizeUrl: string;
  categories: ImageDataCategory[];
}

export interface ImageDataCategory {
  name: string;
  slug: string;
}
