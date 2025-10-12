import React, { useState, useEffect } from "react";

const About = () => {
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
    <div className="min-h-screen">
      {/* Hero Section */}
      <section
        className="py-32 relative overflow-hidden animate-on-scroll"
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
                🎮 Tentang Kita
              </span>
            </div>
            <h1
              className={`text-5xl md:text-7xl font-bold mb-6 text-white transition-all duration-1000 delay-200 ${
                isVisible.hero
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
            >
              About <span style={{ color: "#FF7E21" }}>Cazera Society</span>
            </h1>
            <p
              className={`text-xl md:text-2xl mb-8 max-w-3xl mx-auto transition-all duration-1000 delay-400 ${
                isVisible.hero
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
              style={{ color: "#FAFAFA" }}
            >
              Komunitas Roblox & MLBB yang rame banget! Main bareng, ketemu
              temen baru, dan seru-seruan setiap hari.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section
        className="py-32 relative animate-on-scroll"
        id="mission"
        style={{ backgroundColor: "#212121" }}
      >
        {/* Animated Background */}
        <div className="absolute inset-0">
          <div className="absolute top-10 left-20 w-8 h-8 border-2 border-gray-300 transform rotate-45 opacity-20 animate-spin"></div>
          <div className="absolute bottom-20 right-10 w-6 h-6 bg-gray-300 transform rotate-12 opacity-30 animate-pulse"></div>
          <div className="absolute top-1/2 left-10 w-4 h-4 border border-gray-300 opacity-25 animate-bounce"></div>
          <div
            className="absolute top-20 right-1/4 w-12 h-12 rounded-full opacity-15 animate-pulse"
            style={{ backgroundColor: "#FF7E21" }}
          ></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div
            className={`text-center mb-20 transition-all duration-1000 ${
              isVisible.mission
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            <div className="mb-6">
              <span
                className="inline-block px-4 py-2 rounded-full text-sm font-semibold mb-4 hover:scale-110 transition-transform duration-300 cursor-default"
                style={{ backgroundColor: "#FF7E21", color: "#FFFFFF" }}
              >
                🎯 Misi Kita
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6 hover:text-orange-400 transition-colors duration-500">
              Main Bareng <span style={{ color: "#FF7E21" }}>Seru</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Our Mission
              </h2>
              <p className="text-lg text-gray-300 mb-6">
                Cazera Society didirikan dengan visi untuk menciptakan ekosistem
                yang mendukung pertumbuhan dan kolaborasi antar kreator. Kami
                percaya bahwa dengan bekerja sama, kita dapat mencapai hal-hal
                luar biasa.
              </p>
              <p className="text-lg text-gray-300 mb-8">
                Sejak 2020, kami telah menghubungkan ribuan profesional dari
                berbagai bidang termasuk teknologi, desain, marketing, dan
                entrepreneurship.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-white mb-2">
                    2,500+
                  </div>
                  <div className="text-gray-300">Active Members</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-white mb-2">50+</div>
                  <div className="text-gray-300">Projects Completed</div>
                </div>
              </div>
            </div>
            <div className="bg-gray-800 rounded-2xl p-8">
              <div className="space-y-6">
                <div className="bg-gray-700 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <h3 className="text-xl font-semibold text-white mb-3">
                    Innovation
                  </h3>
                  <p className="text-gray-300">
                    Mendorong inovasi melalui kolaborasi dan pertukaran ide yang
                    kreatif.
                  </p>
                </div>
                <div className="bg-gray-700 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <h3 className="text-xl font-semibold text-white mb-3">
                    Community
                  </h3>
                  <p className="text-gray-300">
                    Membangun komunitas yang solid dan saling mendukung satu
                    sama lain.
                  </p>
                </div>
                <div className="bg-gray-700 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <h3 className="text-xl font-semibold text-white mb-3">
                    Growth
                  </h3>
                  <p className="text-gray-300">
                    Memfasilitasi pertumbuhan personal dan profesional setiap
                    anggota.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section
        className="py-32 relative animate-on-scroll"
        id="team"
        style={{ backgroundColor: "#FF7E21" }}
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
            className={`text-center mb-16 transition-all duration-1000 ${
              isVisible.team
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            <div className="mb-6">
              <span
                className="inline-block px-4 py-2 rounded-full text-sm font-semibold mb-4 hover:scale-110 transition-transform duration-300 cursor-default"
                style={{ backgroundColor: "#FFFFFF", color: "#212121" }}
              >
                👥 Tim Kita
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Meet Our <span style={{ color: "#212121" }}>Team</span>
            </h2>
            <p className="text-lg text-white max-w-2xl mx-auto opacity-90">
              Tim yang berdedikasi untuk membangun komunitas terbaik bagi para
              kreator.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-800 p-8 rounded-xl shadow-lg text-center hover:shadow-xl transition-shadow duration-300">
              <div className="w-24 h-24 bg-orange-500 rounded-full mx-auto mb-6 flex items-center justify-center">
                <span className="text-white text-2xl font-bold">JD</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">
                John Doe
              </h3>
              <p className="text-orange-400 mb-4">Founder & CEO</p>
              <p className="text-gray-300 text-sm">
                Visionary leader dengan pengalaman 10+ tahun di industri
                teknologi dan komunitas.
              </p>
            </div>

            <div className="bg-gray-800 p-8 rounded-xl shadow-lg text-center hover:shadow-xl transition-shadow duration-300">
              <div className="w-24 h-24 bg-orange-500 rounded-full mx-auto mb-6 flex items-center justify-center">
                <span className="text-white text-2xl font-bold">JS</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">
                Jane Smith
              </h3>
              <p className="text-orange-400 mb-4">Community Manager</p>
              <p className="text-gray-300 text-sm">
                Ahli dalam membangun dan mengelola komunitas online yang
                engaging dan produktif.
              </p>
            </div>

            <div className="bg-gray-800 p-8 rounded-xl shadow-lg text-center hover:shadow-xl transition-shadow duration-300">
              <div className="w-24 h-24 bg-orange-500 rounded-full mx-auto mb-6 flex items-center justify-center">
                <span className="text-white text-2xl font-bold">MJ</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">
                Mike Johnson
              </h3>
              <p className="text-orange-400 mb-4">Tech Lead</p>
              <p className="text-gray-300 text-sm">
                Developer berpengalaman yang memastikan platform kami selalu
                up-to-date dan reliable.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section
        className="py-32 relative animate-on-scroll"
        id="values"
        style={{ backgroundColor: "#212121" }}
      >
        {/* Animated Background */}
        <div className="absolute inset-0">
          <div className="absolute top-10 left-20 w-8 h-8 border-2 border-gray-300 transform rotate-45 opacity-20 animate-spin"></div>
          <div className="absolute bottom-20 right-10 w-6 h-6 bg-gray-300 transform rotate-12 opacity-30 animate-pulse"></div>
          <div className="absolute top-1/2 left-10 w-4 h-4 border border-gray-300 opacity-25 animate-bounce"></div>
          <div
            className="absolute top-20 right-1/4 w-12 h-12 rounded-full opacity-15 animate-pulse"
            style={{ backgroundColor: "#FF7E21" }}
          ></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div
            className={`text-center mb-16 transition-all duration-1000 ${
              isVisible.values
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            <div className="mb-6">
              <span
                className="inline-block px-4 py-2 rounded-full text-sm font-semibold mb-4 hover:scale-110 transition-transform duration-300 cursor-default"
                style={{ backgroundColor: "#FF7E21", color: "#FFFFFF" }}
              >
                💎 Nilai Kita
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Our <span style={{ color: "#FF7E21" }}>Values</span>
            </h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Nilai-nilai yang menjadi fondasi dari setiap keputusan dan
              tindakan kami.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg
                  className="w-8 h-8 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">Passion</h3>
              <p className="text-gray-300">
                Kami percaya bahwa passion adalah kunci untuk mencapai
                kesuksesan yang berkelanjutan.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg
                  className="w-8 h-8 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">
                Excellence
              </h3>
              <p className="text-gray-300">
                Kami selalu berusaha memberikan yang terbaik dalam setiap aspek
                komunitas kami.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg
                  className="w-8 h-8 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">
                Collaboration
              </h3>
              <p className="text-gray-300">
                Kami percaya bahwa kolaborasi menghasilkan hasil yang lebih baik
                daripada bekerja sendiri.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg
                  className="w-8 h-8 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">
                Innovation
              </h3>
              <p className="text-gray-300">
                Kami selalu mencari cara baru dan kreatif untuk meningkatkan
                pengalaman komunitas.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
