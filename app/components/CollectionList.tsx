import Image from 'next/image';
import { urlFor } from '../lib/sanity.image';
import { client } from '../sanity';
import SanityImage from './SanityImage';
type Collection = {
  name: string;
  image: string;
};
export default async function CollectionList() {
  const collectionList = await client.fetch<
    Collection[]
  >(`*[_type=="collection"]{
    name,
    image
    // description
  }`);
  return (
    <div>
      {collectionList &&
        collectionList.map((collection) => (
          <div key={collection.name}>
            <SanityImage source={collection.image} alt={collection.name} />
          </div>
        ))}

      {JSON.stringify(collectionList, null, 2)}
    </div>
  );
}
