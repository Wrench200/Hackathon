"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import style from "./page.module.css";
import { useRouter } from "next/navigation";
function page({ params }) {
  const navigate = useRouter();
  const products = [
    {
      id: 1,
      name: "product",
      price: 100,
      image: "/blank-profile-picture-973460_640.png",
    },
    {
      id: 2,
      name: "product",
      price: 100,
      image: "/blank-profile-picture-973460_640.png",
    },
    {
      id: 3,
      name: "product",
      price: 100,
      image: "/blank-profile-picture-973460_640.png",
    },
    {
      id: 4,
      name: "product",
      price: 100,
      image: "/blank-profile-picture-973460_640.png",
    },
    {
      id: 5,
      name: "product",
      price: 100,
      image: "/blank-profile-picture-973460_640.png",
    },
  ];
  const id = params.id;
  const [activeProduct, setActiveProduct] = useState(null);
  console.log(activeProduct);
  useEffect(() => {
    let foundProduct = products.find((item) => item.id == id);
    console.log(foundProduct);
    setActiveProduct(foundProduct);
  }, [id]);
  return (
    <section>
      <div className={style.topM}>
        <i
          onClick={() => navigate.back()}
          class="fa fa-chevron-left"
          aria-hidden="true"
        ></i>
        <div
          className={style.cart}
          onClick={() => {
            navigate.push("/cart");
          }}
        >
          <i className="fa fa-shopping-cart" aria-hidden="true"></i>
          <p>0</p>
        </div>
      </div>
      {activeProduct && (
        <div className={style.product}>
          <div className={style.image}>
            <Image alt="" src={activeProduct.image} width={1000} height={1000} />
            <i className="fa fa-heart" aria-hidden="true"></i>
          </div>
          <div className={style.details}>
            <div className={style.top}>
              <div className={style.left}>
                <h1>{activeProduct.name}</h1>
                <p>Lorem ipsum dolor sit .</p>
              </div>
              <div className={style.right}>
                <div className={style.quantity}>
                  <p>-</p>
                  <p>{"0"}</p>
                  <p>+</p>
                </div>
                <p className={style.stock}>Availabe in stock</p>
              </div>
            </div>
            <div className={style.mid}>
              <h2>Description</h2>
              {/* <p>{activeProduct.description}</p> */}
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugit
                voluptate unde architecto deserunt quos maiores rerum assumenda
                commodi reprehenderit et?
              </p>
            </div>
            <div className={style.bot}>
              <div className={style.price}>
                <p>Total Price</p>
                <h2>${activeProduct.price}</h2>
              </div>
              <button className={style.add}>
                <i className="fa fa-shopping-bag" aria-hidden="true"></i>
                <p>Add to cart</p>
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

export default Page;
