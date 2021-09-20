import { useState } from "react";
import Hamburger from "../Assets/svg/Hamburger";
import { Link } from 'react-router-dom'


export const Nav = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
  
    return (
      <div class="bg-black sticky top-0 z-50">
        <div class="px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
          <div class="relative flex items-center justify-between">
            <a
              href="/"
              aria-label="Company"
              title="Company"
              class="inline-flex items-center"
            >
              <img class=" h-8 w-full" src="/kryptonlogo1.png" alt=""/>
            </a>
            <ul class="flex items-center hidden space-x-8 lg:flex">
              <li>
                <a
                  href="#home"
                  aria-label="Home"
                  title="Home"
                  class="font-medium text-white no-underline hover:text-yellow-300 transition-colors"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  aria-label="Services"
                  title="Services"
                  class="font-medium text-white no-underline hover:text-yellow-300 transition-colors"
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  aria-label="about"
                  title="about"
                  class="font-medium text-white no-underline hover:text-yellow-300 transition-colors"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  aria-label="contact"
                  title="contact"
                  class="font-medium text-white no-underline hover:text-yellow-300 transition-colors"
                >
                  Contact
                </a>
              </li>
            </ul>
            <ul class="flex items-center hidden space-x-8 lg:flex">
              <li>
                <Link
                  to="/login"
                  class="inline-flex items-center justify-center h-12 px-3 font-medium tracking-wide text-white hover:text-yellow-300 "
                  aria-label="Sign up"
                  title="Sign up"
                >
                  Login
                </Link>
              </li>
              <li className = "z-50">
                <Link
                  to="/signup"
                  class="inline-flex items-center justify-center h-9 px-3 font-medium tracking-wide bg-yellow-300 text-black hover:text-black hover:bg-white rounded-full z-50"
                  aria-label="Sign up"
                  title="Sign up"
                >
                  Register
                </Link>
              </li>
            </ul>
            <div class="lg:hidden">
              <button
                aria-label="Open Menu"
                title="Open Menu"
                class="p-2 -mr-1 transition duration-200 rounded focus:outline-none focus:shadow-outline"
                onClick={() => setIsMenuOpen(true)}
              >
                <Hamburger/>
              </button>
              {isMenuOpen && (
                <div class="absolute top-0 left-0 w-full z-50">
                  <div class="p-5 bg-white border rounded shadow-sm">
                    <div class="flex items-center justify-between mb-4">
                      <div>
                        <a
                          href="/"
                          aria-label="Company"
                          title="Company"
                          class="inline-flex items-center"
                        >
                          <span class="ml-2 text-xl font-bold tracking-wide text-gray-800 uppercase">
                            Krypton
                          </span>
                        </a>
                      </div>
                      <div>
                        <button
                          aria-label="Close Menu"
                          title="Close Menu"
                          class="p-2 -mt-2 -mr-2 transition duration-200 rounded hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                          onClick={() => setIsMenuOpen(false)}
                        >
                          <svg class="w-5 text-gray-600" viewBox="0 0 24 24">
                            <path
                              fill="currentColor"
                              d="M19.7,4.3c-0.4-0.4-1-0.4-1.4,0L12,10.6L5.7,4.3c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l6.3,6.3l-6.3,6.3 c-0.4,0.4-0.4,1,0,1.4C4.5,19.9,4.7,20,5,20s0.5-0.1,0.7-0.3l6.3-6.3l6.3,6.3c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3 c0.4-0.4,0.4-1,0-1.4L13.4,12l6.3-6.3C20.1,5.3,20.1,4.7,19.7,4.3z"
                            />
                          </svg>
                        </button>
                      </div>
                    </div>
                    <nav>
                      <ul class="space-y-4">
                        <li>
                          <a
                            href="#home"
                            aria-label="home"
                            title="home"
                            class="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                          >
                            Home
                          </a>
                        </li>
                        <li>
                          <a
                            href="#services"
                            aria-label="Our services"
                            title="Our services"
                            class="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                          >
                            Services
                          </a>
                        </li>
                        <li>
                          <a
                            href="#about"
                            aria-label="About us"
                            title="About us"
                            class="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                          >
                            About Us
                          </a>
                        </li>
                        <li>
                          <a
                            href="#contact"
                            aria-label="contact us"
                            title="Contact Us"
                            class="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                          >
                            Contact Us
                          </a>
                        </li>
                        <li>
                          <Link
                            to="/login"
                            class="inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide text-black transition duration-200 rounded shadow-md bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none border border-black "
                            aria-label="login"
                            title="login"
                          >
                            Log In
                          </Link>
                        </li>
                        <li>
                          <Link
                            to ="/signup"
                            class="inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide text-black transition duration-200 rounded shadow-md bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none border border-black"
                            aria-label="Sign up"
                            title="Sign up"
                          >
                            Register
                          </Link>
                        </li>
                      </ul>
                    </nav>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  };