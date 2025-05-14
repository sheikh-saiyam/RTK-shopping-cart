import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

const AddProduct = () => {
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
        <form className="space-y-4">
          <div className="grid gap-4 grid-cols-2">
            {/* name */}
            <div className="space-y-2">
              <Label>Name</Label>
              <Input type="text" required placeholder="Enter Product Name" />
            </div>
            {/* price */}
            <div className="space-y-2">
              <Label>Price</Label>
              <Input type="number" required placeholder="Enter Product Price" />
            </div>
          </div>
          {/* image */}

          <div className="space-y-2">
            <Label>Image URL</Label>
            <Input type="url" required placeholder="Enter Product Image URL" />
          </div>
          {/* description */}
          <div className="space-y-2">
            <Label>Description</Label>
            <Textarea required placeholder="Enter Product Description" />
          </div>
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
