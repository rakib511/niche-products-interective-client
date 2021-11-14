import React from 'react';
import Banner from '../Banner/Banner';
import Catelogs from '../Catelog/Catelogs';
import Footer from '../Footer/Footer';
import Products from '../Products/Products';
import ShowRevew from '../Revew/ShowRevew';
import Header from './Header/Header';



const Home = () => {
    return (
        <div>
            <Header></Header>
            <Banner></Banner>
            <Products></Products>
            <Catelogs></Catelogs>
            <ShowRevew></ShowRevew>
            <Footer></Footer>

        </div>
    );
};

export default Home;