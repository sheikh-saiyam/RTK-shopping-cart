import CartCard from "@/components/cards/CartCard";
import CheckoutCard from "@/components/cards/CheckoutCard";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ShoppingCart } from "lucide-react";
import { useSelector } from "react-redux";
import { Link } from "react-router";

const Cart = () => {
  const cart = useSelector((state) => state.cart);
  return (
    <div className="mx-auto py-10 w-11/12 md:w-10/12 max-w-screen-2xl">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-bold flex items-center gap-4">
          <ShoppingCart /> Your Cart
        </h1>
      </div>
      {/* Cart Contents */}
      <div className="mt-6 flex flex-col lg:flex-row items-stretch gap-8">
        {/* Cart Cards */}
        <div className="w-full lg:w-8/12">
          {cart.length > 0 ? (
            cart?.map((cart, i) => <CartCard cart={cart} key={i} />)
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
        <div className="w-full lg:w-4/12">
          <CheckoutCard />
        </div>
      </div>
    </div>
  );
};

export default Cart;
