"use client";
import NavigationBar from "@/components/NavigationBar/NavigationBar";
import React, { useState } from "react";
import style from "./page.module.css";
import Image from "next/image";
function Page() {
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
        <div className={style.cart}>
          <i class="fa fa-shopping-cart" aria-hidden="true"></i>
          <p>0</p>
        </div>
      </div>
      <div className={style.orders}>
        <div className={style.topM}>
          <h1> My Cart</h1>
        </div>
      </div>
      <div className={style.products}>
        <div className={style.product}>
          {products.map((item) => (
            <div key={item.name} className={style.line}>
              <div className={style.left}>
                <Image alt="image" src={item.image} width={300} height={300} />
              </div>
              <div className={style.right}>
                <div className={style.high}>
                  <h1>{item.name}</h1>
                  <div className="delete">
                    <i class="fa fa-trash" aria-hidden="true"></i>
                  </div>
                </div>
                
                <div className={style.low}>
                  <h3>${item.price}</h3>
                  <div className={style.quantity}>
                    <p>-</p>
                    <p>{"0"}</p>
                    <p>+</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className={style.checkout}>
        <div className={style.topInfo}>
          <p>Total (0 item) :</p>
          <div className={style.price}>$000</div>
        </div>
        <div className={style.botInfo}>
          <button>Procced to Checkout</button>
        </div>
      </div>
    </section>
  );
}

export default Page;
