"use client";
import React, { useState } from "react";
import style from "./page.module.css";
import Image from "next/image";
import { PHASE_PRODUCTION_SERVER } from "next/dist/shared/lib/constants";
import { SignedIn, UserButton } from "@clerk/nextjs";
function page() {
  const [showMenu, setShowMenu] = useState(false);
  const [activePage, setActivePage] = useState("all");
  console.log(showMenu);
  const products = [
    {
      name: "product",
      price: 100,
      image: "/blank-profile-picture-973460_640.png",
    },
    {
      name: "product",
      price: 100,
      image: "/blank-profile-picture-973460_640.png",
    },
    {
      name: "product",
      price: 100,
      image: "/blank-profile-picture-973460_640.png",
    },
    {
      name: "product",
      price: 100,
      image: "/blank-profile-picture-973460_640.png",
    },
    {
      name: "product",
      price: 100,
      image: "/blank-profile-picture-973460_640.png",
    },
  ];
  return (
    <section className={style.dashboard}>
      {showMenu && <div className={style.dark}></div>}
      <div className={`${style.menu} ${showMenu && style.show}`}>
        <div className={style.topMenu}>
          <div className={style.logo}>
            <Image
              src="/hackathon-logo.png"
              alt="Logo"
              width={200}
              height={200}
            />
          </div>
          <i
            class="fa fa-times"
            onClick={() => {
              setShowMenu(false);
            }}
            aria-hidden="true"
          ></i>
        </div>
        <div className={style.options}>
          <ul>
            <li
              className={`${activePage === "add" && style.active}`}
              onClick={() => {
                setActivePage("add");
                setShowMenu(false);
              }}
            >
              <i class="fa fa-plus" aria-hidden="true"></i>
              <p>Add Product</p>
            </li>
            <li
              className={`${activePage === "all" && style.active}`}
              onClick={() => {
                setActivePage("all");
                setShowMenu(false);
              }}
            >
              <i class="fa-solid fa-cart-flatbed-suitcase"></i>{" "}
              <p>All Products</p>
            </li>

            <li
              className={`${activePage === "orders" && style.active}`}
              onClick={() => {
                setActivePage("orders");
                setShowMenu(false);
              }}
            >
              <i class="fa-solid fa-folder-tree"></i> <p>Orders</p>
            </li>
          </ul>
          <div
            className={style.back}
            onClick={() => {
              navigate.push("");
            }}
          >
            <i class="fa-solid fa-arrow-left"></i>
            <p>Back to Dashboard</p>
          </div>
        </div>
      </div>
      <div className={style.top}>
        <label
          className="hamburger"
          onClick={() => {
            setShowMenu(true);
          }}
        >
          <input type="checkbox" checked={showMenu ? true : false} />
          <svg viewBox="0 0 32 32">
            <path
              className="line line-top-bottom"
              d="M27 10 13 10C10.8 10 9 8.2 9 6 9 3.5 10.8 2 13 2 15.2 2 17 3.8 17 6L17 26C17 28.2 18.8 30 21 30 23.2 30 25 28.2 25 26 25 23.8 23.2 22 21 22L7 22"
            ></path>
            <path className="line" d="M7 16 27 16"></path>
          </svg>
        </label>
        <div className={style.account}>
          <SignedIn>
            <UserButton />
          </SignedIn>
        </div>
      </div>
      {activePage === "all" && (
        <div className={style.products}>
          <h1>Lastly Updated Products</h1>
          <div className={style.product}>
            {products.map((item) => (
              <div className={style.line}>
                <div className={style.left}>
                  <Image
                    alt="image"
                    src={item.image}
                    width={300}
                    height={300}
                  />
                </div>
                <div className={style.right}>
                  <div className={style.topInfo}>
                    <div>
                      <h2>Title</h2>
                      <h2>:</h2>
                      <h2>{item.name}</h2>
                    </div>
                    <div>
                      <p>Price</p>
                      <p>:</p>
                      <p>${item.price}</p>
                    </div>
                  </div>
                  <div className={style.botInfo}>
                    <button>Edit</button>
                    <button>Delete</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
      {activePage === "add" && (
        <>
          <h1>Add Product</h1>
          
        </>
      )}

      {activePage === "orders" && (
        <>
          <h1>My Orders</h1>
        </>
      )}
    </section>
  );
}

export default page;
