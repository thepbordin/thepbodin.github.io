import { React, useRef, useEffect } from "react";
import memoji from "../img/memoji.png";

import myimgRounded from "../img/myimg-rounded.png";
import NavArrow from "../components/NavArrow";
function Intro() {
  const animatedElement = useRef(null);
  function handleScroll() {
    console.log(window.scrollY);
    const scrollPosition = window.scrollY;

    const triggerPosition = 140;


    if (scrollPosition > triggerPosition) {
      animatedElement.current.classList.add("anim");

    } else {
      animatedElement.current.classList.remove("anim");

    }
  }

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <div className=" mb-20 flex flex-col items-center justify-center gap-10 lg:flex-row">
        {/* Head */}
        <div className="relative flex h-[250px] w-[250px] items-center justify-center rounded-full bg-white shadow-apple">
          <img src={memoji} className="myimg w-[60%]" alt="" />
          <div className="mypic-frame absolute h-[220px] w-[220px] overflow-hidden rounded-full">
            <img
              src={myimgRounded}
              className="mypic"
              ref={animatedElement}
              alt="profile_pic"
            />
          </div>
          <div className="z-3 absolute bottom-0 right-0 flex h-[80px] w-[80px] items-center justify-center rounded-full bg-white text-5xl shadow-apple">
            <span>🚀</span>
          </div>
        </div>

        {/* Introdution */}
        <div className="intro-container max-w-full rounded-[30px] bg-white px-10 py-8 shadow-apple transition-colors duration-300 lg:max-w-[50%] ">
          <h3 className="block text-2xl font-medium">
            👨🏻‍💻 I am a <span className="student inline-block w-[60%]"></span>{" "}
          </h3>

          <p className="my-2 font-inter text-grayed">
            I just graduated high school and now I'm super excited to be
            starting my college journey at Chulalongkorn University, studying
            computer engineering and digital technology (CEDT). Looking forward
            to what the future holds!
          </p>
          <a
            href="https://github.com/thepbordin/"
            rel="noreferrer noopener"
            target="_blank"
            className="link font-medium hover:underline"
          >
            Take me to the GitHub Profile <NavArrow />
          </a>
        </div>
      </div>
    </>
  );
}

export default Intro;
