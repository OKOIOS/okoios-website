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
      id="services"
      ref={ref}
      className={clsx(
        'opacity-0 relative px-4 pt-24 lg:pt-40 py-6 pb-0',
        inView && 'animate-fadeIn'
      )}
    >
      <div
        className="absolute z-[-1] -left-1/4 -top-40 rounded-full w-full max-w-4xl h-[900px] xl:block hidden"
        style={{
          background:
            'radial-gradient(50% 50% at 50% 50%, #000000 0%, rgba(0, 0, 0, 0) 100%)',
        }}
      ></div>
      <Container>
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="font-semibold text-2xl md:text-3xl lg:text-5xl text-okwhite mb-6">
            Depth of Services
          </h2>
          <p className="pb-10 md:pb-20">
            We offer 4 different approaches of consulting services adapted to
            clients’ specific needs. From individual IT expert support to
            tailor-made projects, OKOIOS embraces an agile and highly
            customizable approach to your evolving business goals.
          </p>
        </div>
        <div className="relative lg:block grid gap-6 sm:grid-cols-2">
          <div className="bg-oklightgray rounded-xl z-10 shadow-2xl lg:max-w-xs xl:max-w-sm w-full md:text-left text-center md:pl-8 pl-2 pr-2 py-6 relative lg:absolute left-0 top-0">
            <span className="absolute w-3 h-3 rounded-full mx-auto left-0 right-0 -top-1.5 bg-okred lg:hidden block"></span>
            <h4 className="text-okwhite font-bold mb-1">IT Expert Support</h4>
            <p className="o">Expert Support on a time & material basis</p>
          </div>
          <div className="bg-oklightgray rounded-xl z-10 shadow-2xl lg:max-w-xs xl:max-w-sm w-full md:text-left text-center md:pl-8 pl-2 pr-2 py-6 relative lg:absolute left-0 xl:bottom-0 bottom-0 lg:-bottom-14">
            <span className="absolute w-3 h-3 rounded-full mx-auto left-0 right-0 -top-1.5 bg-okred lg:hidden block"></span>
            <h4 className="text-okwhite font-bold mb-1">Managed Service</h4>
            <p className="o">
              A service level agreement that is tailored to your requirements.
              {/* Transfer responsibility for any areas of IT management to OKOIOS
              and focus on your core business. */}
            </p>
          </div>

          <div className="bg-oklightgray rounded-xl z-10 shadow-2xl lg:max-w-xs xl:max-w-sm w-full md:text-left text-center md:pl-8 pl-2 pr-2 py-6 relative lg:absolute right-0 top-0">
            <span className="absolute w-3 h-3 rounded-full left-0 right-0 mx-auto -top-1.5 bg-okred lg:hidden block"></span>
            <h4 className="text-okwhite font-bold mb-1">
              IT Expert-Team Support
            </h4>
            <p className="o">Multi-skilled team support on various projects</p>
          </div>
          <div className="bg-oklightgray rounded-xl z-10 shadow-2xl lg:max-w-xs xl:max-w-sm w-full md:text-left text-center md:pl-8 pl-2 pr-2 py-6 relative lg:absolute right-0 xl:bottom-0 bottom-0 lg:-bottom-14">
            <span className="absolute w-3 h-3 rounded-full left-0 right-0 mx-auto -top-1.5 bg-okred lg:hidden block"></span>
            <h4 className="text-okwhite font-bold mb-1">Fixed-price Project</h4>
            <p className="o">
              <span className="sm:block inline-block"> A Project? </span>
              <Link href="/#contact">
                <a className="inline-block mr-1 text-okred font-semibold">
                  Let's talk
                </a>
              </Link>
              about it
            </p>
          </div>

          {/* Image Area  */}
          <div className="relative lg:block hidden xl:-top-6">
            <div className="2xl:w-[550px] lg:w-80 lg:h-80 xl:w-96 xl:h-96 2xl:h-[550px] m-auto relative animate-pulse">
              <div className="absolute z-10 w-1/2 2xl:-left-5 left-0 top-[10%] bottom-0 h-[80%]">
                <Image src={leftLines} layout="fill" />
              </div>
              <div className="absolute z-10 w-1/2 2xl:-right-5 right-0 top-[10%] bottom-0 h-[80%]">
                <Image src={rightLines} layout="fill" />
              </div>
              <div className="absolute z-10 w-full inset-0 h-full">
                <Image
                  src={dashedCircle}
                  layout="responsive"
                  objectFit="cover"
                />
              </div>
              <div className="absolute z-10 w-10/12 inset-0 m-auto h-[83.3%]">
                <Image
                  src={darkerCircle}
                  layout="responsive"
                  objectFit="cover"
                />
              </div>
              <div className="absolute z-20 w-2/3 inset-0 m-auto h-[66.6%]">
                <Image src={redDots} layout="responsive" objectFit="cover" />
              </div>
            </div>
          </div>
          {/* Image Area  */}
        </div>
      </Container>
    </section>
  );
}
