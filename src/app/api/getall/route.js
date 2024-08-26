import dbConnect from "@/utils/dbConnect";
import Product from "@/models/product";
import { NextResponse } from "next/server";

export const post = async (req) => {
  try {
    const { id } = req.json();
    await dbConnect();
    if (id) {
      const products = await Product.find({author: id});
      if (!product) {
        return new NextResponse(
          JSON.stringify({ message: "Product not found" }),
          { status: 404 }
        );
      }
      return new NextResponse(
        JSON.stringify({
          data: products,
        }),
        { status: 200 }
      );
    }
    
    const products = await product.find({});
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
