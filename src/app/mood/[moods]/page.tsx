"use client";
import Image from "next/image";
// import { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import moodData from "@/lib/mood-data";
import igm from "../../../../public/vercel.svg";

const MoodPage = () => {
  console.log(moodData);
  const params = useParams();
  console.log(params);
  const moodName = params.moods;
  console.log(moodName);
  //   console.log(moodData.find((mood) => mood.name === params.moods));
  const currentMoodData = moodData.find((mood) => mood.name === moodName);
  console.log(currentMoodData);

  return (
    <div className="">
      <div className="container">
        <div className="image-area">
          <Image src={igm} alt="video" />
        </div>
        <div className="details-area">
          <div className="destination-name">
            <h2>{currentMoodData?.place.name}</h2>
          </div>
          <div className="description">
            <p>ths: {currentMoodData?.place.description}</p>
          </div>
        </div>
        <div className="controls">
          <div className="back-button">
            <button>back</button>
          </div>
          <div className="hide-button">
            <button>hide</button>
          </div>
          <div className="next-button">
            <button>next</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MoodPage;
