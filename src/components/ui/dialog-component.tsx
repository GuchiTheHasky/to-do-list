import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter,
} from "@/components/ui/dialog";
import { Button } from "./button";
import { useState } from "react";

export function AddProductModal() {
  const [open, setOpen] = useState(false);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button className="bg-red-50 text-red-600">Add Product</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        // ADD PRODUCT FORM HERE
        <DialogFooter>
          <Button
            className="bg-red-50 text-red-600 hover:bg-red-100"
            type="submit"
          >
            Add
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
