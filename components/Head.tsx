import { COMPANY_LONG_NAME, COMPANY_TAGLINE } from '../utils/constants';
import NextHead from 'next/head';
import { useCookies } from 'react-cookie';

export default function Head() {
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
    </NextHead>
  );
}
