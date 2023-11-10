import React from "react";
import NavArrow from "../components/NavArrow";
import streamlit from "../img/streamlit.png";
import obstacle from "../img/ante-hamersmit-U3AKT6ryvic-unsplash.jpg"
function Activities() {
  const Activity_card = ({ title, date, desc, repo, img, sty }) => {
    return (
      <div className="flex flex-col items-center justify-between gap-10 rounded-[30px] px-10 py-8 shadow-apple sm:flex-row">
        <div className="">
          <h5 className="text-grayed">{date}</h5>
          <h4 className="text-xl font-medium">{title}</h4>
          <p className="mb-2 text-grayed">{desc}</p>
          <a
            href={repo}
            rel="noreferrer noopener"
            target="_blank"
            className="link font-medium hover:underline"
          >
            Github Repository <NavArrow />
          </a>
        </div>
        <div className="grid aspect-square h-[160px] place-items-center rounded-[30px] bg-gray-200 object-cover shadow-apple overflow-hidden">
          <img src={img} className={`scale-100 object-cover ${sty}`} alt="" />{" "}
          {/*hover:scale-105 transition-all duration-150 ease-out */}
        </div>
      </div>
    );
  };
  return (
    <>
      <h3 className="my-5 mt-10 text-2xl font-medium">My Recent Projects</h3>
      {/* Activities Cards Container */}
      <div className="flex max-w-full flex-col gap-5">
        {/* Cards */}
        <Activity_card
          date="June · 2022"
          title="Streamlit Template for YOLOv5 Model Deploying"
          desc="A streamlit framework template for YOLOv5 model deploying."
          repo="https://github.com/thepbordin/YOLOv5-Streamlit-Deployment"
          img={streamlit}
          sty=""
        />
        <Activity_card
          date="June · 2022"
          title="Indoor Obstacle Detection by YOLOv5"
          desc="An object detection model to improve the lives of visually impaired individuals."
          repo="https://github.com/thepbordin/Obstacle-Detection-for-Blind-people"
          img={obstacle}
          sty="h-full"
        />
      </div>
    </>
  );
}

export default Activities;
