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
import Container from '../components/common/Container';
import '@fontsource/montserrat/600.css';
import '@fontsource/montserrat/700.css';
import React from 'react';

export default function Privacy() {
  return (
    <>
      <Head />

      <Header />
      <main className="px-4">
        <Container>
          <h1 className="text-center text-3xl md:text-4xl font-bold text-okwhite my-12">
            Privacy Policy
          </h1>
          <div className="grid gap-10">
            <div className="start-block">
              <h2 className="text-okwhite mb-3 font-semibold">
                About this statement
              </h2>
              <p className="mb-3">
                Personal Data means any information that relates to a natural
                person, identified or identifiable, directly or indirectly, most
                notably through reference to an identifier such as an
                identification number, localisation data, an online identifier,
                or to one or more specific elements pertaining to his or her
                physical, physiological, genetic, psychic, economic, cultural or
                social identity.
              </p>

              <p className="mb-3">
                Different sorts of personal data about you may be collected,
                used, and stored by us, which we have categorized together as
                follows:
              </p>
              <ul className="ml-10 list-disc">
                <li>Contact information</li>
                <li>Identification Data</li>
                <li>Technical Data</li>
              </ul>
            </div>
            <div className="start-block">
              <h2 className="text-okwhite mb-3 font-semibold">
                Usage of personal data
              </h2>

              <p className="mb-3">
                Your personal data will most commonly used in the following
                situation and will only be collected and processed for purposes
                which are sufficiently specific, necessary to the Company’s
                activities or legitimate interest:
              </p>

              <ul className="list-disc ml-10">
                <li>Service level purposes</li>
                <li>Communication purposes</li>
                <li>
                  Manage the submission of your CV and the internal procedure of
                  hiring
                </li>
                <li>
                  Performance of contract we intend or have already entered
                </li>
                <li>Direct marketing</li>
              </ul>
            </div>
            <div className="start-block">
              <h2 className="text-okwhite mb-3 font-semibold">
                Our commitment
              </h2>

              <p className="mb-3">
                OKOIOS is committed to following privacy standards because it
                recognizes the importance of protecting personal data.
              </p>

              <p className="mb-3">
                Okoios commits to adhere to the following principles in
                particular:
              </p>

              <ol className="list-decimal ml-10">
                <li>
                  Your personal information is collected for defined, explicit,
                  and legitimate objectives, and it is not processed in any way
                  that is incompatible with those goals;
                </li>
                <li>
                  Compliance with the Company’s legal and regulatory obligations
                  in Switzerland and abroad;
                </li>
                <li>
                  Compliance with authorities and regulatory bodies’ requests,
                  order, measures or judgments, in Switzerland and abroad;
                </li>
                <li>
                  Ensuring the Company’s network and information security.
                </li>
              </ol>
            </div>
            <div className="start-block">
              <h2 className="text-okwhite mb-3 font-semibold">
                Retaining of personal data
              </h2>

              <p className="mb-3">
                The Company will only retain and process the Personal Data for
                as long as necessary to fulfil the purposes pursuant mentioned
                in this Privacy Policy, or until you request that the
                information be removed.
              </p>
            </div>
            <div className="start-block">
              <h2 className="text-okwhite mb-3 font-semibold">Your rights</h2>

              <p className="mb-3">
                You have the following rights as the owner of personal data,
                which you can exercise at the following email address:
              </p>

              <p className="mb-3">
                You have a right to make a request for access, deletion,
                correction, object of the processing, request a transfer, or
                withdraw your consent of personal data.{' '}
              </p>

              <p className="mb-3">
                Please note that before providing you access to your personal
                information, we will take efforts to authenticate your identity
                in accordance with relevant legislation and our privacy and
                security standards.
              </p>
            </div>
            <div className="start-block">
              <h2 className="text-okwhite mb-3 font-semibold">
                Changes of Policy
              </h2>

              <p className="mb-3">
                This policy was updated on October 26, 2021
              </p>

              <p className="mb-3">
                Okoios may update this Policy periodically. In such case, it
                will inform about the updated Policy on the website
              </p>
            </div>
          </div>
        </Container>
      </main>
      <Footer />
      <CookieNotice />
    </>
  );
}
