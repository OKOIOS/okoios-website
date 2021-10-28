import ContactForm from '../components/ContactForm';
import ContactSection from '../components/ContactSection';
import CookieNotice from '../components/CookieNotice';
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
        className="flex flex-col justify-between bg-okgray min-h-screen font-body font-light text-oklavishwhite relative w-full"
        id="top"
      >
        <Header />
        <main className="mb-auto">
          <IntroSection />
          <Services />
          <Solutions />
          <ContactSection />
          <JoinUs />
        </main>
        <Footer />
        <CookieNotice />
      </div>
    </>
  );
}
