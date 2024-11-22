import React from "react";

const NavbarDark = () => {
  return (
    <nav className="navbar navbar-dark bg-dark fixed-top h-max">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          Healthcare
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasDarkNavbar"
          aria-controls="offcanvasDarkNavbar"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="offcanvas offcanvas-end text-bg-dark"
          tabIndex="-1"
          id="offcanvasDarkNavbar"
          aria-labelledby="offcanvasDarkNavbarLabel"
        >
          <div className="offcanvas-header">
            <h5 className="offcanvas-title" id="offcanvasDarkNavbarLabel">
              Profile
            </h5>
            <button
              type="button"
              className="btn-close btn-close-white"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            ></button>
          </div>
          <div className="offcanvas-body">
            <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  About
                </a>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Dropdown
                </a>
                <ul className="dropdown-menu dropdown-menu-dark">
                  <li>
                    <a className="dropdown-item" href="#">
                      Action
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Another action
                    </a>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Something else here
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
            <form className="d-flex flex-column mt-3" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-primary w-25 mx-auto" type="submit">
                Search
              </button>
            </form>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavbarDark;

// import React from "react";

// const Navbar = () => {
//   return (
//     <nav className="bg-gray-900 fixed top-0 w-full">
//       <div className="container mx-auto flex items-center justify-between px-4 py-2">
//         <a className="text-white text-lg font-semibold" href="#">
//           Healthcare
//         </a>
//         <button
//           className="text-white focus:outline-none lg:hidden"
//           aria-label="Toggle navigation"
//           onClick={() => document.getElementById("offcanvasDarkNavbar").classList.toggle("hidden")}
//         >
//           <svg
//             className="w-6 h-6"
//             fill="none"
//             stroke="currentColor"
//             viewBox="0 0 24 24"
//             xmlns="http://www.w3.org/2000/svg"
//           >
//             <path
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               strokeWidth="2"
//               d="M4 6h16M4 12h16m-7 6h7"
//             ></path>
//           </svg>
//         </button>
//         <div
//           id="offcanvasDarkNavbar"
//           className="hidden fixed top-0 right-0 h-full w-64 bg-gray-800 text-white shadow-lg lg:block lg:relative lg:h-auto lg:bg-transparent lg:w-auto"
//         >
//           <div className="flex flex-col lg:flex-row lg:items-center">
//             <div className="flex items-center justify-between p-4 lg:hidden">
//               <h5 className="text-xl font-semibold">Profile</h5>
//               <button
//                 className="text-gray-400"
//                 onClick={() => document.getElementById("offcanvasDarkNavbar").classList.add("hidden")}
//               >
//                 ✕
//               </button>
//             </div>
//             <ul className="flex flex-col space-y-3 px-4 lg:flex-row lg:space-y-0 lg:space-x-6 lg:px-0">
//               <li>
//                 <a className="hover:text-gray-400" href="#">
//                   Home
//                 </a>
//               </li>
//               <li>
//                 <a className="hover:text-gray-400" href="#">
//                   About
//                 </a>
//               </li>
//               <li className="relative group">
//                 <a
//                   className="hover:text-gray-400 cursor-pointer"
//                   href="#"
//                   onClick={(e) => e.preventDefault()}
//                 >
//                   Dropdown
//                 </a>
//                 <ul className="hidden group-hover:block absolute top-full mt-2 w-48 bg-gray-700 text-white rounded shadow-lg">
//                   <li>
//                     <a className="block px-4 py-2 hover:bg-gray-600" href="#">
//                       Action
//                     </a>
//                   </li>
//                   <li>
//                     <a className="block px-4 py-2 hover:bg-gray-600" href="#">
//                       Another action
//                     </a>
//                   </li>
//                   <li>
//                     <hr className="border-gray-600" />
//                   </li>
//                   <li>
//                     <a className="block px-4 py-2 hover:bg-gray-600" href="#">
//                       Something else here
//                     </a>
//                   </li>
//                 </ul>
//               </li>
//             </ul>
//             <form className="flex items-center mt-4 px-4 lg:mt-0">
//               <input
//                 className="w-full lg:w-auto px-4 py-2 rounded bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-500"
//                 type="search"
//                 placeholder="Search"
//                 aria-label="Search"
//               />
//               <button className="ml-2 px-4 py-2 rounded bg-green-600 hover:bg-green-500 text-white" type="submit">
//                 Search
//               </button>
//             </form>
//           </div>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;

// import React from "react";

// export default function Navbar() {
  // return (
  //   <nav className="navbar bg-body-tertiary fixed-top">
  //     <div className="container-fluid">
  //       <a className="navbar-brand" href="#">Offcanvas navbar</a>
  //       <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
  //         <span className="navbar-toggler-icon"></span>
  //       </button>
  //       <div className="offcanvas offcanvas-end" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
  //         <div className="offcanvas-header">
  //           <h5 className="offcanvas-title" id="offcanvasNavbarLabel">Offcanvas</h5>
  //           <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
  //         </div>
  //         <div className="offcanvas-body">
  //           <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
  //             <li className="nav-item">
  //               <a className="nav-link active" aria-current="page" href="#">Home</a>
  //             </li>
  //             <li className="nav-item">
  //               <a className="nav-link" href="#">Link</a>
  //             </li>
  //             <li className="nav-item dropdown">
  //               <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
  //                 Dropdown
  //               </a>
  //               <ul className="dropdown-menu">
  //                 <li><a className="dropdown-item" href="#">Action</a></li>
  //                 <li><a className="dropdown-item" href="#">Another action</a></li>
  //                 <li>
  //                   <hr className="dropdown-divider" />
  //                 </li>
  //                 <li><a className="dropdown-item" href="#">Something else here</a></li>
  //               </ul>
  //             </li>
  //           </ul>
  //           <form className="d-flex mt-3" role="search">
  //             <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
  //             <button className="btn btn-outline-success" type="submit">Search</button>
  //           </form>
  //         </div>
  //       </div>
  //     </div>
  //   </nav>
  // )

//   return(

// <nav class="border-gray-200 bg-gray-50 dark:bg-gray-800 dark:border-gray-700">
//   <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
//     <a href="#" class="flex items-center space-x-3 rtl:space-x-reverse">
//         <img src="https://flowbite.com/docs/images/logo.svg" class="h-8" alt="Flowbite Logo" />
//         <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Flowbite</span>
//     </a>
//     <button data-collapse-toggle="navbar-hamburger" type="button" class="inline-flex items-center justify-center p-2 w-10 h-10 text-sm text-gray-500 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-hamburger" aria-expanded="false">
//       <span class="sr-only">Open main menu</span>
//       <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
//           <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
//       </svg>
//     </button>
//     <div class="hidden w-full" id="navbar-hamburger">
//       <ul class="flex flex-col font-medium mt-4 rounded-lg bg-gray-50 dark:bg-gray-800 dark:border-gray-700">
//         <li>
//           <a href="#" class="block py-2 px-3 text-white bg-blue-700 rounded dark:bg-blue-600" aria-current="page">Home</a>
//         </li>
//         <li>
//           <a href="#" class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">Services</a>
//         </li>
//         <li>
//           <a href="#" class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white">Pricing</a>
//         </li>
//         <li>
//           <a href="#" class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">Contact</a>
//         </li>
//       </ul>
//     </div>
//   </div>
// </nav>
//   )
// }