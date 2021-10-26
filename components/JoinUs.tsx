import analyticsIcon from '../public/analysisIcon.png';
import arrowWhite from '../public/arrow-white.png';
import blockchainIcon from '../public/blockchainIcon.png';
import businessIcon from '../public/businessIcon.png';
import cloudIcon from '../public/cloudIcon.png';
import governanceIcon from '../public/governanceIcon.png';
import securityIcon from '../public/securityIcon.png';
import testingIcon from '../public/testingIcon.png';
import Card from './Card';
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
        'relative opacity-0 pt-32 mb-20 bg-okred h-waves bg-waves bg-waves-size bg-center bg-no-repeat flex justify-center items-center text-center',
        inView && 'animate-fadeIn'
      )}
    >
      <div className="absolute z-10 flex flex-col justify-center items-center h-full w-full top-0">
        <div className="text-okwhite w-1/2 mb-5 tracking-widest">JOIN US</div>
        <div className="mb-5">
          <Image src={arrowWhite} height={44} width={4} alt="" />
        </div>
        <div className="text-4xl font-bold text-okwhite w-1/2 mb-10">
          Would you like to share your expertise and talents with the team?
        </div>
        <Link href="/careers">
          <div className="cursor-pointer flex items-center justify-center mr-8 h-button-h w-button-w bg-button-size bg-okblack">
            Join Now
          </div>
        </Link>
      </div>
      <div className="absolute h-full w-full top-0 flex">
        <div className="w-1/3  bg-gradient-to-l from-okred"></div>
        <div className="w-2/3 bg-okred"></div>
      </div>
    </section>
  );
}
