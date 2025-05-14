import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "../ui/button";
import { Minus } from "lucide-react";
import { Plus } from "lucide-react";
import { Trash } from "lucide-react";

const CartCard = ({ cart }) => {
  return (
    <Card className={"mb-4"}>
      <CardContent className={"flex flex-col gap-4 md:flex-row"}>
        {/* img */}
        <div className="w-8/12 md:w-4/12">
          <img
            src={cart.image}
            alt={cart.title}
            className="w-full h-[160px] border border-border rounded-2xl shadow"
          />
        </div>
        {/* main content */}
        <div className="mt-2 flex justify-between items-stretch">
          {/* details */}
          <div className="space-y-3">
            <CardTitle className={"text-xl"}>{cart.title}</CardTitle>
            <CardTitle>
              Price: <span className="font-normal mr-0.5">$ {cart.price}</span>
            </CardTitle>
            <CardTitle>
              Category: <span className="font-normal">{cart.category}</span>
            </CardTitle>

            <CardDescription className={"w-8/12"}>
              {cart.description}
            </CardDescription>
          </div>
          {/* quantity selector */}
          <div className="flex flex-col justify-between">
            <div className="flex gap-1 border p-1 rounded-xl shadow">
              <Button
                variant="outline"
                className={"rounded-lg font-bold text-xl"}
              >
                <Minus />
              </Button>
              <Button variant="outline" className={"rounded-lg"}>
                {cart.quantity}
              </Button>
              <Button
                variant="outline"
                className={"rounded-lg font-bold text-xl"}
              >
                <Plus />
              </Button>
            </div>
            {/* Delete */}
            <div className="flex justify-end">
              <Button variant={"destructive"}>
                <Trash />
              </Button>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default CartCard;
