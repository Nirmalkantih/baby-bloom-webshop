
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Categories from "@/components/Categories";
import FeaturedProducts from "@/components/FeaturedProducts";
import Footer from "@/components/Footer";
import { CartProvider } from "@/contexts/CartContext";

const Index = () => {
  return (
    <CartProvider>
      <div className="min-h-screen bg-gradient-to-br from-pink-50 via-blue-50 to-purple-50">
        <Header />
        <Hero />
        <Categories />
        <FeaturedProducts />
        <Footer />
      </div>
    </CartProvider>
  );
};

export default Index;
