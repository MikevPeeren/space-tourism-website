import { useState } from "react";

import Image from "next/image";
import Link from "next/link";

// External
import classNames from "classnames";

import LOGO from "../public/shared/logo.svg";
import HAMBURGER from "../public/shared/icon-hamburger.svg";
import CLOSE from "../public/shared/icon-close.svg";

import styles from "./Header.module.scss";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Initializing menu
  const navBarClassNames = classNames(
    `${styles.hamburgerMenu} fixed top-0 w-3/5 min-h-screen right-0 z-2 text-left ease-in-out duration-1000 transform`,
    {
      "translate-x-0": isMenuOpen,
      "translate-x-full": !isMenuOpen,
    }
  );

  return (
    <header>
      <div className="w-full z-0">
        <div className="flex flex-row items-center justify-between p-4">
          <Image src={LOGO} alt="" width={40} height={40} />
          <button onClick={() => setIsMenuOpen(true)}>
            <Image src={HAMBURGER} alt="" width={24} height={21} />
          </button>
        </div>
      </div>

      <nav className={navBarClassNames}>
        <div className="flex flex-row items-center justify-between p-4">
          <button
            className="flex flex-row ml-auto items-center justify-center w-10 h-10"
            onClick={() => {
              setIsMenuOpen(false);
            }}
          >
            <Image src={CLOSE} alt="" width={20} height={21} />
          </button>
        </div>
        <ul className="mt-20 ml-8 w-full">
          <li className="my-10 uppercase">
            <Link href="/" passHref>
              <a className="font-bold">
                00 <span className="pl-2">Home</span>
              </a>
            </Link>
          </li>
          <li className="my-10 uppercase">
            <Link href="/destination" passHref>
              <a className="font-bold">
                00 <span className="pl-2"> Destination</span>
              </a>
            </Link>
          </li>
          <li className="my-10 uppercase">
            <Link href="/crew" passHref>
              <a className="font-bold">
                00 <span className="pl-2"> Crew</span>
              </a>
            </Link>
          </li>
          <li className="my-10 uppercase">
            <Link href="/technology" passHref>
              <a className="font-bold">
                00 <span className="pl-2"> Technology</span>
              </a>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
