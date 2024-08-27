
import NavigationBar from "@/components/NavigationBar/NavigationBar";
import Image from "next/image";
import style from "./page.module.css";
import { toast } from "sonner";
async function Page() {

  try {
    const res = await fetch("/api/getall", {
      method: "GET",
      headers: { "Content-Type": "application/json" },
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
  } 
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
