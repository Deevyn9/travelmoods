import React from "react";
import Logo from "../../../public/logo.jpg";
import Image from "next/image";
import Link from "next/link";

const Nav = () => {
  return (
    <div className="nav">
      <div className="nav-wrapper">
        <Link href="/" className="logo">
          <Image src={Logo} alt="logo" width={50} height={50} />
        </Link>
        <div className="path-name">
          <h3>TravelMood</h3>
        </div>
        <Link href="/" className="edit-mood">
          Edit Mood
        </Link>
      </div>
    </div>
  );
};

export default Nav;
