import { useState } from "react";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

import { Drawer, Burger } from "@mantine/core";

import LOGO from "../public/shared/logo.svg";

import useWindowDimensions from "@/utils/hooks/useWindowDimension";

const Header = () => {
  const [opened, setOpened] = useState(false);

  const router = useRouter();
  const { width } = useWindowDimensions();

  const isMobile = width && width < 768;

  return (
    <header>
      <div className="w-full z-10">
        {!isMobile && (
          <div className="flex flex-row justify-between z-10">
            <div className="ml-8 mt-4">
              <Image src={LOGO} className="m-4" alt="" width={40} height={40} />
            </div>
            <nav className="navBackground flex top-0">
              <ul className="flex justify-between items-end flex-row w-full px-10">
                <li
                  className={`uppercase px-4 mt-6 ${
                    router.pathname === "/"
                      ? "after:border-b-4 after:border-white after:pt-8 after:w-full after:content[''] after:block"
                      : "pb-9"
                  }`}
                >
                  <Link href="/" passHref>
                    <a>
                      <span className="font-normal mb-10">Home</span>
                    </a>
                  </Link>
                </li>
                <li
                  className={`uppercase px-4 mt-6 ${
                    router.pathname === "/destination"
                      ? "after:border-b-4 after:border-white after:pt-8 after:w-full after:content[''] after:block"
                      : "pb-9"
                  }`}
                >
                  <Link href="/destination" passHref>
                    <a>
                      <span className="font-normal">Destination</span>
                    </a>
                  </Link>
                </li>
                <li
                  className={`uppercase px-4 mt-6 ${
                    router.pathname === "/crew"
                      ? "after:border-b-4 after:border-white after:pt-8 after:w-full after:content[''] after:block"
                      : "pb-9"
                  }`}
                >
                  <Link href="/crew" passHref>
                    <a>
                      <span className="font-normal"> Crew</span>
                    </a>
                  </Link>
                </li>
                <li
                  className={`uppercase px-4 mt-6 ${
                    router.pathname === "/technology"
                      ? "after:border-b-4 after:border-white after:pt-8 after:w-full after:content[''] after:block"
                      : "pb-9"
                  }`}
                >
                  <Link href="/technology" passHref>
                    <a>
                      <span className="font-normal"> Technology</span>
                    </a>
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        )}
        {isMobile && (
          <div className="flex flex-row justify-between p-4 z-10">
            <Image src={LOGO} className="m-4" alt="" width={40} height={40} />
            <Burger
              opened={opened}
              color="white"
              onClick={() => setOpened(!opened)}
            />
          </div>
        )}
      </div>

      {isMobile && (
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
      )}
    </header>
  );
};

export default Header;
