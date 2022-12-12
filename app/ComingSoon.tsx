import React from 'react';

type Props = {
  heading: string;
  subHeading: string;
};

export default function ComingSoon({ heading, subHeading }: Props) {
  return (
    <div>
      <span className='italic font-bold'>{heading}</span>
      <h1>{subHeading}</h1>
      <p className='text-lg mt-8'>Site coming soon</p>
    </div>
  );
}
