import dbConnect from "@/utils/dbConnect";
import Product from "@/models/product";
import { NextResponse } from "next/server";
import { auth } from "@clerk/nextjs/server";
import cloudinary from "cloudinary";

// Ensure Cloudinary is configured
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

export const POST = async (req) => {
  try {
    const { userId } = auth();
    if (!userId) {
      return new NextResponse(JSON.stringify({ message: "Unauthorized" }), {
        status: 401,
      });
    }

    const { name, description, author, price, image, discount, percentage } =
      await req.json();

    // Validate the required fields
    if (!name || !description || !price || !image) {
      return new NextResponse(
        JSON.stringify({ message: "Missing required fields" }),
        {
          status: 400,
        }
      );
    }

    await dbConnect();

    // Check if the product already exists
    const foundProduct = await Product.findOne({ name });
    if (foundProduct) {
      return new NextResponse(
        JSON.stringify({ message: "Product already exists" }),
        {
          status: 400,
        }
      );
    }

    // Upload the image to Cloudinary
    const uploadResult = await cloudinary.uploader.upload(image, {
      public_id: name,
    });

    // Create a new product
    const newProduct = new Product({
      name,
      description,
      author,
      price,
      discount,
      percentage,
      image: uploadResult.secure_url,
    });

    await newProduct.save();

    return new NextResponse(
      JSON.stringify({ message: "Product added successfully" }),
      {
        status: 201,
      }
    );
  } catch (error) {
    console.error("Error adding product:", error);
    return new NextResponse(
      JSON.stringify({ message: "Server error", error: error.message }),
      {
        status: 500,
      }
    );
  }
};
