import Waves from '../public/bg-waves.png';
import buttonBgRed from '../public/button-bg-okred.png';
import logo from '../public/logo.png';
import { COMPANY_LONG_NAME } from '../utils/constants';
import Container from './common/Container';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState } from 'react';

export default function Header() {
  const [toggle, setToggle] = useState(true);

  const toggleMenu = () => {
    setToggle(!toggle);
  };

  let history = useRouter();

  return (
    <div
      className={`sticky left-0 top-0 z-30 ${
        history.pathname === '/' ? 'bg-okgray' : 'bg-oktransparent'
      }`}
    >
      <header className="p-4">
        <Container>
          <div className="flex justify-between items-center">
            {/* Logo  */}
            <div className="h-10 lg:h-14 w-40 lg:w-56">
              <Link href="/">
                <a className="block w-full">
                  <Image
                    src={logo}
                    alt={`${COMPANY_LONG_NAME} logo`}
                    layout="responsive"
                    className="w-full"
                  />
                </a>
              </Link>
            </div>
            {/* Logo  */}

            {/* Navigation  */}
            <nav>
              <button
                onClick={toggleMenu}
                className="md:hidden relative overflow-hidden block bg-okred border-none rounded-none p-0.5"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-okgray"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
                <span className="block absolute transform rotate-45 w-3 h-3 bg-okgray -bottom-1.5 -right-1.5"></span>
              </button>

              <ul
                className={`md:items-center z-20 items-start md:pl-0 pl-10 flex md:flex-row flex-col md:justify-start justify-center text-okwhite space-y-8 md:space-y-0 md:space-x-6 lg:space-x-10 xl:space-x-14 md:relative absolute w-full md:h-auto md:bg-oktransparent bg-okred top-0 h-screen transition-all ${
                  toggle ? 'left-[calc(-50rem+0vw)] md:left-0' : 'left-0'
                }`}
              >
                <button
                  onClick={toggleMenu}
                  className="md:hidden block text-okgray absolute top-6 right-6"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>

                <li>
                  <Link href="/about">
                    <a className="font-semibold md:font-light md:text-base text-3xl">
                      About us
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href="/#services">
                    <a
                      className="font-semibold md:font-light md:text-base text-3xl"
                      onClick={toggleMenu}
                    >
                      Services
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href="/#solutions">
                    <a
                      className="font-semibold md:font-light md:text-base text-3xl"
                      onClick={toggleMenu}
                    >
                      Solutions
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href="/careers">
                    <a className="font-semibold md:font-light md:text-base text-3xl">
                      Careers
                    </a>
                  </Link>
                </li>
                <li className="relative overflow-hidden">
                  <Link href="/#contact">
                    <a
                      onClick={toggleMenu}
                      className="block font-semibold md:font-light md:text-base text-3xl md:px-8 xl:px-12 md:py-3 xl:py-5 bg-okred"
                    >
                      <span>Contact Us</span>
                      <span className="md:block hidden absolute transform rotate-45 w-6 h-6  bg-okgray -bottom-3 -right-3"></span>
                    </a>
                  </Link>
                </li>
                {toggle ? null : (
                  <div className="md:hidden block absolute h-[250px] w-full bottom-0 left-0 bg-waves bg-cover bg-center"></div>
                )}
              </ul>
            </nav>
          </div>
        </Container>
      </header>
    </div>
  );
}
