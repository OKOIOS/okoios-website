import redLogo from '../public/logo.png';
import { COMPANY_LONG_NAME } from '../utils/constants';
import Container from './common/Container';
import Image from 'next/image';
import Link from 'next/link';
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
} from 'react-icons/fa';

export default function Footer() {
  return (
    <>
      <footer className="text-okwhite">
        <Container>
          <div className="flex sm:flex-row flex-col justify-between mb-16 pt-20 px-4">
            <Link href="/#top">
              <a className="block sm:mb-0 mb-12 sm:mx-0 mx-auto sm:text-left text-center w-28 md:w-52">
                <Image
                  src={redLogo}
                  alt={`${COMPANY_LONG_NAME} logo`}
                  layout="responsive"
                />
              </a>
            </Link>
            <div className="">
              <h6 className="font-bold mb-3 text-sm md:text-right text-center">
                Follow Us
              </h6>
              <ul className="flex sm:justify-start justify-center space-x-4">
                <li>
                  <Link href="/index2">
                    <a
                      target="_blank"
                      className="flex items-center justify-center w-7 h-7 text-sm rounded-full bg-oklightergray p-1 transition-all hover:scale-125 hover:bg-oktransparentgreen"
                    >
                      <FaLinkedinIn />
                    </a>
                  </Link>
                </li>
                {/* <li>
                <Link href="/index2">
                  <a
                    target="_blank"
                    className="flex items-center justify-center w-7 h-7 text-sm rounded-full bg-oklightergray p-1 transition-all hover:scale-125 hover:bg-oktransparentgreen"
                  >
                    <FaTwitter />
                  </a>
                </Link>
              </li>{' '}
              <li>
                <Link href="/index2">
                  <a
                    target="_blank"
                    className="flex items-center justify-center w-7 h-7 text-sm rounded-full bg-oklightergray p-1 transition-all hover:scale-125 hover:bg-oktransparentgreen"
                  >
                    <FaInstagram />
                  </a>
                </Link>
              </li> */}
              </ul>
            </div>
          </div>
        </Container>
      </footer>
      <div className="bg-oklightgray p-4">
        <Container>
          <div className="relative text-center">
            <Link href="/privacy">
              <a className="relative sm:absolute left-0 top-0 sm:mb-0 mb-2 inline-block">
                Privacy Policy
              </a>
            </Link>
            <p className="text-sm text-center self-center mx-auto">
              All Rights Reserved 2021 <span className="uppercase">Okoios</span>{' '}
              Consulting
            </p>
          </div>
        </Container>
      </div>
    </>
  );
}
