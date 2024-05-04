import React from "react";

const MoodButtons = [
  {
    moodname: "Adventrous",
    path: "#",
  },
  {
    moodname: "Relaxed",
    path: "#",
  },
  {
    moodname: "Exotic",
    path: "#",
  },
  {
    moodname: "Playful",
    path: "#",
  },
  {
    moodname: "Wild",
    path: "#",
  },
  {
    moodname: "Spiritual",
    path: "#",
  },
  {
    moodname: "Romantic",
    path: "#",
  },
  {
    moodname: "Vibrant",
    path: "#",
  },
  {
    moodname: "Scenic",
    path: "#",
  },
  {
    moodname: "Independent",
    path: "#",
  },
  {
    moodname: "Spontaneous",
    path: "#",
  },
  {
    moodname: "Epicurean",
    path: "#",
  },
  {
    moodname: "Urban",
    path: "#",
  },
  {
    moodname: "Coastal",
    path: "#",
  },
  {
    moodname: "Reverence",
    path: "#",
  },
  {
    moodname: "Natural",
    path: "#",
  },
  {
    moodname: "Vagabond",
    path: "#",
  },
  {
    moodname: "Wanderlust",
    path: "#",
  },
];

const Hero = () => {
  return (
    <div className="hero">
      <div className="hero-header">
        <h1>Discover great vacation destinations based on your mood</h1>
      </div>
      <div className="hero-paragraph">
        <p>How are you feeling?</p>
      </div>
      <div className="mood-buttons">
        {MoodButtons.map((moodButton, i) => (
          <a href="#" key={i}>
            {moodButton.moodname}
          </a>
        ))}
      </div>
    </div>
  );
};

export default Hero;
