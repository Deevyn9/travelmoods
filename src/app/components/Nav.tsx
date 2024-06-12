"use client";
import React, { useEffect, useState } from "react";
import Logo from "../../../public/beach icon.png";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import moodsData from "@/lib/mood-data";

const Nav = () => {
  const route = usePathname();
  const isHomePage = route === "/";
  const mood = moodsData.find((mood) => route.includes(mood.name));
  const [emojiIndex, setEmojiIndex] = useState(0);

  let title;
  if (isHomePage) {
    title = "TravelMoods";
  } else if (mood) {
    title = `Feeling ${mood.emoji} ${mood.name}`;
  } else {
    title = "";
  }

  const emojis = ["🔥", "🦁", "🌺", "😴", "🏃‍♂"];

  useEffect(() => {
    const intervalId = setInterval(() => {
      setEmojiIndex((emojiIndex + 1) % emojis.length);
    }, 1000);
    return () => clearInterval(intervalId);
  }, [emojis.length, emojiIndex]);

  return (
    <div className="nav">
      <div className="nav-wrapper">
        <Link href="/" className="logo">
          <Image src={Logo} alt="logo" />
        </Link>
        <div className="path-name">
          <h3>{title}</h3>
        </div>
        <Link
          href="/"
          className="edit-mood"
          style={{
            opacity: isHomePage ? 0 : 1,
          }}
        >
          <span>{emojis[emojiIndex]} Edit Mood</span>
        </Link>
      </div>
    </div>
  );
};

export default Nav;
