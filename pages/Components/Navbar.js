import Image from "next/image";
import React from "react";
import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [dropdown, setDropdown] = useState(false);

  const Logo = (props) => {
    return (
      <span className="logo">
        <Image src={props.src} height={40} width={40} alt={props.alt} />
      </span>
    );
  };

  if (dropdown) {
    return (
      <div className="navbar-container">
        <ul className="navbar navbar-vertical black flex-column">
          <span
            onClick={() => {
              setDropdown(!dropdown);
            }}
            className="navlink-head"
          >
            Vinay
            <div>v</div>
          </span>
          <span className="navlink">
            <Link href="#code" scroll={false}>
              CODE
            </Link>
          </span>
          <span className="navlink">
            <Link href="#artwork" scroll={false} className="navlink">
              ARTWORK
            </Link>
          </span>
          <span className="navlink">
            <Link href="#resume" scroll={false} className="navlink">
              RESUME
            </Link>
          </span>
          <span className="navlink">
            <Link href="#contact" scroll={false} className="navlink">
              GITHUB
            </Link>
          </span>
          <span className="navlink">
            <Link href="#contact" scroll={false} className="navlink">
              LINKEDIN
            </Link>
          </span>
          <span className="navlink">
            <Link href="#contact" scroll={false} className="navlink">
              CONTACT
            </Link>
          </span>
        </ul>
      </div>
    );
  }

  return (
    <div className="navbar-container">
      <ul className="navbar black flex-row nav-horizontal">
        <span className="link-bank flex-row">
          <Link href="#bio" scroll={false}>
            <span className="icon">E</span>
          </Link>
          <Link href="#code" scroll={false} className="navlink">
            CODE
          </Link>
          <Link href="#artwork" scroll={false} className="navlink">
            ARTWORK
          </Link>
          <Link href="#resume" scroll={false} className="navlink">
            RESUME
          </Link>
          <Link href="#contact" scroll={false} className="navlink">
            CONTACT
          </Link>
        </span>

        <div>
          <a href="https://www.linkedin.com/in/elyssa-winch/" target="_blank">
            <Logo src="/images/linkedin.png" alt="Linkedin link" />
          </a>

          <a href="https://github.com/itsvinaay" target="_blank">
            <Logo src="/images/github.png" alt="Github link" />
          </a>
        </div>
      </ul>

      <ul className="navbar navbar-vertical black flex-column">
        <span
          onClick={() => {
            setDropdown(!dropdown);
          }}
          className="navlink-head"
        >
          VINAY
          <div>v</div>
        </span>
        <span className="navlink hidden">
          <Link href="#code" scroll={false}>
            CODE
          </Link>
        </span>
        <span className="navlink hidden">
          <Link href="#artwork" scroll={false} className="navlink">
            ARTWORK
          </Link>
        </span>
        <span className="navlink hidden">
          <Link href="#resume" scroll={false} className="navlink">
            RESUME
          </Link>
        </span>
        <span className="navlink hidden">
          <Link
            href="https://github.com/itsvinaay"
            target="_blank"
            scroll={false}
            className="navlink"
          >
            GITHUB
          </Link>
        </span>
        <span className="navlink hidden">
          <Link
            href="https://www.linkedin.com/in/vinay-singh-339209146"
            target="_blank"
            scroll={false}
            className="navlink"
          >
            LINKEDIN
          </Link>
        </span>
        <span className="navlink hidden">
          <Link
            href="https://pyromanticarts.itch.io/"
            target="_blank"
            scroll={false}
            className="navlink"
          >
            ITCH.IO
          </Link>
        </span>
        <span className="navlink hidden">
          <Link href="#contact" scroll={false} className="navlink">
            CONTACT
          </Link>
        </span>
      </ul>
    </div>
  );
}
