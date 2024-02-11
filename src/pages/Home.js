import React from "react";
import circle from "../assets/Images/3D/FabConvert.com_circle.gif";

const Home = () => {
  return (
    <>
      <div class="cursor cursor--small"></div>
      <div class="cursor cursor--line"></div>

      <div class="main-page viewport" id="mainPage">
        <div class="scroll-container" id="scroll-container">
          <section className="hero-banner-main-sec movable-elements-wrapper pt-[114px] pb-[250px] overflow-hidden bg-no-repeat bg-center-top bg-cover z-[2] before:content-[''] before:w-[250px] before:h-[250px] before:block before:absolute before:left-[24%] before:top-[100px] before:[background:linear-gradient(135deg,_var(--white)_0%,_var(--white)_50.52%,_var(--white)_100%);] before:blur-[250px] before:opacity-100 before:z-0 before:rounded-full max-[1500px]:pb-[160px] max-[1250px]:pt-24 max-[1250px]:pb-[120px] max-[991px]:pt-[110px] max-[991px]:pb-[110px] max-[767px]:pt-[260px] max-[767px]:pb-[340px] max-[575px]:pt-[190px] max-[575px]:pb-[270px] bg-banner-pattern">
            <div className="cust-container relative">
              <div className="hero-banner-inner flex flex-col justify-center relative z-[1] h-[calc(100vh-114px)] max-[767px]:h-auto">
                <div className="hero-banner-content relative">
                  <div className="hero-banner-title max-w-[1224px] mx-auto max-[1500px]:max-w-[1000px] max-[1250px]:max-w-[780px] max-[991px]:max-w-[670px] max-[767px]:max-w-[540px] max-[575px]:max-w-[335px]">
                    <h1
                      className="movable split-title text-[200px] font-bold leading-none text-white first:ml-[360px] max-[1500px]:text-[160px] max-[1500px]:first:ml-[300px] max-[1250px]:text-[130px] max-[1250px]:first:ml-[250px] max-[991px]:text-[116px] max-[991px]:first:ml-[214px] max-[767px]:text-[96px] max-[767px]:first:ml-[150px] max-[575px]:text-[68px] max-[575px]:first:ml-[70px]"
                      data-move="-3"
                      data-splitting
                    >
                      <span>The Studio</span>
                    </h1>
                    <h1
                      className="movable split-title text-[200px] font-bold leading-none text-white [&:nth-child(2)]:text-left [&:nth-child(2)]:text-transparent [&:nth-child(2)]:text-stroke-2 [&:nth-child(2)]:text-stroke-white max-[1500px]:text-[160px] max-[1250px]:text-[130px] max-[991px]:text-[116px] max-[767px]:text-[96px] max-[575px]:text-[68px] max-[575px]:[&:nth-child(2)]:text-stroke"
                      data-move="3"
                      data-splitting
                    >
                      That Builds
                    </h1>
                    <h1
                      className="movable split-title text-[200px] font-bold leading-none text-white [&:nth-child(3)]:ml-[360px] max-[1500px]:text-[160px] max-[1500px]:[&:nth-child(3)]:ml-[300px] max-[1250px]:text-[130px] max-[1250px]:[&:nth-child(3)]:ml-[250px] max-[991px]:text-[116px] max-[991px]:[&:nth-child(3)]:ml-[214px] max-[767px]:text-[96px] max-[767px]:[&:nth-child(3)]:ml-[250px] max-[575px]:text-[68px] max-[575px]:[&:nth-child(3)]:ml-[120px]"
                      data-move="-3"
                      data-splitting
                    >
                      Brands.
                    </h1>
                  </div>
                  <div className="hero-banner-con max-w-[400px] ml-auto absolute right-[-40px] top-[53%] -translate-y-1/2 text-2xl leading-[30px] text-orangecx tracking-[1px] max-[1500px]:right-[80px] max-[1400px]:max-w-[320px] max-[1400px]:right-[30px] max-[1250px]:right-[-40px] max-[1024px]:text-base max-[1024px]:right-0 max-[1024px]:max-w-[280px] max-[991px]:relative max-[991px]:top-0 max-[991px]:right-auto max-[991px]:translate-y-0 max-[991px]:max-w-[320px] max-[991px]:mt-8 max-[575px]:max-w-[280px] max-[575px]:ml-8">
                    <p className="split-para" data-splitting>
                      With every single one of our clients, we bring forth a
                      deep passion for creative problem solving
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="hero-banner-modal-block hero-banner-modal-triangle max-w-[700px] w-full h-[700px] absolute right-0 bottom-0 z-[1] max-[1750px]:max-w-[600px] max-[1750px]:h-[600px] max-[1500px]:max-w-[500px] max-[1500px]:h-[500px] max-[1400px]:max-w-[400px] max-[1400px]:h-[400px] max-[767px]:max-w-[300px] max-[767px]:h-[300px] max-[767px]:bottom-[80px] max-[575px]:max-w-[200px] max-[575px]:h-[200px] max-[575px]:bottom-[110px]">
              <div
                className="codin__3dblock w-full h-full"
                data-item3d="images/3D/triangle.gltf"
              >
                <div className="codein__mwrap w-full h-full">
                  <canvas className="codin3d max-w-full !w-full !h-full"></canvas>
                </div>
              </div>
            </div>
            <div className="hero-banner-modal-block hero-banner-modal-circle max-w-[300px] w-full h-[300px] absolute top-[110px] left-[120px] z-[1] max-[1750px]:left-[60px] max-[1400px]:max-w-[250px] max-[1400px]:h-[250px] max-[1250px]:max-w-[220px] max-[1250px]:h-[220px] max-[767px]:max-w-[180px] max-[767px]:h-[180px] max-[767px]:top-[90px] max-[767px]:left-[130px] max-[575px]:max-w-[150px] max-[575px]:h-[150px] max-[575px]:top-[108px] max-[575px]:left-[30px]">
              <img
                src={circle}
                className="codin__3dblock w-full h-full"
                alt="Circle"
              />
              <div className="codein__mwrap w-full h-full">
                <canvas className="codin3d max-w-full !w-full !h-full"></canvas>
              </div>
            </div>

            <div className="banner-scroll-down-block absolute bottom-[12%] left-[15%] w-[230px] h-[230px] flex items-center justify-center max-[1500px]:bottom-[5%] max-[1250px]:bottom-[-1%] max-[1250px]:left-[9%] max-[1024px]:w-[190px] max-[1024px]:h-[190px] max-[1024px]:bottom-[1%] max-[767px]:w-[170px] max-[767px]:h-[170px] max-[767px]:bottom-[4%] max-[575px]:w-[130px] max-[575px]:h-[130px] max-[575px]:left-[7%] max-[575px]:bottom-[6%]">
              <div className="scroll-down-arrow absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
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
                    strokeWidth="2"
                  />
                  <path
                    d="M13.6934 39.2496C20.9554 41.501 28.0618 45.8116 28.812 56.4146"
                    stroke="#F15A29"
                    strokeWidth="2"
                  />
                  <path
                    d="M28.8105 57.2826V0.00695124"
                    stroke="#F15A29"
                    strokeWidth="2"
                  />
                </svg>
              </div>
              <div className="banner-scroll-down-text w-full h-full">
                <p className="[--inner-angle:calc((360/var(--char-count))*1deg);] [--character-width:1;] uppercase text-[calc(var(--font-size,1)*1.4vmin)] relative shadow-none text-white font-normal w-full h-full max-[1024px]:text-[calc(var(--font-size,1)*1.4vmin)] max-[991px]:hidden">
                  Scroll Down • Scroll Down • Scroll Down • Scroll Down •{" "}
                </p>
                <p className="[--inner-angle:calc((360/var(--char-count))*1deg);] [--character-width:1;] uppercase text-[calc(var(--font-size,1)*1.4vmin)] relative shadow-none text-white font-normal w-full h-full max-[991px]:text-[calc(var(--font-size,1)*1.8vmin)] min-[992px]:hidden max-[767px]:text-[calc(var(--font-size,1)*2.2vmin)] max-[575px]:text-[calc(var(--font-size,1)*2.6vmin)]">
                  Scroll Down • Scroll Down • Scroll Down •{" "}
                </p>
              </div>
            </div>
          </section>
          <div class="hero-banner-shadow-bg1 max-w-[500px] max-h-[500px] w-full h-full block absolute right-[24%] top-[440px] [background:linear-gradient(135deg,_var(--orange)_0%,_var(--orange)_50.52%,_var(--orange)_100%);] blur-[250px] opacity-60 z-[1] rounded-full max-[1250px]:max-w-[400px] max-[1250px]:max-h-[400px] max-[1250px]:top-[340px] max-[991px]:max-w-[300px] max-[991px]:max-h-[300px] max-[991px]:right-[20%] max-[991px]:top-[380px] max-[991px]:opacity-80 max-[767px]:max-w-[200px] max-[767px]:max-h-[150px] max-[767px]:right-[14%] max-[767px]:top-[320px] max-[767px]:opacity-100"></div>
        </div>
      </div>
    </>
  );
};

export default Home;
