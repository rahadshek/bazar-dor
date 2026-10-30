import Link from "next/link";
import Image from "next/image";
import logo from "@/assets/logo-icon.png";
import Navlinks from "./Navlinks";
import BanglaDate from "./BanglaDate";
import Marquee from "../Markquue";

const Navbar = () => {
  return (
    <div className="sticky top-0 z-50 w-full">
      <header className="w-full bg-base-100 shadow-sm">
        {/* Main Navbar */}
        <div className="mx-auto w-full max-w-7xl px-3 sm:px-5 lg:px-6">
          <div className="navbar min-h-20 gap-2 px-0">
            {/* Logo and Mobile Menu */}
            <div className="navbar-start min-w-0 flex-1 gap-1 sm:gap-3">
              {/* Mobile Dropdown */}
              <div className="dropdown lg:hidden">
                <div
                  tabIndex={0}
                  role="button"
                  aria-label="Open navigation menu"
                  className="btn btn-ghost btn-square"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6h16M4 12h8m-8 6h16"
                    />
                  </svg>
                </div>

                <ul
                  tabIndex={0}
                  className="menu dropdown-content z-50 mt-3 w-56 max-w-[85vw] rounded-box border border-base-300 bg-base-100 p-2 shadow-lg"
                >
                  <Navlinks />
                </ul>
              </div>

              {/* Logo */}
              <Link
                href="/"
                aria-label="বাজার দর হোম"
                className="flex shrink-0 items-center"
              >
                <Image
                  src={logo}
                  alt="বাজার দর লোগো"
                  width={48}
                  height={48}
                  priority
                  className="h-10 w-10 rounded-xl bg-[#05893e] p-1.5 sm:h-12 sm:w-12 sm:p-2"
                />
              </Link>

              {/* Brand and Date */}
              <div className="min-w-0">
                <Link
                  href="/"
                  className="block truncate text-base font-bold text-base-content sm:text-xl"
                >
                  বাজার দর
                </Link>

                <span className="mt-1 block text-[10px] leading-4 text-base-content/70 sm:text-xs">
                  <BanglaDate />
                </span>
              </div>
            </div>

            {/* Auth Buttons */}
            <div className="navbar-end w-auto shrink-0 gap-1.5 sm:gap-3">
              <Link
                href="/sign-in"
                className="btn btn-ghost btn-sm px-2 text-xs sm:btn-md sm:px-4 sm:text-sm"
              >
                সাইন ইন
              </Link>

              <Link
                href="/signup"
                className="btn btn-sm border-[#05893e] bg-[#05893e] px-2 text-xs text-white hover:border-[#047532] hover:bg-[#047532] sm:btn-md sm:px-4 sm:text-sm"
              >
                সাইন আপ
              </Link>
            </div>
          </div>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden border-t border-base-300 lg:block">
          <div className="mx-auto w-full max-w-7xl px-3 sm:px-5 lg:px-6">
            <ul className="menu menu-horizontal min-h-12 w-full items-center gap-1 px-0">
              <Navlinks />
            </ul>
          </div>
        </nav>
      </header>

      {/* Sticky Marquee below Navbar */}
      <Marquee />
    </div>
  );
};

export default Navbar;
