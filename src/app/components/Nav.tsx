import React from "react";
import Logo from "../../../public/beach icon.png";
import Image from "next/image";
import Link from "next/link";

const Nav = () => {
  return (
    <div className="nav">
      <div className="nav-wrapper">
        <Link href="/" className="logo">
          <Image src={Logo} alt="logo" width={60} height={60} />
        </Link>
        <div className="path-name">
          <h3>TravelMoods</h3>
        </div>
        <Link href="/" className="edit-mood">
          Edit Mood
        </Link>
      </div>
    </div>
  );
};

export default Nav;
