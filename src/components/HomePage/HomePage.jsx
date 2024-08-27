import React from "react";
import style from "./HomePage.module.css";
import Image from "next/image";
import { SignedOut, SignedIn, SignInButton, UserButton } from "@clerk/nextjs";
import { useUser } from "@clerk/nextjs";
import { currentUser } from "@clerk/nextjs/server";
// Get the user from Clerk when the page loads, and pass it to the component

async function HomePage() {
  const discounts = [
    {
      title: "50% Off",
      description: "",
      image:
        "https://t4.ftcdn.net/jpg/00/63/83/29/360_F_63832907_SA64nRfoIU8qaPKDkcYT7Ax2T0eVFJDY.webp",
    },
    {
      title: "70% Off",
      description: "",
      image:
        "https://t3.ftcdn.net/jpg/00/63/83/28/240_F_63832897_TbTCqtv2E8LaTt52Ofv5dQXqjfKvwvvF.jpg",
    },
    {
      title: "90% Off",
      description: "",
      image:
        "https://t3.ftcdn.net/jpg/00/63/83/28/240_F_63832891_P4jDfynIlkrEaVYZC2YKwAylAnx6AZhQ.jpg",
    },
  ];
  const arrivals = [
    {
      title: "",
      description: "",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ50k22eHmJ4eBQHZYkoViBzMk1V-AQSfEazg&s",
    },
    {
      title: "",
      description: "",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS40tVGjHL7yb_siiFD_l-42oLUCBLIK_B3kg&s",
    },
    {
      title: "",
      description: "",
      image:
        "https://cameroonadventuresandtours.com/wp-content/uploads/2020/04/monument-de-la-reunification1-500x248.jpeg",
    },
  ];
  const mus = [
    {
      title: "",
      description: "Museum of Civilizations of Cameroon",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/Musee_des_civilisations%2C_Dschang%2C_Cameroon.jpg/260px-Musee_des_civilisations%2C_Dschang%2C_Cameroon.jpg",
    },
    {
      title: "",
      description: "The Water Museum",
      image:
        "https://routedeschefferies.com/wp-content/uploads/2022/11/8-MUSEOGRAPHIE-scaled.jpg",
    },
    {
      title: "",
      description: "Bapa Heritage Hut",
      image:
        "https://routedeschefferies.com/wp-content/uploads/2022/10/Chefferie-Bapa-par-Perez-aout-21-37-scaled.jpg",
    },
  ];
  const user = await currentUser();
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
            <SignedIn>
              <UserButton />
            </SignedIn>
          </div>
        </div>
        <div className={style.bot}>
          <h1>Welcome {user?.firstName}!,</h1>
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
              clipRule="evenodd"
            ></path>
          </svg>{" "}
        </div>
      </div>
      <div className={style.discountSlide}>
        {discounts.map((item) => (
          <div
            key={item.title}
            style={{
              background: `linear-gradient(to bottom, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('${item.image}')`,
              backgroundSize: "contain",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "right",
            }}
            className={style.discount}
          >
            <h3>{item.title}</h3>
            <p>{item.description}</p>

            <button>Get now</button>
          </div>
        ))}
      </div>
      <div className={style.arrivals}>
        <div className={style.bar}>
          <h3>New Arrivals</h3>
          <p>View all</p>
        </div>
        <div className={style.discountSlide}>
          {arrivals.map((item) => (
            <div
              key={item.title}
              style={{
                height: "10em",
                background: `linear-gradient(to bottom, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('${item.image}')`,
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "right",
              }}
              className={style.discount}
            >
              <h3>{item.title}</h3>
              <p>{item.description}</p>
              {/* <Image
              src={item.image}
              width={200}
              height={200}
            /> */}
              {/* <button>Get now</button> */}
            </div>
          ))}
        </div>
      </div>
      <div className={style.arrivals}>
        <div className={style.bar}>
          <h3>Museums</h3>
          <p>View all</p>
        </div>
        <div className={style.discountSlide}>
          {mus.map((item) => (
            <div
              key={item.title}
              style={{
                height: "13em",
                background: `linear-gradient(to bottom, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('${item.image}')`,
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "right",
              }}
              className={style.discount}
            >
              <h3>{item.title}</h3>
              <p
                style={{
                  maxWidth: "80%",
                  whiteSpace: "wrap",
                }}
              >
                {item.description}
              </p>
              {/* <Image
              src={item.image}
              width={200}
              height={200}
            /> */}
              {/* <button>Get now</button> */}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default HomePage;
