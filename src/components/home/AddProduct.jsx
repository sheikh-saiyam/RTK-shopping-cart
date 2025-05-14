import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { Textarea } from "@/components/ui/textarea";
import { addProduct } from "@/redux/features/products/productSlice";
import { useDispatch } from "react-redux";
import { useState } from "react";

const AddProduct = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!category) {
      setError("Category Is Required! Pls Select A Category");
      return;
    }

    const productData = {
      name,
      price,
      image,
      description,
      category,
    };

    dispatch(addProduct(productData));
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Add Product</CardTitle>
        <CardDescription>
          Add detailed product information including name, price, image, and
          offers to display it in your store.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid gap-4 grid-cols-2">
            {/* name */}
            <div className="space-y-2">
              <Label>Name</Label>
              <Input
                type="text"
                required
                placeholder="Enter Product Name"
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
                onChange={(e) => setImage(e.target.value)}
              />
            </div>
            <div className="space-y-2 col-span-2">
              <Label>Category</Label>
              <Select
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
            <Button>Add Product</Button>
          </div>
        </form>
      </CardContent>
    </Card>
  );
};

export default AddProduct;
