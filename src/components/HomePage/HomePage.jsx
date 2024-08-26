import React from "react";
import style from "./HomePage.module.css";
import Image from "next/image";
import { SignedOut, SignedIn, SignInButton,UserButton } from "@clerk/nextjs";


function HomePage() {
  const discounts = [
    {
      title: "50% Off",
      description: "On everything today",
      image: "",
    },
    {
      title: "70% Off",
      description: "On everything today",
      image: "",
    },
    {
      title: "90% Off",
      description: "On everything today",
      image: "",
    },
  ];
  return (
    <section className={style.home}>
      <div className={style.topNav}>
        <div className={style.top}>
          <div className={style.logo}>
            <Image
              src="/hackathon-logo.png"
              alt="Logo"
              width={200}
              height={200}
            />
          </div>
          <div className={style.account}>
            <Image
              alt="image"
              src={"/blank-profile-picture-973460_640.png"}
              width={3000}
              height={3000}
            />
          </div>
          <label className="hamburger">
            <input type="checkbox" />
            <svg viewBox="0 0 32 32">
              <path
                className="line line-top-bottom"
                d="M27 10 13 10C10.8 10 9 8.2 9 6 9 3.5 10.8 2 13 2 15.2 2 17 3.8 17 6L17 26C17 28.2 18.8 30 21 30 23.2 30 25 28.2 25 26 25 23.8 23.2 22 21 22L7 22"
              ></path>
              <path className="line" d="M7 16 27 16"></path>
            </svg>
          </label>
          <SignedOut>
            <SignInButton />
          </SignedOut>
          <SignedIn>
            <UserButton />
          </SignedIn>
        </div>
        <div className={style.bot}>
          <h1>Welcome Jane ,</h1>
          <p>Our Cultural app</p>
        </div>
      </div>
      <div className={style.search}>
        <div className={style.searchBox}>
          <input type="text" placeholder="Search" />
          <i className="fa fa-search" aria-hidden="true"></i>
        </div>
        <div className={style.filter}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="none"
            id="filter"
          >
            <path
              fill="#000"
              fillRule="evenodd"
              d="M20 5h-1.17a3.001 3.001 0 0 0-5.66 0H4a1 1 0 0 0 0 2h9.17a3.001 3.001 0 0 0 5.66 0H20a1 1 0 1 0 0-2zm-4 2a1 1 0 1 0 0-2 1 1 0 0 0 0 2zM3 12a1 1 0 0 1 1-1h1.17a3.001 3.001 0 0 1 5.66 0H20a1 1 0 1 1 0 2h-9.17a3.001 3.001 0 0 1-5.66 0H4a1 1 0 0 1-1-1zm5 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm-4 4a1 1 0 1 0 0 2h9.17a3.001 3.001 0 0 0 5.66 0H20a1 1 0 1 0 0-2h-1.17a3.001 3.001 0 0 0-5.66 0H4zm13 1a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"
              clip-rule="evenodd"
            ></path>
          </svg>{" "}
        </div>
      </div>
      <div className={style.discountSlide}>
        {discounts.map((item) => (
          <div key={item.title} className={style.discount}>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
            {/* <Image
              src={item.image}
              width={200}
              height={200}
            /> */}
            <button>Get now</button>
          </div>
        ))}
      </div>
      <div className={style.arrivals}>
        <div className={style.bar}>
          <h3>New Arrivals</h3>
          <p>View all</p>
        </div>
      </div>
    </section>
  );
}

export default HomePage;
