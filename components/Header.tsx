import buttonBgRed from '../public/button-bg-okred.png';
import logo from '../public/logo.png';
import { COMPANY_LONG_NAME } from '../utils/constants';
import Container from './common/Container';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

export default function Header() {
  const [toggle, setToggle] = useState(true);

  const toggleMenu = () => {
    setToggle(!toggle);
  };
  return (
    <div className="sticky left-0 top-0 z-30 bg-okgray">
      <header className="p-4 shadow">
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
            <nav className="">
              <button onClick={toggleMenu} className="md:hidden block">
                Open
              </button>

              <ul
                className={`md:items-center items-start md:pl-0 pl-10 flex md:flex-row flex-col md:justify-start justify-center text-okwhite space-y-5 md:space-y-0 md:space-x-6 lg:space-x-10 xl:space-x-14 md:relative absolute w-full md:h-auto md:bg-oktransparent bg-okred top-0 h-screen transition-all ${
                  toggle ? 'left-[calc(-50rem+0vw)] md:left-0' : 'left-0'
                }`}
              >
                <button
                  onClick={toggleMenu}
                  className="md:hidden block absolute top-6 right-6"
                >
                  Close
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
                    <a className="font-semibold md:font-light md:text-base text-3xl">
                      Services
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href="/#solutions">
                    <a className="font-semibold md:font-light md:text-base text-3xl">
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
                  {/* <Image src={buttonBgRed} alt="" height={62} width={185} /> */}
                  <Link href="/#contact">
                    <a className="block font-semibold md:font-light md:text-base text-3xl md:px-8 xl:px-12 md:py-3 xl:py-5 bg-okred">
                      <span>Contact Us</span>
                      <span className="md:block hidden absolute transform rotate-45 w-6 h-6  bg-okgray -bottom-3 -right-3"></span>
                    </a>
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </Container>
      </header>
    </div>
  );
}
