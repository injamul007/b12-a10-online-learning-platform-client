import React, { useEffect, useState } from "react";
import MyContainer from "../../components/MyContainer/MyContainer";
import profileIcon from "../../assets/profile_icon_demo.png";
import { toast } from "react-toastify";
import useAuth from "../../hook/useAuth";
import Swal from "sweetalert2";

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
    <MyContainer>
      <div>
        <title>GameHub || Update Profile</title>
        <div
          className="min-h-[calc(100vh-64px)] 
        flex justify-center items-center flex-col lg:flex-row lg:gap-16 gap-2 lg:py-0 py-4 mb-6"
        >
          <div className="text-center shadow-2xl p-4 bg-linear-to-r from-primary to-secondary rounded-2xl lg:w-fit md:w-1/2 w-full">
            <img
              className="lg:w-40 lg:h-40 w-30 h-30 rounded-full mx-auto mb-2"
              src={`${user ? user?.photoURL : profileIcon}`}
              alt="profileImage"
            />
            <h1 className="lg:text-3xl text-2xl text-white font-bold">
              {user ? user?.displayName : "Hello Sir"}
            </h1>
            <p className="py-2 text-white">{user && user?.email}</p>
          </div>
          <div className="card w-full max-w-sm shrink-0 shadow-2xl">
            <div className="card-body rounded-2xl bg-linear-to-r from-[#597a8383] to-[#47644a80]">
              {/* form */}
              <form onSubmit={handleUpdateProfile} className="space-y-3">
                <h2 className="text-3xl mb-2 text-center bg-linear-to-r from-accent to-primary bg-clip-text cursor-pointer text-transparent font-bold">
                  Update Your Profile
                </h2>

                <div>
                  <label className="block text-gray-200 text-sm mb-1">
                    PhotoURL
                  </label>
                  <input
                    value={photoURL}
                    onChange={(e) => setPhotoURL(e.target.value)}
                    type="text"
                    name="photo"
                    placeholder="Your PhotoURL"
                    className="input input-bordered w-full bg-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-emerald-400"
                  />
                </div>

                <div>
                  <label className="block text-gray-200 text-sm mb-1">
                    Name
                  </label>
                  <input
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    className="input input-bordered w-full bg-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-emerald-400"
                  />
                </div>

                <button
                  type="submit"
                  className="my-btn mb-2 w-full cursor-pointer"
                >
                  Update Information
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </MyContainer>
  );
};

export default UpdateProfile;
