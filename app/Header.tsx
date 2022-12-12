import { client } from './sanity';

type SiteInformation = {
  siteTitle?: string;
  siteDescription?: string;
};

type Props = {
  pageTitle: false | string;
};

const Header = async ({ pageTitle }: Props) => {
  const siteInformation = (await client.fetch(`
  *[_type=='settings'][0]{
    siteTitle,
  siteDescription
  }`)) as SiteInformation | null;

  return (
    <div className='fixed top-0 left-0 w-full site-x-padding py-8 xl:py-14'>
      <div>
        {siteInformation && (
          <div className='text-center md:text-left'>
            <span className='italic font-bold'>
              {siteInformation?.siteTitle}
            </span>
            <h1>{pageTitle ? pageTitle : siteInformation?.siteDescription}</h1>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
