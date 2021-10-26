import leftLines from '../public/left-lines.png';
import rightLines from '../public/right-lines.png';
import dashedCircle from '../public/dashed-circle.png';
import darkerCircle from '../public/darker-circle.png';
import redDots from '../public/red-dots.png';
import Image from 'next/image';
import { useInView } from 'react-intersection-observer';
import clsx from 'clsx';

export default function Solutions() {
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  return (
    <section
      ref={ref}
      className={clsx(
        'w-1366 m-auto opacity-0 text-center mb-20',
        inView && 'animate-fadeIn'
      )}
    >
      <a id="services" className="invisible h-96"></a>
      <h1 className="font-semibold text-4xl text-okwhite mb-8">
        Consulting Service Levels
      </h1>
      <div className="flex justify-center">
        <p className="w-1/2 pb-20">
          We offer 4 levels of consulting services adapted to clients’ specific
          needs and requests.
        </p>
      </div>
      <div style={{ height: '611px' }} className="relative">
        <div
          className="bg-oklightgray rounded-xl shadow-lg text-left pl-32 pr-14 flex items-center absolute top-0 left-0"
          style={{ width: '403px', height: '153px' }}
        >
          <div>
            <h2 className="text-okwhite font-bold">UT Expert Support</h2>
            Expert Support on a time & material basis
          </div>
        </div>
        <div
          className="bg-oklightgray rounded-xl shadow-lg text-left pl-32 pr-14 flex items-center absolute bottom-0 left-0"
          style={{ width: '403px', height: '153px' }}
        >
          <div>
            <h2 className="text-okwhite font-bold">Managed Service</h2>
            Multi-skilled team support on various projects
          </div>
        </div>
        <div
          className="bg-oklightgray rounded-xl shadow-lg text-left pr-32 pl-14 flex items-center absolute top-0 right-0"
          style={{ width: '403px', height: '153px' }}
        >
          <div>
            <h2 className="text-okwhite font-bold">Managed Service</h2>
            Multi-skilled team support on various projects
          </div>
        </div>
        <div
          className="bg-oklightgray rounded-xl shadow-lg text-left pr-32 pl-14 flex items-center absolute bottom-0 right-0"
          style={{ width: '403px', height: '153px' }}
        >
          <div>
            <h2 className="text-okwhite font-bold">Fixed-price Project</h2>
            A project?
            <br />
            <a href="/#contact" className="text-okred">
              Let's talk
            </a>{' '}
            about it
          </div>
        </div>
        <div
          className="absolute flex justify-center w-full"
          style={{ top: '42px' }}
        >
          <div>
            <Image src={leftLines} width={306} height={466} />
          </div>
          <div>
            <Image src={rightLines} width={306} height={466} />
          </div>
        </div>
        <div className="absolute left-1/2 transform -translate-x-1/2 top-2 flex justify-center items-center">
          <Image src={dashedCircle} width={532} height={532} />
          <div className="absolute">
            <Image src={darkerCircle} width={460} height={460} />
          </div>
          <div className="absolute rounded-full bg-okgray flex items-center justify-center">
            <div className=" animate-pulse flex items-center justify-center">
              <Image src={redDots} width={354} height={354} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
