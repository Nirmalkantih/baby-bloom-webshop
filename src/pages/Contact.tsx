
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { CartProvider } from "@/contexts/CartContext";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const Contact = () => {
  return (
    <CartProvider>
      <div className="min-h-screen bg-gradient-to-br from-pink-50 via-blue-50 to-purple-50">
        <Header />
        
        <div className="container mx-auto px-4 py-12">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold text-center mb-8">Contact Us</h1>
            
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="p-6">
                <h2 className="text-2xl font-semibold mb-6">Get in Touch</h2>
                <form className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">Name</label>
                    <input 
                      type="text" 
                      className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Email</label>
                    <input 
                      type="email" 
                      className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                      placeholder="your.email@example.com"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Message</label>
                    <textarea 
                      rows={4}
                      className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                      placeholder="How can we help you?"
                    />
                  </div>
                  <Button className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600">
                    Send Message
                  </Button>
                </form>
              </Card>

              <div className="space-y-6">
                <Card className="p-6">
                  <h3 className="text-xl font-semibold mb-4">Customer Support</h3>
                  <div className="space-y-3">
                    <div className="flex items-center">
                      <span className="text-purple-500 mr-3">📞</span>
                      <span>+91 1800-123-4567</span>
                    </div>
                    <div className="flex items-center">
                      <span className="text-purple-500 mr-3">✉️</span>
                      <span>support@babybloom.com</span>
                    </div>
                    <div className="flex items-center">
                      <span className="text-purple-500 mr-3">🕒</span>
                      <span>Mon-Sat: 9AM-8PM</span>
                    </div>
                  </div>
                </Card>

                <Card className="p-6">
                  <h3 className="text-xl font-semibold mb-4">Visit Our Store</h3>
                  <div className="space-y-3">
                    <div className="flex items-start">
                      <span className="text-purple-500 mr-3 mt-1">📍</span>
                      <div>
                        <p>BabyBloom Flagship Store</p>
                        <p className="text-gray-600">123 Kids Street, Mumbai, Maharashtra 400001</p>
                      </div>
                    </div>
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </div>

        <Footer />
      </div>
    </CartProvider>
  );
};

export default Contact;
