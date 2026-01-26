import axios from "axios";
import React from "react";
import useAuth from "./useAuth";

const axiosInstanceSecure = axios.create({
  baseURL: `${import.meta.env.VITE_SERVER_API_URL}`,
});

const useAxiosSecure = () => {
  const { user } = useAuth();

  //? set token in the header for all the api call using axiosSecure hook
  axiosInstanceSecure.interceptors.request.use((config) => {
    config.headers.authorization = `Bearer ${user.accessToken}`;
    return config;
  });

  return axiosInstanceSecure;
};

export default useAxiosSecure;
