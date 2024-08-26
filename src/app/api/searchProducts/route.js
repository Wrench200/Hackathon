import dbConnect from "@/utils/dbConnect"
import product from "@/models/product";

export const get = async (req) => {
  try {
    await dbConnect();

    const title = req.params.query;
    const products = await product.find({
      pname: {
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
