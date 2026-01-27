import React, { useEffect, useState } from "react";
import MyContainer from "../../components/MyContainer/MyContainer";
import profileIcon from "../../assets/profile_icon_demo.png";
import { toast } from "react-toastify";
import useAuth from "../../hook/useAuth";
import Swal from "sweetalert2";
import { motion } from "framer-motion";
import { FiMail, FiUser, FiImage, FiArrowRight } from "react-icons/fi";

const UpdateProfile = () => {
  const { user, setUser, updateProfileFunc } = useAuth();
  const [photoURL, setPhotoURL] = useState("");
  const [name, setName] = useState("");

  useEffect(() => {
    if (user) {
      setPhotoURL(user?.photoURL || "");
      setName(user?.displayName || "");
    }
  }, [user]);

  const handleUpdateProfile = (e) => {
    e.preventDefault();

    updateProfileFunc(name, photoURL)
      .then(() => {
        setUser({ ...user, displayName: name, photoURL: photoURL });
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Profile Information Updated",
          showConfirmButton: false,
          timer: 1500,
          customClass: {
            popup: "small-swal-popup",
          },
        });
      })
      .catch((error) => {
        toast.error(error.message);
        toast.error("Profile Update Failed");
      });
  };

  return (
    <>
      <title>SkilledHub || Update Profile</title>
      <MyContainer className="relative mt-8 pb-16">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="grid md:grid-cols-2 gap-8"
          >
            {/* Left Side - Current Profile Preview */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                Current Profile
              </h2>
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="bg-white dark:bg-slate-800 rounded-2xl shadow-2xl overflow-hidden border border-slate-200 dark:border-slate-700"
              >
                {/* Top Accent Bar */}
                <div className="h-2 bg-linear-to-r from-secondary to-blue-500"></div>

                <div className="px-8 py-12 text-center">
                  {/* Profile Photo */}
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.3, duration: 0.6 }}
                    className="flex justify-center mb-6"
                  >
                    <div className="relative group">
                      <div className="absolute inset-0 bg-linear-to-r from-secondary to-blue-500 rounded-full blur-lg opacity-75 group-hover:opacity-100 transition-opacity duration-300"></div>
                      <img
                        className="relative w-40 h-40 rounded-full object-cover border-4 border-white dark:border-slate-800"
                        src={`${user ? user?.photoURL : profileIcon}`}
                        alt="Current Profile"
                      />
                    </div>
                  </motion.div>

                  {/* Name */}
                  <div className="mb-4">
                    <p className="text-sm font-semibold text-gray-600 dark:text-gray-400 uppercase tracking-wide mb-2">
                      Display Name
                    </p>
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                      {user ? user?.displayName : "Your Name"}
                    </h3>
                  </div>

                  {/* Email */}
                  <div className="flex items-center justify-center gap-2 text-gray-700 dark:text-gray-300">
                    <FiMail size={18} className="text-secondary" />
                    <span>{user && user?.email}</span>
                  </div>

                  {/* Info Box */}
                  <div className="mt-6 p-4 bg-blue-50 dark:bg-blue-900/30 border border-blue-200 dark:border-blue-700 rounded-lg">
                    <p className="text-sm text-gray-700 dark:text-gray-300">
                      Update your information below to change your profile
                      details
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Right Side - Update Form */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                Edit Your Profile
              </h2>
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="bg-white dark:bg-slate-800 rounded-2xl shadow-2xl overflow-hidden border border-slate-200 dark:border-slate-700"
              >
                {/* Top Accent Bar */}
                <div className="h-2 bg-linear-to-r from-blue-500 to-secondary"></div>

                <form
                  onSubmit={handleUpdateProfile}
                  className="px-8 py-12 space-y-6"
                >
                  {/* Photo URL Input */}
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3, duration: 0.6 }}
                  >
                    <label className="flex items-center gap-3 mb-3">
                      <div className="w-8 h-8 rounded-lg bg-secondary/10 flex items-center justify-center">
                        <FiImage className="text-secondary" size={18} />
                      </div>
                      <span className="text-sm font-semibold text-gray-700 dark:text-gray-300 uppercase tracking-wide">
                        Photo URL
                      </span>
                    </label>
                    <input
                      value={photoURL}
                      onChange={(e) => setPhotoURL(e.target.value)}
                      type="text"
                      name="photo"
                      placeholder="https://example.com/photo.jpg"
                      className="w-full px-4 py-3 rounded-lg bg-gray-50 dark:bg-slate-700 border border-gray-300 dark:border-slate-600 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-secondary transition-all duration-300"
                    />
                    <p className="text-xs text-gray-500 dark:text-gray-400 mt-2">
                      Enter a URL to an image to use as your profile picture
                    </p>
                  </motion.div>

                  {/* Name Input */}
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.4, duration: 0.6 }}
                  >
                    <label className="flex items-center gap-3 mb-3">
                      <div className="w-8 h-8 rounded-lg bg-secondary/10 flex items-center justify-center">
                        <FiUser className="text-secondary" size={18} />
                      </div>
                      <span className="text-sm font-semibold text-gray-700 dark:text-gray-300 uppercase tracking-wide">
                        Display Name
                      </span>
                    </label>
                    <input
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      type="text"
                      name="name"
                      placeholder="Your full name"
                      className="w-full px-4 py-3 rounded-lg bg-gray-50 dark:bg-slate-700 border border-gray-300 dark:border-slate-600 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-secondary transition-all duration-300"
                    />
                    <p className="text-xs text-gray-500 dark:text-gray-400 mt-2">
                      This is how your name will appear on your profile
                    </p>
                  </motion.div>

                  {/* Submit Button */}
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    type="submit"
                    className="w-full flex items-center justify-center gap-2 px-6 py-4 bg-linear-to-r from-secondary to-orange-500 hover:shadow-lg text-white font-bold rounded-lg transition-all duration-300 mt-8 cursor-pointer"
                  >
                    Update Profile
                    <FiArrowRight size={18} />
                  </motion.button>

                  {/* Info Box */}
                  <div className="p-4 bg-amber-50 dark:bg-amber-900/30 border border-amber-200 dark:border-amber-700 rounded-lg">
                    <p className="text-sm text-gray-700 dark:text-gray-300">
                      <span className="font-semibold text-amber-600 dark:text-amber-400">
                        Note:
                      </span>{" "}
                      Changes will be applied immediately after updating
                    </p>
                  </div>
                </form>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </MyContainer>
    </>
  );
};

export default UpdateProfile;
