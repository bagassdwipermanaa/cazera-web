import React, { useState, useEffect } from "react";

const Products = () => {
  const [isVisible, setIsVisible] = useState({});
  const [scrollY, setScrollY] = useState(0);
  const [previewModal, setPreviewModal] = useState({
    isOpen: false,
    product: null,
    activeImage: 0,
  });

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

  const openPreview = (product) => {
    setPreviewModal({ isOpen: true, product, activeImage: 0 });
  };

  const closePreview = () => {
    setPreviewModal({ isOpen: false, product: null, activeImage: 0 });
  };

  const setActiveImage = (index) => {
    setPreviewModal((prev) => ({ ...prev, activeImage: index }));
  };

  // Array gambar untuk produk Tractopp Polos Cazera
  const productImages = [
    "/images/products/tractopp-polos-cazera/main.jpg",
    "/images/products/tractopp-polos-cazera/preview.jpg",
    "/images/products/tractopp-polos-cazera/detail1.jpg",
    "/images/products/tractopp-polos-cazera/detail2.jpg",
  ];

  const products = [
    {
      id: 1,
      name: "Tractopp Polos Cazera",
      category: "Classic Shirt",
      price: "5 Robux",
      description:
        "Track top polos Cazera dengan design eksklusif. Shirt putih dengan zipper hitam dan logo CZ yang keren!",
      features: [
        "Design Eksklusif",
        "Classic Shirt",
        "Logo CZ",
        "Zipper Detail",
      ],
      image: "/images/products/tractopp-polos-cazera/main.jpg",
      status: "Available",
      robloxLink: "https://www.roblox.com/catalog/105510672472526",
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
              Produk eksklusif Classic Shirt dari Cazera Society. Design keren
              yang bikin karakter kamu makin kece!
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

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 justify-items-center">
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
                  {/* Product Image */}
                  <div className="h-64 bg-gradient-to-br from-gray-700 to-gray-800 flex items-center justify-center relative overflow-hidden rounded-t-2xl">
                    {product.image ? (
                      <img
                        src={product.image}
                        alt={product.name}
                        className="max-w-full max-h-full object-contain group-hover:scale-105 transition-transform duration-500"
                        style={{ width: "auto", height: "auto" }}
                        onError={(e) => {
                          e.target.style.display = "none";
                          e.target.nextSibling.style.display = "flex";
                        }}
                      />
                    ) : null}
                    <div
                      className={`absolute inset-0 flex items-center justify-center ${
                        product.image ? "hidden" : "flex"
                      }`}
                    >
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
                    <div className="space-y-3">
                      <div className="flex gap-2">
                        <a
                          href={product.robloxLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1 px-4 py-2 bg-orange-500 text-white rounded-lg font-semibold hover:bg-orange-600 transition-colors duration-300 text-sm text-center"
                        >
                          Beli Sekarang
                        </a>
                        <button
                          onClick={() => openPreview(product)}
                          className="px-4 py-2 border border-orange-500 text-orange-400 rounded-lg font-semibold hover:bg-orange-500 hover:text-white transition-all duration-300 text-sm"
                        >
                          Preview
                        </button>
                      </div>

                      {/* Quick Info */}
                      <div className="bg-gray-700/50 rounded-lg p-3">
                        <div className="flex items-center justify-between text-xs text-gray-400 mb-2">
                          <span>💡 Info:</span>
                          <span>Lihat aturan di bawah</span>
                        </div>
                        <div className="flex items-center justify-between text-xs">
                          <span className="text-blue-400">💬 Discord:</span>
                          <a
                            href="https://discord.gg/qWv7pwdZsn"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-400 hover:text-blue-300 transition-colors"
                          >
                            Join Server
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Rules Section */}
      <section
        className="py-20 relative animate-on-scroll"
        id="rules"
        style={{ backgroundColor: "#1A1A1A" }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            className={`text-center mb-16 transition-all duration-1000 ${
              isVisible.rules
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            <div className="mb-6">
              <span
                className="inline-block px-4 py-2 rounded-full text-sm font-semibold mb-4"
                style={{ backgroundColor: "#FF7E21", color: "#FFFFFF" }}
              >
                📋 Aturan Pembelian
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-white mb-6">
              Cara <span style={{ color: "#FF7E21" }}>Membeli</span> Produk
            </h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Ikuti langkah-langkah berikut untuk membeli produk kami
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Purchase Rules */}
            <div
              className={`bg-gray-800 rounded-2xl p-8 border border-gray-700 transition-all duration-1000 ${
                isVisible.rules
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: "200ms" }}
            >
              <div className="flex items-center mb-6">
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center mr-4"
                  style={{ backgroundColor: "#FF7E21" }}
                >
                  <span className="text-white text-xl">🛒</span>
                </div>
                <h3 className="text-2xl font-bold text-white">
                  Aturan Pembelian
                </h3>
              </div>

              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="w-6 h-6 bg-orange-500 rounded-full flex items-center justify-center mr-3 mt-1 flex-shrink-0">
                    <span className="text-white text-xs font-bold">1</span>
                  </div>
                  <p className="text-gray-300 leading-relaxed">
                    Klik tombol{" "}
                    <span className="text-orange-400 font-semibold">
                      "Beli Sekarang"
                    </span>{" "}
                    pada produk yang ingin dibeli
                  </p>
                </div>

                <div className="flex items-start">
                  <div className="w-6 h-6 bg-orange-500 rounded-full flex items-center justify-center mr-3 mt-1 flex-shrink-0">
                    <span className="text-white text-xs font-bold">2</span>
                  </div>
                  <p className="text-gray-300 leading-relaxed">
                    Anda akan diarahkan ke halaman Roblox untuk menyelesaikan
                    pembelian
                  </p>
                </div>

                <div className="flex items-start">
                  <div className="w-6 h-6 bg-orange-500 rounded-full flex items-center justify-center mr-3 mt-1 flex-shrink-0">
                    <span className="text-white text-xs font-bold">3</span>
                  </div>
                  <p className="text-gray-300 leading-relaxed">
                    Pastikan Anda memiliki Robux yang cukup untuk membeli produk
                  </p>
                </div>

                <div className="flex items-start">
                  <div className="w-6 h-6 bg-orange-500 rounded-full flex items-center justify-center mr-3 mt-1 flex-shrink-0">
                    <span className="text-white text-xs font-bold">4</span>
                  </div>
                  <p className="text-gray-300 leading-relaxed">
                    Setelah pembelian selesai, produk akan langsung tersedia di
                    inventory Roblox Anda
                  </p>
                </div>
              </div>
            </div>

            {/* Discord Info */}
            <div
              className={`bg-gray-800 rounded-2xl p-8 border border-gray-700 transition-all duration-1000 ${
                isVisible.rules
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: "400ms" }}
            >
              <div className="flex items-center mb-6">
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center mr-4"
                  style={{ backgroundColor: "#5865F2" }}
                >
                  <span className="text-white text-xl">💬</span>
                </div>
                <h3 className="text-2xl font-bold text-white">
                  Lihat Produk di Discord
                </h3>
              </div>

              <div className="space-y-4">
                <p className="text-gray-300 leading-relaxed mb-6">
                  Bergabunglah dengan Discord server kami untuk melihat preview
                  produk, mendapatkan update terbaru, dan berinteraksi dengan
                  komunitas Cazera!
                </p>

                <div className="bg-gray-700 rounded-xl p-4 mb-6">
                  <div className="flex items-center mb-3">
                    <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center mr-3">
                      <span className="text-white text-sm">📱</span>
                    </div>
                    <h4 className="text-white font-semibold">
                      Keuntungan Join Discord:
                    </h4>
                  </div>
                  <ul className="text-gray-300 text-sm space-y-2">
                    <li>• Preview produk sebelum rilis</li>
                    <li>• Update produk terbaru</li>
                    <li>• Komunitas yang aktif</li>
                    <li>• Support dan bantuan</li>
                  </ul>
                </div>

                <a
                  href="https://discord.gg/qWv7pwdZsn"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-300 text-center flex items-center justify-center"
                >
                  <span className="mr-2">🚀</span>
                  Join Discord Server
                </a>
              </div>
            </div>
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
              href="https://discord.gg/qWv7pwdZsn"
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

      {/* Preview Modal */}
      {previewModal.isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4">
          <div className="bg-gray-800 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden">
            {/* Modal Header */}
            <div className="flex justify-between items-center p-6 border-b border-gray-700">
              <h3 className="text-2xl font-bold text-white">
                Preview: {previewModal.product?.name}
              </h3>
              <button
                onClick={closePreview}
                className="text-gray-400 hover:text-white text-2xl font-bold transition-colors duration-300"
              >
                ×
              </button>
            </div>

            {/* Modal Content */}
            <div className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Image Section */}
                <div className="space-y-4">
                  <div className="bg-gray-700 rounded-xl p-4">
                    <img
                      src={productImages[previewModal.activeImage]}
                      alt={previewModal.product?.name}
                      className="w-full h-64 object-contain rounded-lg"
                    />
                  </div>

                  {/* Additional Images */}
                  <div className="grid grid-cols-4 gap-2">
                    {productImages.map((image, index) => (
                      <div
                        key={index}
                        onClick={() => setActiveImage(index)}
                        className={`bg-gray-700 rounded-lg p-2 cursor-pointer transition-all duration-300 hover:bg-gray-600 ${
                          previewModal.activeImage === index
                            ? "ring-2 ring-orange-500 bg-gray-600"
                            : ""
                        }`}
                      >
                        <img
                          src={image}
                          alt={`Preview ${index + 1}`}
                          className="w-full h-20 object-contain rounded"
                          onError={(e) => (e.target.style.display = "none")}
                        />
                      </div>
                    ))}
                  </div>
                </div>

                {/* Product Details */}
                <div className="space-y-4">
                  <div className="flex justify-between items-start">
                    <span className="px-3 py-1 bg-green-500/20 text-green-400 rounded-full text-sm font-semibold">
                      {previewModal.product?.status}
                    </span>
                    <span className="text-orange-400 font-bold text-xl">
                      {previewModal.product?.price}
                    </span>
                  </div>

                  <h4 className="text-xl font-bold text-white">
                    {previewModal.product?.name}
                  </h4>

                  <p className="text-gray-300 leading-relaxed">
                    {previewModal.product?.description}
                  </p>

                  <div>
                    <h5 className="text-sm font-semibold text-white mb-2">
                      Features:
                    </h5>
                    <div className="flex flex-wrap gap-2">
                      {previewModal.product?.features.map((feature, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1 bg-orange-500/20 text-orange-400 text-sm rounded-full"
                        >
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="pt-4 space-y-3">
                    <a
                      href={previewModal.product?.robloxLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full px-6 py-3 bg-orange-500 text-white rounded-lg font-semibold hover:bg-orange-600 transition-colors duration-300 text-center block"
                    >
                      Beli Sekarang di Roblox
                    </a>

                    {/* Quick Info in Modal */}
                    <div className="bg-gray-700/50 rounded-lg p-3">
                      <div className="flex items-center justify-between text-xs text-gray-400 mb-2">
                        <span>💡 Info:</span>
                        <span>Scroll ke bawah untuk aturan lengkap</span>
                      </div>
                      <div className="flex items-center justify-between text-xs">
                        <span className="text-blue-400">💬 Discord:</span>
                        <a
                          href="https://discord.gg/qWv7pwdZsn"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-400 hover:text-blue-300 transition-colors"
                        >
                          Join Server untuk Preview
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Products;
