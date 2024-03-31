import React from "react";
import logo from "../assets/Images/logo/Logo-Mark-White.svg";
import { Link } from "react-router-dom";
import "../App.css";

const Navbar = () => {
  return (
    <>
      <header class="header-main-sec max-w-full w-full absolute top-0 left-0 z-[11]">
        <div class="cust-container-fluid">
          <div class="header-inner px-[38px] pt-[38px] max-[1024px]:px-8 max-[1024px]:pt-7 max-[575px]:px-5 max-[575px]:pt-5">
            <div class="cust-row items-center">
              <div class="header-logo-col max-w-[100px] max-[1024px]:relative max-[1024px]:z-[1] max-[767px]:max-w-[84px]">
                <div class="header-logo-area flex w-full h-auto">
                  <Link to="/" class="header-logo-link flex w-full h-auto">
                    <img
                      src={logo}
                      alt=""
                      class="max-w-full w-full h-auto header-logo"
                    />
                  </Link>
                </div>
              </div>
              <div class="header-nav-col max-w-[calc(100%-100px)] flex items-center max-[1024px]:justify-end max-[767px]:max-w-[calc(100%-84px)]">
                <div class="header-nav-bg min-[1025px]:hidden"></div>
                <div class="header-nav-inner group flex items-center max-w-full w-full max-[1024px] max-[1024px]:fixed max-[1024px]:top-0 max-[1024px]:left-0 max-[1024px]:z-0 max-[1024px]:h-screen max-[1024px]:flex-col max-[1024px]:justify-center max-[1024px]:items-start max-[1024px]:px-8 max-[1024px]:pt-32 max-[1024px]:pb-20 max-[1024px]:-translate-y-full max-[1024px]:origin-[100%_0%] max-[1024px]:transition-[transform] max-[1024px]:duration-[1.2s] !ease-[cubic-bezier(0.85,_0.04,_0,_0.49)] max-[767px]:pt-24 max-[767px]:px-5">
                  <div class="flex items-center max-w-full w-full h-full max-[1024px]:flex-col max-[1024px]:justify-center max-[1024px]:items-start max-[1024px]:opacity-0 max-[1024px]:group-[.active]:opacity-100 max-[1024px]:transition-[opacity] max-[1024px]:duration-[0.4s] max-[1024px]:ease-[cubic-bezier(0.17,_-0.14, 0, 0.33)]">
                    <div class="header-nav-menu group pl-12 mr-auto max-[1650px]:pl-6 max-[1500px]:pl-4 max-[1024px]:w-full max-[1024px]:pl-0 max-[1024px]:mt-auto">
                      <nav class="header-nav">
                        <ul class="flex items-center max-[1024px]:flex-col max-[1024px]:items-start">
                          <li class="flex items-center mr-6 last:mr-0 max-[1650px]:mr-5 max-[1024px]:w-full max-[1024px]:mr-0">
                            <Link
                              to="/about"
                              class="text-lg leading-7 font-normal text-white tracking-[1px] flex relative bg-[linear-gradient(to_top,transparent_0,transparent_calc(1px),var(--orange)_calc(1px),var(--orange)_100%)] [background-position:0_100%;] bg-no-repeat [background-size:0_calc(1px+1px);] transition-all duration-[0.4s] ease-in-out hover:[background-size:100%_calc(1px+1px);] hover:text-orangecx max-[1500px]:text-base max-[1024px]:font-pprader max-[1024px]:text-3xl max-[1024px]:leading-snug max-[1024px]:py-2 max-[1024px]:transition-[transform] max-[1024px]:duration-[1.3s] max-[1024px]:delay-[calc(0.6s+(0.1s*(var(--menu-count))))] max-[1024px]:ease-[cubic-bezier(0.17,_-0.14, 0, 0.33)] max-[1024px]:translate-x-[-300px] max-[1024px]:group-[.active]:translate-x-0 max-[767px]:text-xl max-[767px]:py-1"
                            >
                              <span class="slide-vertical" data-splitting>
                                About Foxes
                              </span>
                            </Link>
                          </li>
                          <li class="flex items-center mr-6 last:mr-0 max-[1650px]:mr-5 max-[1024px]:w-full max-[1024px]:mr-0">
                            <Link
                              to="/Services"
                              class="text-lg leading-7 font-normal text-white tracking-[1px] flex relative bg-[linear-gradient(to_top,transparent_0,transparent_calc(1px),var(--orange)_calc(1px),var(--orange)_100%)] [background-position:0_100%;] bg-no-repeat [background-size:0_calc(1px+1px);] transition-all duration-[0.4s] ease-in-out hover:[background-size:100%_calc(1px+1px);] hover:text-orangecx max-[1500px]:text-base max-[1024px]:font-pprader max-[1024px]:text-3xl max-[1024px]:leading-snug max-[1024px]:py-2 max-[1024px]:transition-[transform] max-[1024px]:duration-[1.3s] max-[1024px]:delay-[calc(0.6s+(0.1s*(var(--menu-count))))] max-[1024px]:ease-[cubic-bezier(0.17,_-0.14, 0, 0.33)] max-[1024px]:translate-x-[-300px] max-[1024px]:group-[.active]:translate-x-0 max-[767px]:text-xl max-[767px]:py-1"
                            >
                              <span class="slide-vertical" data-splitting>
                                Services
                              </span>
                            </Link>
                          </li>
                          <li class="flex items-center mr-6 last:mr-0 max-[1650px]:mr-5 max-[1024px]:w-full max-[1024px]:mr-0">
                            <Link
                              to="/Works"
                              class="text-lg leading-7 font-normal text-white tracking-[1px] flex relative bg-[linear-gradient(to_top,transparent_0,transparent_calc(1px),var(--orange)_calc(1px),var(--orange)_100%)] [background-position:0_100%;] bg-no-repeat [background-size:0_calc(1px+1px);] transition-all duration-[0.4s] ease-in-out hover:[background-size:100%_calc(1px+1px);] hover:text-orangecx max-[1500px]:text-base max-[1024px]:font-pprader max-[1024px]:text-3xl max-[1024px]:leading-snug max-[1024px]:py-2 max-[1024px]:transition-[transform] max-[1024px]:duration-[1.3s] max-[1024px]:delay-[calc(0.6s+(0.1s*(var(--menu-count))))] max-[1024px]:ease-[cubic-bezier(0.17,_-0.14, 0, 0.33)] max-[1024px]:translate-x-[-300px] max-[1024px]:group-[.active]:translate-x-0 max-[767px]:text-xl max-[767px]:py-1"
                            >
                              <span class="slide-vertical" data-splitting>
                                Works
                              </span>
                            </Link>
                          </li>
                          <li class="flex items-center mr-6 last:mr-0 max-[1650px]:mr-5 max-[1024px]:w-full max-[1024px]:mr-0">
                            <Link
                              to="/Reviews"
                              class="text-lg leading-7 font-normal text-white tracking-[1px] flex relative bg-[linear-gradient(to_top,transparent_0,transparent_calc(1px),var(--orange)_calc(1px),var(--orange)_100%)] [background-position:0_100%;] bg-no-repeat [background-size:0_calc(1px+1px);] transition-all duration-[0.4s] ease-in-out hover:[background-size:100%_calc(1px+1px);] hover:text-orangecx max-[1500px]:text-base max-[1024px]:font-pprader max-[1024px]:text-3xl max-[1024px]:leading-snug max-[1024px]:py-2 max-[1024px]:transition-[transform] max-[1024px]:duration-[1.3s] max-[1024px]:delay-[calc(0.6s+(0.1s*(var(--menu-count))))] max-[1024px]:ease-[cubic-bezier(0.17,_-0.14, 0, 0.33)] max-[1024px]:translate-x-[-300px] max-[1024px]:group-[.active]:translate-x-0 max-[767px]:text-xl max-[767px]:py-1"
                            >
                              <span class="slide-vertical" data-splitting>
                                Reviews
                              </span>
                            </Link>
                          </li>
                          <li class="flex items-center mr-6 last:mr-0 max-[1650px]:mr-5 max-[1024px]:w-full max-[1024px]:mr-0">
                            <Link
                              to="/Blog"
                              class="text-lg leading-7 font-normal text-white tracking-[1px] flex relative bg-[linear-gradient(to_top,transparent_0,transparent_calc(1px),var(--orange)_calc(1px),var(--orange)_100%)] [background-position:0_100%;] bg-no-repeat [background-size:0_calc(1px+1px);] transition-all duration-[0.4s] ease-in-out hover:[background-size:100%_calc(1px+1px);] hover:text-orangecx max-[1500px]:text-base max-[1024px]:font-pprader max-[1024px]:text-3xl max-[1024px]:leading-snug max-[1024px]:py-2 max-[1024px]:transition-[transform] max-[1024px]:duration-[1.3s] max-[1024px]:delay-[calc(0.6s+(0.1s*(var(--menu-count))))] max-[1024px]:ease-[cubic-bezier(0.17,_-0.14, 0, 0.33)] max-[1024px]:translate-x-[-300px] max-[1024px]:group-[.active]:translate-x-0 max-[767px]:text-xl max-[767px]:py-1"
                            >
                              <span class="slide-vertical" data-splitting>
                                Blog
                              </span>
                            </Link>
                          </li>
                          <li class="flex items-center mr-6 last:mr-0 max-[1650px]:mr-5 max-[1024px]:w-full max-[1024px]:mr-0">
                            <Link
                              to="/Career"
                              class="text-lg leading-7 font-normal text-white tracking-[1px] flex relative bg-[linear-gradient(to_top,transparent_0,transparent_calc(1px),var(--orange)_calc(1px),var(--orange)_100%)] [background-position:0_100%;] bg-no-repeat [background-size:0_calc(1px+1px);] transition-all duration-[0.4s] ease-in-out hover:[background-size:100%_calc(1px+1px);] hover:text-orangecx max-[1500px]:text-base max-[1024px]:font-pprader max-[1024px]:text-3xl max-[1024px]:leading-snug max-[1024px]:py-2 max-[1024px]:transition-[transform] max-[1024px]:duration-[1.3s] max-[1024px]:delay-[calc(0.6s+(0.1s*(var(--menu-count))))] max-[1024px]:ease-[cubic-bezier(0.17,_-0.14, 0, 0.33)] max-[1024px]:translate-x-[-300px] max-[1024px]:group-[.active]:translate-x-0 max-[767px]:text-xl max-[767px]:py-1"
                            >
                              <span class="slide-vertical" data-splitting>
                                Career
                              </span>
                            </Link>
                          </li>
                          <li class="flex items-center mr-6 last:mr-0 max-[1650px]:mr-5 max-[1024px]:w-full max-[1024px]:mr-0">
                            <Link
                              to="/Contact"
                              class="text-lg leading-7 font-normal text-white tracking-[1px] flex relative bg-[linear-gradient(to_top,transparent_0,transparent_calc(1px),var(--orange)_calc(1px),var(--orange)_100%)] [background-position:0_100%;] bg-no-repeat [background-size:0_calc(1px+1px);] transition-all duration-[0.4s] ease-in-out hover:[background-size:100%_calc(1px+1px);] hover:text-orangecx max-[1500px]:text-base max-[1024px]:font-pprader max-[1024px]:text-3xl max-[1024px]:leading-snug max-[1024px]:py-2 max-[1024px]:transition-[transform] max-[1024px]:duration-[1.3s] max-[1024px]:delay-[calc(0.6s+(0.1s*(var(--menu-count))))] max-[1024px]:ease-[cubic-bezier(0.17,_-0.14, 0, 0.33)] max-[1024px]:translate-x-[-300px] max-[1024px]:group-[.active]:translate-x-0 max-[767px]:text-xl max-[767px]:py-1"
                            >
                              <span class="slide-vertical" data-splitting>
                                Contact
                              </span>
                            </Link>
                          </li>
                        </ul>
                      </nav>
                    </div>
                    <div class="header-nav-social max-[1320px]:hidden max-[1024px]:block max-[1024px]:mt-auto">
                      <ul class="flex items-center justify-center relative">
                        <li class="relative z-[1] flex items-center before:content-[''] first:before:hidden before:absolute before:left-0 before:w-[1px] before:h-[22px] before:bg-white before:opacity-30 before:rotate-[10deg] max-[1400px]:before:h-[18px]">
                          <Link
                            to="https://www.facebook.com/"
                            target="_blank"
                            class="group/sicon text-base leading-7 font-normal text-white/70 tracking-[1px] flex items-center pl-6 pr-4 transition-all duration-[0.6s] ease-in-out hover:text-orangecx max-[1650px]:pl-5 max-[1650px]:pr-3 max-[1500px]:text-sm max-[1400px]:pl-3 max-[1400px]:pr-2 max-[1024px]:text-base max-[1024px]:px-4 max-[767px]:text-sm"
                          >
                            <p>F</p>
                            <span class="inline-block overflow-hidden max-w-0 align-top transition-[max-width] duration-[0.5s] ease-in-out group-hover/sicon:max-w-[60px]">
                              ACE
                            </span>
                            <p>B</p>
                            <span class="inline-block overflow-hidden max-w-0 align-top transition-[max-width] duration-[0.5s] ease-in-out group-hover/sicon:max-w-[60px]">
                              OOK
                            </span>
                          </Link>
                        </li>
                        <li class="relative z-[1] flex items-center before:content-[''] first:before:hidden before:absolute before:left-0 before:w-[1px] before:h-[22px] before:bg-white before:opacity-30 before:rotate-[10deg] max-[1400px]:before:h-[18px]">
                          <Link
                            to="https://www.instagram.com/codinfox_tech/"
                            target="_blank"
                            class="group/sicon text-base leading-7 font-normal text-white/70 tracking-[1px] flex items-center pl-6 pr-4 transition-all duration-[0.6s] ease-in-out hover:text-orangecx max-[1650px]:pl-5 max-[1650px]:pr-3 max-[1500px]:text-sm max-[1400px]:pl-3 max-[1400px]:pr-2 max-[1024px]:text-base max-[1024px]:px-4 max-[767px]:text-sm"
                          >
                            <p>I</p>
                            <span class="inline-block overflow-hidden max-w-0 align-top transition-[max-width] duration-[0.5s] ease-in-out group-hover/sicon:max-w-[60px]">
                              NSTA
                            </span>
                            <p>G</p>
                            <span class="inline-block overflow-hidden max-w-0 align-top transition-[max-width] duration-[0.5s] ease-in-out group-hover/sicon:max-w-[60px]">
                              RAM
                            </span>
                          </Link>
                        </li>
                        <li class="relative z-[1] flex items-center before:content-[''] first:before:hidden before:absolute before:left-0 before:w-[1px] before:h-[22px] before:bg-white before:opacity-30 before:rotate-[10deg] max-[1400px]:before:h-[18px]">
                          <Link
                            to="https://www.linkedin.com/company/codinfox/?originalSubdomain=in"
                            target="_blank"
                            class="group/sicon text-base leading-7 font-normal text-white/70 tracking-[1px] flex items-center pl-6 pr-4 transition-all duration-[0.6s] ease-in-out hover:text-orangecx max-[1650px]:pl-5 max-[1650px]:pr-3 max-[1500px]:text-sm max-[1400px]:pl-3 max-[1400px]:pr-2 max-[1024px]:text-base max-[1024px]:px-4 max-[767px]:text-sm"
                          >
                            <p>L</p>
                            <span class="inline-block overflow-hidden max-w-0 align-top transition-[max-width] duration-[0.5s] ease-in-out group-hover/sicon:max-w-[60px]">
                              INKEDI
                            </span>
                            <p>N</p>
                          </Link>
                        </li>
                        <li class="relative z-[1] flex items-center before:content-[''] first:before:hidden before:absolute before:left-0 before:w-[1px] before:h-[22px] before:bg-white before:opacity-30 before:rotate-[10deg] max-[1400px]:before:h-[18px]">
                          <Link
                            to="https://dribbble.com/"
                            target="_blank"
                            class="group/sicon text-base leading-7 font-normal text-white/70 tracking-[1px] flex items-center pl-6 pr-4 transition-all duration-[0.6s] ease-in-out hover:text-orangecx max-[1650px]:pl-5 max-[1650px]:pr-3 max-[1500px]:text-sm max-[1400px]:pl-3 max-[1400px]:pr-2 max-[1024px]:text-base max-[1024px]:px-4 max-[767px]:text-sm"
                          >
                            <p>D</p>
                            <span class="inline-block overflow-hidden max-w-0 align-top transition-[max-width] duration-[0.5s] ease-in-out group-hover/sicon:max-w-[60px]">
                              RI
                            </span>
                            <p>B</p>
                            <span class="inline-block overflow-hidden max-w-0 align-top transition-[max-width] duration-[0.5s] ease-in-out group-hover/sicon:max-w-[60px]">
                              BLE
                            </span>
                          </Link>
                        </li>
                        <li class="relative z-[1] flex items-center before:content-[''] first:before:hidden before:absolute before:left-0 before:w-[1px] before:h-[22px] before:bg-white before:opacity-30 before:rotate-[10deg] max-[1400px]:before:h-[18px]">
                          <Link
                            to="https://www.behance.net/"
                            target="_blank"
                            class="group/sicon text-base leading-7 font-normal text-white/70 tracking-[1px] flex items-center pl-6 pr-4 transition-all duration-[0.6s] ease-in-out hover:text-orangecx max-[1650px]:pl-5 max-[1650px]:pr-3 max-[1500px]:text-sm max-[1400px]:pl-3 max-[1400px]:pr-2 max-[1024px]:text-base max-[1024px]:px-4 max-[767px]:text-sm"
                          >
                            <p>BE</p>
                            <span class="inline-block overflow-hidden max-w-0 align-top transition-[max-width] duration-[0.5s] ease-in-out group-hover/sicon:max-w-[60px]">
                              HANCE
                            </span>
                          </Link>
                        </li>
                        <li class="relative z-[1] flex items-center before:content-[''] first:before:hidden before:absolute before:left-0 before:w-[1px] before:h-[22px] before:bg-white before:opacity-30 before:rotate-[10deg] max-[1400px]:before:h-[18px]">
                          <Link
                            to="https://www.skype.com/en/"
                            target="_blank"
                            class="group/sicon text-base leading-7 font-normal text-white/70 tracking-[1px] flex items-center pl-6 pr-4 transition-all duration-[0.6s] ease-in-out hover:text-orangecx max-[1650px]:pl-5 max-[1650px]:pr-3 max-[1500px]:text-sm max-[1400px]:pl-3 max-[1400px]:pr-2 max-[1024px]:text-base max-[1024px]:px-4 max-[767px]:text-sm"
                          >
                            <p>SK</p>
                            <span class="inline-block overflow-hidden max-w-0 align-top transition-[max-width] duration-[0.5s] ease-in-out group-hover/sicon:max-w-[60px]">
                              YPE
                            </span>
                          </Link>
                        </li>
                      </ul>
                    </div>
                    <div class="header-nav-btn flex ml-6 max-[1500px]:ml-4 max-[1024px]:hidden max-[575px]:block max-[575px]:ml-0 max-[575px]:mt-auto">
                      <Link to="/Contact" class="custom-btn ">
                        <span class="btn-circle"></span>
                        <span class="btn-text">Write to us</span>
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="header-nav-btn flex ml-6 hidden sm:block md:hidden lg:hidden xl:hidden">
                  <a href="javascript:void(0)" class="custom-btn">
                    <span class="btn-circle"></span>
                    <span class="btn-text">Write to us</span>
                  </a>
                </div>
                <div class="header-navbar-btn-area min-[1025px]:hidden flex p-3 max-w-max relative z-[1] max-w-max ml-6">
                  <a href="javascript:void(0)" class="header-navbar-btn ">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="21"
                      height="21"
                      viewBox="0 0 21 21"
                      fill="none"
                    >
                      <rect width="8" height="8" fill="#EEECE0"></rect>
                      <rect y="13" width="8" height="8" fill="#EEECE0"></rect>
                      <rect x="13" width="8" height="8" fill="#EEECE0"></rect>
                      <rect
                        x="13"
                        y="13"
                        width="8"
                        height="8"
                        fill="#EEECE0"
                      ></rect>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Navbar;
