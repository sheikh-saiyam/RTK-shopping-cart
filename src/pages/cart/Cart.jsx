import CartCard from "@/components/cards/CartCard";
import CheckoutCard from "@/components/cards/CheckoutCard";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  decreaseQuantity,
  increaseQuantity,
  removeCartItem,
} from "@/redux/features/carts/cartSlice";
import { ShoppingCart } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router";

const Cart = () => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);

  const subTotal = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const totalPrice = subTotal + 5;

  const handleIncreaseQuantity = (id) => {
    dispatch(increaseQuantity(id));
  };

  const handleDecreaseQuantity = (id, qty) => {
    if (qty > 1) dispatch(decreaseQuantity(id));
    else dispatch(removeCartItem(id));
  };

  const handleRemoveCartItem = (id) => {
    dispatch(removeCartItem(id));
  };

  return (
    <div className="mx-auto py-10 w-11/12 md:w-10/12 max-w-screen-2xl">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold flex items-center gap-4">
          <ShoppingCart /> Your Cart
        </h1>
      </div>
      {/* Cart Contents */}
      <div className="mt-4 relative flex flex-col lg:flex-row items-stretch gap-8">
        {/* Cart Cards */}
        <div className="w-full lg:w-8/12">
          {cart.length > 0 ? (
            cart?.map((cart, i) => (
              <CartCard
                key={i}
                cart={cart}
                handleIncreaseQuantity={handleIncreaseQuantity}
                handleDecreaseQuantity={handleDecreaseQuantity}
                handleRemoveCartItem={handleRemoveCartItem}
              />
            ))
          ) : (
            <Card>
              <CardContent className={"flex flex-col items-center gap-4 py-8"}>
                <h1 className="text-2xl font-bold flex items-center gap-4">
                  Your Cart Is Empty
                </h1>
                <Link to={"/"}>
                  <Button className="mx-auto px-8">Buy Products</Button>
                </Link>
              </CardContent>
            </Card>
          )}
        </div>
        {/* CheckoutCard */}
        <div className="w-full lg:w-4/12 lg:sticky md:top-24 h-fit">
          <CheckoutCard subTotal={subTotal} totalPrice={totalPrice} />
        </div>
      </div>
    </div>
  );
};

export default Cart;
