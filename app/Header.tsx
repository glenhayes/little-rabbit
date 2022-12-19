import { querySiteInformation, SiteInformation } from './lib/sanity.query';
import { client } from './sanity';

const Header = async ({ pageTitle }: { pageTitle: false | string }) => {
  const siteInformation = await client.fetch<SiteInformation>(
    querySiteInformation
  );

  return (
    <header className='lg:sticky lg:top-0  w-full site-x-padding h-[var(--nav-height)] flex items-center'>
      <div className='w-full'>
        {siteInformation && (
          <div className='text-center md:text-left'>
            <span className='italic font-bold'>
              {siteInformation?.siteTitle}
            </span>
            <h1>{pageTitle ? pageTitle : siteInformation?.siteDescription}</h1>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
