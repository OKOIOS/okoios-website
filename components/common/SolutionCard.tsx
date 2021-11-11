import Image from 'next/image';
import React from 'react';

interface SolutionCardProps {
  title: string;
  icon: StaticImageData;
  iconBgcolor: string;
  shortDetails: string;
  listTitle: string;
  lists: string[];
  id: number;
  onclick?: any;
}
export default function SolutionCard({
  title,
  icon,
  iconBgcolor,
  shortDetails,
  listTitle,
  lists,
  onclick,
}: SolutionCardProps) {
  return (
    <>
      <div
        onClick={onclick}
        className="shadow rounded-xl overflow-auto md:overflow-hidden cursor-pointer relative solution-card bg-oklightgray mb-2 w-full text-left h-[330px] md:h-[344px] transform sm:translate-x-0 translate-x-[calc(-15%+0vw)]"
      >
        <div className="front p-6">
          <div
            className={`p-2 my-3 inline-block rounded w-16 h-16 ${iconBgcolor}`}
          >
            <Image src={icon} alt={title} layout="responsive" />
          </div>
          <h6 className="font-bold text-lg my-3 whitespace-pre-wrap">
            {title}
          </h6>
          <p className="text-sm leading-relaxed">{shortDetails}</p>
        </div>
        <div className="md:block hidden absolute inset-0 transition-all bg-okred text-okwhite p-8 w-full h-full overflow-auto back">
          <h6 className="text-lg font-bold mb-6">{listTitle}</h6>
          <ul>
            {lists?.map((list, idx) => (
              <li key={idx} className="text-sm mb-2 relative flex">
                <span className="w-1.5 h-1.5 rounded-full bg-okwhite mt-1.5 block absolute left-0 top-0"></span>
                <span className="pl-4">{list}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}
