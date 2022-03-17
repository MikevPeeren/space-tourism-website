import { useState, useEffect } from "react";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

import { Drawer, Burger } from "@mantine/core";

import LOGO from "../public/shared/logo.svg";

import useWindowDimensions from "@/utils/hooks/useWindowDimension";

const Header = () => {
  const [opened, setOpened] = useState(false);
  const [mounted, setMounted] = useState(false);

  const router = useRouter();
  const { width } = useWindowDimensions();

  useEffect(() => {
    setMounted(true);
  }, []);

  const isMobile = width && width < 768;

  return (
    <header>
      <div className="w-full z-10">
        {mounted && !isMobile && (
          <div className="flex flex-row justify-between lg:items-center z-10 lg:mt-5">
            <div className="ml-8 mt-4 lg:ml-10 lg:mt-0">
              <Image
                src={LOGO}
                className="m-4"
                alt=""
                width={40}
                height={40}
                priority
              />
            </div>
            <div className="relative">
              <div className="flex items-center">
                <div className="hidden lg:block absolute xl:-left-96 lg:-left-72 flex justify-center text-center items-center z-10 h-px lg:w-2/4 xl:w-4/6 bg-white opacity-25"></div>
                <nav className="navBackground flex top-0">
                  <ul className="flex justify-between items-end lg:items-center flex-row w-full px-10">
                    <li
                      className={`uppercase px-4 mt-6 lg:mt-0 ${
                        router.pathname === "/"
                          ? "after:border-b-4 after:border-white lg:pt-8 after:pb-7 after:w-full after:content[''] after:block"
                          : "pb-9 lg:pb-0 hover:after:border-b-4 hover:after:border-gray hover:lg:pt-8 hover:after:pb-7 hover:after:w-full hover:after:content[''] hover:after:block"
                      }`}
                    >
                      <Link href="/" passHref>
                        <a className="flex justify-between flex-row">
                          <span className="hidden lg:block font-bold mr-3">
                            00
                          </span>
                          <span className="font-normal">Home</span>
                        </a>
                      </Link>
                    </li>
                    <li
                      className={`uppercase px-4 mt-6 lg:mt-0 ${
                        router.pathname === "/destination"
                          ? "after:border-b-4 after:border-white lg:pt-8 after:pb-7 after:w-full after:content[''] after:block"
                          : "pb-9 lg:pb-0 hover:after:border-b-4 hover:after:border-gray hover:lg:pt-8 hover:after:pb-7 hover:after:w-full hover:after:content[''] hover:after:block"
                      }`}
                    >
                      <Link href="/destination" passHref>
                        <a className="flex justify-between flex-row">
                          <span className="hidden lg:block font-bold mr-3">
                            01
                          </span>
                          <span className="font-normal">Destination</span>
                        </a>
                      </Link>
                    </li>
                    <li
                      className={`uppercase px-4 mt-6 lg:mt-0 ${
                        router.pathname === "/crew"
                          ? "after:border-b-4 after:border-white lg:pt-8 after:pb-7 after:w-full after:content[''] after:block"
                          : "pb-9 lg:pb-0 hover:after:border-b-4 hover:after:border-gray hover:lg:pt-8 hover:after:pb-7 hover:after:w-full hover:after:content[''] hover:after:block"
                      }`}
                    >
                      <Link href="/crew" passHref>
                        <a className="flex justify-between flex-row">
                          <span className="hidden lg:block font-bold mr-3">
                            02
                          </span>
                          <span className="font-normal"> Crew</span>
                        </a>
                      </Link>
                    </li>
                    <li
                      className={`uppercase px-4 mt-6 lg:mt-0 ${
                        router.pathname === "/technology"
                          ? "after:border-b-4 after:border-white lg:pt-8 after:pb-7 after:w-full after:content[''] after:block"
                          : "pb-9 lg:pb-0 hover:after:border-b-4 hover:after:border-gray hover:lg:pt-8 hover:after:pb-7 hover:after:w-full hover:after:content[''] hover:after:block"
                      }`}
                    >
                      <Link href="/technology" passHref>
                        <a className="flex justify-between flex-row">
                          <span className="hidden lg:block font-bold mr-3">
                            03
                          </span>
                          <span className="font-normal"> Technology</span>
                        </a>
                      </Link>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        )}
        {mounted && isMobile && (
          <div className="flex flex-row justify-between p-4 z-10">
            <Image
              src={LOGO}
              className="m-4"
              alt=""
              width={40}
              height={40}
              priority
            />
            <Burger
              opened={opened}
              aria-label="Open navigation"
              color="white"
              onClick={() => setOpened(!opened)}
            />
          </div>
        )}
      </div>

      {mounted && isMobile && (
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
