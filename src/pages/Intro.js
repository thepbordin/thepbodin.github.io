import React from "react";
import memoji from "../img/memoji.png";
import NavArrow from "../components/NavArrow";
import { useState } from "react";
function Intro() {
  const learnerStyle = {};
  return (
    <>
      <div className="mb-20 flex flex-col items-center justify-center gap-10 lg:flex-row">
        {/* Head */}
        <div className="relative flex h-[250px] w-[250px] items-center justify-center rounded-full bg-gray-300 shadow-apple">
          <img src={memoji} className="w-[60%]" alt="" />
          <div className="absolute bottom-0 right-0 flex h-[80px] w-[80px] items-center justify-center rounded-full bg-white text-5xl shadow-apple">
            <span>🚀</span>
          </div>
        </div>

        {/* Introdution */}
        <div
          className="intro-container max-w-[100%] rounded-[30px] bg-white px-10 py-8 shadow-apple transition-colors duration-300 lg:max-w-[50%] xl:max-w-[35%]"
          // style={
          //   isLeaner ? { backgroundColor: "#" } : { backgroundColor: "#fff" }
          // }
        >
          <h3 className="inline text-2xl font-semibold drop-shadow-2xl">
            👨🏻‍💻 I am a{" "}
            <span
              // style={isLeaner ? learnerStyle : null}
              className="student"
            ></span>{" "}
          </h3>

          <p className="my-2 font-inter text-grayed">
            I just graduated high school and now I'm super excited to be
            starting my college journey at Chulalongkorn University, studying
            computer engineering and digital technology (CEDT). Looking forward
            to what the future holds!
          </p>
          <a
            href="https://www.chula.ac.th/en/"
            rel="noreferrer noopener"
            target="_blank"
            className="link font-medium hover:underline"
          >
            Take me to the Chulalongkorn University <NavArrow />
          </a>
        </div>
      </div>
    </>
  );
}

export default Intro;
