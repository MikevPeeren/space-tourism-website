import { useState } from "react";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

import { Drawer, Burger } from "@mantine/core";

import LOGO from "../public/shared/logo.svg";

const Header = () => {
  const [opened, setOpened] = useState(false);

  const router = useRouter();

  // Initializing menu classes
  // const navBarClassNames = classNames(
  //   `${styles.hamburgerMenu} fixed top-0 z-10 w-3/5 min-h-screen right-0 text-left ease-in-out duration-1000 transform`,

  return (
    <header>
      <div className="w-full">
        <div className="flex flex-row items-center justify-between p-4">
          <Image src={LOGO} alt="" width={40} height={40} />
          <Burger
            opened={opened}
            color="white"
            onClick={() => setOpened((o) => !o)}
          />
        </div>
      </div>

      <Drawer
        opened={opened}
        onClose={() => setOpened(false)}
        position="right"
        padding="xs"
        size="xs"
        hideCloseButton
        noFocusTrap
        noOverlay
      >
        <nav>
          <div className="flex flex-row items-end justify-end pt-2 pr-3">
            <Burger
              opened={opened}
              color="white"
              onClick={() => setOpened((o) => !o)}
            />
          </div>
          <ul className="mt-20 ml-2 w-full">
            <li className="my-6 uppercase">
              <Link href="/" passHref>
                <a
                  className={`font-bold ${
                    router.pathname === "/"
                      ? "border-l-4 border-white pl-2"
                      : ""
                  }`}
                >
                  00 <span className="pl-2 font-normal">Home</span>
                </a>
              </Link>
            </li>
            <li className="my-6 uppercase">
              <Link href="/destination" passHref>
                <a
                  className={`font-bold ${
                    router.pathname === "/destination"
                      ? "border-l-4 border-white pl-2"
                      : ""
                  }`}
                >
                  01 <span className="pl-2 font-normal"> Destination</span>
                </a>
              </Link>
            </li>
            <li className="my-6 uppercase">
              <Link href="/crew" passHref>
                <a
                  className={`font-bold ${
                    router.pathname === "/crew"
                      ? "border-l-4 border-white pl-2"
                      : ""
                  }`}
                >
                  02 <span className="pl-2 font-normal"> Crew</span>
                </a>
              </Link>
            </li>
            <li className="my-6 uppercase">
              <Link href="/technology" passHref>
                <a
                  className={`font-bold ${
                    router.pathname === "/technology"
                      ? "border-l-4 border-white pl-2"
                      : ""
                  }`}
                >
                  03 <span className="pl-2 font-normal"> Technology</span>
                </a>
              </Link>
            </li>
          </ul>
        </nav>
      </Drawer>
    </header>
  );
};

export default Header;
