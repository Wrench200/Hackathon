"use client";
import NavigationBar from "@/components/NavigationBar/NavigationBar";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import style from "./page.module.css";
import { useRouter } from "next/navigation";
function Page() {
  const navigate = useRouter();

  // const products = [
  //   {
  //     id: 1,
  //     name: "product",
  //     price: 100,
  //     image: "/blank-profile-picture-973460_640.png",
  //   },
  //   {
  //     id: 2,
  //     name: "product",
  //     price: 100,
  //     image: "/blank-profile-picture-973460_640.png",
  //   },
  //   {
  //     id: 3,
  //     name: "product",
  //     price: 100,
  //     image: "/blank-profile-picture-973460_640.png",
  //   },
  //   {
  //     id: 4,
  //     name: "product",
  //     price: 100,
  //     image: "/blank-profile-picture-973460_640.png",
  //   },
  //   {
  //     id: 5,
  //     name: "product",
  //     price: 100,
  //     image: "/blank-profile-picture-973460_640.png",
  //   },
  // ];
  const [products, setProducts] = useState([]);

  const getProducts = async () => {
    try {
      const response = await fetch("/api/getall", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
      });
      const data = await response.json();
      setProducts(data.data);
      console.log(data.data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getProducts();
  }, []);
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
        <h1>Our Shop</h1>
        <div className={style.product}>
          {products.map((item) => (
            <div
              key={item.id}
              className={style.box}
              onClick={() => {
                navigate.push(`${item._id}`);
              }}
            >
              <div className={style.image}>
                <Image
                  src={item.image}
                  alt={item.name}
                  width={500}
                  height={500}
                />
                <i className="fa fa-heart" aria-hidden="true"></i>
              </div>
              <div className={style.bot}>
                <h2>{item.name}</h2>
                <p>Lorem ipsum dolor sit.</p>
                <h3>${item.price}</h3>
                {/* <button>Remove</button> */}
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
