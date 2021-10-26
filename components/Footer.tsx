import facebookLogo from '../public/facebook.png';
import linkedinLogo from '../public/linkedin.png';
import whiteLogo from '../public/logo-white.png';
import { COMPANY_LONG_NAME } from '../utils/constants';
import '@fontsource/montserrat/300.css';
import '@fontsource/montserrat/500.css';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

export default function Footer() {
  return (
    <footer>
      <div className="flex justify-between m-auto w-1366 mb-16 pt-20">
        <Link href="/#top">
          <div className="cursor-pointer">
            <Image
              src={whiteLogo}
              alt={`${COMPANY_LONG_NAME} logo`}
              height={50}
              width={210}
            />
          </div>
        </Link>
        <div className="flex flex-col items-end">
          <div className="font-bold mb-3 text-sm">Follow Us</div>
          <ul className="flex">
            <li className="mx-3">
              <a
                href="#"
                className="rounded-full w-8 h-8 bg-oklightgray flex items-center justify-center"
              >
                <Image
                  src={linkedinLogo}
                  alt="Follow us on LinkedIn"
                  height={12}
                  width={12}
                />
              </a>
            </li>
            <li>
              <a
                href="#"
                className="rounded-full w-8 h-8 bg-oklightgray flex items-center justify-center"
              >
                <Image
                  src={facebookLogo}
                  alt="Follow us on Facebook"
                  height={12}
                  width={6}
                />
              </a>
            </li>
          </ul>
        </div>
      </div>
      <small className=" bg-oklightgray text-oklavishwhite flex justify-center items-center w-screen h-16">
        All Rights Reserved {new Date().getFullYear()} {COMPANY_LONG_NAME} -
        <div className="underline ml-1">
          <Link href="/privacy">Privacy Policy</Link>
        </div>
      </small>
    </footer>
  );
}
