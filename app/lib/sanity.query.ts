import { groq } from 'next-sanity';

export const queryCollectionList = groq`
*[_type=="collection"]{
  "id": _id,
  name,
  image{
    "url": asset->url,
    "dimensions": asset->metadata.dimensions
  },
  description
}`;

export const querySiteInformation = groq`
*[_type=='settings'][0]{
  siteTitle,
  siteDescription
}`;

export type SiteInformation = {
  siteTitle?: string;
  siteDescription?: string;
};

type Image = {
  url: string;
  dimensions: {
    _type: string;
    aspectRatio: number;
    height: number;
    width: number;
  };
};

export type Collection = {
  id: string;
  name: string;
  description: any;
  image: Image;
};
