import ButtonLink from '../components/ButtonLink';
import CookieNotice from '../components/CookieNotice';
import Footer from '../components/Footer';
import Head from '../components/Head';
import Header from '../components/Header';
import Job from '../components/Job';
import Container from '../components/common/Container';
import hiring from '../public/hiring.png';
import '@fontsource/montserrat/600.css';
import '@fontsource/montserrat/700.css';
import xmlParser from 'fast-xml-parser';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

export default function Home({ jobs }) {
  return (
    <>
      <Head />
      <div className="bg-okgray font-light text-oklavishwhite relative">
        <div className="bg-career-heading bg-top bg-career-heading-size bg-no-repeat h-968 w-full absolute top-0 opacity-5 z-0"></div>
        <Header />
        <main className="text-center px-4 py-6 md:mt-0 mt-20 sm:py-16 lg:py-32 relative z-10">
          <Container>
            <div className="max-w-3xl mx-auto">
              <h1 className="text-okwhite font-semibold text-3xl xl:text-4xl mb-10">
                Current openings
              </h1>
              <p className="mb-32 text-xl">
                Please review our open positions and apply to the positions that
                match your qualifications.
              </p>
              <div className="mb-32">
                <Image
                  src={hiring}
                  alt="Hiring"
                  width={796}
                  height={158}
                  layout="responsive"
                />
              </div>
            </div>
            <div className="xl:max-w-6xl max-w-4xl mx-auto">
              <h3 className="text-2xl mb-6 font-bold md:text-left">General</h3>

              {jobs?.map((job) => (
                <Job job={job} key={job.reference} />
              ))}
            </div>
          </Container>
        </main>
        <Footer />
        <CookieNotice />
      </div>
    </>
  );
}

export async function getServerSideProps() {
  try {
    const res = await fetch(
      `https://evoportaluk.tracker-rms.com/Opportunity/Publish/?db=Okoios&theme=purplehaze&fields=joblink,reference,title,location,worktype,description&output=xml`
    );
    const data = await res.text();
    const result = xmlParser.parse(data);
    return { props: { jobs: result.Jobs.Job } };
  } catch (e) {
    return { props: { job: null } };
  }
}
