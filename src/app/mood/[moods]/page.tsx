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
  //   console.log(moodName);
  //   console.log(moodData.find((mood) => mood.name === params.moods));
  const currentMoodData = moodData.find((mood) => mood.name === moodName);
  //   console.log(currentMoodData);
  // const getPlaces = (moodName: string) => {
  //     return moodData.find((mood) => mood.name === moodName)?.place;
  // };
  const getPlaces = (moodName: string | string[]) => {
    if (Array.isArray(moodName)) {
      // If moodName is an array, return places for all moods in the array
      return moodName.flatMap(
        (mood) =>
          moodData.find((moodData) => moodData.name === mood)?.places ?? []
      );
    } else {
      // If moodName is a single string, return places for that mood
      return (
        moodData.find((moodData) => moodData.name === moodName)?.places ?? []
      );
    }
  };

  const places = getPlaces(moodName);

  return (
    <div className="">
      <div className="container">
        {places.map((place, index) => (
          <>
            <div className="image-area" key={index}>
              <Image src={igm} alt="video" />
            </div>
            <div className="details-area">
              <div className="destination-name">
                <h2>{place.name}</h2>
              </div>
              <div className="description">
                <p>ths: {place.description}</p>
              </div>
            </div>
          </>
        ))}
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
