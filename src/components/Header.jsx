import { useState } from "react";
import { useLocation } from "react-router-dom";
import { disablePageScroll, enablePageScroll } from "scroll-lock";

import { navigation } from "../constants";

import Button from "../ui/Button";

import { brainwave } from "../assets";
import MenuSvg from "../assets/svg/MenuSvg";
import { HamburgerMenu } from "../design/Header";

function Header() {
  // Setting the state for the mobile menu
  const [openNavigation, setOpenNavigation] = useState(false);

  // Getting the current pathname from the hook
  const pathname = useLocation();

  // Click handler for the hamburger
  const toggleNav = () => {
    openNavigation ? enablePageScroll() : disablePageScroll(); // Reversed state value of how React rerenders page
    setOpenNavigation((open) => !open); // Toggle menu
  };

  // Click handler that will close the menu
  const clickHandler = () => {
    enablePageScroll(); // Enable scrolling
    setOpenNavigation(false); // Close menu
  };

  // Returned JSX
  return (
    <header
      className={`fixed top-0 l-0 w-full z-50 border-b border-n-6 lg:bg-n-8/90 lg:backdrop-blur-sm ${openNavigation ? "bg-n-8" : "bg-n-8/90 backdrop-blur-sm"}`}
    >
      <div className="flex items-center px-5 lg:px-7.5 xl:px-10 max-lg:py-4">
        <a className="block w-[12rem] xl:mr-8" href="#hero">
          <img src={brainwave} width={190} height={40} alt="Brainwave" />
        </a>
        <nav
          className={`fixed inset-0 top-[5rem] bg-n-8 lg:static lg:flex lg:mx-auto lg:bg-transparent ${openNavigation ? "flex" : "hidden"}`}
        >
          <div className="relative z-2 flex flex-col items-center justify-center m-auto lg:flex-row">
            {navigation.map((item) => (
              <a
                key={item.id}
                href={item.url}
                onClick={clickHandler}
                className={`block relative font-code text-2xl uppercase text-n-1 transition-colors hover:text-color-1 ${item.onlyMobile && "lg:hidden"} px-6 py-6 md:py-8 lg:-mr-0.5 lg:text-xs lg:font-semibold ${item.url === pathname.hash ? "z-2 lg:text-n-1" : "lg:text-n-1/50"} lg:leading-5 lg:hover:text-n-1 xl:px-12`}
              >
                {item.title}
              </a>
            ))}
          </div>
          <HamburgerMenu />
        </nav>
        <a
          href="#signup"
          className="button hidden mr-8 text-n-1/50 transition-colors hover:text-n-1 lg:block"
        >
          New Account
        </a>
        <Button className="hidden lg:flex" href="#login">
          Sign In
        </Button>
        <Button className="ml-auto lg:hidden" px="px-3" onClick={toggleNav}>
          <MenuSvg openNavigation={openNavigation} />
        </Button>
      </div>
    </header>
  );
}

export default Header;
