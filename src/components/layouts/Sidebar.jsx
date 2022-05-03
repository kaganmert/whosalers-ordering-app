import { useState, useEffect, useRef } from "react";
import { NavLink, useLocation } from "react-router-dom";

function Sidebar({ sidebarOpen, setSidebarOpen }) {
  const location = useLocation();
  const { pathname } = location;

  const sidebar = useRef(null);

  const [sidebarExpanded, setSidebarExpanded] = useState(false);

  // close if the esc key is pressed
  useEffect(() => {
    const keyHandler = ({ keyCode }) => {
      if (!sidebarOpen || keyCode !== 27) return;
      setSidebarOpen(false);
    };
    document.addEventListener("keydown", keyHandler);
    return () => document.removeEventListener("keydown", keyHandler);
  });

  useEffect(() => {
    localStorage.setItem("sidebar-expanded", sidebarExpanded);
    if (sidebarExpanded) {
      document.querySelector("body").classList.add("sidebar-expanded");
    } else {
      document.querySelector("body").classList.remove("sidebar-expanded");
    }
  }, [sidebarExpanded]);

  return (
    <div>
      <div
        className={`fixed inset-0 bg-gray-800 bg-opacity-30 z-40 lg:hidden lg:z-auto transition-opacity duration-200 ${
          sidebarOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        aria-hidden="true"
      ></div>

      <div
        id="sidebar"
        ref={sidebar}
        className={`flex flex-col absolute z-40 left-0 top-0 lg:static lg:left-auto lg:top-auto lg:translate-x-0 transform h-screen overflow-y-scroll lg:overflow-y-auto no-scrollbar w-64 lg:w-20 lg:sidebar-expanded:!w-64 2xl:!w-64 flex-shrink-0 bg-gradient-to-b from-gray-900 to-gray-600 bg-gradient-to-r p-4 transition-all duration-200 ease-in-out ${
          sidebarOpen ? "translate-x-0" : "-translate-x-64"
        }`}
      >
        {/* ORDERS */}
        <div className="mt-6 space-y-6">
          <div>
            <h3 className="pl-3 text-xs font-semibold text-gray-500 uppercase">
              <span
                className="hidden w-6 text-center lg:block lg:sidebar-expanded:hidden 2xl:hidden"
                aria-hidden="true"
              >
                •••
              </span>
              <span className="lg:hidden lg:sidebar-expanded:block 2xl:block">
                <button
                  className="inline-flex text-gray-300 hover:text-white lg:hidden"
                  aria-controls="sidebar"
                  aria-expanded={sidebarOpen}
                  onClick={() => setSidebarOpen(!sidebarOpen)}
                >
                  <span className="sr-only">Open sidebar</span>
                  <svg
                    className="w-8 h-8"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="mt-2 ml-2 font-bold text-l">
                    CLOSE SIDEBAR
                  </span>
                </button>
              </span>
            </h3>
            <ul className="mt-3">
              <li
                className={`px-3 py-2 rounded-sm mb-0.5 last:mb-0 ${
                  pathname.includes("orders") && "bg-gray-900"
                }`}
              >
                <NavLink
                  exact
                  to="/orders"
                  className={`block text-gray-200 hover:text-white truncate transition duration-150 ${
                    pathname.includes("orders") && "hover:text-gray-200"
                  }`}
                >
                  <div className="flex items-center">
                    <svg
                      className="w-6 h-6"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" />
                      <path
                        className={`fill-current text-gray-400 ${
                          pathname.includes("orders") && "text-indigo-300"
                        }`}
                        fillRule="evenodd"
                        d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="ml-3 text-sm font-medium duration-200 lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100">
                      Orders
                    </span>
                  </div>
                </NavLink>
              </li>
              {/* LIST RESTAURANTS */}
              {/* <li
                className={`px-3 py-2 rounded-sm mb-0.5 last:mb-0 ${
                  pathname.includes("/restaurants") && "bg-gray-800"
                }`}
              >
                <NavLink
                  to="/restaurants"
                  className={`block text-gray-200 hover:text-white truncate transition duration-150 ${
                    pathname.includes("social") && "hover:text-gray-200"
                  }`}
                >
                  <div className="flex">
                    <svg
                      className="w-6 h-6"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        className={`fill-current text-gray-400 ${
                          pathname.includes("/restaurants") && "text-indigo-500"
                        }`}
                        fillRule="evenodd"
                        d="M7 2a1 1 0 00-.707 1.707L7 4.414v3.758a1 1 0 01-.293.707l-4 4C.817 14.769 2.156 18 4.828 18h10.343c2.673 0 4.012-3.231 2.122-5.121l-4-4A1 1 0 0113 8.172V4.414l.707-.707A1 1 0 0013 2H7zm2 6.172V4h2v4.172a3 3 0 00.879 2.12l1.027 1.028a4 4 0 00-2.171.102l-.47.156a4 4 0 01-2.53 0l-.563-.187a1.993 1.993 0 00-.114-.035l1.063-1.063A3 3 0 009 8.172z"
                        clipRule="evenodd"
                      />
                    </svg>

                    <span className="ml-3 text-sm font-medium duration-200 lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100">
                      Restaurants
                    </span>
                  </div>
                </NavLink>
              </li> */}
              {/* USER INFO */}
              <li
                className={`px-3 py-2 rounded-sm mb-0.5 last:mb-0 ${
                  pathname.includes("/user") && "bg-gray-800"
                }`}
              >
                <NavLink
                  to="/dashboard"
                  className={`block text-gray-200 hover:text-white truncate transition duration-150 ${
                    pathname.includes("/dashboard") && "hover:text-gray-200"
                  }`}
                >
                  <div className="flex">
                    <svg
                      className="w-6 h-6"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        className={`fill-current text-white ${
                          pathname.includes("/dashboard") && "text-white-500"
                        }`}
                        fillRule="evenodd"
                        d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                        clipRule="evenodd"
                      />
                    </svg>

                    <span className="ml-3 text-sm font-medium duration-200 lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100">
                      User Info
                    </span>
                  </div>
                </NavLink>
              </li>
            </ul>
          </div>
        </div>

        <div className="justify-end hidden pt-3 mt-auto lg:inline-flex 2xl:hidden">
          <div className="px-3 py-2">
            <button onClick={() => setSidebarExpanded(!sidebarExpanded)}>
              <span className="sr-only">Expand / collapse sidebar</span>
              <svg
                className="w-6 h-6 fill-current sidebar-expanded:rotate-180"
                viewBox="0 0 24 24"
              >
                <path
                  className="text-gray-400"
                  d="M19.586 11l-5-5L16 4.586 23.414 12 16 19.414 14.586 18l5-5H7v-2z"
                />
                <path className="text-gray-600" d="M3 23H1V1h2z" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
