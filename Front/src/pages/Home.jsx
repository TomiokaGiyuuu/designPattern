import React from "react";
import Announcement from "../components/Announcement";
import Categories from "../components/Categories";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Newsletter from "../components/Newsletter";
import Products from "../components/Products";
import Slider from "../components/Slider";
import './Home.css'
import styled from "styled-components";

const Home = () => {
  const Hr = styled.hr`
    background-color: #d4d4d4;
    border: none;
    height: 2px;
    margin-bottom: 30px;
  `;
  return (
    <div >
      <Navbar />
        <Hr/>
        <div className="HomeWrapper">
      <Slider />
      <Categories />
        </div>
      <Newsletter/>
        <div className="HomeWrapper">
      <Footer/>
        </div>
    </div>
  );
};

export default Home;
