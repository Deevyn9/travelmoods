"use client";
import { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import moodData from "@/lib/mood-data";

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
    const places = getPlaces(moodName);
    setPlaces(places);
  }, [moodName]);

  const handleNext = () => {
    setCurrentIndex((currentIndex + 1) % places.length);
  };

  const handleBack = () => {
    setCurrentIndex((currentIndex - 1 + places.length) % places.length);
  };

  const handleHide = () => {
    const newPlaces = places.filter((place, index) => index !== currentIndex);
    setPlaces(newPlaces);
    setCurrentIndex(0);
  };

  const isNextDisabled = currentIndex >= places.length - 1;
  const isBackDisabled = currentIndex === 0;

  return (
    <div className="">
      <div className="container">
        <div className="destinations">
          {places.length > 0 && (
            <div key={currentIndex}>
              <div className="image-area">
                {/* <Image src={igm} alt="video" /> */}
              </div>
              <div className="details-area">
                <div className="destination-name">
                  <h2>
                    {places[currentIndex] ? places[currentIndex].name : ""}
                  </h2>
                </div>
                <div className="description">
                  <p>
                    {places[currentIndex]
                      ? places[currentIndex].description
                      : ""}
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
        <div className="controls">
          <div className="back-button">
            <button onClick={() => handleBack()} disabled={isBackDisabled}>
              back
            </button>
          </div>
          <div className="hide-button">
            <button onClick={() => handleHide()}>hide</button>
          </div>
          <div className="next-button">
            <button onClick={() => handleNext()} disabled={isNextDisabled}>
              next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MoodPage;
