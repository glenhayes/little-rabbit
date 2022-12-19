import { PortableText } from '@portabletext/react';
import Image from 'next/image';
import { Collection } from '../../lib/sanity.query';

function CollectionItem({ name, image, description }: Collection) {
  return (
    <div className='lg:site-x-padding'>
      <div className='grid gap-8 lg:grid-cols-4'>
        <div className='flex flex-col justify-end gap-4 site-x-padding lg:px-0 lg:col-start-4 '>
          <h2 className='text-xl font-bold'>{name}</h2>
          <div>
            <PortableText value={description} />
          </div>
        </div>
        <div className='lg:col-start-2 lg:col-span-2 lg:row-start-1'>
          <Image
            src={image.url}
            width={image.dimensions.width}
            height={image.dimensions.height}
            alt={name}
          />
        </div>
      </div>
    </div>
  );
}

export default CollectionItem;
