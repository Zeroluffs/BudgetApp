import { useState, useEffect, useContext } from "react";
import { AuthContext } from "../../context/auth";

import Link from "next/link";
import { useRouter } from "next/router";

export function NavigationBar({ fixed }) {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const [tokenExists, setTokenExists] = useState(false);
  const context = useContext(AuthContext);
  const router = useRouter();

  useEffect(() => {
  }, [context]);

  const logOut = (e) => {
    e.preventDefault();
    router.push("/");
    context.logout();
  };

  const PagesComponent = () => {
    if (context.isLoggedIn) {
      return (
        <ul className="flex flex-col list-none lg:flex-row lg:ml-auto">
          <li className="nav-item">
            <button
              onClick={logOut}
              className="flex items-center px-3 py-2 text-xs font-bold leading-snug text-white uppercase hover:opacity-75"
            >
              <i className="text-lg text-white opacity-75 fab fa-facebook-square leading-lg"></i>
              <span className="ml-2">Sign Out</span>
            </button>
          </li>
        </ul>
      );
    } else {
      return (
        <ul className="flex flex-col list-none lg:flex-row lg:ml-auto">
          <li className="nav-item">
            <Link href="/">
              <a className="flex items-center px-3 py-2 text-xs font-bold leading-snug text-white uppercase hover:opacity-75">
                <i className="text-lg text-white opacity-75 fab fa-facebook-square leading-lg"></i>
                <span className="ml-2">Sign In</span>
              </a>
            </Link>
          </li>
          <li className="nav-item">
            <Link href="/signup">
              <a className="flex items-center px-3 py-2 text-xs font-bold leading-snug text-white uppercase hover:opacity-75">
                <i className="text-lg text-white opacity-75 fab fa-twitter leading-lg"></i>
                <span className="ml-2">Sign Up</span>
              </a>
            </Link>
          </li>
        </ul>
      );
    }
  };

  return (
    <>
      <header>
        <nav className="relative flex flex-wrap items-center justify-between px-2 py-3 mb-3 bg-blue-500">
          <div className="container flex flex-wrap items-center justify-between px-4 mx-auto">
            <div className="relative flex justify-between w-full lg:w-auto lg:static lg:block lg:justify-start">
              <a className="inline-block py-2 mr-4 text-sm font-bold leading-relaxed text-white uppercase whitespace-nowrap">
                Budget App
              </a>
            </div>
            <div
              className={
                "lg:flex flex-grow items-center" +
                (navbarOpen ? " flex" : " hidden")
              }
              id="example-navbar-danger"
            >
              <PagesComponent />
            </div>
          </div>
        </nav>
      </header>
    </>
  );
}
