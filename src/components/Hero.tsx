
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-pink-100 via-purple-50 to-blue-100 py-20">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
                Everything for your
                <span className="bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 bg-clip-text text-transparent block">
                  little ones
                </span>
              </h1>
              <p className="text-xl text-gray-600 max-w-lg">
                Discover a world of safe, quality products for babies and kids. From toys to clothing, we have everything you need.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 text-white px-8 py-3 rounded-full text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Shop Now
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="border-2 border-purple-300 text-purple-600 hover:bg-purple-50 px-8 py-3 rounded-full text-lg font-semibold"
              >
                View Offers
              </Button>
            </div>

            {/* Trust indicators */}
            <div className="flex items-center space-x-8 pt-8">
              <div className="text-center">
                <div className="text-2xl font-bold text-purple-600">50K+</div>
                <div className="text-sm text-gray-600">Happy Parents</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-pink-600">10K+</div>
                <div className="text-sm text-gray-600">Products</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-600">4.8★</div>
                <div className="text-sm text-gray-600">Rating</div>
              </div>
            </div>
          </div>

          {/* Right content - Hero image */}
          <div className="relative">
            <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1649972904349-6e44c42644a7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Happy family with baby"
                className="w-full h-[500px] object-cover"
              />
            </div>
            
            {/* Floating elements */}
            <div className="absolute -top-6 -right-6 w-24 h-24 bg-pink-200 rounded-full opacity-60 animate-bounce"></div>
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-blue-200 rounded-full opacity-60 animate-pulse"></div>
            <div className="absolute top-1/2 -left-4 w-16 h-16 bg-purple-200 rounded-full opacity-60 animate-bounce" style={{animationDelay: '1s'}}></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
