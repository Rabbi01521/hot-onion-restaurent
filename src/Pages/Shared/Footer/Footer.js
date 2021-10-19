import React from "react";
import { Link } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import logo from "../../../images/logo/logo.png";

const Footer = () => {
  const { user } = useAuth();
  return (
    <div>
      <footer className="text-gray-600 body-font bg-black">
        <div className="container px-5 py-24 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
          <div className="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
            <Link
              to="/home"
              className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900"
            >
              <img src={logo} alt="" className="w-36" />
            </Link>
          </div>
          <div className="flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center">
            <div className="lg:w-1/4 md:w-1/2 w-full px-4"></div>
            <div className="lg:w-1/4 md:w-1/2 w-full px-4"></div>
            <div className="lg:w-1/4 md:w-1/2 w-full px-4">
              <nav className="list-none">
                <li className=" mb-2">
                  <Link to="/about" className="text-white hover:text-red-300">
                    About Online Food
                  </Link>
                </li>
                <li className=" mb-2">
                  <Link to="/blog" className="text-white hover:text-red-300">
                    Read Our Blog
                  </Link>
                </li>
                {!user?.email ? (
                  <li className=" mb-2">
                    <Link
                      to="/signup"
                      className="text-white hover:text-red-300"
                      href="#"
                    >
                      Sign up To deliver
                    </Link>
                  </li>
                ) : (
                  ""
                )}
                <li className=" mb-2">
                  <Link
                    to="/restaurant"
                    className="text-white hover:text-red-300"
                    href="#"
                  >
                    Add Your Restaurant
                  </Link>
                </li>
              </nav>
            </div>
            <div className="lg:w-1/4 md:w-1/2 w-full px-4">
              <nav className="list-none mb-10">
                <li className=" mb-2">
                  <Link
                    to="/help"
                    className="text-white hover:text-red-300"
                    href="#"
                  >
                    get help
                  </Link>
                </li>
                <li className=" mb-2">
                  <Link
                    to="/faqs"
                    className="text-white hover:text-red-300"
                    href="#"
                  >
                    Read FAQs
                  </Link>
                </li>
                <li className=" mb-2">
                  <Link
                    to="/cities"
                    className="text-white hover:text-red-300"
                    href="#"
                  >
                    View all Cities
                  </Link>
                </li>
                <li className=" mb-2">
                  <Link
                    to="/search"
                    className="text-white hover:text-red-300"
                    href="#"
                  >
                    Restaurants near me
                  </Link>
                </li>
              </nav>
            </div>
          </div>
        </div>
        <div className=" bg-black">
          <div className="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
            <p className="text-white text-sm text-center sm:text-left">
              © 2020 Online — Food
            </p>
            <span className="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start">
              <a href="#" className="text-gray-200">
                <svg
                  fill="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                </svg>
              </a>
              <a href="#" className="ml-3 text-gray-200">
                <svg
                  fill="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                </svg>
              </a>
              <a href="#" className="ml-3 text-gray-200">
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
                </svg>
              </a>
              <a href="#" className="ml-3 text-gray-200">
                <svg
                  fill="currentColor"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="0"
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke="none"
                    d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"
                  ></path>
                  <circle cx="4" cy="4" r="2" stroke="none"></circle>
                </svg>
              </a>
            </span>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
