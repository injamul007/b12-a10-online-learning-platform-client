import React from 'react';
import Navbar from '../components/Navbar/Navbar';
import { Outlet } from 'react-router';

const MainLayout = () => {
  return (
    <div>
      <nav>
        <Navbar></Navbar>
      </nav>
      <main>
        <Outlet></Outlet>
      </main>
      <footer>
        
      </footer>
    </div>
  );
};

export default MainLayout;