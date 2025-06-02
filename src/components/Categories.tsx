
import { Card, CardContent } from "@/components/ui/card";

const categories = [
  {
    id: 1,
    name: "Baby Care",
    description: "Essentials for your baby",
    image: "https://images.unsplash.com/photo-1721322800607-8c38375eef04?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    color: "from-pink-100 to-pink-200"
  },
  {
    id: 2,
    name: "Toys & Games",
    description: "Fun & educational toys",
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    color: "from-blue-100 to-blue-200"
  },
  {
    id: 3,
    name: "Clothing",
    description: "Cute & comfortable wear",
    image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    color: "from-purple-100 to-purple-200"
  },
  {
    id: 4,
    name: "Feeding",
    description: "Bottles, bibs & more",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    color: "from-green-100 to-green-200"
  },
  {
    id: 5,
    name: "Diapers",
    description: "Comfort & protection",
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    color: "from-yellow-100 to-yellow-200"
  },
  {
    id: 6,
    name: "Gear & Furniture",
    description: "Strollers, cribs & more",
    image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    color: "from-indigo-100 to-indigo-200"
  }
];

const Categories = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
            Shop by Category
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Find everything you need for your little ones in our carefully curated categories
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category) => (
            <Card 
              key={category.id} 
              className="group cursor-pointer hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-0 overflow-hidden"
            >
              <CardContent className="p-0">
                <div className={`bg-gradient-to-br ${category.color} p-6 relative overflow-hidden`}>
                  <div className="relative z-10">
                    <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300">
                      <div className="w-8 h-8 rounded-full bg-gradient-to-r from-pink-400 to-purple-400"></div>
                    </div>
                    <h3 className="text-xl font-bold text-gray-800 mb-2">{category.name}</h3>
                    <p className="text-gray-600 text-sm">{category.description}</p>
                  </div>
                  
                  {/* Decorative elements */}
                  <div className="absolute -top-4 -right-4 w-20 h-20 bg-white opacity-10 rounded-full"></div>
                  <div className="absolute -bottom-6 -left-6 w-16 h-16 bg-white opacity-10 rounded-full"></div>
                </div>
                
                <div className="p-6 bg-white">
                  <button className="text-purple-600 font-semibold hover:text-purple-800 transition-colors">
                    Explore Collection →
                  </button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;
