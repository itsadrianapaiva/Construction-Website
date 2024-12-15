import { useLocation } from "react-router-dom";
import { disablePageScroll, enablePageScroll } from "scroll-lock";
import { navigation } from "../constants/index.js";
import Button from "./Button.tsx";
import MenuSvg from "../assets/svg/MenuSvg.tsx";
import { HamburgerMenu } from "./design/Header.tsx";
import { useState } from "react";
import teste2 from "../assets/teste2.png";

const Header: React.FC = () => {
  const pathname = useLocation();
  const [openNavigation, setopenNavigation] = useState(false);

  const toggleNavigation = () => {
    if (openNavigation) {
      setopenNavigation(false);
      enablePageScroll();
    } else {
      setopenNavigation(true);
      disablePageScroll();
    }
  };

  const handleClick = () => {
    if (!openNavigation) return;

    enablePageScroll();
    setopenNavigation(false);
  };

  return (
    <div
      className={`fixed top-0 left-0 w-full z-50 border-b border-n-6 lg:bg-n-8/90 lg:backdrop-blur-sm ${
        openNavigation ? "bg-n-8" : "bg-n-8/90 background-blur-sm"
      }`}
    >
      <div className="flex items-center px-5 lg:px-7.5 xl:px-10 max-lg:py-4">
        <a className="block md:mx-auto w-[25rem] lg:w-[20rem] xl:mr-100" href="#hero">
          <img
            className="object-scale-down scale-150 lg:object-cover w-[18rem] h-[6rem] lg:h-[8rem] py-3 md:px-5 md:-ml-20 animate-fade-in"
            src={teste2}
            alt="logo"
          />
        </a>

        <nav
          className={`${
            openNavigation ? "flex" : "hidden"
          } fixed top-[5rem] left-0 right-0 bg-n-8 lg:static lg:flex lg:mx-auto lg:bg-transparent`}
        >
          <div className="relative z-2 flex flex-col items-center justify-center m-auto lg:flex-row animate-fade-in">
            {navigation.map((item) => (
              <a
                key={item.id}
                href={item.url}
                onClick={handleClick}
                className={`block relative font-code text-2xl uppercase text-n-1 transition-colors hover:text-color-1 ${
                  item.onlyMobile ? "lg:hidden" : ""
                } px-6 py-6 md:py-8 lg:-mr-0.25 lg:text-xs lg:font-semibold ${
                  item.url === pathname.hash 
                    ? "z-2 lg:text-n-1"
                    : "lg:text-n-1/50"
                } lg:leading-5 lg:hover:text-n-1 xl:px-12`}
              >
                {item.title}
              </a>
            ))}
          </div>

          <HamburgerMenu />
        </nav>

        <Button
          className="hidden lg:flex animate-fade-in"
          href="#contactUs"
          children="Get a Quote"
        />

        <Button
          className="ml-auto lg:hidden"
          px="px-3"
          onClick={toggleNavigation}
        >
          <MenuSvg openNavigation={openNavigation} />
        </Button>
      </div>
    </div>
  );
};

export default Header;
