import emailIcon from '../public/emailIcon.png';
import mapIcon from '../public/mapIcon.png';
import phoneIcon from '../public/phoneIcon.png';
import ContactForm from './ContactForm';
import clsx from 'clsx';
import Image from 'next/image';
import React from 'react';
import { useInView } from 'react-intersection-observer';

export default function ContactSection(): React.ReactElement {
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });
  return (
    <section
      className={clsx(
        'relative opacity-0 bg-contact bg-contact-size bg-no-repeat bg-left',
        inView && 'animate-fadeIn'
      )}
      ref={ref}
      id="contact"
    >
      <div className="w-1366 flex justify-between py-20 m-auto h-full">
        <div className="w-1/2 relative z-10">
          <h2 className="text-4xl font-bold mb-6 text-okwhite">
            Get in touch with us
          </h2>
          <p className="text-oklavishwhite mb-16">
            We deliver added value, proficiency & continuous support through our
            IT experts
          </p>
          <address className="not-italic">
            <ul>
              <li className="flex items-center mb-6">
                <div className="flex items-center justify-center bg-okred rounded p-2 w-10 h-10">
                  <Image src={mapIcon} alt="Map icon" height={20} width={15} />
                </div>
                <p className="ml-4">
                  Rue François-Versonnex 7<br />
                  1207 Genève
                </p>
              </li>
              <li>
                <a href="tel:+41000000" className="flex items-center mb-6">
                  <div className="flex items-center justify-center bg-okred rounded p-2 w-10 h-10  mr-4">
                    <Image
                      src={phoneIcon}
                      alt="Map icon"
                      height={20}
                      width={15}
                    />
                  </div>
                  +41 000 00 00
                </a>
              </li>
              <li>
                <a href="mailto:info@okoios.ch" className="flex items-center">
                  <div className="flex items-center justify-center bg-okred rounded p-2 w-10 h-10 mr-4">
                    <Image
                      src={emailIcon}
                      alt="Map icon"
                      height={20}
                      width={15}
                    />
                  </div>
                  info@okoios.ch
                </a>
              </li>
            </ul>
          </address>
        </div>
        <div className="w-1/2 relative z-10">
          <ContactForm />
        </div>
      </div>
      <div className="absolute top-0 w-full h-full z-0 flex">
        <div className="flex-1 bg-gradient-to-l from-okgray "></div>
        <div className="bg-okgray flex-1"></div>
      </div>
    </section>
  );
}
