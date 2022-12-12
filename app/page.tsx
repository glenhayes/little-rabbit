import { client } from './sanity';

import ComingSoon from './ComingSoon';
type SiteInformation = {
  siteTitle?: string;
  siteDescription?: string;
};

export default async function Home() {
  const siteInformation = (await client.fetch(`
  *[_type=='settings'][0]{
    siteTitle,
  siteDescription
  }`)) as SiteInformation | null;
  return (
    <div className='grid place-content-center min-h-full'>
      {siteInformation && (
        <ComingSoon
          heading={siteInformation?.siteTitle}
          subHeading={siteInformation?.siteDescription}
        />
      )}
    </div>
  );
}
