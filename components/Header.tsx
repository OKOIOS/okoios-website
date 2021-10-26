import buttonBgRed from '../public/button-bg-okred.png';
import logo from '../public/logo.png';
import { COMPANY_LONG_NAME } from '../utils/constants';
import Image from 'next/image';
import Link from 'next/link';

export default function Header() {
  return (
    <div className="sticky top-0 z-30 bg-okgray py-4 mb-20 shadow">
      <header className="flex justify-between items-center m-auto w-1366">
        <Link href="/#">
          <div className="cursor-pointer">
            <Image
              src={logo}
              alt={`${COMPANY_LONG_NAME} logo`}
              height={55}
              width={230}
            />
          </div>
        </Link>
        <nav>
          <ul className="flex items-center text-okwhite">
            <li className="mx-7">
              <Link href="/about">About us</Link>
            </li>
            <li className="mx-7">
              <Link href="/#services">Services</Link>
            </li>
            <li className="mx-7">
              <Link href="/#solutions">Solutions</Link>
            </li>
            <li className="mx-7">
              <Link href="/careers">Careers</Link>
            </li>
            <li className="relative flex items-center justify-center ml-4">
              <Image src={buttonBgRed} alt="" height={62} width={185} />
              <div className="absolute">
                <Link href="/#contact">Contact Us</Link>
              </div>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
}
