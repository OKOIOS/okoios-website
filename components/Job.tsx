import ButtonLink from './ButtonLink';
import clsx from 'clsx';
import React, { useState } from 'react';

export default function Job({ job }) {
  const [isOpen, setIsOpen] = useState(false);
  const isClosed = !isOpen;
  return (
    <div className="rounded-xl bg-oklightgray shadow-lg p-4 md:p-8 mb-10 text-center md:text-left">
      <div className="text-xl flex md:flex-row flex-col items-center justify-between">
        <div>
          <h3 className="text-okwhite font-semibold mb-5">{job.title}</h3>
          <div className="flex">
            {job.worktype && (
              <div className="bg-okgray rounded-full text-okwhite text-xs md:text-sm px-4 md:px-8 py-3 mr-7">
                Type: {job.worktype}
              </div>
            )}
            {job.location && (
              <div className="bg-okgray rounded-full text-okwhite text-xs md:text-sm px-4 md:px-8 py-3">
                Location: {job.location}
              </div>
            )}
          </div>
        </div>
        <button
          onClick={(e) => {
            e.preventDefault();
            setIsOpen(!isOpen);
          }}
          className="bg-oktransparent hover:bg-okred transition-all mt-4 border border-okred px-7 text-sm py-3 relative"
        >
          {isClosed ? '+ View Details' : '- Hide Details'}
          <span className="w-4 h-4 block absolute -bottom-2 -right-2 border-l bg-oklightgray border-okred transform rotate-45"></span>
        </button>
      </div>
      <div
        className={clsx(
          'opacity-0 border-0 border-t-1 border-oklightergray text-oklavishwhite leading-loose py-10 mt-10',
          isClosed && 'hidden',
          isOpen && 'animate-fadeIn'
        )}
      >
        <div
          dangerouslySetInnerHTML={{ __html: job.description }}
          className="mb-20 job-description text-left"
        />
        <ButtonLink
          href={`https://evoportaluk.tracker-rms.com/Okoios/apply?jobcode=${job.joblink}`}
          label="Apply Now"
          highlighted
        />
      </div>
    </div>
  );
}
