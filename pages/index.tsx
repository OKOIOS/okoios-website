import ContactForm from '../components/ContactForm';
import ContactSection from '../components/ContactSection';
import Footer from '../components/Footer';
import Head from '../components/Head';
import Header from '../components/Header';
import IntroSection from '../components/IntroSection';
import JoinUs from '../components/JoinUs';
import Services from '../components/Services';
import Solutions from '../components/Solutions';
import '@fontsource/montserrat/600.css';
import '@fontsource/montserrat/700.css';
import React from 'react';

export default function Home() {
  return (
    <>
      <Head />
      <div
        className="bg-okgray min-h-screen relative font-body font-light text-oklavishwhite w-full"
        id="top"
      >
        <Header />

        <div className="xl:block hidden absolute z-50 h-[600px] w-px bg-oklightergray left-10 2xl:left-20 top-0">
          <span className="h-20 w-px bg-okred block absolute -bottom-40"></span>
          <span className="h-2 w-2 borde border-r border-b border-okred block absolute -bottom-40 transform rotate-45 -left-1"></span>
        </div>
        <main className="">
          <IntroSection />
          <Services />
          <Solutions />
          <ContactSection />
          <JoinUs />
        </main>
        <Footer />
      </div>
    </>
  );
}
