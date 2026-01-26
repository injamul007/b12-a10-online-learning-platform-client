import React, { useState } from "react";
import { Link } from "react-router";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import Swal from "sweetalert2";
import { motion } from "framer-motion";
import navLogo from "../../assets/websiteLogo.png";
import MyContainer from "../MyContainer/MyContainer";

/* ---------------- helpers ---------------- */

const isValidEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

/* ---------------- reusable blocks ---------------- */

const FooterColumn = ({ title, children }) => (
  <div>
    <h4 className="text-sm font-semibold text-white mb-4 tracking-wide uppercase">
      {title}
    </h4>
    <ul className="space-y-2 text-sm text-white/70">{children}</ul>
  </div>
);

const FooterLink = ({ to, children }) => (
  <li>
    <Link
      to={to}
      className="hover:text-secondary transition-colors duration-200"
    >
      {children}
    </Link>
  </li>
);

/* ---------------- main component ---------------- */

const Footer = () => {
  const [loading, setLoading] = useState(false);
  const [subscribed, setSubscribed] = useState(false);

  const handleBackToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const handleSubscribe = async (e) => {
    e.preventDefault();

    const email = e.target.email.value;

    if (!isValidEmail(email)) {
      Swal.fire({
        icon: "error",
        title: "Invalid email",
        text: "Please enter a valid email address",
      });
      return;
    }

    try {
      setLoading(true);

      // will replace with API later
      await new Promise((res) => setTimeout(res, 800));

      setSubscribed(true);
      e.target.reset();

      Swal.fire({
        icon: "success",
        title: "Subscribed successfully",
        timer: 1200,
        showConfirmButton: false,
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <footer className="bg-[#0b1220] text-white">
      <MyContainer>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="py-16 grid gap-12 lg:grid-cols-12"
        >
          {/* ================= BRAND ================= */}
          <div className="lg:col-span-4 space-y-5">
            <Link to="/" className="flex items-center gap-3">
              <img src={navLogo} alt="SkilledHub" className="w-12 h-12" />
              <h3 className="text-2xl font-bold">
                Skilled<span className="text-secondary">Hub</span>
              </h3>
            </Link>

            <p className="text-sm text-white/70 leading-relaxed max-w-sm">
              Practical courses, real projects, and mentors to help you build
              job-ready skills in development, AI and design.
            </p>

            {/* social */}
            <div className="flex gap-3">
              {[
                { Icon: FaFacebookF, url: "https://facebook.com" },
                { Icon: FaXTwitter, url: "https://x.com" },
                { Icon: FaLinkedinIn, url: "https://linkedin.com" },
                { Icon: FaInstagram, url: "https://instagram.com" },
                { Icon: FaYoutube, url: "https://youtube.com" },
              ].map(({ Icon, url }, i) => (
                <a
                  key={i}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-xl bg-white/10 hover:bg-secondary transition"
                >
                  <Icon size={14} />
                </a>
              ))}
            </div>
          </div>

          {/* ================= LINKS ================= */}
          <div className="lg:col-span-5 grid grid-cols-2 md:grid-cols-3 gap-8">
            <FooterColumn title="Platform">
              <FooterLink to="/">Home</FooterLink>
              <FooterLink to="/courses">Courses</FooterLink>
              <FooterLink to="/about-us">About</FooterLink>
            </FooterColumn>

            <FooterColumn title="Instructor">
              <FooterLink to="/dashboard">Dashboard</FooterLink>
              <FooterLink to="/dashboard/my-courses">My Courses</FooterLink>
              <FooterLink to="/dashboard/add-course">Add Course</FooterLink>
              <FooterLink to="/dashboard/my-profile">Profile</FooterLink>
            </FooterColumn>

            <FooterColumn title="Contact">
              <li>support@skilledhub.com.bd</li>
              <li>+880 1234 567 890</li>
              <li>Dhaka, Bangladesh</li>
            </FooterColumn>
          </div>

          {/* ================= NEWSLETTER ================= */}
          <div className="lg:col-span-3">
            <div className="bg-white/5 p-6 rounded-2xl space-y-4 ring-1 ring-white/10">
              <h4 className="font-semibold text-lg">Course updates</h4>

              <form onSubmit={handleSubscribe} className="flex flex-col gap-3">
                <input
                  name="email"
                  type="email"
                  placeholder="your@email.com"
                  required
                  className="px-4 py-3 rounded-xl bg-transparent border border-white/20 focus:outline-none focus:ring-2 focus:ring-secondary"
                />

                <button
                  disabled={loading || subscribed}
                  className="bg-primary hover:bg-primary/80 disabled:opacity-60 px-4 py-3 rounded-xl font-medium transition cursor-pointer"
                >
                  {loading
                    ? "Submitting..."
                    : subscribed
                      ? "Subscribed ✓"
                      : "Subscribe"}
                </button>
              </form>

              <p className="text-xs text-white/50">
                No spam. Unsubscribe anytime.
              </p>
            </div>
          </div>
        </motion.div>

        {/* bottom */}
        <div className="border-t border-white/10 py-6 flex items-center justify-between text-sm text-white/60">
          <div>
            © {new Date().getFullYear()} SkilledHub — All rights reserved.
          </div>
          <button
            onClick={handleBackToTop}
            className="px-4 py-2 rounded-lg bg-accent hover:opacity-90 transition text-white font-medium cursor-pointer"
          >
            Back to Top ↑
          </button>
        </div>
      </MyContainer>
    </footer>
  );
};

export default Footer;
