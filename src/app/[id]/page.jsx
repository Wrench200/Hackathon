"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import style from "./page.module.css";
import { useRouter } from "next/navigation";
import { log } from "aframe";

function Page({ params }) {
  const id  = params.id;
  const navigate = useRouter();
  const [products, setProducts] = useState([]);
  
  const [activeProduct, setActiveProduct] = useState(null);
  const [loading, setLoading] = useState(false);
  console.log(products);
  console.log(activeProduct);
  

  const getProducts = async () => {
    try {
      setLoading(true);
      const response = await fetch("/api/getall", {
        method: "GET",
        headers: { "Content-Type": "application/json" },
      });
      if (!response.ok) {
        throw new Error("Failed to fetch products");
      }
      const data = await response.json();
      setProducts(data.data);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  useEffect(() => {
    getProducts();
  }, []);

  useEffect(() => {
    if (products.length > 0) {
      const foundProduct = products.find((item) => item._id === id);
      setActiveProduct(foundProduct);
    }
  }, [products, id]);

  return (
    <section>
      <div className={style.topM}>
        <i
          onClick={() => navigate.back()}
          className="fa fa-chevron-left"
          aria-hidden="true"
        ></i>
        <div
          className={style.cart}
          onClick={() => navigate.push("/cart")}
        >
          <i className="fa fa-shopping-cart" aria-hidden="true"></i>
          <p>0</p>
        </div>
      </div>

      {activeProduct ? (
        <div className={style.product}>
          <div className={style.image}>
            <Image
              alt={activeProduct.name}
              src={activeProduct.image}
              width={1000}
              height={1000}
            />
            <i className="fa fa-heart" aria-hidden="true"></i>
          </div>
          <div className={style.details}>
            <div className={style.top}>
              <div className={style.left}>
                <h1>{activeProduct.name}</h1>
                <p>{activeProduct.shortDescription || "Lorem ipsum dolor sit."}</p>
              </div>
              <div className={style.right}>
                <div className={style.quantity}>
                  <p>-</p>
                  <p>0</p>
                  <p>+</p>
                </div>
                <p className={style.stock}>Available in stock</p>
              </div>
            </div>
            <div className={style.mid}>
              <h2>Description</h2>
              <p>{activeProduct.description || "Lorem ipsum dolor sit amet consectetur, adipisicing elit."}</p>
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
      ) : (
        <p>Product not found</p>
      )}
    </section>
  );
}

export default Page;
