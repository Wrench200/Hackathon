"use client";
import NavigationBar from "@/components/NavigationBar/NavigationBar";
import React, { useState } from "react";
import style from "./page.module.css";
import Image from "next/image";
import { useRouter } from "next/navigation";
function Page() {
  const navigate = useRouter();
  const [activePage, setActivePage] = useState("ongoing");
  return (
    <section>
      <div className={style.top}>
        <div className={style.logo}>
          <Image
            src="/hackathon-logo.png"
            alt="Logo"
            width={200}
            height={200}
          />
        </div>
        <div
          className={style.cart}
          onClick={() => {
            navigate.push("/cart");
          }}
        >
          <i class="fa fa-shopping-cart" aria-hidden="true"></i>
          <p>0</p>
        </div>
      </div>
      <div className={style.orders}>
        <div className={style.topM}>
          <h1> My Orders</h1>
          <div className={style.buttons}>
            <button
              onClick={() => {
                setActivePage("ongoing");
              }}
              className={`${activePage === "ongoing" && style.active}`}
            >
              ongoing
            </button>
            <button
              onClick={() => {
                setActivePage("completed");
              }}
              className={`${activePage === "completed" && style.active}`}
            >
              completed
            </button>
          </div>
        </div>
        {activePage === "ongoing" && (
          <div className={style.ordersContainer}>
            {/* Add ongoing order cards here */}
            <h4>Ongoing</h4>
          </div>
        )}
        {activePage === "completed" && (
          <div className={style.ordersContainer}>
            {/* Add completed order cards here */}
            <h4>completed</h4>
          </div>
        )}
      </div>
      <NavigationBar />
    </section>
  );
}

export default Page;
