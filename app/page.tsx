import CollectionList from './components/CollectionList/CollectionList';

export default async function Home() {
  return (
    <div className='pb-12 '>
      {/* @ts-expect-error Async Server Component */}
      <CollectionList />
    </div>
  );
}
