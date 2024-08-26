"use client";
import NavigationBar from "@/components/NavigationBar/NavigationBar";
import Image from "next/image";
import style from "./page.module.css";
import React from "react";
import { currentUser } from "@clerk/nextjs/server";
import { useRouter } from "next/navigation";

import {
  SignedIn,
  SignedOut,
  SignIn,
  SignInButton,
  SignOutButton,
  RedirectToUserProfile,
  UserButton,
} from "@clerk/nextjs";
function page() {
  const navigate = useRouter();
  async function page() {
    const user = await currentUser();
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
        <SignedIn>
          <div className={style.info}>
            <div className={style.topInfo}>
              <div className={style.image}>
                <Image alt="" width={300} height={400} src={user?.imageUrl} />
              </div>
              <div className={style.names}>
                <h1>
                  {user?.firstName} {user?.lastName}
                </h1>
                <p>{user?.primaryEmailAddress.emailAddress}</p>
              </div>
            </div>
            <div className={style.profileInfo}>
              <ul>
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
                  <i className="fa fa-heart" aria-hidden="true"></i>
                  <p>My Favorites</p>
                </div>
                <i className="fa fa-chevron-right" aria-hidden="true"></i>
              </li>
              <li onClick={() => navigate.push("/dashboard_bs")}>
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
          <SignOutButton>
            <button>
              <i className="fa fa-sign-out" aria-hidden="true"></i>
              <p>Logout</p>
            </button>
          </SignOutButton>
        </SignedIn>
        <SignedOut>
          <div className={style.info}>
            <div className={style.topInfo}>
              <div className={style.image}>
                <Image
                  alt=""
                  width={300}
                  height={400}
                  src="/hackathon-logo.png"
                />
              </div>
              <div className={style.names}>
                <h1>Welcome!</h1>
                <p>Please sign in to access your dashboard.</p>
              </div>
            </div>
          </div>
          <SignInButton>
            <button>
              <i className="fa fa-sign-in" aria-hidden="true"></i>
              <p>Sign In</p>
            </button>
          </SignInButton>
        </SignedOut>
        <NavigationBar />
      </section>
    );
  }
}

export default page;
