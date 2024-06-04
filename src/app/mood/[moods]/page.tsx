"use client";
import Image from "next/image";
import { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import moodData from "@/lib/mood-data";
import igm from "../../../../public/vercel.svg";

const MoodPage = () => {
  const params = useParams();
  const moodName = params.moods;
  const [places, setPlaces] = useState<{ name: string; description: string }[]>(
    []
  );
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const getPlaces = (moodName: string | string[]) => {
      if (Array.isArray(moodName)) {
        return moodName.flatMap(
          (mood) =>
            moodData.find((moodData) => moodData.name === mood)?.places ?? []
        );
      } else {
        return (
          moodData.find((moodData) => moodData.name === moodName)?.places ?? []
        );
      }
    };
    const shuffledPlaces = getPlaces(moodName).sort(() => Math.random() - 0.5);
    setPlaces(shuffledPlaces);
  }, [moodName, currentIndex]);

  const handleNext = () => {
    setCurrentIndex(currentIndex + 1);
  };

  const handleBack = () => {
    setCurrentIndex(currentIndex - 1);
  };

  return (
    <div className="">
      <div className="container">
        <div className="destinations">
          {places.map((place, index) => (
            <div key={index}>
              <div className="image-area">
                {/* <Image src={igm} alt="video" /> */}
              </div>
              <div className="details-area">
                <div className="destination-name">
                  <h2>{place.name}</h2>
                </div>
                <div className="description">
                  <p>{place.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="controls">
          <div className="back-button">
            <button onClick={() => handleBack()}>back</button>
          </div>
          <div className="hide-button">
            <button>hide</button>
          </div>
          <div className="next-button">
            <button onClick={() => handleNext()}>next</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MoodPage;
