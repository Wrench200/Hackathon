import NavigationBar from "@/components/NavigationBar/NavigationBar";
import Image from "next/image";
import style from "./page.module.css";
import React from "react";

function page() {
  return (
    <section className={style.dashboard}>
      <div className={style.top}>
        <div className={style.logo}>
          <Image
            src="/hackathon-logo.png"
            alt="Logo"
            width={200}
            height={200}
          />
        </div>
        <i className="fas fa-gear  "></i>
      </div>
      <div className={style.info}>
        <div className={style.topInfo}>
          <div className={style.image}>
            <Image
              width={300}
              height={400}
              src={"/blank-profile-picture-973460_640.png"}
            />
          </div>
          <div className={style.names}>
            <h1>theNames</h1>
            <p>thenames@gmail.com</p>
          </div>
        </div>
        <div className={style.profileInfo}>
          <ul>
            <li>
              <div className={style.left}>
                <i className="fa fa-user" aria-hidden="true"></i>
                <p>Personal Details</p>
              </div>
              <i className="fa fa-chevron-right" aria-hidden="true"></i>
            </li>
            <li>
              <div className={style.left}>
                <i className="fa fa-shopping-bag" aria-hidden="true"></i>
                <p>My Order</p>
              </div>
              <i className="fa fa-chevron-right" aria-hidden="true"></i>
            </li>
            <li>
              <div className={style.left}>
                <i className="fa fa-heart" aria-hidden="true"></i>
                <p>My Favorites</p>
              </div>
              <i className="fa fa-chevron-right" aria-hidden="true"></i>
            </li>
            <li>
              <div className={style.left}>
                <i class="fas fa-dollar-sign    "></i>
                <p>Become a seller</p>
              </div>
              <i className="fa fa-chevron-right" aria-hidden="true"></i>
            </li>
            <li>
              <div className={style.left}>
                <i className="fas fa-gear"></i>
                <p>Settings</p>
              </div>
              <i className="fa fa-chevron-right" aria-hidden="true"></i>
            </li>
          </ul>
        </div>
      </div>
      <button>
        <i className="fa fa-sign-out" aria-hidden="true"></i>
        <p>Logout</p>
      </button>
      <NavigationBar />
    </section>
  );
}

export default page;
