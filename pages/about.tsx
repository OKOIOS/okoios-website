import BusinessManagersSection from '../components/BusinessManagersSection';
import CookieNotice from '../components/CookieNotice';
import Footer from '../components/Footer';
import Head from '../components/Head';
import Header from '../components/Header';
import Container from '../components/common/Container';
import arrowRed from '../public/arrow-red.png';
import centeredEllipsisSmall from '../public/centered-ellipsis-small.png';
import centeredEllipsis from '../public/centered-ellipsis.png';
import { COMPANY_SHORT_NAME } from '../utils/constants';
import Image from 'next/image';
import React from 'react';

export default function About() {
  return (
    <>
      <Head />

      <div className="bg-moon bg-top bg-moon-size bg-no-repeat h-968 w-full absolute top-0 filter grayscale z-0"></div>
      <Header />
      <main className="text-center text-oklavishwhite relative z-10">
        <div className="py-32 px-4">
          <Container>
            <div className="max-w-2xl mx-auto">
              <h1 className="text-okwhite font-bold text-4xl xl:text-6xl mb-6">
                We are {COMPANY_SHORT_NAME}
              </h1>
              <p className="mb-10 md:text-base text-sm leading-loose">
                OKOIOS brings a dynamic alliance between the objectives of the
                client and the solutions of the experts.
              </p>
            </div>
            <div className="mb-10 md:block hidden">
              <Image src={arrowRed} alt="Hiring" width={7} height={54} />
            </div>
            <p className="max-w-3xl font-light mx-auto md:mt-0 mt-20 mb-10 text-okwhite text-sm sm:text-base lg:text-2xl leading-loose lg:leading-8">
              Through our agile consulting approach, we offer service levels and
              competences adapted to your needs.
            </p>
            <div className="lg:hidden block w-[163px] sm:w-1/ mx-auto mb-8">
              <Image src={centeredEllipsisSmall} layout="responsive" />
            </div>
            <div className="grid gap-4 lg:grid-cols-3 xl:grid-cols-7">
              <div className="xl:col-span-2 lg:text-right text-center col-span-1 relative lg:top-1/4 lg:order-1 order-2 lg:py-0 py-14 lg:my-0 my-6">
                <span className="lg:hidden block absolute top-0 w-0.5 h-8 bg-okred left-0 right-0 mx-auto"></span>
                <h6 className="text-okwhite font-semibold mb-3 text-2xl">
                  We plan
                </h6>
                <p className="text-base sm:text-xl">
                  Analyse, Design, Implement, Test, Integrate & Maintain.
                </p>
                <span className="lg:hidden block absolute bottom-0 w-0.5 h-8 bg-okred left-0 right-0 mx-auto"></span>
              </div>
              <div className="xl:col-span-3 mx-4 lg:order-2">
                <div className="lg:block hidden">
                  <Image src={centeredEllipsis} layout="responsive" />
                </div>

                <h6 className="text-okwhite font-semibold mb-3 text-2xl">
                  We enable
                </h6>
                <p className="text-base sm:text-xl">
                  the delivery of continuous innovation and improvements,
                  assisting you to reach your objectives
                </p>
              </div>
              <div className="xl:col-span-2 lg:text-left text-center col-span-1 relative lg:top-1/4 order-3">
                <h6 className="text-okwhite font-semibold mb-3 text-2xl">
                  We assist
                </h6>
                <p className="text-base sm:text-xl">
                  you in every step of your <br /> projects.
                </p>
              </div>
            </div>
          </Container>
        </div>
        <BusinessManagersSection />
      </main>
      <Footer />
      <CookieNotice />
    </>
  );
}
