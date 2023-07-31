// import React from 'react'

import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import PepeBackground from "./components/PepeBackground";
import Socials from "./components/Socials";

const App = () => {
  return (
    <div className="text-white bg-[#344E4C] font-manrope">
      <div className="w-[100vw] h-[100vh] pr-28 pl-40">
        <Navbar />
        <Hero />
      </div>
      <div className="w-[100vw] h-[100vh] my-20">
        <PepeBackground />
      </div>
      <div className="h-[20vh] pl-40 " >
        <Socials />
      </div>
    </div>
  );
};

export default App;
