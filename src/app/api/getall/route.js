import dbConnect from "@/utils/dbConnect";
import Product from "@/models/product";
import { NextResponse } from "next/server";

export const GET = async (req) => {
  try {
    await dbConnect();
    
    // Extract 'id' query parameter from the request URL
    const { searchParams } = new URL(req.url);
    const id = searchParams.get("id");

    let products;
    
    if (id) {
      products = await Product.find({ author: id });
      
      if (!products || products.length === 0) {
        return new NextResponse(
          JSON.stringify({ message: "Product not found" }),
          { status: 404 }
        );
      }
    } else {
      products = await Product.find({});
      
      if (!products || products.length === 0) {
        return new NextResponse(JSON.stringify({ message: "No products" }), {
          status: 400,
        });
      }
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
