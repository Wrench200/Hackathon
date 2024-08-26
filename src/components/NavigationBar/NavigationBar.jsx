"use client";
import React, { useEffect, useState } from "react";
import style from "./NavigationBar.module.css";
import { usePathname, useRouter } from "next/navigation";
function NavigationBar() {
  const [activeNav, setActiveNav] = useState("home");
  const [activeLine, setActiveLine] = useState(null);
  const path = usePathname();
  const navigate = useRouter();
  console.log(path);
  useEffect(() => {
    switch (path) {
      case "/":
        setActiveLine(null);
        break;
      case "/shop":
        setActiveLine(1);
        break;
      case "":
        setActiveLine(2);
        break;
      case "/hotels":
        setActiveLine(3);
        break;
      case "/dashboard":
        setActiveLine(4);
        break;

      default:
        break;
    }
  }, [activeNav]);

  return (
    <div className={style.nav}>
      <ul className={style.items}>
        <div className={`${style.line} ${style["active" + activeLine]}`}></div>
        <li
          title="home"
          onClick={() => {
            setActiveNav("home");
            setActiveLine(null);
            navigate.push("/");
          }}
          className={activeNav == "home" && style.active}
        >
          <i className="fa fa-home" aria-hidden="true"></i>
          <p>Home</p>
        </li>
        <li
          onClick={() => {
            setActiveNav("shop");
            setActiveLine(1);
            navigate.push("/shop");
          }}
          className={activeNav == "shop" && style.active}
        >
          <i class="fa fa-shopping-bag" aria-hidden="true"></i> <p>Shop</p>
          <p>Shop</p>
        </li>
        <li
          onClick={() => {
            setActiveNav("cart");
            setActiveLine(2);
            
            navigate.push("/cart");
          }}
          className={activeNav == "cart" && style.active}
        >
          <i class="fa fa-shopping-cart" aria-hidden="true"></i>
          <p>Menu</p>
        </li>
        <li
          title="favorite"
          onClick={() => {
            setActiveNav("favorite");
            setActiveLine(3);
            navigate.push("/hotels");
          }}
          className={activeNav == "favorite" && style.active}
        >
          <i className="fa fa-heart   "></i>
          <p>favorite</p>
        </li>
        <li
          title="account"
          onClick={() => {
            setActiveNav("user");
            navigate.push("/dashboard");

            setActiveLine(4);
          }}
          className={activeNav == "user" && style.active}
        >
          <i className="fa fa-user" aria-hidden="true"></i>
          <p>cam</p>
        </li>
      </ul>
    </div>
  );
}

export default NavigationBar;
