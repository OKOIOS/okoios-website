import Footer from '../components/Footer';
import Head from '../components/Head';
import Header from '../components/Header';
import hiring from '../public/hiring.png';
import '@fontsource/montserrat/600.css';
import '@fontsource/montserrat/700.css';
import Image from 'next/image';
import React from 'react';

export default function Home() {
  return (
    <>
      <Head />
      <div className="flex flex-col justify-between bg-okgray min-h-screen font-body font-light text-oklavishwhite relative w-full">
        <div className="bg-career-heading bg-top bg-career-heading-size bg-no-repeat h-968 w-full absolute top-0 opacity-5 z-0"></div>
        <Header />
        <main className="text-center mb-32 relative z-10">
          <h1 className="text-okwhite font-semibold text-4xl mb-10">
            Current openings
          </h1>
          <p className="w-1/2 m-auto mb-32 text-xl">
            Please review our open positions and apply to the positions that
            match your qualifications.
          </p>
          <div className="mb-32">
            <Image src={hiring} alt="Hiring" width={796} height={158} />
          </div>
          <iframe
            src="https://evoportaluk.tracker-rms.com/Opportunity/Publish/?db=Okoios&theme=purplehaze"
            className="rounded-xl m-auto w-1/2 bg-oklavishwhite shadow-lg"
          />
        </main>
        <Footer />
      </div>
    </>
  );
}
