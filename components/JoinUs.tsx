import analyticsIcon from '../public/analysisIcon.png';
import arrowWhite from '../public/arrow-white.png';
import blockchainIcon from '../public/blockchainIcon.png';
import businessIcon from '../public/businessIcon.png';
import cloudIcon from '../public/cloudIcon.png';
import governanceIcon from '../public/governanceIcon.png';
import securityIcon from '../public/securityIcon.png';
import testingIcon from '../public/testingIcon.png';
import Card from './Card';
import Container from './common/Container';
import clsx from 'clsx';
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import { useInView } from 'react-intersection-observer';

export default function Solutions() {
  const [focusedCard, setFocusedCard] = useState<number>(null);

  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  return (
    <section
      ref={ref}
      className={clsx(
        'relative opacity-0 bg-okred bg-waves bg-cover bg-center bg-no-repeat text-center py-16 px-4 md:py-40',
        inView && 'animate-fadeIn'
      )}
    >
      <Container>
        <div className="max-w-3xl mx-auto relative z-20">
          <span className="text-okwhite mb-5 tracking-widest block">
            JOIN US
          </span>
          <div className="mb-5">
            <Image src={arrowWhite} height={44} width={4} alt="JOIN US" />
          </div>
          <h2 className="text-xl md:text-4xl font-bold text-okwhite mb-10">
            Would you like to share your expertise and talents with our team?
          </h2>
          <Link href="/careers">
            <a className="inline-flex items-center justify-center relative overflow-hidden mx-auto bg-okblack hover:bg-okred hover:text-okwhite transition-all active:bg-okred px-14 py-4">
              Contact Us
              <span className="absolute transform rotate-45 w-6 h-6 bg-okred -bottom-3 -right-3"></span>
            </a>
          </Link>
        </div>
      </Container>

      <div className="absolute z-10 h-full w-full top-0 right-0 hidden md:flex">
        <div className="w-1/3  bg-gradient-to-l from-okred"></div>
        <div className="w-2/3 bg-okred"></div>
      </div>
    </section>
  );
}
