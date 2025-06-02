
import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import { CartProvider } from "@/contexts/CartContext";

const Products = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const products = [
    {
      id: 1,
      name: "Soft Baby Teddy Bear",
      price: 899,
      image: "https://images.unsplash.com/photo-1530325553146-0113117e1b5d?w=300&h=300&fit=crop",
      category: "toys",
      rating: 4.8,
      originalPrice: 1299
    },
    {
      id: 2,
      name: "Organic Cotton Onesie",
      price: 599,
      image: "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?w=300&h=300&fit=crop",
      category: "clothing",
      rating: 4.9,
      originalPrice: 799
    },
    {
      id: 3,
      name: "Baby Bath Set",
      price: 1299,
      image: "https://images.unsplash.com/photo-1584464491033-06628f3a6b7b?w=300&h=300&fit=crop",
      category: "care",
      rating: 4.7,
      originalPrice: 1599
    },
    {
      id: 4,
      name: "Educational Building Blocks",
      price: 1599,
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=300&h=300&fit=crop",
      category: "toys",
      rating: 4.6,
      originalPrice: 1999
    },
    {
      id: 5,
      name: "Baby Feeding Bottle Set",
      price: 899,
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=300&h=300&fit=crop",
      category: "feeding",
      rating: 4.8,
      originalPrice: 1199
    },
    {
      id: 6,
      name: "Colorful Baby Romper",
      price: 799,
      image: "https://images.unsplash.com/photo-1519689680058-324335c77eba?w=300&h=300&fit=crop",
      category: "clothing",
      rating: 4.5,
      originalPrice: 999
    }
  ];

  const categories = [
    { id: "all", name: "All Products" },
    { id: "toys", name: "Toys" },
    { id: "clothing", name: "Clothing" },
    { id: "care", name: "Baby Care" },
    { id: "feeding", name: "Feeding" }
  ];

  const filteredProducts = selectedCategory === "all" 
    ? products 
    : products.filter(product => product.category === selectedCategory);

  return (
    <CartProvider>
      <div className="min-h-screen bg-gradient-to-br from-pink-50 via-blue-50 to-purple-50">
        <Header />
        
        <div className="container mx-auto px-4 py-8">
          <h1 className="text-3xl font-bold text-center mb-8">Our Products</h1>
          
          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-2 rounded-full font-medium transition-all ${
                  selectedCategory === category.id
                    ? "bg-purple-500 text-white"
                    : "bg-white text-gray-700 hover:bg-purple-100"
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>

          {/* Products Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>

        <Footer />
      </div>
    </CartProvider>
  );
};

export default Products;
