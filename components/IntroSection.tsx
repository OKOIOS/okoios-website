import Ship from '../public/ship.png';
import { COMPANY_SHORT_NAME, COMPANY_TAGLINE } from '../utils/constants';
import ButtonLink from './ButtonLink';
import Container from './common/Container';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

export default function IntroSection() {
  return (
    <section className="relative py-16 md:py-32 lg:py-52">
      <Container>
        <div className="xl:max-w-4xl lg:mx-0 mx-auto max-w-xl relative z-20 lg:text-left text-center mb-12 px-4">
          <span className="border-okred lg:border-l-8 p-2 pl-5 block text-sm mb-6">
            {COMPANY_TAGLINE}
          </span>
          <h1 className="text-3xl xl:text-4xl 2xl:text-5xl font-semibold text-okwhite mb-10 xl:leading-tight">
            When it comes to successfully embracing digital,
            <span className="text-okred pl-1 md:inline block">
              {COMPANY_SHORT_NAME} is the right partner
            </span>
          </h1>
          <div className="flex flex-col items-center sm:flex-row space-y-4 sm:space-y-0 lg:justify-start justify-center">
            <ButtonLink href="/about" label="Know More" />
            <ButtonLink href="/#contact" label="Contact Us" />
          </div>
        </div>
      </Container>
      <div className="lg:absolute right-0 z-10 2xl:bottom-0 bottom-20 lg:max-w-2xl 2xl:max-w-4xl">
        <div className="-mb-12 relative z-10">
          <Image src={Ship} alt="Ship" layout="responsive" />
          <div className="lg:block hidden bg-gradient-to-r from-okgray h-52 w-72 absolute left-0 bottom-0"></div>
        </div>
        <div className="relative z-20 lg:rounded-xl p-4 md:p-8 shadow-lg bg-oklightgray">
          <p className="relative leading-8 lg:text-left text-center md:text-base text-sm xl:w-3/4">
            <span className="lg:block hidden absolute -left-8 w-1.5 h-full bg-okred"></span>
            In a fast-paced digital environment, continuous development and
            agile paths are at the heart of organisations activities. Navigating
            in this environment, requires an agile and reliable partner for all
            conditions. Harness the power of IT through of our team experts. We
            are designed to be different
          </p>
        </div>
      </div>
    </section>
  );
}
