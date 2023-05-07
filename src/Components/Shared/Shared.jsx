import React from 'react';
import Navbar from '../Navbar/NavbarLinks';
import { Outlet } from 'react-router-dom';
import NavbarLinks from '../Navbar/NavbarLinks';
import Footer from '../Footer/Footer';

const Shared = () => {
    return (
        <div>
           
           <NavbarLinks></NavbarLinks>
           <Outlet></Outlet>
           <Footer></Footer>
            
        </div>
    );
};

export default Shared;