import React from "react";
import {
  Card,
  CardHeader,
  CardFooter,
  CardTitle,
  CardAction,
  CardDescription,
  CardContent,
} from "../ui/card";
import { Badge } from "../ui/badge";
import { IoGift } from "react-icons/io5";
import { MdLocalShipping } from "react-icons/md";
import { Button } from "../ui/button";
import { Edit } from "lucide-react";
import { Trash } from "lucide-react";
import { useDispatch } from "react-redux";
import { deleteProduct } from "@/redux/features/products/productSlice";
import { toast } from "sonner";

const ProductList = ({ product }) => {
  const dispatch = useDispatch();
  const { id, title, description, price, image, category } = product || {};

  const handleDeleteProduct = (id) => {
    toast("Are you sure you want to delete this product?", {
      action: {
        label: "Yes, Delete",
        onClick: () => {
          dispatch(deleteProduct(id));
          toast.success("Product deleted successfully!", {
            style: {
              marginTop: "-10px",
            },
          });
        },
      },
      cancel: {
        label: "Cancel",
        onClick: () => {
          toast.info("Product deletion cancelled!", {
            style: {
              marginTop: "-10px",
            },
          });
        },
      },
      duration: 5000,
      style: {
        marginTop: "-10px",
      },
    });
  };

  return (
    <Card className="w-full relative">
      <CardHeader className="px-4">
        {/* badge */}
        <Badge variant={"destructive"} className="absolute top-4 left-3">
          {category}
        </Badge>

        {/* product image */}
        <img
          alt="product/image"
          src={image}
          className="w-full mt-6 object-cover h-[220px]"
        />
      </CardHeader>

      {/* product details */}
      <CardContent className="-mt-4 px-4">
        <div>
          <CardTitle className="text-2xl mb-1 mt-2">{title}</CardTitle>
          <CardDescription className="line-clamp-2">
            {description}
          </CardDescription>
          {/* price  */}
          <div className="flex items-center mt-3 gap-[15px]">
            <p className="text-[1.150rem] font-semibold mt-1">${price}</p>
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
          <Button variant="outline" className={"text-blue-500"}>
            <Edit />
          </Button>
          <Button
            onClick={() => handleDeleteProduct(id)}
            variant="outline"
            className={"text-red-500"}
          >
            <Trash />
          </Button>
        </div>
      </CardFooter>
    </Card>
  );
};

export default ProductList;
