import React from "react";
import NavArrow from "../components/NavArrow";
import streamlit from "../img/streamlit.png";
function Activities() {
  return (
    <>
      <h3 className="my-5 text-2xl font-medium">My Recent Activities</h3>
      {/* Activities Cards Container */}
      <div className="flex max-w-full flex-col"> 

        <div className="flex flex-col items-center justify-between rounded-[30px] px-10 py-8 shadow-apple lg:flex-row gap-10">
          <div className="lg:w-1/2">
            <h5 className="text-grayed">June 2023</h5>
            <h4 className="text-xl font-medium">
              Streamlit Template for YOLOv5 Model Deploying
            </h4>
            <p className="my-2 text-grayed">
              I just graduated high school and now I'm super excited to be
              starting my college journey at Chulalongkorn University, studying
              computer engineering and digital technology (CEDT). Looking
              forward to what the future holds!
            </p>
            <a
              href="https://www.chula.ac.th/en/"
              rel="noreferrer noopener"
              target="_blank"
              className="link font-medium hover:underline"
            >
              Github Repository <NavArrow />
            </a>
          </div>
          <div className="grid aspect-square h-[160px] place-items-center rounded-[30px] bg-gray-300 object-cover shadow-apple">
            <img src={streamlit} className="scale-90" alt="" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Activities;
