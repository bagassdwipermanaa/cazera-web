import React, { useState, useEffect } from "react";

const Home = () => {
  const [isVisible, setIsVisible] = useState({});
  const [scrollY, setScrollY] = useState(0);
  const [openFAQ, setOpenFAQ] = useState(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [heroLoaded, setHeroLoaded] = useState(false);
  const [showEventModal, setShowEventModal] = useState(false);
  const [showProductModal, setShowProductModal] = useState(false);

  useEffect(() => {
    // Hero entrance animation
    const timer = setTimeout(() => {
      setHeroLoaded(true);
    }, 100);

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

    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("mousemove", handleMouseMove);
    handleScroll(); // Initial check
    return () => {
      clearTimeout(timer);
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  const toggleFAQ = (index) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  const handleEventDetailClick = () => {
    setShowEventModal(true);
  };

  const handleProductDetailClick = () => {
    setShowProductModal(true);
  };

  const closeModal = () => {
    setShowEventModal(false);
    setShowProductModal(false);
  };

  const handleLearnMoreClick = () => {
    // Scroll to FAQ section
    const faqSection = document.getElementById('faq');
    if (faqSection) {
      faqSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const faqData = [
    {
      question: "Gimana cara gabung ke komunitas Cazera Society?",
      answer:
        "Gampang banget! Tinggal klik tombol 'Gabung Sekarang' di atas atau langsung ke Discord server kita. Setelah masuk, kenalan di channel welcome dan mulai main bareng!",
    },
    {
      question: "Gabung komunitas bayar gak?",
      answer:
        "Gratis total! Komunitas kita 100% gratis. Kita percaya semua orang berhak main bareng dan seru-seruan tanpa harus bayar apapun.",
    },
    {
      question: "Event apa aja yang ada di komunitas?",
      answer:
        "Kita sering ngadain tournament Roblox dan MLBB, giveaway, dan event seru lainnya! Cek channel event di Discord buat info lengkapnya.",
    },
    {
      question: "Bisa beli produk Roblox dimana?",
      answer:
        "Produk outfit R6 dan R15 kita bisa dibeli langsung di Roblox! Update produk baru setiap minggu, jadi pantengin terus ya!",
    },
  ];

  return (
    <div className="min-h-screen pt-12">
      {/* Hero Section */}
      <section
        className="min-h-screen flex items-center relative overflow-hidden"
        style={{ backgroundColor: "#212121" }}
      >
        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          {/* Cursor Glow Effect */}
          <div
            className="fixed pointer-events-none z-10"
            style={{
              left: mousePosition.x - 150,
              top: mousePosition.y - 150,
              width: "300px",
              height: "300px",
              background:
                "radial-gradient(circle, rgba(255, 126, 33, 0.2) 0%, rgba(255, 126, 33, 0.1) 50%, transparent 100%)",
              filter: "blur(60px)",
              transition: "all 0.1s linear",
            }}
          ></div>

          {/* Diagonal Ribbons */}
          <div className="absolute top-10 left-0 w-full h-px bg-gradient-to-r from-transparent via-white to-transparent opacity-20 transform rotate-12"></div>
          <div className="absolute top-32 right-0 w-full h-px bg-gradient-to-r from-transparent via-white to-transparent opacity-15 transform -rotate-12"></div>
          <div className="absolute bottom-40 left-0 w-full h-px bg-gradient-to-r from-transparent via-white to-transparent opacity-10 transform rotate-6"></div>

          {/* Floating Community Elements */}
          <div className="absolute top-16 left-1/4 text-white text-xs opacity-30 animate-pulse font-mono">
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-white rounded-full"></div>
              <span>DISCORD</span>
            </div>
          </div>
          <div className="absolute top-24 right-1/4 text-white text-xs opacity-25 animate-bounce font-mono">
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-white rounded-full"></div>
              <span>ROBLOX</span>
            </div>
          </div>
          <div className="absolute bottom-32 left-1/2 text-white text-xs opacity-20 animate-pulse font-mono">
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-white rounded-full"></div>
              <span>MLBB</span>
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

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <div className="text-left">
            <div
              className={`mb-4 transition-all duration-1000 ${
                heroLoaded
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
            >
              <span
                className="inline-block px-6 py-3 rounded-full text-sm font-semibold animate-pulse"
                style={{ backgroundColor: "#FF7E21", color: "#FFFFFF" }}
              >
                🎮 Cazera Society
              </span>
            </div>
            <h1
              className={`text-3xl md:text-4xl lg:text-5xl font-black mb-6 text-white leading-tight transition-all duration-1000 delay-200 ${
                heroLoaded
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
            >
              Main bareng di{" "}
              <span
                className="bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent"
                style={{
                  background:
                    "linear-gradient(135deg, #FF7E21 0%, #FF6B35 50%, #F7931E 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  filter: "drop-shadow(0 0 8px rgba(255, 126, 33, 0.4))",
                }}
              >
                Cazera Society!
              </span>
            </h1>
            <p
              className={`text-lg md:text-xl lg:text-2xl font-bold text-white mt-4 transition-all duration-1000 delay-300 ${
                heroLoaded
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
            >
              Roblox & Mobile Legends{" "}
              <span className="inline-block animate-float">🎮</span>
            </p>
            <p
              className={`text-base md:text-lg lg:text-xl mb-8 max-w-4xl leading-relaxed transition-all duration-1000 delay-400 ${
                heroLoaded
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
              style={{ color: "#FAFAFA" }}
            >
              Ketemu temen baru, ngobrol rame-rame, dan main bareng!{" "}
              <span
                className="inline-block animate-float"
                style={{ animationDelay: "1s" }}
              >
                ✨
              </span>
            </p>

            <div
              className={`flex flex-col sm:flex-row gap-4 justify-start transition-all duration-1000 delay-600 ${
                heroLoaded
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
            >
              <button
                className="group inline-flex items-center px-6 py-3 rounded-full font-semibold text-base transition-all duration-500 hover:scale-105 hover:shadow-xl relative overflow-hidden"
                style={{ backgroundColor: "#FF7E21", color: "#FFFFFF" }}
                onClick={() =>
                  window.open("https://discord.gg/mK26qvZXSY", "_blank")
                }
              >
                <svg
                  className="w-5 h-5 mr-2"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515a.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0a12.64 12.64 0 0 0-.617-1.25a.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057a19.9 19.9 0 0 0 5.993 3.03a.078.078 0 0 0 .084-.028a14.09 14.09 0 0 0 1.226-1.994a.076.076 0 0 0-.041-.106a13.107 13.107 0 0 1-1.872-.892a.077.077 0 0 1-.008-.128a10.2 10.2 0 0 0 .372-.292a.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127a12.299 12.299 0 0 1-1.873.892a.077.077 0 0 0-.041.106a14.09 14.09 0 0 0 1.226 1.994a.078.078 0 0 0 .084.028a19.9 19.9 0 0 0 5.993-3.03a.082.082 0 0 0 .031-.057c.419-4.477-.566-9.011-2.674-13.66a.07.07 0 0 0-.032-.027zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z" />
                </svg>
                <span className="relative z-10">Gabung Discord</span>
                <div className="absolute inset-0 bg-gradient-to-r from-orange-400 to-red-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </button>
              <a
                href="https://www.tiktok.com/@cazerasociety?_t=ZS-90PCcM1MBmb&_r=1"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-5 py-3 rounded-full font-semibold text-base transition-all duration-500 hover:scale-105 hover:shadow-xl"
                style={{
                  backgroundColor: "#000000",
                  color: "#FFFFFF",
                  border: "2px solid #FFFFFF",
                }}
              >
                <svg
                  className="w-4 h-4 mr-2"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
                </svg>
                TikTok
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section
        id="services"
        className="py-32 relative animate-on-scroll"
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
              isVisible.services
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            <div className="mb-6">
              <span
                className="inline-block px-4 py-2 rounded-full text-sm font-semibold mb-4 hover:scale-110 transition-transform duration-300 cursor-default"
                style={{ backgroundColor: "#FF7E21", color: "#FFFFFF" }}
              >
                🎯HMMMMMmmmm
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6 hover:text-orange-400 transition-colors duration-500">
              Yang ada di{" "}
              <span style={{ color: "#FF7E21" }}>Cazera Society apa?</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            {/* Service Card 1 */}
            <div
              className={`group transition-all duration-1000 delay-200 ${
                isVisible.services
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 -translate-x-10"
              }`}
            >
              <div className="bg-gray-800 p-10 rounded-3xl shadow-2xl transition-all duration-500 hover:scale-105 hover:shadow-3xl hover:rotate-1 relative overflow-hidden border border-gray-700 hover:border-orange-500">
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-orange-500/20 to-red-500/20 rounded-full -translate-y-16 translate-x-16 opacity-50 group-hover:opacity-70 transition-opacity duration-500"></div>
                <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 to-red-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative z-10">
                  <div className="flex items-center mb-6">
                    <div
                      className="w-12 h-12 rounded-full flex items-center justify-center mr-4 text-white font-black text-xl shadow-lg group-hover:scale-110 transition-transform duration-300"
                      style={{ backgroundColor: "#FF7E21" }}
                    >
                      01
                    </div>
                    <h3 className="text-2xl font-black text-white group-hover:text-orange-400 transition-colors duration-300">
                      Event & Tournament
                    </h3>
                  </div>
                  <p
                    className="mb-6 leading-relaxed transition-colors duration-300"
                    style={{ color: "#FAFAFA" }}
                  >
                    Tournament Roblox & MLBB setiap minggu! Giveaway hadiah
                    keren, dan main bareng sama temen-temen. Pasti seru dan
                    rame!
                  </p>
                  <button
                    onClick={handleEventDetailClick}
                    className="px-8 py-4 rounded-full border-2 font-bold transition-all duration-300 hover:scale-105 hover:shadow-lg hover:bg-orange-500 hover:text-white hover:border-orange-500"
                    style={{ borderColor: "#FFFFFF", color: "#FFFFFF" }}
                  >
                    Lihat Detail →
                  </button>
                </div>
              </div>
            </div>

            {/* Service Card 2 */}
            <div
              className={`group transition-all duration-1000 delay-400 ${
                isVisible.services
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 translate-x-10"
              }`}
            >
              <div className="bg-gray-800 p-10 rounded-3xl shadow-2xl transition-all duration-500 hover:scale-105 hover:shadow-3xl hover:-rotate-1 relative overflow-hidden border border-gray-700 hover:border-orange-500">
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-orange-500/20 to-red-500/20 rounded-full -translate-y-16 translate-x-16 opacity-50 group-hover:opacity-70 transition-opacity duration-500"></div>
                <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 to-red-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative z-10">
                  <div className="flex items-center mb-6">
                    <div
                      className="w-12 h-12 rounded-full flex items-center justify-center mr-4 text-white font-black text-xl shadow-lg group-hover:scale-110 transition-transform duration-300"
                      style={{ backgroundColor: "#FF7E21" }}
                    >
                      02
                    </div>
                    <h3 className="text-2xl font-black text-white group-hover:text-orange-400 transition-colors duration-300">
                      Produk Roblox Keren
                    </h3>
                  </div>
                  <p
                    className="mb-6 leading-relaxed transition-colors duration-300"
                    style={{ color: "#FAFAFA" }}
                  >
                    Outfit R6 & R15 eksklusif! Design keren yang bikin karakter
                    kamu makin kece. Update produk baru terus setiap minggu.
                  </p>
                  <button
                    onClick={handleProductDetailClick}
                    className="px-8 py-4 rounded-full border-2 font-bold transition-all duration-300 hover:scale-105 hover:shadow-lg hover:bg-orange-500 hover:text-white hover:border-orange-500"
                    style={{ borderColor: "#FFFFFF", color: "#FFFFFF" }}
                  >
                    Lihat Detail →
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Client Logos */}
          <div
            className={`mt-24 text-center transition-all duration-1000 delay-600 ${
              isVisible.services
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            <p className="text-white mb-12 opacity-70 text-xl font-semibold hover:opacity-100 transition-opacity duration-300">
              Trusted by amazing communities
            </p>
            <div className="relative overflow-hidden">
              <div className="flex animate-scroll hover:pause-animation">
                <div className="text-white text-2xl font-black hover:opacity-100 hover:scale-110 transition-all duration-300 cursor-pointer whitespace-nowrap opacity-60 px-16 hover:text-orange-400">
                  Discord
                </div>
                <div className="text-white text-2xl font-black hover:opacity-100 hover:scale-110 transition-all duration-300 cursor-pointer whitespace-nowrap opacity-60 px-16 hover:text-orange-400">
                  Roblox
                </div>
                <div className="text-white text-2xl font-black hover:opacity-100 hover:scale-110 transition-all duration-300 cursor-pointer whitespace-nowrap opacity-60 px-16 hover:text-orange-400">
                  MLBB
                </div>
                <div className="text-white text-2xl font-black hover:opacity-100 hover:scale-110 transition-all duration-300 cursor-pointer whitespace-nowrap opacity-60 px-16 hover:text-orange-400">
                  Discord
                </div>
                <div className="text-white text-2xl font-black hover:opacity-100 hover:scale-110 transition-all duration-300 cursor-pointer whitespace-nowrap opacity-60 px-16 hover:text-orange-400">
                  Roblox
                </div>
                <div className="text-white text-2xl font-black hover:opacity-100 hover:scale-110 transition-all duration-300 cursor-pointer whitespace-nowrap opacity-60 px-16 hover:text-orange-400">
                  MLBB
                </div>
                <div className="text-white text-2xl font-black hover:opacity-100 hover:scale-110 transition-all duration-300 cursor-pointer whitespace-nowrap opacity-60 px-16 hover:text-orange-400">
                  Discord
                </div>
                <div className="text-white text-2xl font-black hover:opacity-100 hover:scale-110 transition-all duration-300 cursor-pointer whitespace-nowrap opacity-60 px-16 hover:text-orange-400">
                  Roblox
                </div>
                <div className="text-white text-2xl font-black hover:opacity-100 hover:scale-110 transition-all duration-300 cursor-pointer whitespace-nowrap opacity-60 px-16 hover:text-orange-400">
                  MLBB
                </div>
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
              🎯 Mau Gabung?
            </span>
          </div>
          <h2
            className={`text-4xl md:text-5xl lg:text-6xl font-black text-white mb-8 transition-all duration-1000 delay-200 ${
              isVisible.cta
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            Yuk <span style={{ color: "#212121" }}>main bareng</span>!
          </h2>
          <p
            className={`text-lg md:text-xl lg:text-2xl text-white mb-12 max-w-3xl mx-auto opacity-90 font-semibold transition-all duration-1000 delay-400 ${
              isVisible.cta
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            Gabung sekarang dan jadi bagian dari komunitas{" "}
            <span className="font-black">terkeren</span>!
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
              onClick={handleLearnMoreClick}
              className="group px-8 py-4 rounded-full font-black text-lg border-2 transition-all duration-500 hover:scale-105 hover:shadow-xl relative overflow-hidden"
              style={{ borderColor: "#FFFFFF", color: "#FFFFFF" }}
            >
              <span className="relative z-10">Learn More</span>
              <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-500"></div>
            </button>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section
        id="faq"
        className="py-32 relative animate-on-scroll"
        style={{ backgroundColor: "#212121" }}
      >
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-20 w-16 h-16 border-2 border-white transform rotate-45 animate-spin"></div>
          <div className="absolute bottom-20 right-20 w-12 h-12 bg-white transform rotate-12 animate-pulse"></div>
          <div className="absolute top-1/2 left-10 w-8 h-8 border border-white animate-bounce"></div>
          <div className="absolute top-40 right-1/4 w-6 h-6 bg-orange-400 transform rotate-45 animate-pulse"></div>
          <div className="absolute bottom-40 left-1/4 w-4 h-4 border-2 border-orange-400 animate-spin"></div>
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div
            className={`text-center mb-16 transition-all duration-1000 ${
              isVisible.faq
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            <div className="mb-6">
              <span
                className="inline-block px-6 py-3 rounded-full text-sm font-semibold mb-4 hover:scale-110 transition-transform duration-300 cursor-default"
                style={{ backgroundColor: "#FF7E21", color: "#FFFFFF" }}
              >
                ❓ Pertanyaan yang Sering Ditanyakan
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 text-white">
              Ada <span style={{ color: "#FF7E21" }}>Pertanyaan</span>?
            </h2>
            <p
              className="text-lg max-w-2xl mx-auto"
              style={{ color: "#FAFAFA" }}
            >
              Temukan jawaban untuk pertanyaan umum tentang komunitas kita
            </p>
          </div>

          <div className="space-y-4">
            {faqData.map((faq, index) => (
              <div
                key={index}
                className={`transition-all duration-1000 ${
                  isVisible.faq
                    ? "opacity-100 translate-x-0"
                    : "opacity-0 -translate-x-10"
                }`}
                style={{ transitionDelay: `${(index + 1) * 200}ms` }}
              >
                <div className="bg-gray-800 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-700 hover:border-orange-500 overflow-hidden">
                  {/* Question Header - Always Visible */}
                  <div
                    className="p-6 cursor-pointer hover:bg-gray-700 transition-colors duration-300"
                    onClick={() => toggleFAQ(index)}
                  >
                    <div className="flex items-center justify-between">
                      <h3 className="text-xl font-bold text-white hover:text-orange-400 transition-colors duration-300 pr-4">
                        {faq.question}
                      </h3>
                      <div
                        className={`w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${
                          openFAQ === index
                            ? "bg-orange-500 rotate-45"
                            : "bg-orange-600 hover:bg-orange-500"
                        }`}
                        style={{
                          backgroundColor:
                            openFAQ === index ? "#FF7E21" : "#FF7E21",
                        }}
                      >
                        <span className="text-white font-bold text-sm">+</span>
                      </div>
                    </div>
                  </div>

                  {/* Answer Content - Collapsible */}
                  <div
                    className={`transition-all duration-500 ease-in-out overflow-hidden ${
                      openFAQ === index
                        ? "max-h-96 opacity-100"
                        : "max-h-0 opacity-0"
                    }`}
                  >
                    <div className="px-6 pb-6">
                      <div className="border-t border-gray-600 pt-4">
                        <p
                          className="leading-relaxed"
                          style={{ color: "#FAFAFA" }}
                        >
                          {faq.answer}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Contact CTA */}
          <div
            className={`text-center mt-16 transition-all duration-1000 delay-1000 ${
              isVisible.faq
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            <p
              className="mb-6 text-xl font-medium"
              style={{ color: "#FAFAFA" }}
            >
              Masih ada pertanyaan? Kita seneng banget denger dari kamu!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href="https://discord.gg/mK26qvZXSY"
                target="_blank"
                rel="noopener noreferrer"
                className="group px-8 py-4 rounded-full font-bold text-lg transition-all duration-500 hover:scale-105 hover:shadow-xl relative overflow-hidden"
                style={{ backgroundColor: "#FF7E21", color: "#FFFFFF" }}
              >
                <span className="relative z-10">Tanya di Discord</span>
                <div className="absolute inset-0 bg-gradient-to-r from-orange-400 to-red-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </a>
              <a
                href="/contact"
                className="group px-8 py-4 rounded-full font-bold text-lg border-2 transition-all duration-500 hover:scale-105 hover:shadow-xl relative overflow-hidden"
                style={{ borderColor: "#FFFFFF", color: "#FFFFFF" }}
                onMouseEnter={(e) => {
                  e.target.style.backgroundColor = "#FFFFFF";
                  e.target.style.color = "#212121";
                }}
                onMouseLeave={(e) => {
                  e.target.style.backgroundColor = "transparent";
                  e.target.style.color = "#FFFFFF";
                }}
              >
                <span className="relative z-10">Hubungi Kita</span>
                <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-500"></div>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Event & Tournament Modal */}
      {showEventModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-gray-800 rounded-3xl p-8 max-w-2xl w-full max-h-[90vh] overflow-y-auto border border-gray-700">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-3xl font-black text-white">
                🎮 Event & Tournament
              </h3>
              <button
                onClick={closeModal}
                className="w-10 h-10 rounded-full bg-orange-500 hover:bg-orange-600 flex items-center justify-center text-white font-bold transition-colors duration-300"
              >
                ×
              </button>
            </div>

            <div className="space-y-6">
              <div className="bg-gray-700 p-6 rounded-2xl">
                <h4 className="text-xl font-bold text-white mb-4">
                  🏆 Tournament Roblox
                </h4>
                <ul className="space-y-2 text-gray-200">
                  <li>• Tournament setiap Sabtu & Minggu</li>
                  <li>• Hadiah Robux & item eksklusif</li>
                  <li>• Sistem bracket yang fair</li>
                  <li>• Live streaming di Discord</li>
                </ul>
              </div>

              <div className="bg-gray-700 p-6 rounded-2xl">
                <h4 className="text-xl font-bold text-white mb-4">
                  📱 Tournament MLBB
                </h4>
                <ul className="space-y-2 text-gray-200">
                  <li>• Tournament setiap Jumat malam</li>
                  <li>• Hadiah Diamond & skin</li>
                  <li>• Mode Classic & Rank</li>
                  <li>• Coaching dari pro player</li>
                </ul>
              </div>

              <div className="bg-gray-700 p-6 rounded-2xl">
                <h4 className="text-xl font-bold text-white mb-4">
                  🎁 Giveaway Mingguan
                </h4>
                <ul className="space-y-2 text-gray-200">
                  <li>• Robux giveaway setiap Senin</li>
                  <li>• MLBB Diamond setiap Rabu</li>
                  <li>• Merchandise eksklusif</li>
                  <li>• Syarat: aktif di Discord</li>
                </ul>
              </div>

              <div className="bg-gradient-to-r from-orange-500 to-red-500 p-6 rounded-2xl">
                <h4 className="text-xl font-bold text-white mb-4">
                  🚀 Cara Ikut Event
                </h4>
                <p className="text-white mb-4">
                  Gabung Discord server kita dan cek channel #events untuk info
                  lengkap!
                </p>
                <a
                  href="https://discord.gg/mK26qvZXSY"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-white text-orange-500 px-6 py-3 rounded-full font-bold hover:bg-gray-100 transition-colors duration-300"
                >
                  Gabung Discord Sekarang
                </a>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Produk Roblox Modal */}
      {showProductModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-gray-800 rounded-3xl p-8 max-w-2xl w-full max-h-[90vh] overflow-y-auto border border-gray-700">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-3xl font-black text-white">
                👕 Produk Roblox Keren
              </h3>
              <button
                onClick={closeModal}
                className="w-10 h-10 rounded-full bg-orange-500 hover:bg-orange-600 flex items-center justify-center text-white font-bold transition-colors duration-300"
              >
                ×
              </button>
            </div>

            <div className="space-y-6">
              <div className="bg-gray-700 p-6 rounded-2xl">
                <h4 className="text-xl font-bold text-white mb-4">
                  🎨 Outfit R6 (Classic)
                </h4>
                <ul className="space-y-2 text-gray-200">
                  <li>• Design retro yang timeless</li>
                  <li>• Cocok untuk semua avatar</li>
                  <li>• Harga mulai 50 Robux</li>
                  <li>• Update koleksi setiap minggu</li>
                </ul>
              </div>

              <div className="bg-gray-700 p-6 rounded-2xl">
                <h4 className="text-xl font-bold text-white mb-4">
                  🔥 Outfit R15 (Modern)
                </h4>
                <ul className="space-y-2 text-gray-200">
                  <li>• Design modern & trendy</li>
                  <li>• Detail yang lebih kompleks</li>
                  <li>• Harga mulai 100 Robux</li>
                  <li>• Limited edition items</li>
                </ul>
              </div>

              <div className="bg-gray-700 p-6 rounded-2xl">
                <h4 className="text-xl font-bold text-white mb-4">
                  ⭐ Koleksi Eksklusif
                </h4>
                <ul className="space-y-2 text-gray-200">
                  <li>• Cazera Society signature outfit</li>
                  <li>• Collaboration dengan creator</li>
                  <li>• Seasonal collection</li>
                  <li>• Member discount 20%</li>
                </ul>
              </div>

              <div className="bg-gradient-to-r from-orange-500 to-red-500 p-6 rounded-2xl">
                <h4 className="text-xl font-bold text-white mb-4">
                  🛒 Cara Beli Produk
                </h4>
                <p className="text-white mb-4">
                  Kunjungi grup Roblox kita atau cek channel #products di
                  Discord untuk link langsung!
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <a
                    href="https://discord.gg/mK26qvZXSY"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-white text-orange-500 px-6 py-3 rounded-full font-bold hover:bg-gray-100 transition-colors duration-300 text-center"
                  >
                    Lihat di Discord
                  </a>
                  <a
                    href="/products"
                    className="inline-block bg-transparent border-2 border-white text-white px-6 py-3 rounded-full font-bold hover:bg-white hover:text-orange-500 transition-colors duration-300 text-center"
                  >
                    Lihat Semua Produk
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;
