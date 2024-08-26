import dbConnect from "@/utils/dbConnect"
import Product from "@/models/product";
import { NextResponse } from "next/server"

export const POST = async (req) => {
  try {
    await dbConnect();

    const {title} = req.json();
    console.log("title")
    const products = await Product.find({
      name: {
        $regex: ".*" + title + ".*",
        $options: "i",
      },
    })
    if (!products) {
      return new NextResponse(JSON.stringify({ message: "No products" }), {
        status: 400,
      });
    }
    
    return new NextResponse(
      JSON.stringify({
        data: products,
      }),
      { status: 200 }
    );
  } catch (error) {
    console.error("Error fetching products", error);
    return new NextResponse(
      JSON.stringify({ error: "Internal Server Error" }),
      { status: 500 }
    );
  }
};
