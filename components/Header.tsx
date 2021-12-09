import Image from "next/image";

import LOGO from "../public/shared/logo.svg";
import HAMBURGER from "../public/shared/icon-hamburger.svg";

const Header = () => {
  return (
    <header className="flex flex-row items-center justify-between p-4">
      <Image src={LOGO} alt="" width={40} height={40} />
      <Image src={HAMBURGER} alt="" width={24} height={21} />
    </header>
  );
};

export default Header;
