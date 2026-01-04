import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router";
import { FaEye } from "react-icons/fa";
import { IoEyeOff } from "react-icons/io5";
import MyContainer from "../../components/MyContainer/MyContainer";
import Swal from "sweetalert2";
import { toast } from "react-toastify";
import useAuth from "../../hook/useAuth";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const location = useLocation();
  const navigate = useNavigate();

  const { setUser, setLoading, loginUserFunc, googleSignInFunc } = useAuth();

  // Demo credentials (must exist in Firebase)
  const DEMO_USER = {
    email: "demo@user.com",
    password: "demo&User123#",
  };

  // Demo autofill handler
  const handleDemoFill = (role) => {
    if (role === "user") {
      setEmail(DEMO_USER.email);
      setPassword(DEMO_USER.password);
    }
  };

  // Email/Password login
  const handleLogin = (e) => {
    e.preventDefault();
    setLoading(true);

    loginUserFunc(email, password)
      .then((result) => {
        const userData = result.user;
        setUser(userData);

        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Login Successfully",
          showConfirmButton: false,
          timer: 1500,
          customClass: { popup: "small-swal-popup" },
        });

        navigate(location.state ? location.state : "/");
      })
      .catch((error) => {
        if (error.code === "auth/invalid-credential") {
          toast.error("Invalid credential. Please try again.");
        } else if (error.code === "auth/user-not-found") {
          toast.error("No account found with this email.");
        } else if (error.code === "auth/wrong-password") {
          toast.error("Incorrect password.");
        } else if (error.code === "auth/invalid-email") {
          toast.error("Invalid email format.");
        } else if (error.code === "auth/too-many-requests") {
          toast.error("Too many attempts. Try again later.");
        } else {
          toast.error("Something went wrong. Please try again.");
        }
      })
      .finally(() => setLoading(false));
  };

  // Google login
  const handleGoogleSignin = () => {
    setLoading(true);

    googleSignInFunc()
      .then((result) => {
        setUser(result.user);

        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Google Login Successful",
          showConfirmButton: false,
          timer: 1500,
          customClass: { popup: "small-swal-popup" },
        });

        navigate(location.state ? location.state : "/");
      })
      .catch(() => {
        toast.error("Google sign-in failed.");
      })
      .finally(() => setLoading(false));
  };

  return (
    <div className="flex items-center justify-center bg-linear-to-br from-[#059669] to-[#0ea5a4] lg:mt-19 md:mt-19 mt-16 pb-6 dark:from-[#212224] dark:to-[#303233]">
      <title>SkilledHub || Login</title>

      <MyContainer>
        <div className="flex flex-col lg:flex-row items-center justify-between gap-10 p-6 lg:p-10 text-white">
          {/* Left section */}
          <div className="max-w-lg text-center lg:text-left">
            <h1 className="lg:text-4xl text-3xl font-extrabold">
              Welcome Back Learners!
            </h1>
            <p className="mt-4 text-lg">
              Login to continue your learning journey.
            </p>
          </div>

          {/* Login Card */}
          <div className="w-full max-w-md backdrop-blur-lg bg-white/10 border border-white/20 shadow-2xl rounded-2xl p-8">
            <form onSubmit={handleLogin} className="space-y-4">
              <h2 className="text-2xl font-semibold text-center">
                Login Now!
              </h2>

              {/* Email */}
              <div>
                <label className="text-sm">Email</label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  placeholder="example@email.com"
                  className="input input-bordered w-full bg-white/20 text-white placeholder-white/60"
                />
              </div>

              {/* Password */}
              <div className="relative">
                <label className="text-sm">Password</label>
                <input
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Your password"
                  className="input input-bordered w-full bg-white/20 text-white placeholder-white/60"
                />
                <span
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-9 cursor-pointer"
                >
                  {showPassword ? <FaEye /> : <IoEyeOff />}
                </span>
              </div>

              {/* Demo Buttons */}
              <div className="flex gap-3">
                <button
                  type="button"
                  onClick={() => handleDemoFill("user")}
                  className="w-full rounded-lg border border-white/40 py-2 text-sm hover:bg-white/20 cursor-pointer"
                >
                  Demo User
                </button>
              </div>

              {/* Login */}
              <button type="submit" className="my-btn w-full cursor-pointer">
                Login
              </button>

              {/* Divider */}
              <div className="flex items-center gap-2 justify-center">
                <div className="h-px w-16 bg-white/30"></div>
                <span className="text-sm text-white/70">or</span>
                <div className="h-px w-16 bg-white/30"></div>
              </div>

              {/* Google */}
              <button
                type="button"
                onClick={handleGoogleSignin}
                className="flex items-center justify-center gap-3 bg-white text-gray-800 py-2 rounded-lg w-full font-semibold hover:bg-gray-200 cursor-pointer"
              >
                <img
                  src="https://www.svgrepo.com/show/475656/google-color.svg"
                  alt="google"
                  className="w-5 h-5"
                />
                Login with Google
              </button>

              <p className="text-center text-sm mt-3">
                New to our website?{" "}
                <Link
                  to="/register"
                  className="text-emerald-300 underline"
                >
                  Register
                </Link>
              </p>
            </form>
          </div>
        </div>
      </MyContainer>
    </div>
  );
};

export default Login;
