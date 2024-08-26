"use client";
import React, { useState } from "react";
import style from "./page.module.css";
import Link from "next/link";
import { toast } from "sonner";

function Page() {
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validation
    if (!email) {
      toast.error("Email is required");
      return;
    }
    if (!password) {
      toast.error("Password is required");
      return;
    }
    if (!/\S+@\S+\.\S+/.test(email)) {
      toast.error("Please enter a valid email address");
      return;
    }
    if (password.length < 6) {
      toast.error("Password must be at least 6 characters long");
      return;
    }

    // Simulating a successful login
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      toast.success("Logged in successfully!");
    }, 2000);
  };

  return (
    <section className={style.register}>
      {isLoading && (
        <div className={style.loading}>
          <div className="loader">
            <div className="bar1"></div>
            <div className="bar2"></div>
            <div className="bar3"></div>
            <div className="bar4"></div>
            <div className="bar5"></div>
            <div className="bar6"></div>
            <div className="bar7"></div>
            <div className="bar8"></div>
            <div className="bar9"></div>
            <div className="bar10"></div>
            <div className="bar11"></div>
            <div className="bar12"></div>
          </div>
        </div>
      )}
      <h1>LOGO</h1>
      <div className="intro">
        <h2>Welcome!</h2>
        <p>Please login or sign up to continue browsing</p>
      </div>
      <form className={style.form} onSubmit={handleSubmit}>
        <div className={style.group}>
          <input
            required
            type="email"
            className={style.input}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <span className={style.highlight}></span>
          <label className={style.label}>Email</label>
        </div>
        <div className={style.group}>
          <input
            required
            type={showPassword ? "text" : "password"}
            className={style.input}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <span className={style.highlight}></span>
          <label className={style.label}>Password</label>
          {showPassword ? (
            <i
              onClick={() => {
                setShowPassword(false);
              }}
              className="fa fa-eye-slash"
              aria-hidden="true"
            ></i>
          ) : (
            <i
              onClick={() => {
                setShowPassword(true);
              }}
              className="fa fa-eye"
              aria-hidden="true"
            ></i>
          )}
        </div>

        <button type="submit">Login</button>
        <div className={style.exist}>
          <p>Don't have an account?</p>
          <Link href={"/register"}>Sign up</Link>
        </div>
      </form>
      <div className={style.or}>
        <h3>or</h3>
      </div>
      <button className={style.google}>
        <i className="fa-brands fa-google" aria-hidden="true"></i>
        <p>Continue with Google</p>
      </button>
    </section>
  );
}

export default Page;
