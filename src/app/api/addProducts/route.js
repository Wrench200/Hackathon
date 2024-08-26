import dbConnect from "@/utils/dbConnect"
import product from "@/models/product";
import { NextResponse } from "next/server";
export const post = async (req) => {

    // check if user is logged in as artist

    try {
        const {name,description,author,price,image,discount,percentage} = await req.json()
        await dbConnect();
        const foundProduct = await Product.find({name: name})
        if(foundProduct.length > 0){
            return new NextResponse(JSON.stringify({ message: "Product already exists" }), {
                status: 400,
            });
        }
        const newProduct = new Product({name,description,author,price,discount,percentage})
        await newProduct.save()
        return new NextResponse(JSON.stringify({ message: "Product added successfully" }), {
            status: 201,
        });
    } catch (error) {
        console.error("Error adding product", error);
    }
}