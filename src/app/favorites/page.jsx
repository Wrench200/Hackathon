import NavigationBar from "@/components/NavigationBar/NavigationBar";
import React from "react";
import Image from "next/image";
import style from "./page.module.css";
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
  return (
    <section className={style.fav}>
      <div className={style.search}>
        <div className={style.searchBox}>
          <input type="text" placeholder="Search" />
          <i className="fa fa-search" aria-hidden="true"></i>
        </div>
        <div className={style.filter}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="none"
            id="filter"
          >
            <path
              fill="#000"
              fillRule="evenodd"
              d="M20 5h-1.17a3.001 3.001 0 0 0-5.66 0H4a1 1 0 0 0 0 2h9.17a3.001 3.001 0 0 0 5.66 0H20a1 1 0 1 0 0-2zm-4 2a1 1 0 1 0 0-2 1 1 0 0 0 0 2zM3 12a1 1 0 0 1 1-1h1.17a3.001 3.001 0 0 1 5.66 0H20a1 1 0 1 1 0 2h-9.17a3.001 3.001 0 0 1-5.66 0H4a1 1 0 0 1-1-1zm5 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm-4 4a1 1 0 1 0 0 2h9.17a3.001 3.001 0 0 0 5.66 0H20a1 1 0 1 0 0-2h-1.17a3.001 3.001 0 0 0-5.66 0H4zm13 1a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"
              clip-rule="evenodd"
            ></path>
          </svg>{" "}
        </div>
      </div>
      <div className={style.products}>
      <h1>WishList</h1>
        <div className={style.product}>
          {products.map((item) => (
            <div key={item.name} className={style.line}>
              <div className={style.left}>
                <Image alt="image" src={item.image} width={300} height={300} />
              </div>
              <div className={style.right}>
                <div className={style.high}>
                  <h1>{item.name}</h1>
                </div>

                <div className={style.low}>
                  <h3>${item.price}</h3>
                  <div className={style.add}>
                    <button>Add to cart</button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <NavigationBar />
    </section>
  );
}

export default Page;
