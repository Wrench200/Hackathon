"use client";
import React, { useState } from "react";
import style from "./NavigationBar.module.css";
import {
  ClerkProvider,
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton
} from '@clerk/nextjs'
function NaviationBar() {
  const [activeNav, setActiveNav] = useState("home");
  const [activeLine, setActiveLine] = useState(null);

  return (
    <div className={style.nav}>
      <ul className={style.items}>
        <div className={`${style.line} ${style["active" + activeLine]}`}></div>
        <li
          title="home"
          onClick={() => {
            setActiveNav("home");
            setActiveLine(null);
          }}
          className={activeNav === "home" && style.active}
        >
          <i className="fa fa-home" aria-hidden="true"></i>
          <p>Home</p>
        </li>
        <li
          onClick={() => {
            setActiveNav("shop");
            setActiveLine(1);
          }}
          className={activeNav === "shop" && style.active}
        >
          <i className="fa fa-shopping-cart" aria-hidden="true"></i>
          <p>Shop</p>
        </li>
        <li
          onClick={() => {
            setActiveNav("rest");
            setActiveLine(2);
          }}
          className={activeNav === "rest" && style.active}
        >
          <i className="fas fa-utensils    "></i>
          <p>Menu</p>
        </li>
        <li
          title="hotel"
          onClick={() => {
            setActiveNav("hotel");
            setActiveLine(3);
          }}
          className={activeNav === "hotel" && style.active}
        >
          <i className="fas fa-hotel    "></i>
          <p>Hotel</p>
        </li>
        <li
          title="cam"
          onClick={() => {
            setActiveNav("user");
            setActiveLine(4);
          }}
          className={activeNav === "user" && style.active}
        >
          <SignedOut>
        <SignInButton />
      </SignedOut>
      <SignedIn>
        <UserButton />
      </SignedIn>
        </li>
      </ul>
    </div>
  );
}

export default NaviationBar;
