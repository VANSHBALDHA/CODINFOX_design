import React from "react";
import  logo from "../assets/Images/logo/Primary-Logo-White.svg"

const Footer = () => {
  return (
    <>
      {/* <footer class="footer-main-sec relative pt-28 pb-12">
        <div class="footer-cta-area pb-20 mb-20 border-b border-solid border-orangecx/20">
          <div class="cust-container-fluid">
            <div class="marquee-main marquee-left overflow-hidden">
              <div class="marquee-inner w-[10000000000px]">
                <div class="marquee-content inline-block animate-rollLeft">
                  <h2 class="text-[150px] font-bold leading-[1.05] text-transparent whitespace-nowrap flex items-center max-[1500px]:text-[120px] max-[1024px]:text-[100px] max-[991px]:text-[80px] max-[767px]:text-[70px] max-[575px]:text-[60px]">
                    <a
                      href="mailto:hello@codinfox.com"
                      class="text-white [-webkit-text-stroke-width:2px;] [-webkit-text-stroke-color:white;] hover:text-transparent transition-all duration-[0.6s] ease-[cubic-bezier(.61,1,.88,1)]"
                    >
                      hello@codinfox.com
                    </a>

                    <span class="text-6xl text-orangecx mx-8 max-[767px]:text-4xl max-[767px]:mx-5">
                      ✲
                    </span>

                    <a
                      href="tel:+918320866801"
                      class="text-white [-webkit-text-stroke-width:2px;] [-webkit-text-stroke-color:white;] hover:text-transparent transition-all duration-[0.6s] ease-[cubic-bezier(.61,1,.88,1)]"
                    >
                      (+91) 8320 866801
                    </a>

                    <span class="text-6xl text-orangecx mx-8 max-[767px]:text-4xl max-[767px]:mx-5">
                      ✲
                    </span>

                    <a
                      href="mailto:hello@codinfox.com"
                      class="text-white [-webkit-text-stroke-width:2px;] [-webkit-text-stroke-color:white;] hover:text-transparent transition-all duration-[0.6s] ease-[cubic-bezier(.61,1,.88,1)]"
                    >
                      hello@codinfox.com
                    </a>

                    <span class="text-6xl text-orangecx mx-8 max-[767px]:text-4xl max-[767px]:mx-5">
                      ✲
                    </span>

                    <a
                      href="tel:+918320866801"
                      class="text-white [-webkit-text-stroke-width:2px;] [-webkit-text-stroke-color:white;] hover:text-transparent transition-all duration-[0.6s] ease-[cubic-bezier(.61,1,.88,1)]"
                    >
                      (+91) 8320 866801
                    </a>

                    <span class="text-6xl text-orangecx mx-8 max-[767px]:text-4xl max-[767px]:mx-5">
                      ✲
                    </span>
                  </h2>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="footer-main-area px-10 max-[1850px]:px-32 max-[1750px]:px-24 max-[1500px]:px-16 max-[767px]:px-5">
          <div class="footer-inner-area">
            <div class="cust-row mx-0 mb-20 max-[1024px]:-mx-3">
              <div class="footer-columns footer-logo-col max-w-sm mr-auto max-[991px]:max-w-full max-[991px]:mb-20">
                <div class="footer-logo-area mb-8">
                  <a
                    href="index.html"
                    class="flex max-w-xs w-full max-[767px]:max-w-[220px]"
                  >
                    <img
                      src={logo}
                      alt=""
                      class="max-w-full w-full h-full object-contain"
                    />
                  </a>
                </div>
                <div class="footer-content text-lg leading-8 font-normal text-white tracking-[1px] mb-8 max-[991px]:text-base">
                  <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Tenetur quasi ea voluptas.
                  </p>
                </div>
                <div class="footer-social-icons">
                  <ul class="flex items-center">
                    <li class="flex mr-3 last:mr-0">
                      <a
                        href="javascript:void(0)"
                        class="w-10 h-10 flex items-center justify-center text-white rounded-full border border-solid border-white transition-all duration-[0.6s] ease-[cubic-bezier(.61,1,.88,1)]"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          height="1em"
                          viewBox="0 0 320 512"
                          class="fill-white"
                        >
                          <path d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z" />
                        </svg>
                      </a>
                    </li>
                    <li class="flex mr-3 last:mr-0">
                      <a
                        href="javascript:void(0)"
                        class="w-10 h-10 flex items-center justify-center text-white rounded-full border border-solid border-white transition-all duration-[0.6s] ease-[cubic-bezier(.61,1,.88,1)]"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          height="1em"
                          viewBox="0 0 448 512"
                          class="fill-white"
                        >
                          <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
                        </svg>
                      </a>
                    </li>
                    <li class="flex mr-3 last:mr-0">
                      <a
                        href="javascript:void(0)"
                        class="w-10 h-10 flex items-center justify-center text-white rounded-full border border-solid border-white transition-all duration-[0.6s] ease-[cubic-bezier(.61,1,.88,1)]"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          height="1em"
                          viewBox="0 0 448 512"
                          class="fill-white"
                        >
                          <path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z" />
                        </svg>
                      </a>
                    </li>
                    <li class="flex mr-3 last:mr-0">
                      <a
                        href="javascript:void(0)"
                        class="w-10 h-10 flex items-center justify-center text-white rounded-full border border-solid border-white transition-all duration-[0.6s] ease-[cubic-bezier(.61,1,.88,1)]"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          height="1em"
                          viewBox="0 0 512 512"
                          class="fill-white"
                        >
                          <path d="M256 8C119.252 8 8 119.252 8 256s111.252 248 248 248 248-111.252 248-248S392.748 8 256 8zm163.97 114.366c29.503 36.046 47.369 81.957 47.835 131.955-6.984-1.477-77.018-15.682-147.502-6.818-5.752-14.041-11.181-26.393-18.617-41.614 78.321-31.977 113.818-77.482 118.284-83.523zM396.421 97.87c-3.81 5.427-35.697 48.286-111.021 76.519-34.712-63.776-73.185-116.168-79.04-124.008 67.176-16.193 137.966 1.27 190.061 47.489zm-230.48-33.25c5.585 7.659 43.438 60.116 78.537 122.509-99.087 26.313-186.36 25.934-195.834 25.809C62.38 147.205 106.678 92.573 165.941 64.62zM44.17 256.323c0-2.166.043-4.322.108-6.473 9.268.19 111.92 1.513 217.706-30.146 6.064 11.868 11.857 23.915 17.174 35.949-76.599 21.575-146.194 83.527-180.531 142.306C64.794 360.405 44.17 310.73 44.17 256.323zm81.807 167.113c22.127-45.233 82.178-103.622 167.579-132.756 29.74 77.283 42.039 142.053 45.189 160.638-68.112 29.013-150.015 21.053-212.768-27.882zm248.38 8.489c-2.171-12.886-13.446-74.897-41.152-151.033 66.38-10.626 124.7 6.768 131.947 9.055-9.442 58.941-43.273 109.844-90.795 141.978z" />
                        </svg>
                      </a>
                    </li>
                    <li class="flex mr-3 last:mr-0">
                      <a
                        href="javascript:void(0)"
                        class="w-10 h-10 flex items-center justify-center text-white rounded-full border border-solid border-white transition-all duration-[0.6s] ease-[cubic-bezier(.61,1,.88,1)]"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          height="1em"
                          viewBox="0 0 576 512"
                          class="fill-white"
                        >
                          <path d="M232 237.2c31.8-15.2 48.4-38.2 48.4-74 0-70.6-52.6-87.8-113.3-87.8H0v354.4h171.8c64.4 0 124.9-30.9 124.9-102.9 0-44.5-21.1-77.4-64.7-89.7zM77.9 135.9H151c28.1 0 53.4 7.9 53.4 40.5 0 30.1-19.7 42.2-47.5 42.2h-79v-82.7zm83.3 233.7H77.9V272h84.9c34.3 0 56 14.3 56 50.6 0 35.8-25.9 47-57.6 47zm358.5-240.7H376V94h143.7v34.9zM576 305.2c0-75.9-44.4-139.2-124.9-139.2-78.2 0-131.3 58.8-131.3 135.8 0 79.9 50.3 134.7 131.3 134.7 61.3 0 101-27.6 120.1-86.3H509c-6.7 21.9-34.3 33.5-55.7 33.5-41.3 0-63-24.2-63-65.3h185.1c.3-4.2.6-8.7.6-13.2zM390.4 274c2.3-33.7 24.7-54.8 58.5-54.8 35.4 0 53.2 20.8 56.2 54.8H390.4z" />
                        </svg>
                      </a>
                    </li>
                    <li class="flex mr-3 last:mr-0">
                      <a
                        href="javascript:void(0)"
                        class="w-10 h-10 flex items-center justify-center text-white rounded-full border border-solid border-white transition-all duration-[0.6s] ease-[cubic-bezier(.61,1,.88,1)]"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          height="1em"
                          viewBox="0 0 448 512"
                          class="fill-white"
                        >
                          <path d="M424.7 299.8c2.9-14 4.7-28.9 4.7-43.8 0-113.5-91.9-205.3-205.3-205.3-14.9 0-29.7 1.7-43.8 4.7C161.3 40.7 137.7 32 112 32 50.2 32 0 82.2 0 144c0 25.7 8.7 49.3 23.3 68.2-2.9 14-4.7 28.9-4.7 43.8 0 113.5 91.9 205.3 205.3 205.3 14.9 0 29.7-1.7 43.8-4.7 19 14.6 42.6 23.3 68.2 23.3 61.8 0 112-50.2 112-112 .1-25.6-8.6-49.2-23.2-68.1zm-194.6 91.5c-65.6 0-120.5-29.2-120.5-65 0-16 9-30.6 29.5-30.6 31.2 0 34.1 44.9 88.1 44.9 25.7 0 42.3-11.4 42.3-26.3 0-18.7-16-21.6-42-28-62.5-15.4-117.8-22-117.8-87.2 0-59.2 58.6-81.1 109.1-81.1 55.1 0 110.8 21.9 110.8 55.4 0 16.9-11.4 31.8-30.3 31.8-28.3 0-29.2-33.5-75-33.5-25.7 0-42 7-42 22.5 0 19.8 20.8 21.8 69.1 33 41.4 9.3 90.7 26.8 90.7 77.6 0 59.1-57.1 86.5-112 86.5z" />
                        </svg>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div class="footer-columns footer-menu-col max-w-max ml-28 max-[1024px]:ml-16 max-[991px]:max-w-[50%] max-[991px]:ml-0">
                <div class="footer-col-title mb-8">
                  <h4 class="text-lg font-medium leading-none text-orangecx uppercase">
                    About
                  </h4>
                </div>
                <div class="footer-menu-inner">
                  <ul>
                    <li class="flex mb-3 last:mb-0">
                      <a
                        href="javascript:void(0)"
                        class="text-lg font-normal text-white hover:text-white/100 leading-snug tracking-[1.5px] transition-all duration-[0.6s] ease-[cubic-bezier(.61,1,.88,1)] max-[991px]:text-base"
                      >
                        <span class="slide-vertical" data-splitting>
                          About Foxes
                        </span>
                      </a>
                    </li>
                    <li class="flex mb-3 last:mb-0">
                      <a
                        href="javascript:void(0)"
                        class="text-lg font-normal text-white hover:text-white/100 leading-snug tracking-[1.5px] transition-all duration-[0.6s] ease-[cubic-bezier(.61,1,.88,1)] max-[991px]:text-base"
                      >
                        <span class="slide-vertical" data-splitting>
                          Services
                        </span>
                      </a>
                    </li>
                    <li class="flex mb-3 last:mb-0">
                      <a
                        href="javascript:void(0)"
                        class="text-lg font-normal text-white hover:text-white/100 leading-snug tracking-[1.5px] transition-all duration-[0.6s] ease-[cubic-bezier(.61,1,.88,1)] max-[991px]:text-base"
                      >
                        <span class="slide-vertical" data-splitting>
                          Works
                        </span>
                      </a>
                    </li>
                    <li class="flex mb-3 last:mb-0">
                      <a
                        href="javascript:void(0)"
                        class="text-lg font-normal text-white hover:text-white/100 leading-snug tracking-[1.5px] transition-all duration-[0.6s] ease-[cubic-bezier(.61,1,.88,1)] max-[991px]:text-base"
                      >
                        <span class="slide-vertical" data-splitting>
                          Reviews
                        </span>
                      </a>
                    </li>
                    <li class="flex mb-3 last:mb-0">
                      <a
                        href="javascript:void(0)"
                        class="text-lg font-normal text-white hover:text-white/100 leading-snug tracking-[1.5px] transition-all duration-[0.6s] ease-[cubic-bezier(.61,1,.88,1)] max-[991px]:text-base"
                      >
                        <span class="slide-vertical" data-splitting>
                          Blog
                        </span>
                      </a>
                    </li>
                    <li class="flex mb-3 last:mb-0">
                      <a
                        href="javascript:void(0)"
                        class="text-lg font-normal text-white hover:text-white/100 leading-snug tracking-[1.5px] transition-all duration-[0.6s] ease-[cubic-bezier(.61,1,.88,1)] max-[991px]:text-base"
                      >
                        <span class="slide-vertical" data-splitting>
                          Career
                        </span>
                      </a>
                    </li>
                    <li class="flex mb-3 last:mb-0">
                      <a
                        href="javascript:void(0)"
                        class="text-lg font-normal text-white hover:text-white/100 leading-snug tracking-[1.5px] transition-all duration-[0.6s] ease-[cubic-bezier(.61,1,.88,1)] max-[991px]:text-base"
                      >
                        <span class="slide-vertical" data-splitting>
                          Contact
                        </span>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div class="footer-columns footer-address-col max-w-max ml-28 max-[1024px]:ml-16 max-[991px]:max-w-[50%] max-[991px]:ml-0">
                <div class="footer-col-title mb-8">
                  <h4 class="text-lg font-medium leading-none text-orangecx uppercase">
                    Connect
                  </h4>
                </div>
                <div class="footer-address-con text-lg leading-8 font-normal text-white tracking-[1px] max-w-xs max-[1024px]:max-w-[224px] max-[991px]:text-base">
                  <p>
                    401, Ashopalav Triangle, 80ft Road, Satyam Hills Road, Opp.
                    Matuki Restaurant Mavdi, Rajkot, Gujarat, 360004
                  </p>
                </div>
              </div>
            </div>
            <div class="cust-row mx-0 mb-12 items-center max-[1400px]:flex-col">
              <div class="footer-btns-area max-w-max flex mr-auto max-[1400px]:mx-auto max-[1400px]:mb-10">
                <div class="footer-btn flex mr-8">
                  <a href="javascript:void(0)" class="custom-btn">
                    <span class="btn-circle"></span>
                    <span class="btn-text">Write to us</span>
                  </a>
                </div>
                <div class="footer-btn flex">
                  <a href="javascript:void(0)" class="custom-btn">
                    <span class="btn-circle"></span>
                    <span class="btn-text">Write to us</span>
                  </a>
                </div>
              </div>
              <div class="footer-links max-w-max">
                <ul class="flex max-[991px]:flex-wrap max-[991px]:justify-center">
                  <li class="ml-20 first:ml-0 max-[1500px]:ml-12  max-[991px]:w-full max-[991px]:mx-4 max-[991px]:first:ml-4 max-[991px]:mb-4 max-[767px]:mx-2 max-[767px]:first:ml-2">
                    <p class="text-lg font-normal text-white/50 leading-snug tracking-[1px] text-center max-[991px]:text-base">
                      Copyright © 2024{" "}
                      <a
                        href="javascript:void(0)"
                        class="transition-all duration-[0.6s] ease-[cubic-bezier(.61,1,.88,1)] hover:text-white"
                      >
                        CODINFOX
                      </a>{" "}
                      All rights reserved.
                    </p>
                  </li>

                  <li class="ml-20 first:ml-0 max-[1500px]:ml-12 max-[991px]:mx-4 max-[991px]:first:ml-4 max-[991px]:mb-4 max-[767px]:mx-2 max-[767px]:first:ml-2">
                    <p class="text-lg font-normal text-white/50 leading-snug tracking-[1px] text-center max-[991px]:text-base">
                      <a
                        href="javascript:void(0)"
                        class="transition-all duration-[0.6s] ease-[cubic-bezier(.61,1,.88,1)] hover:text-white"
                      >
                        Privacy & Terms
                      </a>
                    </p>
                  </li>
                  <li class="ml-20 first:ml-0 max-[1500px]:ml-12 max-[991px]:mx-4 max-[991px]:first:ml-4 max-[991px]:mb-4 max-[767px]:mx-2 max-[767px]:first:ml-2">
                    <p class="text-lg font-normal text-white/50 leading-snug tracking-[1px] text-center max-[991px]:text-base">
                      Made by{" "}
                      <a
                        href="javascript:void(0)"
                        class="transition-all duration-[0.6s] ease-[cubic-bezier(.61,1,.88,1)] hover:text-white"
                      >
                        Codinfox
                      </a>
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer> */}
    </>
  );
};

export default Footer;
