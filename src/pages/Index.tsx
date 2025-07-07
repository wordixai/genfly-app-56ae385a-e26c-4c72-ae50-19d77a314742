import { useState } from 'react';
import { Heart, ShoppingCart, Star, Menu, Search, User } from 'lucide-react';

const Index = () => {
  const [cartItems, setCartItems] = useState(0);

  const products = [
    {
      id: 1,
      name: "Vintage Sunglasses",
      price: "$89",
      image: "https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=400&h=400&fit=crop",
      rating: 5
    },
    {
      id: 2,
      name: "Pop Art T-Shirt",
      price: "$45",
      image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&h=400&fit=crop",
      rating: 4
    },
    {
      id: 3,
      name: "Retro Sneakers",
      price: "$124",
      image: "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=400&h=400&fit=crop",
      rating: 5
    },
    {
      id: 4,
      name: "Comic Book Bag",
      price: "$67",
      image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&h=400&fit=crop",
      rating: 4
    }
  ];

  const addToCart = () => {
    setCartItems(prev => prev + 1);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-400 via-pink-500 to-yellow-400 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-20">
        <div className="dots-pattern"></div>
      </div>

      {/* Header */}
      <header className="relative z-10 bg-white/90 backdrop-blur-sm border-b-4 border-black shadow-lg">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Menu className="h-6 w-6 md:hidden" />
              <h1 className="text-3xl font-black text-black transform -rotate-2 comic-font">
                POP SHOP!
              </h1>
            </div>
            
            <nav className="hidden md:flex items-center space-x-8">
              <a href="#" className="text-lg font-bold hover:text-pink-500 transition-colors comic-font">HOME</a>
              <a href="#" className="text-lg font-bold hover:text-pink-500 transition-colors comic-font">SHOP</a>
              <a href="#" className="text-lg font-bold hover:text-pink-500 transition-colors comic-font">ABOUT</a>
              <a href="#" className="text-lg font-bold hover:text-pink-500 transition-colors comic-font">CONTACT</a>
            </nav>

            <div className="flex items-center space-x-4">
              <Search className="h-6 w-6 hover:text-pink-500 cursor-pointer transition-colors" />
              <User className="h-6 w-6 hover:text-pink-500 cursor-pointer transition-colors" />
              <div className="relative">
                <ShoppingCart className="h-6 w-6 hover:text-pink-500 cursor-pointer transition-colors" />
                {cartItems > 0 && (
                  <span className="absolute -top-2 -right-2 bg-pink-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center animate-bounce">
                    {cartItems}
                  </span>
                )}
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative z-10 py-20 px-4">
        <div className="container mx-auto text-center">
          <div className="bg-white/95 backdrop-blur-sm rounded-3xl border-4 border-black shadow-2xl p-8 transform rotate-1 pop-frame">
            <h2 className="text-6xl md:text-8xl font-black text-black mb-4 comic-font transform -rotate-2">
              BOOM!
            </h2>
            <p className="text-2xl md:text-3xl font-bold text-pink-600 mb-8 comic-font">
              Explosive Fashion & Art!
            </p>
            <button className="bg-gradient-to-r from-pink-500 to-orange-500 text-white font-black text-xl px-8 py-4 rounded-full border-4 border-black shadow-lg hover-bounce comic-font transform hover:scale-105 transition-all">
              SHOP NOW! 💥
            </button>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="relative z-10 py-16 px-4">
        <div className="container mx-auto">
          <h3 className="text-4xl md:text-6xl font-black text-center text-white mb-12 comic-font text-shadow">
            HOT PICKS! 🔥
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {products.map((product) => (
              <div key={product.id} className="group">
                <div className="bg-white rounded-2xl border-4 border-black shadow-lg transform hover:rotate-2 transition-all duration-300 pop-frame overflow-hidden">
                  <div className="relative">
                    <img 
                      src={product.image} 
                      alt={product.name}
                      className="w-full h-64 object-cover"
                    />
                    <Heart className="absolute top-4 right-4 h-6 w-6 text-pink-500 hover:fill-pink-500 cursor-pointer transition-all" />
                    <div className="absolute top-4 left-4 bg-yellow-400 text-black font-black px-3 py-1 rounded-full text-sm border-2 border-black comic-font">
                      NEW!
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <h4 className="text-xl font-black text-black mb-2 comic-font">
                      {product.name}
                    </h4>
                    
                    <div className="flex items-center mb-3">
                      {[...Array(5)].map((_, i) => (
                        <Star 
                          key={i} 
                          className={`h-4 w-4 ${i < product.rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`} 
                        />
                      ))}
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <span className="text-2xl font-black text-pink-600 comic-font">
                        {product.price}
                      </span>
                      <button 
                        onClick={addToCart}
                        className="bg-gradient-to-r from-orange-500 to-pink-500 text-white font-black px-4 py-2 rounded-full border-2 border-black hover-bounce comic-font transform hover:scale-105 transition-all"
                      >
                        ADD TO CART
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="relative z-10 py-16 px-4">
        <div className="container mx-auto text-center">
          <div className="bg-gradient-to-r from-yellow-400 to-pink-500 rounded-3xl border-4 border-black shadow-2xl p-8 transform -rotate-1 pop-frame">
            <h3 className="text-4xl md:text-5xl font-black text-black mb-4 comic-font">
              JOIN THE POP SQUAD! 💌
            </h3>
            <p className="text-xl font-bold text-black mb-6 comic-font">
              Get exclusive deals & new arrivals first!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input 
                type="email" 
                placeholder="Your email here..."
                className="flex-1 px-4 py-3 rounded-full border-4 border-black font-bold comic-font focus:outline-none focus:ring-4 focus:ring-pink-300"
              />
              <button className="bg-black text-white font-black px-6 py-3 rounded-full hover-bounce comic-font transform hover:scale-105 transition-all">
                SUBSCRIBE!
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 bg-black text-white py-8 border-t-4 border-pink-500">
        <div className="container mx-auto px-4 text-center">
          <h4 className="text-2xl font-black mb-4 comic-font text-pink-400">
            POP SHOP!
          </h4>
          <p className="text-lg comic-font">
            © 2024 Pop Shop. All rights reserved. Keep it groovy! ✨
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;