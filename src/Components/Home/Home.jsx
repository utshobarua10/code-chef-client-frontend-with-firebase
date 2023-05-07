import React from 'react';
import Shared from '../Shared/Shared';
import Banner from '../Banner/Banner';
import Categories from '../Categories/Categories';
import Footer from '../Footer/Footer';

const Home = () => {
    return (
        <div>
           
            <Shared></Shared>
            <Banner></Banner>
            <Categories></Categories>
            <Footer></Footer>
        </div>
    );
};

export default Home;