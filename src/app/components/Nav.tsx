"use client";
import React from "react";
import Logo from "../../../public/beach icon.png";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Nav = () => {
  const route = usePathname();
  const isHomePage = route === "/";

  return (
    <div className="nav">
      <div className="nav-wrapper">
        <Link href="/" className="logo">
          <Image src={Logo} alt="logo" />
        </Link>
        <div className="path-name">
          <h3>TravelMoods</h3>
        </div>
        <Link
          href="/"
          className="edit-mood"
          style={{
            opacity: isHomePage ? 0 : 1,
          }}
        >
          Edit Mood
        </Link>
      </div>
    </div>
  );
};

export default Nav;
