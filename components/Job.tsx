import ButtonLink from './ButtonLink';
import clsx from 'clsx';
import React, { useState } from 'react';

export default function Job({ job }) {
  const [isOpen, setIsOpen] = useState(false);
  const isClosed = !isOpen;
  return (
    <div className="rounded-xl bg-oklightgray shadow-lg p-8 mb-10">
      <div className="text-xl flex items-center justify-between">
        <div>
          <h2 className="text-okwhite font-semibold mb-5">{job.title}</h2>
          <div className="flex justify-start">
            {job.worktype && (
              <div className="bg-okgray rounded-full text-okwhite text-sm px-8 py-3 mr-7">
                Type: {job.worktype}
              </div>
            )}
            {job.location && (
              <div className="bg-okgray rounded-full text-okwhite text-sm px-8 py-3">
                Location: {job.location}
              </div>
            )}
          </div>
        </div>
        <div className="text-sm">
          <ButtonLink
            href="#"
            onClick={(e) => {
              e.preventDefault();
              setIsOpen(!isOpen);
            }}
            label={isClosed ? '+ View Details' : '- Hide Details'}
          />
        </div>
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
          className="mb-20 job-description"
        />
        <ButtonLink href="/#contact" label="Apply Now" highlighted />
      </div>
    </div>
  );
}
