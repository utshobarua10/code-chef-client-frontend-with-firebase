import React from 'react';
import Shared from '../Shared/Shared';
import Banner from '../Banner/Banner';
import Categories from '../Categories/Categories';
import Footer from '../Footer/Footer';
import ContactUs from '../ContactUs/ContactUs';
import News from '../News/News';

const Home = () => {
    return (
        <div>
           
          
            <Banner></Banner>
            <Categories></Categories>
            <News></News>
            <ContactUs></ContactUs>
            
       
        </div>
    );
};

export default Home;