import React, { useState, useEffect } from "react";

const Products = () => {
  const [isVisible, setIsVisible] = useState({});
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);

      // Check visibility of sections
      const sections = document.querySelectorAll(".animate-on-scroll");
      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        const isInView = rect.top < window.innerHeight && rect.bottom > 0;
        setIsVisible((prev) => ({
          ...prev,
          [section.id]: isInView,
        }));
      });
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial check
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const products = [
    {
      id: 1,
      name: "R6 Outfit Collection",
      category: "Roblox Avatar",
      price: "500 Robux",
      description:
        "Koleksi outfit R6 eksklusif dengan design keren dan unik. Perfect untuk karakter Roblox kamu!",
      features: [
        "Design Eksklusif",
        "High Quality",
        "Limited Edition",
        "Compatible R6",
      ],
      image: "/images/products/r6-outfit.jpg",
      status: "Available",
    },
    {
      id: 2,
      name: "R15 Character Pack",
      category: "Roblox Avatar",
      price: "750 Robux",
      description:
        "Paket karakter R15 lengkap dengan aksesoris dan outfit premium. Bikin karakter kamu makin kece!",
      features: [
        "Complete Set",
        "Premium Quality",
        "Multiple Styles",
        "R15 Compatible",
      ],
      image: "/images/products/r15-pack.jpg",
      status: "Available",
    },
    {
      id: 3,
      name: "Gaming Accessories",
      category: "Accessories",
      price: "300 Robux",
      description:
        "Aksesoris gaming keren seperti hats, glasses, dan accessories lainnya untuk melengkapi look kamu!",
      features: ["Trendy Design", "High Quality", "Mix & Match", "Affordable"],
      image: "/images/products/accessories.jpg",
      status: "Available",
    },
    {
      id: 4,
      name: "Limited Edition Bundle",
      category: "Special Bundle",
      price: "1200 Robux",
      description:
        "Bundle eksklusif dengan semua produk terbaik Cazera Society. Limited time offer!",
      features: [
        "All Products",
        "Exclusive Design",
        "Limited Time",
        "Best Value",
      ],
      image: "/images/products/bundle.jpg",
      status: "Limited",
    },
  ];

  return (
    <div className="min-h-screen pt-12">
      {/* Hero Section */}
      <section
        className="min-h-screen flex items-center relative overflow-hidden animate-on-scroll"
        id="hero"
        style={{ backgroundColor: "#212121" }}
      >
        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          {/* Diagonal Ribbons */}
          <div className="absolute top-10 left-0 w-full h-px bg-gradient-to-r from-transparent via-white to-transparent opacity-20 transform rotate-12"></div>
          <div className="absolute top-32 right-0 w-full h-px bg-gradient-to-r from-transparent via-white to-transparent opacity-15 transform -rotate-12"></div>
          <div className="absolute bottom-40 left-0 w-full h-px bg-gradient-to-r from-transparent via-white to-transparent opacity-10 transform rotate-6"></div>

          {/* Floating Community Elements */}
          <div className="absolute top-16 left-1/4 text-white text-xs opacity-30 animate-pulse font-mono">
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-white rounded-full"></div>
              <span>ROBLOX</span>
            </div>
          </div>
          <div className="absolute top-24 right-1/4 text-white text-xs opacity-25 animate-bounce font-mono">
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-white rounded-full"></div>
              <span>OUTFITS</span>
            </div>
          </div>
          <div className="absolute bottom-32 left-1/2 text-white text-xs opacity-20 animate-pulse font-mono">
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-white rounded-full"></div>
              <span>R6/R15</span>
            </div>
          </div>

          {/* Subtle Grid Pattern */}
          <div
            className="absolute inset-0 opacity-5"
            style={{
              backgroundImage: `
                linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
              `,
              backgroundSize: "50px 50px",
            }}
          ></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <div
              className={`mb-4 transition-all duration-1000 ${
                isVisible.hero
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
            >
              <span
                className="inline-block px-6 py-3 rounded-full text-sm font-semibold animate-pulse"
                style={{ backgroundColor: "#FF7E21", color: "#FFFFFF" }}
              >
                🛍️ Produk Keren
              </span>
            </div>
            <h1
              className={`text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-white transition-all duration-1000 delay-200 ${
                isVisible.hero
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
            >
              Our <span style={{ color: "#FF7E21" }}>Products</span>
            </h1>
            <p
              className={`text-lg md:text-xl mb-8 max-w-3xl mx-auto transition-all duration-1000 delay-400 ${
                isVisible.hero
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
              style={{ color: "#FAFAFA" }}
            >
              Koleksi outfit dan aksesoris Roblox eksklusif dari Cazera Society.
              Design keren yang bikin karakter kamu makin kece!
            </p>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section
        className="py-32 relative animate-on-scroll"
        id="products"
        style={{ backgroundColor: "#212121" }}
      >
        {/* Animated Background */}
        <div className="absolute inset-0">
          <div className="absolute top-10 left-20 w-8 h-8 border-2 border-white transform rotate-45 opacity-20 animate-spin"></div>
          <div className="absolute bottom-20 right-10 w-6 h-6 bg-white transform rotate-12 opacity-30 animate-pulse"></div>
          <div className="absolute top-1/2 left-10 w-4 h-4 border border-white opacity-25 animate-bounce"></div>
          <div
            className="absolute top-20 right-1/4 w-12 h-12 rounded-full opacity-15 animate-pulse"
            style={{ backgroundColor: "#FF7E21" }}
          ></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div
            className={`text-center mb-20 transition-all duration-1000 ${
              isVisible.products
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            <div className="mb-6">
              <span
                className="inline-block px-4 py-2 rounded-full text-sm font-semibold mb-4 hover:scale-110 transition-transform duration-300 cursor-default"
                style={{ backgroundColor: "#FF7E21", color: "#FFFFFF" }}
              >
                🎮 Koleksi Produk
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6 hover:text-orange-400 transition-colors duration-500">
              Produk <span style={{ color: "#FF7E21" }}>Eksklusif</span>
            </h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Outfit dan aksesoris Roblox dengan design unik dan kualitas
              premium
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {products.map((product, index) => (
              <div
                key={product.id}
                className={`group transition-all duration-1000 ${
                  isVisible.products
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-10"
                }`}
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                <div className="bg-gray-800 rounded-2xl shadow-2xl transition-all duration-500 hover:scale-105 hover:shadow-3xl relative overflow-hidden border border-gray-700 hover:border-orange-500">
                  {/* Product Image Placeholder */}
                  <div className="h-48 bg-gradient-to-br from-orange-500/20 to-red-500/20 flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-16 h-16 bg-orange-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                        <span className="text-white text-2xl font-bold">
                          {product.name.charAt(0)}
                        </span>
                      </div>
                      <p className="text-white text-sm font-semibold">
                        {product.category}
                      </p>
                    </div>
                  </div>

                  <div className="p-6">
                    {/* Status Badge */}
                    <div className="flex justify-between items-start mb-4">
                      <span
                        className={`px-3 py-1 rounded-full text-xs font-semibold ${
                          product.status === "Available"
                            ? "bg-green-500/20 text-green-400"
                            : "bg-red-500/20 text-red-400"
                        }`}
                      >
                        {product.status}
                      </span>
                      <span className="text-orange-400 font-bold text-lg">
                        {product.price}
                      </span>
                    </div>

                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-orange-400 transition-colors duration-300">
                      {product.name}
                    </h3>

                    <p className="text-gray-300 text-sm mb-4 leading-relaxed">
                      {product.description}
                    </p>

                    {/* Features */}
                    <div className="mb-6">
                      <h4 className="text-sm font-semibold text-white mb-2">
                        Features:
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {product.features.map((feature, idx) => (
                          <span
                            key={idx}
                            className="px-2 py-1 bg-orange-500/20 text-orange-400 text-xs rounded-full"
                          >
                            {feature}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex gap-2">
                      <button className="flex-1 px-4 py-2 bg-orange-500 text-white rounded-lg font-semibold hover:bg-orange-600 transition-colors duration-300 text-sm">
                        Beli Sekarang
                      </button>
                      <button className="px-4 py-2 border border-orange-500 text-orange-400 rounded-lg font-semibold hover:bg-orange-500 hover:text-white transition-all duration-300 text-sm">
                        Preview
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section
        id="cta"
        className="py-32 relative overflow-hidden animate-on-scroll"
        style={{ backgroundColor: "#FF7E21" }}
      >
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div
            className="absolute top-10 left-10 w-20 h-20 rounded-full opacity-20 animate-pulse"
            style={{ backgroundColor: "#FFFFFF" }}
          ></div>
          <div
            className="absolute bottom-20 right-20 w-16 h-16 rounded-full opacity-30 animate-bounce"
            style={{ backgroundColor: "#FFFFFF" }}
          ></div>
          <div
            className="absolute top-1/2 left-1/4 w-12 h-12 rounded-full opacity-25 animate-pulse"
            style={{ backgroundColor: "#FFFFFF" }}
          ></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div
            className={`mb-8 transition-all duration-1000 ${
              isVisible.cta
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            <span
              className="inline-block px-6 py-3 rounded-full text-sm font-semibold mb-8 animate-pulse"
              style={{ backgroundColor: "#FFFFFF", color: "#212121" }}
            >
              🛒 Mau Beli?
            </span>
          </div>
          <h2
            className={`text-4xl md:text-5xl lg:text-6xl font-black text-white mb-8 transition-all duration-1000 delay-200 ${
              isVisible.cta
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            Yuk <span style={{ color: "#212121" }}>beli produk</span> kita!
          </h2>
          <p
            className={`text-lg md:text-xl lg:text-2xl text-white mb-12 max-w-3xl mx-auto opacity-90 font-semibold transition-all duration-1000 delay-400 ${
              isVisible.cta
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            Produk eksklusif dengan kualitas premium dan design yang kece!
          </p>
          <div
            className={`flex flex-col sm:flex-row gap-6 justify-center transition-all duration-1000 delay-600 ${
              isVisible.cta
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            <a
              href="https://discord.gg/mK26qvZXSY"
              target="_blank"
              rel="noopener noreferrer"
              className="group px-8 py-4 rounded-full font-black text-lg transition-all duration-500 hover:scale-105 hover:shadow-xl relative overflow-hidden"
              style={{ backgroundColor: "#FFFFFF", color: "#212121" }}
            >
              <span className="relative z-10">Join Discord</span>
              <div className="absolute inset-0 bg-gradient-to-r from-gray-100 to-gray-200 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </a>
            <button
              className="group px-8 py-4 rounded-full font-black text-lg border-2 transition-all duration-500 hover:scale-105 hover:shadow-xl relative overflow-hidden"
              style={{ borderColor: "#FFFFFF", color: "#FFFFFF" }}
            >
              <span className="relative z-10">Lihat Gallery</span>
              <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-500"></div>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Products;
