import React, { useState } from "react";
import { GiCoffeeBeans } from "react-icons/gi";
import { FaHamburger } from "react-icons/fa";

function Navbar() {
  const [toggleMenu, setToggleMenu] = useState(false);
  return (
    <div class="max-w-2xl mx-auto">
      <nav class="border-gray-200 px-2 mb-10">
        <div class="container mx-auto flex flex-wrap items-center justify-between">
          <a href="#" class="flex">
            <GiCoffeeBeans className="h-10 mr-3" width="51" height="70" />
            <span class="self-center text-lg font-semibold whitespace-nowrap">
              Beteseb
            </span>
          </a>
          <div class="flex md:order-2">
            <div class="relative mr-3 md:mr-0 hidden md:block">
              <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none"></div>
            </div>
            <button
              data-collapse-toggle="mobile-menu-3"
              type="button"
              class="md:hidden text-gray-400 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-300 rounded-lg inline-flex items-center justify-center"
              aria-controls="mobile-menu-3"
              aria-expanded="false"
            >
              <span class="sr-only">Open main menu</span>
              <FaHamburger />
            </button>
          </div>
          <div
            class="hidden md:flex justify-between items-center w-full md:w-auto md:order-1"
            id="mobile-menu-3"
          >
            <ul class="flex-col md:flex-row flex md:space-x-8 mt-4 md:mt-0 md:text-sm md:font-medium">
              <li>
                <a
                  href="#"
                  class="bg-blue-700 md:bg-transparent text-white block pl-3 pr-4 py-2 md:text-blue-700 md:p-0 rounded"
                  aria-current="page"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#"
                  class="text-gray-700 hover:bg-gray-50 border-b border-gray-100 md:hover:bg-transparent md:border-0 block pl-3 pr-4 py-2 md:hover:text-blue-700 md:p-0"
                >
                  Menu
                </a>
              </li>
              <li>
                <a
                  href="#"
                  class="text-gray-700 hover:bg-gray-50 border-b border-gray-100 md:hover:bg-transparent md:border-0 block pl-3 pr-4 py-2 md:hover:text-blue-700 md:p-0"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#"
                  class="text-gray-700 hover:bg-gray-50 border-b border-gray-100 md:hover:bg-transparent md:border-0 block pl-3 pr-4 py-2 md:hover:text-blue-700 md:p-0"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
