import { COMPANY_LONG_NAME, COMPANY_TAGLINE } from '../utils/constants';
import NextHead from 'next/head';

export default function Head() {
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
    </NextHead>
  );
}
