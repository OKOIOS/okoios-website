import darkerCircle from '../public/darker-circle.png';
import dashedCircle from '../public/dashed-circle.png';
import leftLines from '../public/left-lines.png';
import redDots from '../public/red-dots.png';
import rightLines from '../public/right-lines.png';
import Container from './common/Container';
import clsx from 'clsx';
import Image from 'next/image';
import Link from 'next/link';
import link from 'next/link';
import { useInView } from 'react-intersection-observer';

export default function Solutions() {
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  return (
    <section
      ref={ref}
      className={clsx(
        'opacity-0 px-4 py-10 md:py-20  lg:py-40',
        inView && 'animate-fadeIn'
      )}
    >
      <a id="services" className="invisible h-96"></a>

      <Container>
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="font-semibold text-2xl md:text-3xl lg:text-5xl text-okwhite mb-6">
            Consulting Service Levels
          </h2>
          <p className="pb-20">
            We offer 4 levels of consulting services adapted to clients’
            specific needs and requests.
          </p>
        </div>
        <div className="relative grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 place-content-center">
          <div className="first">
            <div className="bg-oklightgray rounded-xl shadow-2xl max-w-sm md:text-left text-center md:pl-8 pl-4 pr-4 py-6 relative">
              <span className="absolute w-3 h-3 rounded-full md:mx-0 mx-auto left-0 md:left-auto right-0 md:right-3 -top-1.5 md:top-7 bg-okred"></span>
              <h4 className="text-okwhite font-bold mb-1">UT Expert Support</h4>
              <p className="o">Expert Support on a time & material basis</p>
            </div>
            <div className="bg-oklightgray rounded-xl shadow-2xl max-w-sm md:text-left text-center md:pl-8 pl-4 pr-4 py-6 mt-4 md:mt-40 xl:mt-60 relative">
              <span className="absolute w-3 h-3 rounded-full md:mx-0 mx-auto left-0 md:left-auto right-0 md:right-3 -top-1.5 md:top-7 bg-okred"></span>
              <h4 className="text-okwhite font-bold mb-1">Managed Service</h4>
              <p className="o">
                Multi-skilled team support on various projects
              </p>
            </div>
          </div>
          {/* Image Area  */}
          <div className="relative md:block hidden lg:col-span-2 ">
            <div className="hidden">
              <div className="absolute w-full h-full">
                <Image src={dashedCircle} alt="Darker" layout="responsive" />
              </div>
              <div className="absolute w-3/4 h-3/4 m-auto inset-0">
                <Image src={darkerCircle} alt="Darker" layout="responsive" />
              </div>

              <div className="absolute w-1/2 h-1/2 m-auto inset-0">
                <Image
                  src={redDots}
                  alt="Darker"
                  layout="responsive"
                  className=""
                />
              </div>
            </div>
          </div>
          {/* Image Area  */}
          <div className="o">
            <div className="bg-oklightgray rounded-xl shadow-2xl max-w-sm md:text-left text-center md:pl-8 pl-4 pr-4 py-6 relative">
              <span className="absolute w-3 h-3 rounded-full left-0 md:left-3 md:right-auto right-0 md:mx-0 mx-auto -top-1.5 md:top-7 bg-okred"></span>
              <h4 className="text-okwhite font-bold mb-1">
                IT Expert-Team Support
              </h4>
              <p className="o">
                Multi-skilled team support on various projects
              </p>
            </div>
            <div className="bg-oklightgray rounded-xl shadow-2xl max-w-sm md:text-left text-center md:pl-8 pl-4 pr-4 py-6 mt-4 md:mt-40 xl:mt-60 relative">
              <span className="absolute w-3 h-3 rounded-full left-0 md:left-3 md:right-auto right-0 md:mx-0 mx-auto -top-1.5 md:top-7 bg-okred"></span>
              <h4 className="text-okwhite font-bold mb-1">
                Fixed-price Project
              </h4>
              <p className="o">
                A Projecy? <br />
                <Link href="/#">
                  <a className="inline-block mr-1 text-okred">Lets talk</a>
                </Link>
                about it
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
