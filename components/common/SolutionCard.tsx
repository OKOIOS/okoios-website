import securityIcon from '../../public/securityIcon.png';
import Image from 'next/image';
import { BsDash } from 'react-icons/bs';

export default function SolutionCard({
  title,
  icon,
  iconBgcolor,
  shortDetails,
  listTitle,
  lists,
}) {
  return (
    <>
      <div className="shadow rounded-xl overflow-auto md:overflow-hidden cursor-pointer relative solution-card bg-oklightgray mb-2 w-full text-left md:mx-0 mx-4 h-[344px] md:h-auto">
        <div className="front p-6">
          <div
            className={`p-2 my-3 inline-block rounded w-16 h-16 ${iconBgcolor}`}
          >
            <Image src={icon} alt={title} layout="responsive" />
          </div>
          <h6 className="font-bold text-lg my-3">{title}</h6>
          <p className="text-sm leading-relaxed">{shortDetails}</p>
        </div>
        <div className="absolute inset-0 transition-all bg-okred text-okwhite p-8 w-full h-full overflow-auto back">
          <h6 className="text-lg font-bold mb-2">{listTitle}</h6>
          <ul>
            {lists?.map((list, idx) => (
              <li key={idx} className="text-sm mb-1 relative flex">
                <span className="w-2 h-px bg-okwhite mt-2.5 block absolute left-0 top-0"></span>
                <span className="pl-4">{list}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}
