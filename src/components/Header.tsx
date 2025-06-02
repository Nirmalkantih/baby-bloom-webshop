
import { useState } from "react";
import { Search, ShoppingBag, Menu, Heart, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { useCart } from "@/contexts/CartContext";
import Cart from "./Cart";

const Header = () => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const { getTotalItems } = useCart();

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-4">
        {/* Top bar */}
        <div className="flex items-center justify-between py-2 text-sm border-b">
          <div className="text-gray-600">
            Free shipping on orders above ₹599
          </div>
          <div className="flex items-center space-x-4">
            <span className="text-gray-600">Track Order</span>
            <span className="text-gray-600">Help</span>
          </div>
        </div>

        {/* Main header */}
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <div className="flex items-center">
            <h1 className="text-3xl font-bold bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 bg-clip-text text-transparent">
              BabyBloom
            </h1>
          </div>

          {/* Search bar */}
          <div className="hidden md:flex flex-1 max-w-xl mx-8">
            <div className="relative w-full">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <Input
                type="text"
                placeholder="Search for toys, diapers, clothes..."
                className="pl-10 pr-4 py-2 w-full rounded-full border-2 focus:border-pink-300"
              />
            </div>
          </div>

          {/* Right section */}
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="icon" className="hidden md:flex">
              <User className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" className="hidden md:flex">
              <Heart className="h-5 w-5" />
            </Button>
            
            <Sheet open={isCartOpen} onOpenChange={setIsCartOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="relative">
                  <ShoppingBag className="h-5 w-5" />
                  {getTotalItems() > 0 && (
                    <Badge className="absolute -top-2 -right-2 h-5 w-5 rounded-full p-0 flex items-center justify-center text-xs bg-pink-500">
                      {getTotalItems()}
                    </Badge>
                  )}
                </Button>
              </SheetTrigger>
              <SheetContent>
                <SheetHeader>
                  <SheetTitle>Shopping Cart</SheetTitle>
                  <SheetDescription>
                    Review your items before checkout
                  </SheetDescription>
                </SheetHeader>
                <Cart />
              </SheetContent>
            </Sheet>

            <Button variant="ghost" size="icon" className="md:hidden">
              <Menu className="h-5 w-5" />
            </Button>
          </div>
        </div>

        {/* Navigation */}
        <nav className="hidden md:flex items-center space-x-8 py-3 border-t">
          <a href="#" className="text-gray-700 hover:text-pink-500 font-medium transition-colors">
            Baby Care
          </a>
          <a href="#" className="text-gray-700 hover:text-pink-500 font-medium transition-colors">
            Toys
          </a>
          <a href="#" className="text-gray-700 hover:text-pink-500 font-medium transition-colors">
            Clothing
          </a>
          <a href="#" className="text-gray-700 hover:text-pink-500 font-medium transition-colors">
            Feeding
          </a>
          <a href="#" className="text-gray-700 hover:text-pink-500 font-medium transition-colors">
            Diapers
          </a>
          <a href="#" className="text-gray-700 hover:text-pink-500 font-medium transition-colors">
            Gear
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
