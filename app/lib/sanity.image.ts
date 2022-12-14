import imageUrlBuilder from '@sanity/image-url';
import { client } from '../sanity';

const builder = imageUrlBuilder(client);

export function urlFor(source: string) {
  return builder.image(source);
}

export function getImageInformation(source: string) {
  const imageArray = source.split('-');
  const [aspect, type] = imageArray[1].split('.');
  const [width, height] = aspect.split('x');
  return {
    width: +width,
    height: +height,
    type,
  };
}
