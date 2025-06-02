
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Minus, Plus, Trash2 } from "lucide-react";
import { useCart } from "@/contexts/CartContext";

const Cart = () => {
  const { cartItems, removeFromCart, updateQuantity, getTotalPrice } = useCart();

  if (cartItems.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center h-64 text-center">
        <div className="text-gray-400 mb-4">
          <svg className="w-16 h-16 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
          </svg>
        </div>
        <h3 className="text-lg font-semibold mb-2">Your cart is empty</h3>
        <p className="text-gray-500 mb-4">Add some products to get started!</p>
      </div>
    );
  }

  return (
    <div className="space-y-4 mt-6">
      {/* Cart Items */}
      <div className="space-y-4 max-h-96 overflow-y-auto">
        {cartItems.map((item) => (
          <Card key={item.id} className="p-4">
            <div className="flex items-center space-x-4">
              <img
                src={item.image}
                alt={item.name}
                className="w-16 h-16 object-cover rounded-lg"
              />
              
              <div className="flex-1 min-w-0">
                <h4 className="font-medium text-sm truncate">{item.name}</h4>
                <p className="text-sm text-gray-500">{item.category}</p>
                <p className="font-semibold text-purple-600">₹{item.price}</p>
              </div>
              
              <div className="flex items-center space-x-2">
                <Button
                  variant="outline"
                  size="icon"
                  className="h-8 w-8"
                  onClick={() => updateQuantity(item.id, item.quantity - 1)}
                >
                  <Minus className="h-3 w-3" />
                </Button>
                
                <span className="w-8 text-center font-medium">{item.quantity}</span>
                
                <Button
                  variant="outline"
                  size="icon"
                  className="h-8 w-8"
                  onClick={() => updateQuantity(item.id, item.quantity + 1)}
                >
                  <Plus className="h-3 w-3" />
                </Button>
                
                <Button
                  variant="ghost"
                  size="icon"
                  className="h-8 w-8 text-red-500 hover:text-red-700"
                  onClick={() => removeFromCart(item.id)}
                >
                  <Trash2 className="h-3 w-3" />
                </Button>
              </div>
            </div>
          </Card>
        ))}
      </div>

      <Separator />

      {/* Cart Summary */}
      <div className="space-y-4">
        <div className="flex justify-between items-center">
          <span className="font-semibold">Total:</span>
          <span className="text-2xl font-bold text-purple-600">
            ₹{getTotalPrice().toFixed(2)}
          </span>
        </div>

        <Button 
          className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-semibold py-3 rounded-lg"
          size="lg"
        >
          Proceed to Checkout
        </Button>
        
        <Button 
          variant="outline" 
          className="w-full"
          size="lg"
        >
          Continue Shopping
        </Button>
      </div>
    </div>
  );
};

export default Cart;
