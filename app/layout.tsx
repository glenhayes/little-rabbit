import './globals.css';
import { Karla } from '@next/font/google';
import Header from './Header';

const karla = Karla({ subsets: ['latin'], variable: '--font-karla' });

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang='en'
      className={`${karla.variable} font-sans h-full dark:bg-gray-900 dark:text-gray-100`}
    >
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body className='min-h-full'>
        {/* @ts-expect-error Async Server Component */}
        <Header />
        {children}
      </body>
    </html>
  );
}
