import axios from "axios";
import React from "react";

const axiosInstance = axios.create({
  baseURL: "https://skilledhub-online-learning-platform.vercel.app",
});

const useAxios = () => {
  return axiosInstance;
};

export default useAxios;
