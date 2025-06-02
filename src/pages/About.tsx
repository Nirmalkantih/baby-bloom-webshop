
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { CartProvider } from "@/contexts/CartContext";

const About = () => {
  return (
    <CartProvider>
      <div className="min-h-screen bg-gradient-to-br from-pink-50 via-blue-50 to-purple-50">
        <Header />
        
        <div className="container mx-auto px-4 py-12">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold text-center mb-8">About BabyBloom</h1>
            
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div>
                <img 
                  src="https://images.unsplash.com/photo-1476703993599-0035a21b17a9?w=500&h=300&fit=crop" 
                  alt="Happy family" 
                  className="rounded-lg shadow-lg w-full"
                />
              </div>
              <div className="flex flex-col justify-center">
                <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
                <p className="text-gray-600 mb-4">
                  At BabyBloom, we believe every child deserves the best start in life. 
                  We're dedicated to providing premium, safe, and innovative products 
                  that support your child's growth and development.
                </p>
                <p className="text-gray-600">
                  Founded by parents, for parents, we understand the importance of 
                  quality, safety, and value when it comes to your little ones.
                </p>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="text-center">
                <div className="bg-purple-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🛡️</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Safety First</h3>
                <p className="text-gray-600">All our products meet or exceed international safety standards.</p>
              </div>
              <div className="text-center">
                <div className="bg-pink-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">💝</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Premium Quality</h3>
                <p className="text-gray-600">We source only the finest materials for lasting durability.</p>
              </div>
              <div className="text-center">
                <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🚚</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Fast Delivery</h3>
                <p className="text-gray-600">Quick and secure delivery to your doorstep.</p>
              </div>
            </div>
          </div>
        </div>

        <Footer />
      </div>
    </CartProvider>
  );
};

export default About;
