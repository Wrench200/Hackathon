import dbConnect from "@/utils/dbConnect";
import Product from "@/models/product";
import { NextResponse } from "next/server";

export const POST = async (req) => {
  try {
    const { id } = req.json();
    console.log(id);
    await dbConnect();

    const products = await Product.findById(id);

    if (!products) {
      return new NextResponse(JSON.stringify({ message: "No products" }), {
        status: 400,
      });
    }
    console.log(shipment);
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
