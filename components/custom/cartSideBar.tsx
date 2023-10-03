"use client";

import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetDescription,
  SheetTrigger,
} from "@/components/ui/sheet";
import { useSidebar } from "@/hooks/use-sidebar";

const CartSidebar = () => {
  const { isSidebarOpen, toggleSidebar } = useSidebar();

  return (
    <Sheet open={isSidebarOpen} onOpenChange={() => toggleSidebar(false)}>
      <SheetTrigger>Open</SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Are you sure absolutely sure?</SheetTitle>
          <SheetDescription>
            This action cannot be undone. This will permanently delete your
            account and remove your data from our servers.
          </SheetDescription>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
};

export default CartSidebar;
