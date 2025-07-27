import React, { use, useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import "remixicon/fonts/remixicon.css";

const App = () => {
  const [showContent, setShowContent] = useState(false);

  useGSAP(() => {
    const tl = gsap.timeline();

    tl.to(".vi-mask-group", {
      rotate: 10,
      duration: 2,
      ease: "Power4.easeInOut",
      transformOrigin: "50% 50%",
    }).to(".vi-mask-group", {
      scale: 10,
      duration: 2,
      delay: -1.8,
      ease: "Expo.easeInOut",
      transformOrigin: "50% 50%",
      opacity: 0,
      onUpdate: function () {
        if (this.progress() >= 0.9) {
          document.querySelector(".svg").remove();
          setShowContent(true);
          this.kill();
        }
      },
    });
  });

  useGSAP(() => {
    if (!showContent) return;

    gsap.to(".main", {
      scale: 1,
      rotate: 0,
      duration: 2,
      delay: -0.8,
      ease: "Expo.easeInOut",
    });
    gsap.to(".sky", {
      scale: 1.1,
      rotate: 0,
      duration: 2,
      delay: -0.8,
      ease: "Expo.easeInOut",
    });
    gsap.to(".bg", {
      scale: 1.1,
      rotate: 0,
      duration: 2,
      delay: -0.8,
      ease: "Expo.easeInOut",
    });

    gsap.to(".girl", {
      scale: 0.82,
      x: "-50%",
      bottom: "-55%",
      rotate: 0,
      duration: 2,
      delay: -0.8,
      ease: "Expo.easeInOut",
    });
    gsap.to(".text", {
      scale: 1,
      rotate: 0,
      duration: 2,
      delay: -0.8,
      ease: "Expo.easeInOut",
    });

    const main = document.querySelector(".main");
    const skyElement = document.querySelector(".sky");
    const bg = document.querySelector(".bg");
    main?.addEventListener("mousemove", function (e) {
      const xMove = (e.clientX / window.innerWidth - 0.5) * 40;
      gsap.to(".main .text", {
        x: `${xMove * 0.4}%`,
      });

      gsap.to(skyElement, {
        x: xMove,
      });
      gsap.to(bg, {
        x: xMove * 1.7,
      });
    });
  }, [showContent]);

  return (
    <>
      <div className="svg flex items-center justify-center fixed top-0 left-0 z-[2] w-full h-screen overflow-hidden bg-[#000]">
        <svg viewBox="0 0 800 600" preserveAspectRatio="xMidYMid slice">
          <defs>
            <mask id="viMask">
              <rect width="100%" height="100%" fill="black" />
              <g className="vi-mask-group">
                <text
                  x="50%"
                  y="50%"
                  fontSize="250"
                  textAnchor="middle"
                  fill="white"
                  dominantBaseline="middle"
                  fontFamily="Arial Black"
                >
                  VI
                </text>
              </g>
            </mask>
          </defs>
          <image
            href="./bg.png"
            width="100%"
            height="100%"
            preserveAspectRatio="xMidYMid slice"
            mask="url(#viMask)"
          />
        </svg>
      </div>

      {showContent && (
        <div className="main w-full  bg-black rotate-[-10deg] scale-[1.7]">
          <div className="landing overflow-hidden relative w-full h-screen bg-black">
            <div className="navbar absolute top-0 left-0 z-[10] w-full py-8 px-8 flex justify-between">
              <div className="logo flex gap-5">
                <div className="lines flex flex-col gap-[4px]">
                  <div className="line w-10 h-1 bg-white"></div>
                  <div className="line w-7 h-1 bg-white"></div>
                  <div className="line w-4 h-1 bg-white"></div>
                </div>
                <h3 className="text-xl -mt-[5.2124px] leading-none text-white">
                  Rockstar
                </h3>
              </div>
              <div className="left flex gap-2 ">
                <a className="-mt-[5.2124px]" href="https://github.com/omkar-uni">
                  <i class="text-white  leading-none text-2xl ri-github-fill"></i>
                </a>
                <a className="-mt-[5.2124px]" href="https://www.linkedin.com/in/omkar-lonkar-030146225/">
                  <i class="text-white  leading-none text-2xl ri-linkedin-box-fill"></i>
                </a>
              </div>
            </div>

            <div className="images overflow-hidden relative w-full h-screen">
              <img
                className="absolute sky scale-[1.5] rotate-[-20deg] top-0 left-0 w-full h-full object-cover"
                src="./sky.png"
                alt=""
              />
              <img
                className="absolute bg scale-[2] rotate-[-3deg] top-0 left-0 w-full h-full object-cover"
                src="./bg.png"
                alt=""
              />

              <div className="text text-white flex flex-col gap-1.5 absolute top-5 left-1/2 -translate-x-1/2 scale-[2] rotate-[-10deg]">
                <h1 className="text-[7.5rem] leading-none -ml-20">grand</h1>
                <h1 className="text-[7.5rem] leading-none ml-20">theft</h1>
                <h1 className="text-[7.5rem] leading-none -ml-20">auto</h1>
              </div>

              <img
                className="absolute girl -bottom-[175%] left-1/2 -translate-x-1/2 scale-[2] rotate-[-20deg]"
                src="./girlbg.png"
                alt=""
              />
            </div>

            <div className="btmbar text-white absolute bottom-0 left-0 w-full py-8 px-5 bg-gradient-to-t from-black to-transparent">
              <div className="flex gap-3 items-center">
                <i class="text-2xl ri-arrow-down-line"></i>
                <h3 className="text-xsm font-[sans-serif]">Scroll Down</h3>
              </div>

              <img
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[33px]"
                src="./ps5.png"
                alt=""
              />
            </div>
          </div>
          <div className="w-full h-screen px-10 bg-black flex items-center justify-center">
            <div className="cntnr flex justify-around items-center text-white w-full h-[80%]">
              <div className="limg relative w-1/2 h-full">
                <img
                  className="absolute scale-[0.8] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                  src="./imag.png"
                  alt=""
                />
              </div>
              <div className="rg w-[30%]">
                <h1 className="text-6xl">Still Running,</h1>
                <h1 className="text-6xl">Not Hunting</h1>
                <p className="mt-10 text-sm font-[sans-serif]">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. In
                  excepturi iusto consequuntur, ipsam soluta repellendus, cum at
                  laudantium labore, ex quaerat impedit architecto temporibus?
                </p>
                <p className="mt-3 text-sm font-[sans-serif]">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Debitis odio possimus vel alias, ipsum sunt error iure,
                  impedit architecto similique porro quidem eos. Perspiciatis
                  alias aliquam mollitia sunt ea quos est iusto unde consequatur
                  quasi?
                </p>
                <p className="mt-10 text-sm font-[sans-serif]">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Debitis odio possimus vel alias, ipsum sunt error iure,
                  impedit architecto similique porro quidem eos. Perspiciatis
                  alias aliquam mollitia sunt ea quos est iusto unde consequatur
                  quasi?
                </p>
                <button className="bg-yellow-400 text-black px-8 py-4 text-xl mt-5">
                  Download Now
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default App;
