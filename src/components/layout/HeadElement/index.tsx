import Head from 'next/head';
import React from 'react';

function HeadElement({
  pageTitle = "The Rock of Faith Healing Assembly International",
  description = 'Raising sons...',
  noIndex = false,
  siteLink = 'https://therockoffaith.netlify.app/',
}: {
  pageTitle?: string;
  description?: string;
  noIndex?: boolean;
  siteLink?: string;
}) {
  return (
    <Head>
      <meta charSet='utf-8' />
      <link rel='icon' href='/logo.ico' />

      <meta name='viewport' content='width=device-width, initial-scale=1' />
      <meta name='theme-color' content='#000000' />

      {/* <!-- Main Tags --> */}
      <title>{pageTitle}</title>
      <meta name='title' content={pageTitle} />
      <meta name='description' content={description} />

      {/* <!-- Google meta tags --> */}
      <meta itemProp='name' content={pageTitle} />
      <meta itemProp='description' content={description} />
      <meta itemProp='image' content={siteLink + '/logo.ico'} />

      {/* <!-- Facebook meta tags --> */}
      <meta property='og:url' content={siteLink} />
      <meta property='og:type' content='website' />
      <meta property='og:title' content={pageTitle} />
      <meta property='og:description' content={description} />
      <meta property='og:image' content={siteLink + '/logo.ico'} />

      {/* <!-- Twitter meta tags --> */}
      <meta name='twitter:card' content='summary_large_image' />
      <meta name='twitter:title' content={pageTitle} />
      <meta name='twitter:description' content={description} />
      <meta name='twitter:image' content={siteLink + '/logo.ico'} />

      {noIndex === true && <meta name='robots' content='noIndex' />}
    </Head>
  );
}

export default HeadElement;
