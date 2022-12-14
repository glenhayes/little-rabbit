import Image from 'next/image';
import { getImageInformation, urlFor } from '../lib/sanity.image';

type Props = {
  source: string;
  width?: number;
  height?: number;
  alt: string;
};

export default function SanityImage({ source, width, height, alt }: Props) {
  const url = urlFor(source).url();

  const imageInfo = getImageInformation(url);

  return (
    <Image
      src={url}
      alt={alt}
      width={width ? width : imageInfo.width}
      height={height ? height : imageInfo.height}
    />
  );
}
