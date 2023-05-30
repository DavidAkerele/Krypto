// import React from "react";
import './Hero.css'
import Heo from '../../assets/hero.svg'

const Hero = () => {
  return <div className='hero-container'>
    <div className="hero-left">
        <div className="hero-left-top">
        <h1>Discover And Collect Rare NFTs</h1>
        <p>The most secure marketplace for buying and selling unique crypto assets.</p>
        </div>
        <div className="hero-left-bottom">
            <button className='btnone'>But Nfts</button>
            <button className='btntwo'>Sell Nfts</button>
        </div>
    </div>
    <img className='pishur' src={Heo} alt="" />
  </div>;
};

export default Hero;
