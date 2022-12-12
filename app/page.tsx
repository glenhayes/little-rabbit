import ComingSoon from './ComingSoon';
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
          <ComingSoon
            heading={siteInformation[0].siteTitle}
            subHeading={siteInformation[0].siteDescription}
          />
        </div>
      )}
    </div>
  );
}
