import Image from "next/image";
import { useState, useEffect } from "react";
import moodData from "@/lib/mood-data";

const MoodPage = () => {
  return (
    <div className="">
      <div className="container">
        <div className="image-area">
          <Image src="" alt="video" />
        </div>
        <div className="details-area">
          <div className="destination-name">
            <h2>Lorem ipsum dolor sit amet consectetur.</h2>
          </div>
          <div className="description">
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Est
              minima qui deserunt, repudiandae in aperiam ducimus consectetur.
              Ullam, nihil. Hic?
            </p>
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
