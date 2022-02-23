import React from 'react';
import Appbar from '../shared/appbar/appbar';
import Footer from '../shared/footer/footer';
import Navbar from '../shared/navbar/navbar';
import Blogs from './blog/blogs';
import Cards from './cards/cards';
import Carousel from './carousel/carousel';

import "./home.css" ;
import Occasions from './occasions/occasions';

const home = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Appbar></Appbar>
      <Carousel></Carousel>
      <button className="fw-bolder fs-3 midline px-3 m-3 w-lg-25 w-md-50">GIFT BY CATAGORIES</button>
      <Cards></Cards>
      <button className="fw-bolder fs-3 midline px-3 m-3 w-lg-25 w-md-50">GIFTS BY OCCASION</button>
      <Occasions ></Occasions>
      <Blogs></Blogs>
      <Footer></Footer>
    </div>
  );
};

export default home;