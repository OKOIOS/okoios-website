import jonathanAktepe from '../public/jonathan-aktepe.png';
import linkedinLogo from '../public/linkedin.png';
import lucasHess from '../public/lucas-hess.png';
import clsx from 'clsx';
import Image from 'next/image';
import { useInView } from 'react-intersection-observer';

export default function BusinessManagersSection() {
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });
  return (
    <section
      ref={ref}
      className={clsx('opacity-0', inView && 'animate-fadeIn')}
    >
      <div className="w-1366 m-auto relative z-10">
        <h1 className="text-okwhite font-semibold text-4xl mb-40">
          Our Business Managers
        </h1>
        <div className="flex justify-center">
          <div className="bg-oklightgray shadow-lg rounded-xl p-8 text-left w-1/3 relative mr-5 flex flex-col space-between h-96">
            <div className="absolute -top-28">
              <Image
                src={lucasHess}
                alt="Lucas HESS"
                height={180}
                width={180}
              />
            </div>
            <div className="flex-1"></div>
            <div>
              <h2 className="text-okwhite font-semibold mb-3">Lucas HESS</h2>
              <p>
                “I think the beauty of a seamless link between technology and
                people can be appreciated as the foundation leading to success
                in today's business environment. Our aim at Okoios is to push
                the boundaries between ideas and cutting edge solutions for our
                clients.”
              </p>
            </div>
            <div className="flex-1 flex items-end">
              <a
                href="https://ch.linkedin.com/in/lucas-hess-6037a8150"
                className="rounded-full w-8 h-8 bg-okred flex items-center justify-center  hover:bg-okgray focus:bg-okgray active:bg-okgray"
                target="_blank"
              >
                <Image
                  src={linkedinLogo}
                  alt="Button to follow Lucas HESS on LinkedIn"
                  height={12}
                  width={12}
                />
              </a>
            </div>
          </div>
          <div className="bg-oklightgray shadow-lg rounded-xl p-8 text-left w-1/3 relative flex space-between flex-col  h-96">
            <div className="absolute -top-28">
              <Image
                src={jonathanAktepe}
                alt="Jonathan AKTEPE"
                height={180}
                width={180}
              />
            </div>
            <div className="flex-1"></div>
            <div>
              <h2 className="text-okwhite font-semibold mb-3">
                Jonathan AKTEPE
              </h2>
              <p>
                “Each and every project is a unique opportunity to accelerate
                your company in the digital future. I think the most important
                aspect when implementing new digital solutions is not the
                technology itself but rather the people behind it. We push
                ourselves to find the best possible path of leveraging
                technology for your organisation.”
              </p>
            </div>
            <div className="flex-1 flex items-end">
              <a
                href="https://ch.linkedin.com/in/jonathan-aktepe-928840116"
                className="rounded-full w-8 h-8 bg-okred flex items-center justify-center hover:bg-okgray focus:bg-okgray active:bg-okgray"
                target="_blank"
              >
                <Image
                  src={linkedinLogo}
                  alt="Button to follow Jonathan AKTEPE on LinkedIn"
                  height={12}
                  width={12}
                />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="h-waves bg-waves bg-waves-size bg-okred w-full bg-center relative -top-64 z-0 -mb-64"></div>
    </section>
  );
}
