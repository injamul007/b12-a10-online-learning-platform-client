import React from "react";
import MyContainer from "../../components/MyContainer/MyContainer";
import profileIcon from "../../assets/profile_icon_demo.png";
import { useNavigate } from "react-router";
import useAuth from "../../hook/useAuth";
import { motion } from "framer-motion";
import { FiMail, FiEdit3, FiUser } from "react-icons/fi";

const Profile = () => {
  const { user } = useAuth();
  const navigate = useNavigate();

  const handleUpdateProfile = () => {
    const profileInfo = {
      displayName: user?.displayName || "",
      photoURL: user?.photoURL || "",
    };

    navigate("/dashboard/my-profile/update-profile", {
      state: { profileInfo },
    });
  };

  return (
    <>
      <title>SkilledHub || My Profile</title>
      <MyContainer className="relative mt-12 pb-16">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          {/* Profile Card */}
          <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-2xl overflow-hidden border border-slate-200 dark:border-slate-700">
            <div className="relative">
              {/* Top Accent Bar */}
              <div className="h-2 bg-linear-to-r from-secondary to-blue-500"></div>

              <div className="px-6 md:px-12 py-12">
                <div className="grid md:grid-cols-3 gap-8 items-center">
                  {/* Profile Photo Section */}
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.2, duration: 0.6 }}
                    className="flex justify-center md:justify-start md:col-span-1"
                  >
                    <div className="relative group">
                      <div className="absolute inset-0 bg-linear-to-r from-secondary to-blue-500 rounded-full blur-lg opacity-75 group-hover:opacity-100 transition-opacity duration-300"></div>
                      <img
                        className="relative w-40 h-40 rounded-full object-cover border-4 border-white dark:border-slate-800"
                        src={user?.photoURL || profileIcon}
                        alt="Profile"
                      />
                    </div>
                  </motion.div>

                  {/* Profile Information */}
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3, duration: 0.6 }}
                    className="md:col-span-2 space-y-6"
                  >
                    {/* Name Section */}
                    <div>
                      <div className="flex items-center gap-3 mb-2">
                        <div className="w-8 h-8 rounded-lg bg-secondary/10 flex items-center justify-center">
                          <FiUser className="text-secondary" size={18} />
                        </div>
                        <p className="text-sm font-semibold text-gray-600 dark:text-gray-400 uppercase tracking-wide">
                          Full Name
                        </p>
                      </div>
                      <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
                        {user?.displayName || "Profile Name"}
                      </h1>
                    </div>

                    {/* Email Section */}
                    <div>
                      <div className="flex items-center gap-3 mb-2">
                        <div className="w-8 h-8 rounded-lg bg-secondary/10 flex items-center justify-center">
                          <FiMail className="text-secondary" size={18} />
                        </div>
                        <p className="text-sm font-semibold text-gray-600 dark:text-gray-400 uppercase tracking-wide">
                          Email Address
                        </p>
                      </div>
                      <p className="text-lg text-gray-700 dark:text-gray-300 break-all">
                        {user?.email || "No email provided"}
                      </p>
                    </div>

                    {/* Account Status */}
                    <div className="flex items-center gap-3 pt-4">
                      <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse"></div>
                      <p className="text-sm font-medium text-gray-700 dark:text-gray-300">
                        <span className="text-green-600 dark:text-green-400 font-semibold">
                          Active Account
                        </span>{" "}
                        - Account is verified and active
                      </p>
                    </div>
                  </motion.div>
                </div>
              </div>
            </div>

            {/* Action Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="border-t border-slate-200 dark:border-slate-700 px-6 md:px-12 py-8 bg-linear-to-r from-slate-50 to-slate-100 dark:from-slate-700/50 dark:to-slate-800/50"
            >
              <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
                <div>
                  <h3 className="text-sm font-semibold text-gray-600 dark:text-gray-400 uppercase tracking-wide mb-1">
                    Profile Settings
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300">
                    Update your profile information and manage your account
                  </p>
                </div>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  type="button"
                  onClick={handleUpdateProfile}
                  className="flex items-center gap-2 px-6 py-3 bg-linear-to-r from-secondary to-orange-500 hover:shadow-lg text-white font-semibold rounded-lg transition-all duration-300 whitespace-nowrap cursor-pointer"
                >
                  <FiEdit3 size={18} />
                  Update Profile
                </motion.button>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </MyContainer>
    </>
  );
};

export default Profile;
