import { client } from '../../sanity';
import CollectionItem from './CollectionItem';
import { Collection, queryCollectionList } from '../../lib/sanity.query';

export default async function CollectionList() {
  const collectionList = await client.fetch<Collection[]>(queryCollectionList);
  return (
    <div className='grid gap-36 lg:gap-60'>
      {collectionList &&
        collectionList.map((collection) => (
          <CollectionItem key={collection.id} {...collection} />
        ))}
    </div>
  );
}
