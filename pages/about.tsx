import BusinessManagersSection from '../components/BusinessManagersSection';
import CookieNotice from '../components/CookieNotice';
import Footer from '../components/Footer';
import Head from '../components/Head';
import Header from '../components/Header';
import arrowRed from '../public/arrow-red.png';
import centeredEllipsis from '../public/centered-ellipsis.png';
import { COMPANY_SHORT_NAME } from '../utils/constants';
import '@fontsource/montserrat/600.css';
import '@fontsource/montserrat/700.css';
import Image from 'next/image';
import React from 'react';

export default function About() {
  return (
    <>
      <Head />
      <div className="flex flex-col justify-between bg-okgray min-h-screen font-body font-light text-oklavishwhite relative w-full">
        <div className="bg-moon bg-top bg-moon-size bg-no-repeat h-968 w-full absolute top-0 filter grayscale z-0"></div>
        <Header />
        <main className="text-center relative z-10">
          <section className="mb-32 w-1366 m-auto">
            <h1 className="text-okwhite font-semibold text-4xl mb-10">
              We are {COMPANY_SHORT_NAME}
            </h1>
            <p className="w-1/4 m-auto mb-10">
              OKOIOS brings a dynamic alliance between the objectives of the
              client and the solutions of the experts.
            </p>
            <div className="mb-10">
              <Image src={arrowRed} alt="Hiring" width={7} height={54} />
            </div>
            <p className="w-1/3 m-auto mb-10 text-okwhite text-xl">
              Through our agile consulting approach, we offer service levels and
              competences adapted to your needs.
            </p>
            <div className="flex justify-center">
              <div className="text-right w-1/4 relative top-44 mr-3">
                <h2 className="text-okwhite font-semibold mb-2">We plan</h2>
                <p>Analyse, Design, Implement, Test, Integrate & Maintain</p>
              </div>
              <div>
                <Image src={centeredEllipsis} width={703} height={554} />
              </div>
              <div className="text-left w-1/4 relative top-44 ml-3">
                <h2 className="text-okwhite font-semibold mb-2">We assist</h2>
                <p>you in every step of your projects.</p>
              </div>
            </div>
            <div className="w-1/3 m-auto">
              <h2 className="text-okwhite font-semibold mb-2">We enable</h2>
              <p>
                The delivery of continuous innovation and improvements,
                assisting you to reach your objectives.
              </p>
            </div>
          </section>
          <BusinessManagersSection />
        </main>
        <Footer />
        <CookieNotice />
      </div>
    </>
  );
}
