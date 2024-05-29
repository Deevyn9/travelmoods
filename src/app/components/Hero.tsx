import React from "react";
import Link from "next/link";

const Moods = [
  {
    name: "Adventurous",
    path: "#",
  },
  {
    name: "Relaxed",
    path: "#",
  },
  {
    name: "Exotic",
    path: "#",
  },
  {
    name: "Playful",
    path: "#",
  },
  {
    name: "Wild",
    path: "#",
  },
  {
    name: "Spiritual",
    path: "#",
  },
  {
    name: "Romantic",
    path: "#",
  },
  {
    name: "Vibrant",
    path: "#",
  },
  {
    name: "Scenic",
    path: "#",
  },
  {
    name: "Independent",
    path: "#",
  },
  {
    name: "Spontaneous",
    path: "#",
  },
  {
    name: "Epicurean",
    path: "#",
  },
  {
    name: "Urban",
    path: "#",
  },
  {
    name: "Coastal",
    path: "#",
  },
  {
    name: "Reverence",
    path: "#",
  },
  {
    name: "Guilty",
    path: "#",
  },
  {
    name: "Vagabond",
    path: "#",
  },
  {
    name: "Wanderlust",
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
        {Moods.map((mood, i) => (
          <Link href={`/mood/${mood.name}`} key={i}>
            {mood.name}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Hero;
