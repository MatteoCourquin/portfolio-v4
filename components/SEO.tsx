import Head from 'next/head';

const SEO = ({
  title = 'Matteo Courquin | Développeur Full Stack !! 🚀',
  description = 'Un développeur web à votre écoute pour un projet à vos attentes !',
  image = '/ogIndex.png',
  url = 'https://matteocourquin.com',
}) => {
  return (
    <Head>
      <title>{title}</title>

      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="description" content={description} />
      <meta name="format-detection" content="telephone=no" />
      <meta name="referrer" content="default" />
      <meta name="robots" content="index, follow" />

      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={image} />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="Matteo Courquin" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      {/* <meta name="google-site-verification" content="6n81QjyK4C02a8g9mMeuhdHqnAcjhHRxsGVdgXVGQ2Y" /> */}
      {/* <meta name="google-site-verification" content="6n81QjyK4C02a8g9mMeuhdHqnAcjhHRxsGVdgXVGQ2Y" /> */}
      {/* <meta name="google-site-verification" content="TWSPNgs8XAz8cXg2sROJAqBJg4ybaqxbPcsu-1LrCpI" /> */}

      <meta
        name="keywords"
        content="Matteo Courquin, Creative Developer, Développeur creatif, FullStack Developer, Développeur FullStack, Web Developer, Développeur Web, Freelance, React, Node.js, Express, MongoDB, JavaScript, TypeScript, HTML, CSS, Sass, TailwindCSS, IIM, HETIC, AWS"
      />

      <link rel="icon" href="/favicon.ico" type="image/x-icon" />
      <link rel="canonical" href={url} />
    </Head>
  );
};

export default SEO;
