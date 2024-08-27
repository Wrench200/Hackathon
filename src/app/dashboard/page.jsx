
import NavigationBar from "@/components/NavigationBar/NavigationBar";
import Image from "next/image";
import style from "./page.module.css";
import React from "react";
import { currentUser } from "@clerk/nextjs/server";


import {
  SignedIn,
  SignedOut,
  SignIn,
  SignInButton,
  SignOutButton,
  RedirectToUserProfile,

} from "@clerk/nextjs";
import Link from "next/link";
  // eslint-disable-next-line react-hooks/rules-of-hooks
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
                    <p>My Orders</p>
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
                  <Link href="/dashboard_bs" className={style.left}>
                    <i class="fas fa-dollar-sign    "></i>
                    <p>My Products</p>
                  </Link>
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


export default page;
