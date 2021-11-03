import Ship from '../public/ship.png';
import { COMPANY_SHORT_NAME, COMPANY_TAGLINE } from '../utils/constants';
import ButtonLink from './ButtonLink';
import Container from './common/Container';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

export default function IntroSection() {
  return (
    <section className="relative py-16 md:py-32 lg:py-52 xl:mb-12">
      <Container>
        <div className="xl:max-w-[805px] lg:mx-0 mx-auto max-w-sm sm:max-w-xl relative z-20 lg:text-left text-center mb-12 px-4">
          <span className="border-okred lg:border-l-8 p-2 pl-5 block text-sm mb-6">
            {COMPANY_TAGLINE}
          </span>
          <h1 className="text-3xl xl:text-4xl 2xl:text-5xl font-semibold text-okwhite mb-10 leading-snug xl:leading-snug 2xl:leading-snug">
            When it comes to successfully embracing digital,
            <span className="text-okred pl-1 block sm:inline-block">
              {COMPANY_SHORT_NAME}
            </span>
            <span className="block text-okred">is the right partner</span>
          </h1>
          <div className="flex items-center space-x-4 lg:space-x-8 lg:justify-start justify-center">
            <Link href="/about">
              <a className="bg-oktransparent hover:bg-okred transition-all mt-4 border border-okred px-8 md:px-12 py-3 md:py-5 md:text-base text-xs relative">
                Know More
                <span className="w-4 h-4 block absolute -bottom-2 -right-2 border-l bg-okgray border-okred transform rotate-45"></span>
              </a>
            </Link>
            <Link href="/#contact">
              <a className="bg-oktransparent hover:bg-okred transition-all mt-4 border border-okred px-8 md:px-12 py-3 md:py-5 md:text-base text-xs relative">
                Contact Us
                <span className="w-4 h-4 block absolute -bottom-2 -right-2 border-l bg-okgray border-okred transform rotate-45"></span>
              </a>
            </Link>
          </div>
        </div>
      </Container>
      <div className="lg:absolute right-0 z-10 2xl:bottom-0 bottom-20 lg:max-w-2xl xl:max-w-3xl 2xl:max-w-[944px] w-full">
        <div className="relative z-10">
          <Image src={Ship} alt="Ship" layout="responsive" />
          <div className="lg:block hidden bg-gradient-to-r from-okgray h-60 w-72 absolute left-0 bottom-0"></div>
        </div>
        <div className="relative z-20 lg:rounded-xl p-4 md:p-8 shadow-lg bg-oklightgray md:mt-0 -mt-8">
          <p className="relative leading-8 lg:text-left text-center md:text-base text-sm lg:max-w-[616px] w-full">
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
