import jonathanAktepe from '../public/jonathan-aktepe.png';
import linkedinLogo from '../public/linkedin.png';
import lucasHess from '../public/lucas-hess.png';
import Container from './../common/Container';
import clsx from 'clsx';
import Image from 'next/image';
import Link from 'next/link';
import { FaFacebookF, FaLinkedinIn } from 'react-icons/fa';
import { useInView } from 'react-intersection-observer';

export default function ProfileCard({
  image,
  name,
  details,
  linkedin,
  facebook,
}) {
  return (
    <>
      <div className="bg-oklightgray shadow-lg rounded-xl p-6 relative md:text-left text-center">
        <div className="absolute -top-20 left-0 right-0 md:right-auto">
          <Image src={image} alt={name} height={160} width={160} />
        </div>
        <div className="pt-20">
          <h5 className="text-okwhite text-2xl font-bold mb-3">{name}</h5>
          <p className="mb-6 md:mb-12 xl:mb-20">“{details}”</p>
          <ul className="flex space-x-6 items-center md:justify-start justify-center">
            <li>
              <Link href={linkedin}>
                <a className="inline-flex justify-center items-center text-okwhite w-10 h-10 bg-okred hover:bg-okblack transition-all rounded-full">
                  <FaLinkedinIn />
                </a>
              </Link>
            </li>
            <li>
              <Link href={facebook}>
                <a className="inline-flex justify-center items-center text-okwhite w-10 h-10 bg-okred hover:bg-okblack transition-all rounded-full">
                  <FaFacebookF />
                </a>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
