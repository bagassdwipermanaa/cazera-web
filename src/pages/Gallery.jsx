import React, { useState, useEffect } from "react";

const Gallery = () => {
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
                🖼️ Gallery Keseruan
              </span>
            </div>
            <h1
              className={`text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-white transition-all duration-1000 delay-200 ${
                isVisible.hero
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
            >
              Gallery <span style={{ color: "#FF7E21" }}>Keseruan</span>
            </h1>
            <p
              className={`text-lg md:text-xl mb-8 max-w-3xl mx-auto transition-all duration-1000 delay-400 ${
                isVisible.hero
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
              style={{ color: "#FAFAFA" }}
            >
              Lihat momen-momen seru dari event Roblox & MLBB komunitas kita!
            </p>
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section
        className="py-32 relative animate-on-scroll"
        id="gallery-grid"
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
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Momen Terbaik Kami
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Dokumentasi kegiatan, workshop, dan momen berharga bersama
              komunitas
            </p>
          </div>

          {/* Gallery Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Gallery Item 1 */}
            <div className="bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="h-64 bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
                <div className="text-center text-white">
                  <svg
                    className="w-16 h-16 mx-auto mb-4"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                  </svg>
                  <h3 className="text-xl font-semibold">Workshop Coding</h3>
                  <p className="text-sm opacity-90">Belajar bersama</p>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-lg font-semibold text-white mb-2">
                  Workshop React Development
                </h3>
                <p className="text-gray-300 text-sm">
                  Workshop intensif belajar React bersama mentor berpengalaman.
                  Peserta belajar dari dasar hingga membuat aplikasi real.
                </p>
                <div className="mt-4 flex items-center text-sm text-gray-500">
                  <svg
                    className="w-4 h-4 mr-2"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                  25 Peserta
                </div>
              </div>
            </div>

            {/* Gallery Item 2 */}
            <div className="bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="h-64 bg-gradient-to-br from-green-500 to-teal-600 flex items-center justify-center">
                <div className="text-center text-white">
                  <svg
                    className="w-16 h-16 mx-auto mb-4"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                  <h3 className="text-xl font-semibold">Networking Event</h3>
                  <p className="text-sm opacity-90">Koneksi & kolaborasi</p>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-lg font-semibold text-white mb-2">
                  Tech Meetup 2024
                </h3>
                <p className="text-gray-300 text-sm">
                  Acara networking untuk developer dan tech enthusiast. Berbagi
                  pengalaman dan membangun koneksi profesional.
                </p>
                <div className="mt-4 flex items-center text-sm text-gray-500">
                  <svg
                    className="w-4 h-4 mr-2"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                  150+ Peserta
                </div>
              </div>
            </div>

            {/* Gallery Item 3 */}
            <div className="bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="h-64 bg-gradient-to-br from-purple-500 to-pink-600 flex items-center justify-center">
                <div className="text-center text-white">
                  <svg
                    className="w-16 h-16 mx-auto mb-4"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                  <h3 className="text-xl font-semibold">Hackathon</h3>
                  <p className="text-sm opacity-90">Inovasi & kreativitas</p>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-lg font-semibold text-white mb-2">
                  Cazera Hackathon
                </h3>
                <p className="text-gray-300 text-sm">
                  48 jam hackathon untuk menciptakan solusi inovatif. Tim
                  terbaik mendapatkan mentorship dan funding.
                </p>
                <div className="mt-4 flex items-center text-sm text-gray-500">
                  <svg
                    className="w-4 h-4 mr-2"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                  12 Tim
                </div>
              </div>
            </div>

            {/* Gallery Item 4 */}
            <div className="bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="h-64 bg-gradient-to-br from-orange-500 to-red-600 flex items-center justify-center">
                <div className="text-center text-white">
                  <svg
                    className="w-16 h-16 mx-auto mb-4"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.94-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" />
                  </svg>
                  <h3 className="text-xl font-semibold">Mentorship</h3>
                  <p className="text-sm opacity-90">Guidance & support</p>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-lg font-semibold text-white mb-2">
                  1-on-1 Mentorship
                </h3>
                <p className="text-gray-300 text-sm">
                  Program mentorship personal untuk membantu member
                  mengembangkan skill dan mencapai goals mereka.
                </p>
                <div className="mt-4 flex items-center text-sm text-gray-500">
                  <svg
                    className="w-4 h-4 mr-2"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                  50+ Mentees
                </div>
              </div>
            </div>

            {/* Gallery Item 5 */}
            <div className="bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="h-64 bg-gradient-to-br from-indigo-500 to-blue-600 flex items-center justify-center">
                <div className="text-center text-white">
                  <svg
                    className="w-16 h-16 mx-auto mb-4"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                  <h3 className="text-xl font-semibold">Award Night</h3>
                  <p className="text-sm opacity-90">
                    Recognition & celebration
                  </p>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-lg font-semibold text-white mb-2">
                  Annual Awards
                </h3>
                <p className="text-gray-300 text-sm">
                  Malam penghargaan untuk member terbaik tahun ini.
                  Mengapresiasi kontribusi dan pencapaian luar biasa.
                </p>
                <div className="mt-4 flex items-center text-sm text-gray-500">
                  <svg
                    className="w-4 h-4 mr-2"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                  10 Awardees
                </div>
              </div>
            </div>

            {/* Gallery Item 6 */}
            <div className="bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="h-64 bg-gradient-to-br from-teal-500 to-cyan-600 flex items-center justify-center">
                <div className="text-center text-white">
                  <svg
                    className="w-16 h-16 mx-auto mb-4"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                  </svg>
                  <h3 className="text-xl font-semibold">Community Service</h3>
                  <p className="text-sm opacity-90">Giving back</p>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-lg font-semibold text-white mb-2">
                  Tech for Good
                </h3>
                <p className="text-gray-300 text-sm">
                  Program community service menggunakan teknologi untuk membantu
                  masyarakat dan organisasi non-profit.
                </p>
                <div className="mt-4 flex items-center text-sm text-gray-500">
                  <svg
                    className="w-4 h-4 mr-2"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                  5 Projects
                </div>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center mt-16">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Ingin Bergabung dengan Keseruan Kami?
            </h3>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
              Jangan lewatkan momen-momen seru berikutnya. Bergabunglah dengan
              komunitas kami dan jadilah bagian dari cerita sukses berikutnya.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://discord.gg/mK26qvZXSY"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white px-8 py-3 rounded-lg font-semibold hover:opacity-90 transition-all duration-200"
                style={{ backgroundColor: "#FF7E21" }}
              >
                Join Discord
              </a>
              <a
                href="/contact"
                className="border-2 text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-gray-800 transition-colors duration-200"
                style={{ borderColor: "#212121", color: "#212121" }}
                onMouseEnter={(e) => {
                  e.target.style.backgroundColor = "#212121";
                  e.target.style.color = "#FFFFFF";
                }}
                onMouseLeave={(e) => {
                  e.target.style.backgroundColor = "transparent";
                  e.target.style.color = "#212121";
                }}
              >
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Gallery;
