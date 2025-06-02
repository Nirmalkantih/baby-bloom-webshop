
import { Facebook, Instagram, Twitter, Youtube, Mail, Phone, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">
              BabyBloom
            </h3>
            <p className="text-gray-400 text-sm">
              Your trusted partner in providing safe, quality products for babies and kids. Making parenting easier, one product at a time.
            </p>
            <div className="flex space-x-4">
              <Button variant="ghost" size="icon" className="text-gray-400 hover:text-white">
                <Facebook className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="text-gray-400 hover:text-white">
                <Instagram className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="text-gray-400 hover:text-white">
                <Twitter className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="text-gray-400 hover:text-white">
                <Youtube className="h-5 w-5" />
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Quick Links</h4>
            <div className="space-y-2 text-sm">
              <div><a href="#" className="text-gray-400 hover:text-white transition-colors">About Us</a></div>
              <div><a href="#" className="text-gray-400 hover:text-white transition-colors">Track Your Order</a></div>
              <div><a href="#" className="text-gray-400 hover:text-white transition-colors">Return Policy</a></div>
              <div><a href="#" className="text-gray-400 hover:text-white transition-colors">Size Guide</a></div>
              <div><a href="#" className="text-gray-400 hover:text-white transition-colors">Gift Cards</a></div>
            </div>
          </div>

          {/* Categories */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Categories</h4>
            <div className="space-y-2 text-sm">
              <div><a href="#" className="text-gray-400 hover:text-white transition-colors">Baby Care</a></div>
              <div><a href="#" className="text-gray-400 hover:text-white transition-colors">Toys & Games</a></div>
              <div><a href="#" className="text-gray-400 hover:text-white transition-colors">Clothing</a></div>
              <div><a href="#" className="text-gray-400 hover:text-white transition-colors">Feeding</a></div>
              <div><a href="#" className="text-gray-400 hover:text-white transition-colors">Gear & Furniture</a></div>
            </div>
          </div>

          {/* Newsletter */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Stay Updated</h4>
            <p className="text-gray-400 text-sm">
              Get the latest offers and updates delivered to your inbox.
            </p>
            <div className="space-y-2">
              <Input 
                type="email" 
                placeholder="Enter your email"
                className="bg-gray-800 border-gray-700 text-white placeholder-gray-400"
              />
              <Button className="w-full bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600">
                Subscribe
              </Button>
            </div>
          </div>
        </div>

        {/* Contact Info */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex items-center space-x-3">
              <MapPin className="h-5 w-5 text-pink-400" />
              <div>
                <div className="font-semibold">Address</div>
                <div className="text-sm text-gray-400">123 Baby Street, Kids City, KC 12345</div>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <Phone className="h-5 w-5 text-pink-400" />
              <div>
                <div className="font-semibold">Call Us</div>
                <div className="text-sm text-gray-400">+91 98765 43210</div>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <Mail className="h-5 w-5 text-pink-400" />
              <div>
                <div className="font-semibold">Email</div>
                <div className="text-sm text-gray-400">hello@babybloom.com</div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="text-sm text-gray-400">
            © 2024 BabyBloom. All rights reserved.
          </div>
          <div className="flex space-x-6 text-sm text-gray-400 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
