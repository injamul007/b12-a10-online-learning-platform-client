import React from 'react';
import useAuth from '../hook/useAuth';
import { Navigate } from 'react-router';
import LoadSpinner from '../components/LoadSpinner/LoadSpinner';

const PrivateRoute = ({children}) => {
  const {user, loading} = useAuth();

  if(loading) return <div className='min-h-screen bg-[#071422] flex items-center justify-center'><LoadSpinner></LoadSpinner></div>

  if(user && user.email) {
    return children;
  }
  return <Navigate to={'/'}></Navigate>;
};

export default PrivateRoute;