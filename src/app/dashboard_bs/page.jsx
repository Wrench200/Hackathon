/* eslint-disable react-hooks/rules-of-hooks */
"use client";
import React, { useState } from "react";
import style from "./page.module.css";
import Image from "next/image";
import { toast } from "sonner";
import { usePathname, useRouter } from "next/navigation";
import { PHASE_PRODUCTION_SERVER } from "next/dist/shared/lib/constants";
import { SignedIn, UserButton } from "@clerk/nextjs";
function Page() {
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

  const navigate = useRouter();
  const [showMenu, setShowMenu] = useState(false);
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [activePage, setActivePage] = useState("all");
  const [productName, setProductName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState(null);
  const [discount, setDiscount] = useState(false);
  const [percentage, setpercentage] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onload = () => setImage(reader.result);
    reader.readAsDataURL(file);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setIsLoading(true);

    const postData = {
      name: productName,
      description,
      price,
      image,
      discount,
      percentage,
    };

    try {
      const res = await fetch("/api/addone", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(postData),
      });

      const result = await res.json();

      if (res.status === 200) {
        toast.success("Product added successfully");
        setActivePage("all");
      } else if (res.status === 400) {
        toast.error("Please check the information provided");
      } else if (res.status === 500) {
        toast.error("Server error, please try again later");
      }
    } catch (error) {
      toast.error("An error occurred while adding the product");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className={style.dashboard}>
      {showMenu && <div className={style.dark}></div>}
      <div className={`${style.menu} ${showMenu && style.show}`}>
        <div className={style.topMenu}>
          <div className={style.logo}>
            <Image
              src="/hackathon-logo.png"
              alt="Logo"
              width={200}
              height={200}
            />
          </div>
          <i
            className="fa fa-times"
            onClick={() => setShowMenu(false)}
            aria-hidden="true"
          ></i>
        </div>
        <div className={style.options}>
          <ul>
            <li
              className={`${activePage === "add" && style.active}`}
              onClick={() => {
                setActivePage("add");
                setShowMenu(false);
              }}
            >
              <i className="fa fa-plus" aria-hidden="true"></i>
              <p>Add Product</p>
            </li>
            <li
              className={`${activePage === "all" && style.active}`}
              onClick={() => {
                setActivePage("all");
                setShowMenu(false);
              }}
            >
              <i className="fa-solid fa-cart-flatbed-suitcase"></i>
              <p>All Products</p>
            </li>
            <li
              className={`${activePage === "orders" && style.active}`}
              onClick={() => {
                setActivePage("orders");
                setShowMenu(false);
              }}
            >
              <i className="fa-solid fa-folder-tree"></i>
              <p>Orders</p>
            </li>
          </ul>
          <div
            className={style.back}
            onClick={() => {
              navigate.push("/dashboard");
            }}
          >
            <i className="fa-solid fa-arrow-left"></i>
            <div
              className={style.back}
              onClick={() => {
                navigate.push("");
              }}
            >
              <i className="fa-solid fa-arrow-left"></i>
              <p>Back to Dashboard</p>
            </div>
          </div>
        </div>
      </div>
      <div className={style.top}>
        <label
          className="hamburger"
          onClick={() => {
            setShowMenu(true);
          }}
        >
          <input type="checkbox" checked={showMenu ? true : false} />
          <svg viewBox="0 0 32 32">
            <path
              className="line line-top-bottom"
              d="M27 10 13 10C10.8 10 9 8.2 9 6 9 3.5 10.8 2 13 2 15.2 2 17 3.8 17 6L17 26C17 28.2 18.8 30 21 30 23.2 30 25 28.2 25 26 25 23.8 23.2 22 21 22L7 22"
            ></path>
            <path className="line" d="M7 16 27 16"></path>
          </svg>
        </label>
        <div className={style.account}>
          <SignedIn>
            <UserButton />
          </SignedIn>
        </div>
      </div>

      {activePage === "all" && (
        <div className={style.products}>
          <h1>Lastly Updated Products</h1>
          <div className={style.product}>
            {" "}
            {products.map((item) => (
              <div key={item.id} className={style.line}>
                <div className={style.left}>
                  <Image
                    alt="image"
                    src={item.image}
                    width={300}
                    height={300}
                  />
                </div>
                <div className={style.right}>
                  <div className={style.topInfo}>
                    <div>
                      <h2>Title</h2>
                      <h2>:</h2>
                      <h2>{item.name}</h2>
                    </div>
                    <div>
                      <p>Price</p>
                      <p>:</p>
                      <p>${item.price}</p>
                    </div>
                  </div>
                  <div className={style.botInfo}>
                    <button>Edit</button>
                    <button>Delete</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
      {activePage === "add" && (
        <>
          <h1>Add Products</h1>
          <form onSubmit={handleSubmit} className={style.addProductForm}>
            <div className={style.formGroup}>
              <label>Product Name:</label>
              <input
                type="text"
                value={productName}
                onChange={(e) => setProductName(e.target.value)}
                required
              />
            </div>
            <div className={style.formGroup}>
              <label>Description:</label>
              <textarea
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                required
              ></textarea>
            </div>
            <div className={style.formGroup}>
              <label>Price:</label>
              <input
                type="number"
                value={price}
                onChange={(e) => setPrice(Number(e.target.value))}
                required
              />
            </div>
            <div className={style.formGroup}>
              <label>Image:</label>
              <input
                type="file"
                accept="image/*"
                onChange={handleImageUpload}
                required
              />
            </div>
            {image && (
              <div>
                <label>Preview:</label>
                <div className={style.Pimage}>
                  <Image
                    src={image}
                    alt="Preview"
                    className={style.image}
                    width={200}
                    height={200}
                  />
                </div>
              </div>
            )}
            <div className={style.formGroupD}>
              <label>Discount:</label>
              <input
                type="checkbox"
                checked={discount}
                onChange={(e) => setDiscount(e.target.checked)}
              />
            </div>
            {discount && (
              <div className={style.formGroup}>
                <label>Discount Percentage:</label>
                <input
                  type="range"
                  min="0"
                  max="100"
                  value={percentage}
                  onChange={(e) => setpercentage(Number(e.target.value))}
                />
                <span>{percentage}%</span>
              </div>
            )}
            <button type="submit" disabled={isLoading}>
              {isLoading ? "Adding..." : "Add Product"}
            </button>
          </form>
        </>
      )}
      {activePage === "orders" && (
        <>
          <h1>My Orders</h1>
        </>
      )}
    </section>
  );
}

export default Page;
