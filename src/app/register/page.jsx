import React from "react";
import style from "./page.module.css";
function page() {
  return (
    <section className={style.register}>
      <h1>LOGO</h1>
      <div className="intro">
        <h2>Sign up</h2>
        <p>Create an account</p>
      </div>
      <form className={style.form}>
        <div class={style.group}>
          <input required type="text" class={style.input} />
          <span class={style.highlight}></span>
          {/* <span class={style.bar}></span> */}
          <label className={style.label}>Username</label>
        </div>
        <div class={style.group}>
          <input required type="text" class={style.input} />
          <span class={style.highlight}></span>
          {/* <span class={style.bar}></span> */}
          <label className={style.label}>Email</label>
        </div>
        <div class={style.group}>
          <input required type="text" class={style.input} />
          <span class={style.highlight}></span>
          {/* <span class={style.bar}></span> */}
          <label className={style.label}>Password</label>
        </div>
        <div class={style.group}>
          <input required type="text" class={style.input} />
          <span class={style.highlight}></span>
          {/* <span class={style.bar}></span> */}
          <label className={style.label}>Confirm Password</label>
        </div>
      </form>
    </section>
  );
}

export default page;
