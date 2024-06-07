import React from "react";
import Link from "next/link";

const Moods = [
  {
    name: "Adventurous",
    emoji: "🏃‍♂ ",
  },
  {
    name: "Relaxed",
    emoji: "😴 ",
  },
  {
    name: "Exotic",
    emoji: "🌺 ",
  },
  {
    name: "Playful",
    emoji: "🤹 ",
  },
  {
    name: "Wild",
    emoji: "🦁 ",
  },
  {
    name: "Spiritual",
    emoji: "☯ ",
  },
  {
    name: "Romantic",
    emoji: "❤ ",
  },
  {
    name: "Vibrant",
    emoji: "🔥 ",
  },
  {
    name: "Scenic",
    emoji: "🗻 ",
  },
  {
    name: "Independent",
    emoji: "💃 ",
  },
  {
    name: "Spontaneous",
    emoji: "🎉 ",
  },
  {
    name: "Epicurean",
    emoji: "🤯 ",
  },
  {
    name: "Urban",
    emoji: "🚕 ",
  },
  {
    name: "Coastal",
    emoji: "🐠 ",
  },
  {
    name: "Reverence",
    emoji: "🙏 ",
  },
  {
    name: "Guilty",
    emoji: "🙊 ",
  },
  {
    name: "Vagabond",
    emoji: "🚶 ",
  },
  {
    name: "Wanderlust",
    emoji: "🛫 ",
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
            <span>{mood.emoji}</span>
            {mood.name}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Hero;
