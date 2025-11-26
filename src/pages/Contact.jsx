import React, { useState, useEffect } from "react";

const Contact = () => {
  const [isVisible, setIsVisible] = useState({});
  const [scrollY, setScrollY] = useState(0);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // 'success', 'error', null

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

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      // Check if we're in development mode
      const isDevelopment =
        window.location.hostname === "localhost" ||
        window.location.hostname === "127.0.0.1";

      if (isDevelopment) {
        // Simulate form submission in development
        await new Promise((resolve) => setTimeout(resolve, 1500)); // Simulate network delay
        setSubmitStatus("success");
        setFormData({
          name: "",
          email: "",
          subject: "",
          message: "",
        });
      } else {
        // Production mode - use Netlify Forms
        const form = e.target;
        const formDataToSend = new FormData(form);

        const response = await fetch("/", {
          method: "POST",
          headers: { "Content-Type": "application/x-www-form-urlencoded" },
          body: new URLSearchParams(formDataToSend).toString(),
        });

        if (response.ok) {
          setSubmitStatus("success");
          setFormData({
            name: "",
            email: "",
            subject: "",
            message: "",
          });
        } else {
          setSubmitStatus("error");
        }
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
      console.log("Form submission completed");
    }
  };

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
                📞 Hubungi Kita
              </span>
            </div>
            <h1
              className={`text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-white transition-all duration-1000 delay-200 ${
                isVisible.hero
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
            >
              Contact <span style={{ color: "#FF7E21" }}>Us</span>
            </h1>
            <p
              className={`text-lg md:text-xl mb-8 max-w-3xl mx-auto transition-all duration-1000 delay-400 ${
                isVisible.hero
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
              style={{ color: "#FAFAFA" }}
            >
              Ada pertanyaan atau mau gabung komunitas Roblox & MLBB kita?
              Hubungi kita sekarang!
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section
        className="py-32 relative animate-on-scroll"
        id="contact-form"
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
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="text-4xl font-bold text-white mb-6">
                Kirim Pesan ke Kita
              </h2>
              <p className="text-lg text-gray-300 mb-8">
                Kita seneng banget denger dari kalian! Kirim pesan aja dan kita
                bakal balas dalam 24 jam ke depan.
              </p>

              <form
                name="contact"
                data-netlify="true"
                data-netlify-honeypot="bot-field"
                onSubmit={handleSubmit}
                className="space-y-6"
              >
                {/* Hidden field untuk Netlify */}
                <input type="hidden" name="form-name" value="contact" />
                <div style={{ display: "none" }}>
                  <label>
                    Don't fill this out if you're human:{" "}
                    <input name="bot-field" />
                  </label>
                </div>
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-300 mb-2"
                  >
                    Nama Lengkap
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-600 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent bg-gray-800 text-white placeholder-gray-400"
                    placeholder="Nama lengkap kamu"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-300 mb-2"
                  >
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-600 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent bg-gray-800 text-white placeholder-gray-400"
                    placeholder="email.kamu@example.com"
                  />
                </div>

                <div>
                  <label
                    htmlFor="subject"
                    className="block text-sm font-medium text-gray-300 mb-2"
                  >
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-600 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent bg-gray-800 text-white placeholder-gray-400"
                    placeholder="Ini tentang apa nih?"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-300 mb-2"
                  >
                    Pesan
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 border border-gray-600 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent bg-gray-800 text-white placeholder-gray-400"
                    placeholder="Ceritain lebih detail tentang yang mau kamu tanyain..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full text-white px-8 py-3 rounded-lg font-semibold transition-all duration-200 ${
                    isSubmitting
                      ? "opacity-50 cursor-not-allowed"
                      : "hover:opacity-90"
                  }`}
                  style={{ backgroundColor: "#FF7E21" }}
                >
                  {isSubmitting ? "Lagi kirim..." : "Kirim Pesan"}
                </button>
              </form>

              {/* Notification Messages */}
              {submitStatus === "success" && (
                <div className="mt-6 p-4 bg-green-500 bg-opacity-20 border border-green-500 rounded-lg">
                  <div className="flex items-center">
                    <svg
                      className="w-5 h-5 text-green-400 mr-3"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <div>
                      <h4 className="text-green-400 font-semibold">
                        Pesan Berhasil Dikirim!
                      </h4>
                      <p className="text-green-300 text-sm">
                        {window.location.hostname === "localhost" ||
                        window.location.hostname === "127.0.0.1"
                          ? "Simulasi berhasil! Di production, pesan akan dikirim ke Netlify Forms."
                          : "Terima kasih! Kami akan merespons dalam 24 jam."}
                      </p>
                    </div>
                  </div>
                </div>
              )}

              {submitStatus === "error" && (
                <div className="mt-6 p-4 bg-red-500 bg-opacity-20 border border-red-500 rounded-lg">
                  <div className="flex items-center">
                    <svg
                      className="w-5 h-5 text-red-400 mr-3"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <div>
                      <h4 className="text-red-400 font-semibold">
                        Gagal Mengirim Pesan
                      </h4>
                      <p className="text-red-300 text-sm">
                        Terjadi kesalahan. Silakan coba lagi atau hubungi kami
                        melalui Discord.
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Contact Information */}
            <div>
              <h2 className="text-4xl font-bold text-white mb-6">
                Hubungi Kita
              </h2>
              <p className="text-lg text-gray-300 mb-8">
                Ada beberapa cara buat connect sama kita. Pilih yang paling
                nyaman buat kalian aja.
              </p>

              <div className="space-y-8">
                {/* Email */}
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-orange-500 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                    <svg
                      className="w-6 h-6 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">
                      Email
                    </h3>
                    <p className="text-gray-300 mb-1">
                      contact.bagasdp@gmail.com
                    </p>
                  </div>
                </div>

                {/* Discord */}
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-orange-500 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                    <svg
                      className="w-6 h-6 text-white"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515a.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0a12.64 12.64 0 0 0-.617-1.25a.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057a19.9 19.9 0 0 0 5.993 3.03a.078.078 0 0 0 .084-.028a14.09 14.09 0 0 0 1.226-1.994a.076.076 0 0 0-.041-.106a13.107 13.107 0 0 1-1.872-.892a.077.077 0 0 1-.008-.128a10.2 10.2 0 0 0 .372-.292a.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127a12.299 12.299 0 0 1-1.873.892a.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028a19.839 19.839 0 0 0 6.002-3.03a.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.956-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.955-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.946 2.418-2.157 2.418z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">
                      Discord
                    </h3>
                    <p className="text-gray-300 mb-1">
                      Join Discord server kita
                    </p>
                    <a
                      href="https://discord.gg/qWv7pwdZsn"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-orange-400 hover:text-orange-300 transition-colors duration-200"
                    >
                      discord.gg/mK26qvZXSY
                    </a>
                  </div>
                </div>

                {/* TikTok */}
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-orange-500 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                    <svg
                      className="w-6 h-6 text-white"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">
                      TikTok
                    </h3>
                    <p className="text-gray-300 mb-1">Follow kita di TikTok</p>
                    <a
                      href="https://tiktok.com/@cazerasociety"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-orange-400 hover:text-orange-300 transition-colors duration-200"
                    >
                      @cazerasociety
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
