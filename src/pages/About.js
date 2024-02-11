import React from "react";
import triangle from "../assets/Images/3D/FabConvert.com_triangle.gif";

const About = () => {
  return (
    <>
      <section class="page-banner-main-sec relative min-h-screen pt-[114px]">
        <div class="page-banner-inner relative h-[calc(100vh-114px)] px-16 pb-40">
          <div class="page-banner-modal-block page-banner-modal-triangle max-w-[600px] w-full h-[600px] absolute top-1/2 left-[0] z-0 -translate-y-1/2 opacity-100">
            <div className="codin__3dblock w-full h-full">
              <img src={triangle} className="w-full h-full" alt="3D Model" />
              <div className="codein__mwrap w-full h-full">
                <canvas className="codin3d max-w-full !w-full !h-full"></canvas>
              </div>
            </div>
          </div>
          <div class="page-banner-modal-block page-banner-modal-circle max-w-[380px] w-full h-[380px] absolute top-0 right-[170px] z-0 opacity-100">
            <div
              class="codin__3dblock w-full h-full"
              data-item3d="images/3D/circle.gltf"
            >
              <div class="codein__mwrap w-full h-full">
                <canvas class="codin3d max-w-full !w-full !h-full"></canvas>
              </div>
            </div>
          </div>
          {/* <!-- <div class="page-banner-modal-block page-banner-modal-circle max-w-full w-full h-full absolute top-1/2 left-1/2 z-0 -translate-y-1/2 -translate-x-1/2 opacity-100">
          <div class="codin__3dblock w-full h-full" data-item3d="images/3D/objects.gltf">
              <div class="codein__mwrap w-full h-full">
                  <canvas class="codin3d max-w-full !w-full !h-full"></canvas>
              </div>
          </div>
      </div> --> */}
          {/* <!-- <div class="page-banner-main-title mt-auto mb-4 relative z-[1]">
          <h1 class="text-[160px] font-bold leading-none text-white text-center">
              <span class="block text-orangecx">We Are A</span>
              <span class="block">Digital Agency</span>
          </h1>
      </div> --> */}
          <div class="cust-container relative h-full">
            <div class="hero-banner-content flex flex-col justify-center relative h-full">
              <div class="hero-banner-title max-w-max mx-auto max-[1500px]:max-w-[1000px] max-[1250px]:max-w-[780px] max-[991px]:max-w-[670px] max-[767px]:max-w-[540px] max-[575px]:max-w-[335px]">
                <h1
                  class="movable split-title text-[140px] font-bold leading-none text-white uppercase max-w-max first:ml-[120px] max-[1500px]:text-[160px] max-[1500px]:first:ml-[300px] max-[1250px]:text-[130px] max-[1250px]:first:ml-[250px] max-[991px]:text-[116px] max-[991px]:first:ml-[214px] max-[767px]:text-[96px] max-[767px]:first:ml-[150px] max-[575px]:text-[68px] max-[575px]:first:ml-[70px]"
                  data-move="-3"
                  data-splitting
                >
                  <span>Multi-</span>
                </h1>
                <h1
                  class="movable split-title text-[140px] font-bold leading-none text-white uppercase max-w-max [&:nth-child(2)]:text-left [&:nth-child(2)]:text-transparent [&:nth-child(2)]:text-stroke-2 [&:nth-child(2)]:text-stroke-white max-[1500px]:text-[160px] max-[1250px]:text-[130px] max-[991px]:text-[116px] max-[767px]:text-[96px] max-[575px]:text-[68px] max-[575px]:[&:nth-child(2)]:text-stroke"
                  data-move="3"
                  data-splitting
                >
                  Disciplinary
                </h1>
                <h1
                  class="movable split-title text-[140px] font-bold leading-none text-white uppercase max-w-max [&:nth-child(3)]:ml-[80px] max-[1500px]:text-[160px] max-[1500px]:[&:nth-child(3)]:ml-[300px] max-[1250px]:text-[130px] max-[1250px]:[&:nth-child(3)]:ml-[250px] max-[991px]:text-[116px] max-[991px]:[&:nth-child(3)]:ml-[214px] max-[767px]:text-[96px] max-[767px]:[&:nth-child(3)]:ml-[250px] max-[575px]:text-[68px] max-[575px]:[&:nth-child(3)]:ml-[120px]"
                  data-move="-3"
                  data-splitting
                >
                  Designer
                </h1>
              </div>
              <div className="hero-banner-con max-w-[400px] ml-auto absolute right-[-40px] top-[71%] -translate-y-1/2 text-lg leading-snug text-orange-400 tracking-[1px] max-[1500px]:right-[80px] max-[1400px]:max-w-[320px] max-[1400px]:right-[30px] max-[1250px]:right-[-40px] max-[1024px]:text-base max-[1024px]:right-0 max-[1024px]:max-w-[280px] max-[991px]:relative max-[991px]:top-0 max-[991px]:right-auto max-[991px]:translate-y-0 max-[991px]:max-w-[320px] max-[991px]:mt-8 max-[991px]:ml-24 max-[575px]:max-w-[280px] max-[575px]:ml-8">
                <p class="split-para" data-splitting>
                  Creative Thinking And Problem Solving Are Where My Mind
                  Wanders, Using My Knowledge And Passion For Design As My
                  Medium
                </p>
              </div>
            </div>
          </div>
          <div class="page-banner-bottom-area flex items-end justify-between max-w-full w-full absolute left-0 bottom-0 px-16 pb-20">
            <div class="page-banner-time">
              <p class="text-base font-normal text-orangecx leading-none tracking-[1px] uppercase">
                India <span id="time" class="text-white"></span>{" "}
              </p>
            </div>
            <div class="banner-scroll-down-block w-[180px] h-[180px] flex items-center justify-center relative bottom-[-50px]">
              <div class="scroll-down-arrow absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                <svg
                  width="58"
                  height="58"
                  viewBox="0 0 58 58"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M43.9318 39.2487C36.6698 41.5001 29.5634 45.8106 28.8131 56.4137"
                    stroke="#F15A29"
                    stroke-width="2"
                  />
                  <path
                    d="M13.6934 39.2496C20.9554 41.501 28.0618 45.8116 28.812 56.4146"
                    stroke="#F15A29"
                    stroke-width="2"
                  />
                  <path
                    d="M28.8105 57.2826V0.00695124"
                    stroke="#F15A29"
                    stroke-width="2"
                  />
                </svg>
              </div>
              <div class="banner-scroll-down-text w-full h-full">
                <p class="[--inner-angle:calc((360/var(--char-count))*1deg);] [--character-width:1;] uppercase text-[calc(var(--font-size,1)*1.4vmin)] relative shadow-none text-white font-normal w-full h-full max-[1024px]:text-[calc(var(--font-size,1)*1.4vmin)] max-[991px]:hidden">
                  Scroll Down • Scroll Down • Scroll Down •{" "}
                </p>
                <p class="[--inner-angle:calc((360/var(--char-count))*1deg);] [--character-width:1;] uppercase text-[calc(var(--font-size,1)*1.4vmin)] relative shadow-none text-white font-normal w-full h-full max-[991px]:text-[calc(var(--font-size,1)*1.8vmin)] min-[992px]:hidden max-[767px]:text-[calc(var(--font-size,1)*2.2vmin)] max-[575px]:text-[calc(var(--font-size,1)*2.6vmin)]">
                  Scroll Down • Scroll Down • Scroll Down •{" "}
                </p>
              </div>
            </div>
            <div class="page-banner-since">
              <p class="text-base font-normal text-orangecx leading-none tracking-[1px] uppercase">
                Since <span class="text-white">2020</span>
              </p>
            </div>
          </div>
        </div>
      </section>
      <section class="our-studio-main-sec relative pt-28">
        <div class="our-studio-inner px-16">
          <div class="overview-title-area custom-sec-title mb-28 max-[575px]:mb-12">
            <h2
              class="text-[84px] font-bold leading-none text-white text-center max-[1400px]:text-[74px] max-[1250px]:text-[66px] max-[767px]:text-[54px] max-[575px]:text-[48px] mb-[10px] split-title"
              data-splitting
            >
              Welcome To <span class="text-orangecx">Our Studio!</span>
            </h2>
            <p
              class="text-lg font-normal leading-[1.2] text-white  text-center tracking-[1px] mb-2 split-para max-[991px]:text-base"
              data-splitting
            >
              We help our clients to realize the full potential of their space.
            </p>
          </div>
          <div class="our-studio-main-content">
            <div class="flex flex-wrap">
              <div class="our-studio-left-area w-1/2">
                <div class="page-banner-modal-block page-banner-modal-hexagon max-w-[500px] w-full h-[500px] -mt-8 mb-[-40px] ml-24">
                  <div
                    class="codin__3dblock w-full h-full"
                    data-item3d="images/3D/hexagon.gltf"
                  >
                    <div class="codein__mwrap w-full h-full">
                      <canvas class="codin3d max-w-full !w-full !h-full"></canvas>
                    </div>
                  </div>
                </div>
                <div class="our-studio-left-con max-w-lg">
                  <span class="our-studio-left-object text-9xl text-orangecx block max-w-max -mb-12 ml-12">
                    ✲
                  </span>
                  <p class="text-3xl leading-tight font-bold text-white tracking-[1.5px] relative">
                    We believe that the design should be both timeless and
                    meaningful, where each detail reflects a sense of quality
                    and performance.
                  </p>
                </div>
              </div>
              <div class="our-studio-right-area w-1/2">
                <div class="our-studio-right-content">
                  <div class="flex flex-wrap justify-between">
                    <div class="our-studio-right-con w-[46%] text-base leading-normal font-normal text-white tracking-[1px]">
                      <p class="mb-4">
                        Welcome to CODINFOX, your go-to destination for
                        innovative solutions in graphics and web development.
                        Whether your project resides in the public or private
                        sector, we bring a wealth of experience to the table.
                      </p>
                      <p class="mb-4">
                        As a versatile graphics and web development agency, we
                        are a team of multidisciplinary creatives who believe
                        that the fusion of aesthetics and functionality lies at
                        the core of impactful design.
                      </p>
                      <p class="mb-4">
                        Our collaboration extends beyond our in-house team to
                        include a network of experts, such as brand and graphic
                        designers, photographers, artists, and professionals
                        from diverse fields, ensuring a comprehensive and
                        innovative solution for every project.
                      </p>
                    </div>
                    <div class="our-studio-right-con w-[46%] text-base leading-normal font-normal text-white tracking-[1px]">
                      <p class="mb-4">
                        We pride ourselves on achieving a unique synthesis of
                        contemporary graphics and web development, infused with
                        classic design principles. This distinctive blend is
                        complemented by an unwavering commitment to detail and a
                        profound understanding of the spatial context.
                      </p>
                      <p class="mb-4">
                        Recognizing the unique nature of each project, we employ
                        tailored strategies to ensure the creation of highly
                        functional digital spaces that align precisely with the
                        individual needs of our clients.
                      </p>
                    </div>
                  </div>
                </div>
                <div class="our-studio-services-btn-area flex justify-end mt-32 pr-16">
                  <a
                    href="javascript:void(0)"
                    class="our-studio-services-btn flex items-start"
                  >
                    <p class="text-xl font-medium leading-tight text-white tracking-[1px]">
                      <sup class="text-orangecx">(2a)</sup> That's why we offer
                      a full{" "}
                      <span class="block">
                        range of Services. <u>Discover</u>
                      </span>
                    </p>
                    <span class="flex ml-2.5 -mt-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 14 14"
                        fill="none"
                      >
                        <path
                          d="M7 1V13M13 7L1 7"
                          stroke-width="1"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          class="stroke-orangecx"
                        />
                      </svg>
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
