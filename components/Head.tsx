import { COMPANY_LONG_NAME, COMPANY_TAGLINE } from '../utils/constants';
import NextHead from 'next/head';
import { useCookies } from 'react-cookie';

export default function Head(props) {
  const [cookies] = useCookies(['cookies-allowed']);
  const isCookiesAllowed = cookies['cookies-allowed'] === 'true';

  return (
    <NextHead>
      <title>
        {COMPANY_LONG_NAME} - {COMPANY_TAGLINE}
      </title>
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/apple-touch-icon.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicon-16x16.png"
      />
      <link rel="manifest" href="/site.webmanifest" />
      {isCookiesAllowed && (
        <>
          <script
            async
            src="https://www.googletagmanager.com/gtag/js?id=G-JGQCTG02TZ"
          ></script>
          <script
            dangerouslySetInnerHTML={{
              __html: `
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-JGQCTG02TZ');
`,
            }}
          />
        </>
      )}
      {props.isIndex && (<script type="application/ld+json" dangerouslySetInnerHTML={{__html: `
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "OKOIOS Consulting",
  "url": "https://www.okoios.ch/",
  "logo": "https://www.okoios.ch/_next/image?url=%2F_next%2Fstatic%2Fimage%2Fpublic%2Flogo.df7f6e7e77b405b5ef852e929b34c99d.png&w=3840&q=75",
  "alternateName": "OKOIOS",
  "sameAs": [
    "https://www.linkedin.com/company/okoios/about/"
  ],
  "contactPoint": [
    {
      "@type": "ContactPoint",
      "telephone": "+41227357401",
      "contactType": "customer service",
      "areaServed": [
        "CH",
        "FR",
        "GB",
        "DE"
      ],
      "availableLanguage": [
        "en",
        "fr",
        "de",
        "it"
      ]
    }
  ]
}`}} />)}
    </NextHead>
  );
}
