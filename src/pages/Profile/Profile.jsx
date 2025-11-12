import React from "react";
import MyContainer from "../../components/MyContainer/MyContainer";
import profileIcon from "../../assets/profile_icon_demo.png";
import { useNavigate } from "react-router";
import useAuth from "../../hook/useAuth";

const Profile = () => {
  const { user } = useAuth();
  const navigate = useNavigate();

  const handleUpdateProfile = () => {
    const profileInfo = {
    displayName: user?.displayName || "",
    photoURL: user?.photoURL || "",
    };

    navigate('/profile/update-profile', {state: {profileInfo}})
  };

  return (
    <MyContainer>
      <div>
        <title>GameHub || My Profile</title>
        <div className="min-h-[calc(100vh-64px)] flex justify-center items-center flex-col lg:flex-row lg:gap-16 gap-2 lg:py-0 py-4">
          <div className="text-center shadow-2xl p-4 bg-linear-to-r from-primary to-accent rounded-2xl lg:w-fit md:w-1/2 w-full">
            <img
              className="lg:w-40 lg:h-40 w-30 h-30 rounded-full mx-auto mb-2"
              src={user?.photoURL || profileIcon}
              alt="profileImage"
            />
            <h1 className="lg:text-3xl text-2xl text-white font-bold">
              {user?.displayName || "Hello Sir"}
            </h1>
            <p className="py-2 mb-2 text-white">{user?.email || ""}</p>

            <button
              type="button"
              onClick={handleUpdateProfile}
              className="relative z-50 pointer-events-auto px-4 py-2 border rounded text-gray-200 bg-primary transition-all duration-300 hover:bg-linear-to-r hover:from-accent hover:to-primary hover:text-black cursor-pointer">
              Update Profile
            </button>
          </div>
        </div>
      </div>
    </MyContainer>
  );
};

export default Profile;
