import emailIcon from '../public/emailIcon.png';
import mapIcon from '../public/mapIcon.png';
import phoneIcon from '../public/phoneIcon.png';
import ContactForm from './ContactForm';
import Container from './common/Container';
import clsx from 'clsx';
import Image from 'next/image';
import React from 'react';
import { FaPhoneAlt } from 'react-icons/fa';
import { MdLocationOn, MdMail } from 'react-icons/md';
import { useInView } from 'react-intersection-observer';

export default function ContactSection(): React.ReactElement {
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });
  return (
    <section
      className={clsx(
        'relative opacity-0 bg-contact bg-cover bg-no-repeat py-32 px-4',
        inView && 'animate-fadeIn'
      )}
      ref={ref}
      id="contact"
    >
      <Container>
        <div className="grid md:grid-cols-2">
          <div className="relative z-10 md:mt-0 mt-16 md:order-1 order-2">
            <div className="md:block hidden">
              <h2 className="text-3xl lg:text-5xl font-bold mb-3 text-okwhite">
                Get in touch with us
              </h2>
              <p className="text-oklavishwhite mb-16 max-w-md">
                We deliver added value, proficiency & continuous support through
                our IT experts
              </p>
            </div>
            <address className="not-italic">
              <ul className="grid gap-6">
                <li className="flex items-center space-x-4">
                  <div className="flex items-center justify-center bg-okred rounded p-1 w-12 h-12 text-okwhite">
                    <MdLocationOn className="text-3xl" />
                  </div>
                  <p>
                    Rue François-Versonnex 7<br />
                    1207 Genève
                  </p>
                </li>
                <li>
                  <a
                    href="tel:+41000000"
                    className="flex items-center space-x-4"
                  >
                    <div className="flex items-center justify-center bg-okred rounded p-1 w-12 h-12 text-okwhite">
                      <FaPhoneAlt className="text-2xl" />
                    </div>
                    <span>+41 000 00 00</span>
                  </a>
                </li>
                <li>
                  <a
                    href="mailto:info@okoios.ch"
                    className="flex items-center space-x-4"
                  >
                    <div className="flex items-center justify-center bg-okred rounded p-1 w-12 h-12 text-okwhite">
                      <MdMail className="text-2xl" />
                    </div>
                    <span>info@okoios.ch</span>
                  </a>
                </li>
              </ul>
            </address>
          </div>
          <div className="relative z-10 md:max-w-xl ml-auto w-full md:order-2 order-1">
            <div className="md:hidden block">
              <h2 className="text-3xl lg:text-5xl font-bold mb-3 text-okwhite">
                Get in touch with us
              </h2>
              <p className="text-oklavishwhite mb-16 max-w-md">
                We deliver added value, proficiency & continuous support through
                our IT experts
              </p>
            </div>
            <ContactForm />
          </div>
        </div>
      </Container>
      <div className="absolute inset-0 bg-gradient-to-b md:bg-gradient-to-r from-oktransparent via-oklightgray to-okgray"></div>
    </section>
  );
}
