import { client } from './sanity';

export default async function Home() {
  const siteInformation = await client.fetch(`
  *[_type=='settings']{
    siteTitle,
  siteDescription
}`);
  return (
    <div className='grid place-content-center min-h-full'>
      {siteInformation && (
        <div className='text-center'>
          <span className='italic font-bold'>
            {siteInformation[0]?.siteTitle}
          </span>
          <h1>{siteInformation[0]?.siteDescription}</h1>
          <p className='text-lg mt-8'>Site coming soon</p>
        </div>
      )}
    </div>
  );
}
