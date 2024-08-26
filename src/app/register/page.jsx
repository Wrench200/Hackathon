"use client";
import React, { useState } from "react";
import style from "./page.module.css";
import Link from "next/link";
import { toast } from "sonner"; // Import Sonner

function Page() {
  const [showPassword, setShowPassword] = useState(false);
  const [showCPassword, setShowCPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [role, setRole] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);

    if (!username) {
      setIsLoading(false);
      return toast.error("please input a username");
    }

    if (username.length < 3) {
      setIsLoading(false);
      return toast.error("Username must be at least 3 characters long.");
    }

    if (!email) {
      setIsLoading(false);
      return toast.error("please input an email");
    }

    if (!/\S+@\S+\.\S+/.test(email)) {
      setIsLoading(false);
      return toast.error("Please enter a valid email address.");
    }

    if (!password) {
      setIsLoading(false);
      return toast.error("Please input a password");
    }

    if (password.length < 6) {
      setIsLoading(false);
      return toast.error("Password must be at least 6 characters long.");
    }

    if (password !== confirmPassword) {
      setIsLoading(false);
      return toast.error("Passwords do not match.");
    }

    if (!role) {
      setIsLoading(false);
      return toast.error("Please select a role.");
    }

    // Simulate registration process
    setTimeout(() => {
      setIsLoading(false);
      toast.success("Registration successful!");
      // Redirect or further actions here
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
        <h2>Sign up</h2>
        <p>Create an account</p>
      </div>
      <form className={style.form} onSubmit={handleSubmit}>
        <div className={style.group}>
          <input
            type="text"
            className={style.input}
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <span className={style.highlight}></span>
          <label className={style.label}>Username</label>
        </div>
        <div className={style.group}>
          <input
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
            type={showPassword ? "text" : "password"}
            className={style.input}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <span className={style.highlight}></span>
          <label className={style.label}>Password</label>
          <i
            onClick={() => setShowPassword(!showPassword)}
            className={`fa ${showPassword ? "fa-eye-slash" : "fa-eye"}`}
            aria-hidden="true"
          ></i>
        </div>
        <div className={style.group}>
          <input
            type={showCPassword ? "text" : "password"}
            className={style.input}
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
          <span className={style.highlight}></span>
          <label className={style.label}>Confirm Password</label>
          <i
            onClick={() => setShowCPassword(!showCPassword)}
            className={`fa ${showCPassword ? "fa-eye-slash" : "fa-eye"}`}
            aria-hidden="true"
          ></i>
        </div>
        <div>
          <select
            name="role"
            value={role}
            onChange={(e) => setRole(e.target.value)}
          >
            <option value="">Select your role</option>
            <option value="user">User</option>
            <option value="business">Business</option>
          </select>
        </div>
        <button type="submit" disabled={isLoading}>
          {isLoading ? "Registering..." : "Register"}
        </button>
        <div className={style.exist}>
          <p>
            Already have an account? <Link href="/login">Sign in</Link>
          </p>
        </div>
      </form>
    </section>
  );
}

export default Page;
