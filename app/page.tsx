import CollectionList from './components/CollectionList';

export default async function Home() {
  return (
    <div className='grid place-content-center min-h-full'>
      {/* @ts-expect-error Async Server Component */}
      <CollectionList />
    </div>
  );
}
