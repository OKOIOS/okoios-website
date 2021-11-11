import jonathanAktepe from '../public/jonathan-aktepe.png';
import linkedinLogo from '../public/linkedin.png';
import lucasHess from '../public/lucas-hess.png';
import Container from './../common/Container';
import clsx from 'clsx';
import Image from 'next/image';
import Link from 'next/link';
import { FaFacebookF, FaLinkedinIn } from 'react-icons/fa';
import { useInView } from 'react-intersection-observer';

export default function ProfileCard({ image, name, details, linkedin }) {
  return (
    <>
      <div className="bg-oklightgray shadow-lg rounded-xl p-6 relative md:text-left text-center lg:max-w-[565px] xl:h-[500px] w-full">
        <div className="absolute -top-20 xl:-top-10 left-0 md:left-10 right-0 md:right-auto">
          <Image src={image} alt={name} height={160} width={160} />
        </div>
        <div className="pt-28">
          <h5 className="text-okwhite text-2xl font-bold mb-4">{name}</h5>
          <p className="mb-16 leading-relaxed text-xl">{details}</p>
          <ul className="flex space-x-6 items-center md:justify-start justify-center absolute md:left-6 left-0 md:right-auto right-0 md:mx-0 mx-auto bottom-10 md:bottom-6">
            <li>
              <Link href={linkedin}>
                <a className="inline-flex justify-center items-center text-okwhite w-10 h-10 bg-okred hover:bg-okblack transition-all rounded-full">
                  <FaLinkedinIn />
                </a>
              </Link>
            </li>
            {/* <li>
              <Link href={facebook}>
                <a className="inline-flex justify-center items-center text-okwhite w-10 h-10 bg-okred hover:bg-okblack transition-all rounded-full">
                  <FaFacebookF />
                </a>
              </Link>
            </li> */}
          </ul>
        </div>
      </div>
    </>
  );
}
