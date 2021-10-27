import ButtonLink from '../components/ButtonLink';
import Footer from '../components/Footer';
import Head from '../components/Head';
import Header from '../components/Header';
import Job from '../components/Job';
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
      <div className="flex flex-col justify-between bg-okgray min-h-screen font-body font-light text-oklavishwhite relative w-full">
        <div className="bg-career-heading bg-top bg-career-heading-size bg-no-repeat h-968 w-full absolute top-0 opacity-5 z-0"></div>
        <Header />
        <main className="text-center mb-32 relative z-10 w-1366 m-auto">
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
          <div className="w-5/6 m-auto text-left">
            {jobs.map((job) => (
              <Job job={job} key={job.reference} />
            ))}
          </div>
        </main>
        <Footer />
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
