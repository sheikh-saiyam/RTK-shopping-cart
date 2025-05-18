import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  deleteProduct,
  updateProduct,
} from "@/redux/features/products/productSlice";
import { Label } from "@radix-ui/react-label";
import { Edit, Trash } from "lucide-react";
import { useState } from "react";
import { IoGift } from "react-icons/io5";
import { MdLocalShipping } from "react-icons/md";
import { useDispatch } from "react-redux";
import { toast } from "sonner";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Input } from "../ui/input";
import { Textarea } from "@/components/ui/textarea";

const ProductList = ({ product }) => {
  const dispatch = useDispatch();
  const { id, title, description, price, image, category } = product || {};

  const [isUpdateOpen, setIsUpdateOpen] = useState(false);
  const [name, setName] = useState(title);
  const [statePrice, setPrice] = useState(price);
  const [stateImage, setImage] = useState(image);
  const [stateCategory, setCategory] = useState(category);
  const [stateDescription, setDescription] = useState(description);
  const [error, setError] = useState("");

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

  const handleUpdateProduct = (e) => {
    e.preventDefault();

    if (!category) {
      setError("Category Is Required! Pls Select A Category");
      return;
    }

    const updatedProductData = {
      id,
      title: name,
      price: statePrice,
      image: stateImage,
      description: stateDescription,
      category: stateCategory,
    };

    dispatch(updateProduct(updatedProductData));
  };
  
  return (
    <Card className="w-full relative h-fit">
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
      <CardFooter className="px-4 flex flex-col items-start">
        <div className="flex items-center justify-between gap-[15px]">
          <Button
            onClick={() => setIsUpdateOpen(!isUpdateOpen)}
            variant="outline"
            className={"text-blue-500"}
          >
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

        {isUpdateOpen && (
          <div className="mt-4 pt-2 border-t">
            <form onSubmit={handleUpdateProduct} className="space-y-4">
              <div className="grid gap-4 grid-cols-2">
                {/* name */}
                <div className="space-y-2">
                  <Label>Name</Label>
                  <Input
                    type="text"
                    required
                    placeholder="Enter Product Name"
                    defaultValue={title}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
                {/* price */}
                <div className="space-y-2">
                  <Label>Price</Label>
                  <Input
                    type="number"
                    required
                    placeholder="Enter Product Price"
                    defaultValue={price}
                    onChange={(e) => setPrice(e.target.value)}
                  />
                </div>
              </div>
              {/* image */}
              <div className="grid gap-4 grid-cols-5">
                <div className="space-y-2 col-span-3">
                  <Label>Image URL</Label>
                  <Input
                    type="url"
                    required
                    placeholder="Enter Product Image URL"
                    defaultValue={image}
                    onChange={(e) => setImage(e.target.value)}
                  />
                </div>
                <div className="space-y-2 col-span-2">
                  <Label>Category</Label>
                  <Select
                    value={stateCategory}
                    onValueChange={(value) => {
                      setCategory(value);
                      setError("");
                    }}
                    className="w-full"
                  >
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Select Category" />
                    </SelectTrigger>
                    <SelectContent className="w-full">
                      <SelectItem value="Laptop">Laptop</SelectItem>
                      <SelectItem value="Phone">Phone</SelectItem>
                      <SelectItem value="Accessories">System</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              {/* description */}
              <div className="-mt-2 space-y-2">
                <Label>Description</Label>
                <Textarea
                  required
                  placeholder="Enter Product Description"
                  defaultValue={description}
                  onChange={(e) => setDescription(e.target.value)}
                />
              </div>
              {/* error */}
              {error && (
                <div className="-mt-1">
                  <Label className={"text-red-500"}>{error}</Label>
                </div>
              )}
              {/* Add */}
              <div>
                <Button type="submit">Update Product</Button>
              </div>
            </form>
          </div>
        )}
      </CardFooter>
    </Card>
  );
};

export default ProductList;
