import { COMPANY_SHORT_NAME, COMPANY_TAGLINE } from '../utils/constants';
import Link from 'next/link';
import React from 'react';

export default function IntroSection() {
  return (
    <section
      className="bg-ship bg-ship-size bg-no-repeat relative mb-36"
      style={{ height: '587px', backgroundPosition: '70% top' }}
    >
      <div className="w-1366 m-auto h-full relative">
        <div className="flex justify-between flex-1 absolute h-full top-0 z-10">
          <div className="bg-okgray flex-1"></div>
          <div className="w-4/6 bg-gradient-to-r from-okgray flex items-end">
            <div className="rounded-xl bg-oklightgray shadow-lg py-8">
              <p className="border-okred border-l-8 px-8">
                In a fast-paced digital environment, continuous development and
                agile paths are at the heart of organisations activities.
                Navigating in this environment, requires an agile and reliable
                partner for all conditions. Harness the power of IT through of
                our team experts. We are designed to be different
              </p>
            </div>
          </div>
        </div>
        <div className="w-4/6 z-10 absolute">
          <div className="border-okred border-l-8 p-2 pl-5 w-1366 m-auto text-sm mb-6">
            {COMPANY_TAGLINE}
          </div>
          <div className="text-4xl font-semibold text-okwhite mb-10 leading-tight">
            When it comes to successfully embracing digital,{' '}
            <span className="text-okred">
              {COMPANY_SHORT_NAME} is the right partner
            </span>
          </div>
          <div className="flex">
            <Link href="/about">
              <div className="cursor-pointer flex items-center justify-center mr-8 h-button-h w-button-w bg-button-outline bg-button-size hover:bg-button active:bg-button focus:bg-button">
                Know More
              </div>
            </Link>
            <Link href="/#contact">
              <div className="cursor-pointer flex items-center justify-center mr-8 h-button-h w-button-w bg-button-outline bg-button-size hover:bg-button active:bg-button focus:bg-button">
                Contact Us
              </div>
            </Link>
          </div>
        </div>
      </div>
      <div className="absolute w-full h-1/2 bottom-0 bg-gradient-to-t from-okgray z-0"></div>
    </section>
  );
}
