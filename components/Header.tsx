import { useState } from "react";

import Image from "next/image";

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

      <aside className={navBarClassNames}>
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
            <span className="pr-2 font-bold">00</span> Home
          </li>
          <li className="my-10 uppercase">
            <span className="pr-2.5 font-bold">01</span> Destination
          </li>
          <li className="my-10 uppercase">
            <span className="pr-2 font-bold">02</span> Crew
          </li>
          <li className="my-10 uppercase">
            <span className="pr-2 font-bold">03</span> Technology
          </li>
        </ul>
      </aside>
    </header>
  );
};

export default Header;
