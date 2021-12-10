import { useState } from "react";

import Image from "next/image";

import LOGO from "../public/shared/logo.svg";
import HAMBURGER from "../public/shared/icon-hamburger.svg";

import styles from "./Header.module.scss";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="relative">
      <div className="fixed w-full z-0">
        <div className="flex flex-row items-center justify-between p-4">
          <Image src={LOGO} alt="" width={40} height={40} />
          <Image
            src={HAMBURGER}
            alt=""
            width={24}
            height={21}
            onClick={() => setIsMenuOpen(true)}
          />
        </div>
      </div>
      {isMenuOpen && (
        <aside
          className={`${styles.hamburgerMenu} fixed w-3/5 h-full right-0 z-2 bg-pink-300`}
        >
          <ul className="mt-40 ml-8 w-full">
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
      )}
    </header>
  );
};

export default Header;
