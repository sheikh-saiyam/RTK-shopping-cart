import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useState } from "react";
import { FiArrowUpRight } from "react-icons/fi";
import { IoGift } from "react-icons/io5";
import { MdLocalShipping } from "react-icons/md";
import { RiHeartAddLine, RiHeartFill } from "react-icons/ri";

const ProductCard = () => {
  const [isFavorite, setIsFavorite] = useState(false);

  return (
    <Card className="w-full relative">
      <CardHeader className="px-4">
        {/* badge */}
        <Badge variant={"destructive"} className="absolute top-2 left-2">
          Best Value
        </Badge>

        {/* product image */}
        <img
          alt="product/image"
          src="https://i.ibb.co.com/z4BV3S2/image-1.png"
          className="w-full mt-6"
        />
      </CardHeader>

      {/* product details */}
      <CardContent className="-mt-4 px-4">
        <div>
          <CardTitle className="text-2xl mb-1 mt-2">Apple Mac</CardTitle>
          <CardDescription className="line-clamp-2">
            2020 Apple MacBook Pro with Apple M1 Chip (13-inch, 8GB RAM, 256GB
            SSD Storage) - Silver
          </CardDescription>
          {/* price  */}
          <div className="flex items-center mt-3 gap-[15px]">
            <p className="text-[1.150rem] font-semibold mt-1">$1024.99+</p>
          </div>
          {/* shipping offers */}
          <div className="flex items-center border-t border-gray-300 mt-3 gap-[15px] pt-[5px]">
            <div className="flex items-center gap-[6px] text-gray-400 text-[0.9rem]">
              <MdLocalShipping />
              <p>Free shipping</p>
            </div>
            <div className="flex items-center gap-[6px] text-gray-400 text-[0.9rem]">
              <IoGift />
              <p>Free gift</p>
            </div>
          </div>
        </div>
      </CardContent>

      {/* actions */}
      <CardFooter className="px-4">
        <div className="flex items-center justify-between gap-[15px]">
          <Button className="grow justify-center flex items-center gap-[0.5rem] transition-all duration-200">
            Buy Product
            <FiArrowUpRight className="text-[1.3rem]" />
          </Button>
          <Button variant={"outline"} className={"mt-[1px]"}>
            {isFavorite ? (
              <RiHeartFill
                onClick={() => setIsFavorite(false)}
                className="text-muted-foreground text-[1.3rem]"
              />
            ) : (
              <RiHeartAddLine
                onClick={() => setIsFavorite(true)}
                className="text-muted-foreground text-[1.3rem]"
              />
            )}
          </Button>
        </div>
      </CardFooter>
    </Card>
  );
};

export default ProductCard;
