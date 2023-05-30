import React from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Featured from "./components/Featured/Featured";
import Analytics from "./components/Analytics/Analytics";
import GOA from "./components/GOA/GOA";
import Testimonials from "./components/Testimonials/Testimonials";
import AYR from "./components/AYR/AYR";
import Footer from "./components/Footer/Footer";
// import HueO from './assets/hueone.svg'

class App extends React.Component {
  render() {
    return (

      <div>
      {/* <img className="Huee" src={HueO} alt="" /> */}
        <Navbar />
        <Hero />
        <Featured />
        <Analytics />
        <GOA />
        <Testimonials />
        <AYR />
        <Footer />
      </div>
    );
  }
}

export default App;
