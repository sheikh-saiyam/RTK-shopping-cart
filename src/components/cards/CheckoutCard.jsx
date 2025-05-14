import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardTitle } from "@/components/ui/card";

const CheckoutCard = ({ subTotal, totalPrice }) => {
  return (
    <Card>
      <CardContent className={"space-y-3"}>
        <div className="flex justify-between items-center">
          <CardTitle>Subtotal</CardTitle>
          <CardTitle className={"font-normal"}>
            <span className="font-semibold mr-0.5">$</span>
            {subTotal || 0.0}
          </CardTitle>
        </div>
        <div className="flex justify-between items-center">
          <CardTitle>Shpping</CardTitle>
          <CardTitle className={"font-normal"}>
            <span className="font-semibold mr-0.5">$</span>5.00
          </CardTitle>
        </div>
        <div className="border-t border-border pt-2 mt-4 flex justify-between items-center">
          <CardTitle>Total</CardTitle>
          <CardTitle className={"font-normal"}>
            <span className="font-semibold mr-0.5">$</span>
            {totalPrice.toFixed(2) || 0}
          </CardTitle>
        </div>
      </CardContent>
      <CardFooter>
        <Button className={"w-full"}>Checkout</Button>
      </CardFooter>
    </Card>
  );
};

export default CheckoutCard;
