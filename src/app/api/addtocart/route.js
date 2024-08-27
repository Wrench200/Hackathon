export const post = async (req) => {
  console.log("quantity", body.quantity1);
  console.log("item", body.itemId);
  const { itemId } = body;
  let data = null;
  const userId = auth._id;
  const quantity = Number.parseInt(body.quantity1);

  let cart = await Cart.findOne({ userId: userId });
  const productDetails = await Product.findById(itemId);
  console.log(productDetails);

  //-- Check if cart Exists and Check the quantity if items -------
  if (cart) {
    let indexFound = cart.items.findIndex((p) => p.itemId == itemId);

    //----------check if product exist,just add the previous quantity with the new quantity and update the total price-------
    if (indexFound != -1) {
      cart.items[indexFound].quantity =
        cart.items[indexFound].quantity + quantity;
      cart.items[indexFound].total =
        cart.items[indexFound].quantity * productDetails.price;
      cart.items[indexFound].price = productDetails.price;
      cart.subTotal = cart.items
        .map((item) => item.total)
        .reduce((acc, curr) => acc + curr);
      data = await cart.save();
      return {
        code: 200,
        data: data,
      };
    }
    //----Check if Quantity is Greater than 0 then add item to items Array ----
    else if (quantity > 0) {
      cart.items.push({
        itemId: itemId,
        quantity: quantity,
        price: productDetails.price,
        total: parseInt(productDetails.price * quantity).toFixed(2),
      });
      cart.subTotal = cart.items
        .map((item) => item.total)
        .reduce((acc, curr) => acc + curr);
      data = await cart.save();
      return {
        code: 200,
        data: data,
      };
    }
    //----if quantity of price is 0 throw the error -------
    else {
      return {
        code: 400,
        message: "Invalid request",
      };
    }
  }
  //------if there is no user with a cart then it creates a new cart and then adds the item to the cart that has been created---------
  else {
    const cartData = {
      userId: userId,
      items: [
        {
          itemId: itemId,
          quantity: quantity,
          total: parseInt(productDetails.price * quantity),
          price: productDetails.price,
        },
      ],
      subTotal: parseInt(productDetails.price * quantity),
    };
    cart = new Cart(cartData);
    data = await cart.save();
  }

  return {
    code: 200,
    message: "Add to Cart successfully!",
    data: data,
  };
};
