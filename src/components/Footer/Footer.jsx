import React, { useState } from "react";
import { Link } from "react-router";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import navLogo from "../../assets/websiteLogo.png";
import { toast } from "react-toastify";

const Footer = () => {
  const [subscribe, setSubscribe] = useState(false);

  const dummyHandleFrom = (e) => {
    e.preventDefault();
    if (e.target.email.value.includes("@gmail.com")) {
      setSubscribe(!subscribe);
      toast.success("Subscribed Successfully");
      e.target.reset();
      setTimeout(() => {
        setSubscribe(false);
      }, 1000);
    }
  };

  return (
    <footer className="relative bg-linear-to-tl from-[#071422] via-[#071a2a]/90 to-[#021621] text-white">
      {/* decorative top curve */}
      <div className="absolute -top-6 left-0 right-0 pointer-events-none">
        <svg
          viewBox="0 0 1200 80"
          preserveAspectRatio="none"
          className="w-full h-8 fill-current text-[#071422] opacity-95"
          aria-hidden
        >
          <path d="M0,0 C300,80 900,0 1200,80 L1200,0 L0,0 Z" />
        </svg>
      </div>

      <div className="container mx-auto px-6 py-12 lg:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Brand + description */}
          <div className="lg:col-span-4 space-y-4">
            <Link to="/" className="inline-flex items-center gap-3">
              <img
                src={navLogo}
                alt="SkilledHub"
                className="w-12 h-12 rounded-md"
              />
              <div>
                <h3 className="text-2xl font-extrabold text-primary">
                  Skilled<span className="text-secondary">Hub</span>
                </h3>
                <p className="text-sm text-white/70 -mt-1">
                  Craft your future — master skills with real projects &
                  mentors.
                </p>
              </div>
            </Link>

            <p className="text-sm text-white/70 max-w-sm">
              SkilledHub is a learning platform for hands-on courses in web
              development, AI, ML, design and career growth. Build
              portfolio-ready projects and join a community of learners.
            </p>

            <div className="flex items-center gap-3 mt-2">
              <a
                aria-label="Facebook"
                href="#"
                className="p-2 rounded-lg bg-white/6 hover:bg-white/10 transition"
              >
                <FaFacebookF />
              </a>
              <a
                aria-label="Twitter"
                href="#"
                className="p-2 rounded-lg bg-white/6 hover:bg-white/10 transition"
              >
                <FaXTwitter />
              </a>
              <a
                aria-label="LinkedIn"
                href="#"
                className="p-2 rounded-lg bg-white/6 hover:bg-white/10 transition"
              >
                <FaLinkedinIn />
              </a>
              <a
                aria-label="Instagram"
                href="#"
                className="p-2 rounded-lg bg-white/6 hover:bg-white/10 transition"
              >
                <FaInstagram />
              </a>
              <a
                aria-label="YouTube"
                href="#"
                className="p-2 rounded-lg bg-white/6 hover:bg-white/10 transition"
              >
                <FaYoutube />
              </a>
            </div>
          </div>

          {/* Links columns */}
          <div className="lg:col-span-5 grid grid-cols-2 sm:grid-cols-4 gap-6">
            <div>
              <h4 className="text-sm font-semibold text-white/90 mb-3">
                Platform
              </h4>
              <ul className="space-y-2 text-sm text-white/70">
                <li>
                  <Link to="/" className="hover:text-secondary transition">
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    to="/courses"
                    className="hover:text-secondary transition"
                  >
                    Courses
                  </Link>
                </li>
                <li>
                  <Link to="#" className="hover:text-secondary transition">
                    Featured
                  </Link>
                </li>
                <li>
                  <Link to="#" className="hover:text-secondary transition">
                    About
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-sm font-semibold text-white/90 mb-3">
                Instructor
              </h4>
              <ul className="space-y-2 text-sm text-white/70">
                <li>
                  <Link
                    to="/dashboard"
                    className="hover:text-secondary transition"
                  >
                    Dashboard
                  </Link>
                </li>
                <li>
                  <Link
                    to="/my-courses"
                    className="hover:text-secondary transition"
                  >
                    My Added Courses
                  </Link>
                </li>
                <li>
                  <Link
                    to="/add-course"
                    className="hover:text-secondary transition"
                  >
                    Add Course
                  </Link>
                </li>
                <li>
                  <Link
                    to="/profile"
                    className="hover:text-secondary transition"
                  >
                    Profile
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-sm font-semibold text-white/90 mb-3">
                Support
              </h4>
              <ul className="space-y-2 text-sm text-white/70">
                <li>
                  <Link to="#" className="hover:text-secondary transition">
                    Docs
                  </Link>
                </li>
                <li>
                  <Link to="#" className="hover:text-secondary transition">
                    Help Center
                  </Link>
                </li>
                <li>
                  <Link to="#" className="hover:text-secondary transition">
                    Contact
                  </Link>
                </li>
                <li>
                  <Link to="#" className="hover:text-secondary transition">
                    Privacy
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-sm font-semibold text-white/90 mb-3">
                Community
              </h4>
              <ul className="space-y-2 text-sm text-white/70">
                <li>
                  <Link to="#" className="hover:text-secondary transition">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link to="#" className="hover:text-secondary transition">
                    Events
                  </Link>
                </li>
                <li>
                  <Link to="#" className="hover:text-secondary transition">
                    Partners
                  </Link>
                </li>
                <li>
                  <Link to="#" className="hover:text-secondary transition">
                    Careers
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Newsletter in footer */}
          <div className="lg:col-span-3">
            <div className="bg-linear-to-br from-white/6 to-white/3 rounded-2xl p-5 ring-1 ring-white/6 text-center">
              <h4 className="text-lg font-bold text-white/95">
                Get course updates
              </h4>
              <p className="text-sm text-white/70 mt-1">
                Exclusive discounts, new courses and tips — straight to your
                inbox.
              </p>

              <form onSubmit={dummyHandleFrom} className="mt-4 flex flex-col gap-2">
                <label htmlFor="footer-sub-email" className="sr-only">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="your@email.com"
                  className="flex-1 rounded-full px-4 py-2 bg-transparent border border-white/10 placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-accent"
                  required
                />
                <button
                  type="submit"
                  className="rounded-full px-4 py-2 bg-primary hover:bg-secondary cursor-pointer transition text-white font-semibold disabled:opacity-60"
                >
                  {subscribe ? "Subscribed" : "Subscribe"}
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* bottom section of footer */}
        <div className="mt-10 border-t border-white/6 pt-6 flex flex-col md:flex-row items-center justify-center">
          <div className="flex items-center gap-2">
            <p className="text-sm text-white/70">
              © {new Date().getFullYear()} SkilledHub
            </p>
            <span className="text-sm text-white/50">•</span>
            <p className="text-sm text-white/70">All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
