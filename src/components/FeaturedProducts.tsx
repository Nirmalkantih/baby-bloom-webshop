
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Star, Heart, ShoppingCart } from "lucide-react";
import { useCart, Product } from "@/contexts/CartContext";
import { useToast } from "@/hooks/use-toast";

const products: Product[] = [
  {
    id: 1,
    name: "Organic Cotton Baby Onesie",
    price: 899,
    originalPrice: 1299,
    image: "https://images.unsplash.com/photo-1721322800607-8c38375eef04?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    category: "Clothing",
    rating: 4.8
  },
  {
    id: 2,
    name: "Educational Building Blocks",
    price: 1599,
    originalPrice: 2199,
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    category: "Toys",
    rating: 4.9
  },
  {
    id: 3,
    name: "Anti-Colic Baby Bottle",
    price: 699,
    originalPrice: 999,
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    category: "Feeding",
    rating: 4.7
  },
  {
    id: 4,
    name: "Ultra Soft Baby Blanket",
    price: 1299,
    originalPrice: 1799,
    image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    category: "Baby Care",
    rating: 4.6
  },
  {
    id: 5,
    name: "Interactive Learning Toy",
    price: 2299,
    originalPrice: 2999,
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    category: "Toys",
    rating: 4.8
  },
  {
    id: 6,
    name: "Premium Diapers Pack",
    price: 999,
    originalPrice: 1399,
    image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    category: "Diapers",
    rating: 4.9
  }
];

const FeaturedProducts = () => {
  const [wishlist, setWishlist] = useState<number[]>([]);
  const { addToCart } = useCart();
  const { toast } = useToast();

  const toggleWishlist = (productId: number) => {
    setWishlist(prev => 
      prev.includes(productId) 
        ? prev.filter(id => id !== productId)
        : [...prev, productId]
    );
  };

  const handleAddToCart = (product: Product) => {
    addToCart(product);
    toast({
      title: "Added to cart!",
      description: `${product.name} has been added to your cart.`,
    });
  };

  const calculateDiscount = (price: number, originalPrice?: number) => {
    if (!originalPrice) return 0;
    return Math.round(((originalPrice - price) / originalPrice) * 100);
  };

  return (
    <section className="py-16 bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
            Featured Products
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Handpicked favorites that parents and kids love
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => {
            const discount = calculateDiscount(product.price, product.originalPrice);
            
            return (
              <Card 
                key={product.id} 
                className="group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border-0 overflow-hidden bg-white"
              >
                <CardContent className="p-0">
                  {/* Product Image */}
                  <div className="relative overflow-hidden">
                    <img 
                      src={product.image}
                      alt={product.name}
                      className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    
                    {/* Discount Badge */}
                    {discount > 0 && (
                      <Badge className="absolute top-3 left-3 bg-red-500 text-white font-bold">
                        {discount}% OFF
                      </Badge>
                    )}
                    
                    {/* Wishlist Button */}
                    <Button
                      size="icon"
                      variant="ghost"
                      className="absolute top-3 right-3 bg-white/80 hover:bg-white"
                      onClick={() => toggleWishlist(product.id)}
                    >
                      <Heart 
                        className={`h-4 w-4 ${wishlist.includes(product.id) ? 'fill-red-500 text-red-500' : 'text-gray-600'}`} 
                      />
                    </Button>
                  </div>

                  {/* Product Info */}
                  <div className="p-6">
                    <div className="mb-2">
                      <Badge variant="secondary" className="text-xs">
                        {product.category}
                      </Badge>
                    </div>
                    
                    <h3 className="font-semibold text-lg mb-2 line-clamp-2 text-gray-800">
                      {product.name}
                    </h3>
                    
                    {/* Rating */}
                    <div className="flex items-center mb-3">
                      <div className="flex items-center">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`h-4 w-4 ${
                              i < Math.floor(product.rating) 
                                ? 'fill-yellow-400 text-yellow-400' 
                                : 'text-gray-300'
                            }`}
                          />
                        ))}
                      </div>
                      <span className="ml-2 text-sm text-gray-600">
                        {product.rating} ({Math.floor(Math.random() * 500) + 100})
                      </span>
                    </div>
                    
                    {/* Price */}
                    <div className="flex items-center gap-2 mb-4">
                      <span className="text-2xl font-bold text-gray-900">
                        ₹{product.price}
                      </span>
                      {product.originalPrice && (
                        <span className="text-lg text-gray-500 line-through">
                          ₹{product.originalPrice}
                        </span>
                      )}
                    </div>
                    
                    {/* Add to Cart Button */}
                    <Button 
                      className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-semibold py-2 rounded-lg transition-all duration-300"
                      onClick={() => handleAddToCart(product)}
                    >
                      <ShoppingCart className="h-4 w-4 mr-2" />
                      Add to Cart
                    </Button>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="text-center mt-12">
          <Button 
            size="lg"
            variant="outline"
            className="border-2 border-purple-300 text-purple-600 hover:bg-purple-50 px-8 py-3 rounded-full text-lg font-semibold"
          >
            View All Products
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
