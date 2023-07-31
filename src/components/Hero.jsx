// import React from 'react'

import pepeHero from "../assets/pepeHero.png";
import heroBar from "../assets/heroBar.png";

const Hero = () => {
  return (
    <div className="w-11/12 bg-white h-[85%] mt-2 rounded-lg flex flex-row justify-start px-4 py-2 text-black font-manrope">
      <img src={pepeHero} alt="" className=" h-full mr-16" />
      <div className="flex flex-col justify-between">
        <div className="">
          <div className="text-xl my-3 font-semibold">
            by <span className="text-[#246137] font-bold">@shardeumpepe</span>
          </div>
          <div className="text-3xl uppercase font-medium ">CEO of Shardeum</div>
          <div className="text-7xl font-semibold">Shardeum Pepe</div>
          <div className="text-lg py-2">
            Meet Shardeum Pepe, the adorable CEO & ambassador of Shardeum! This
            little cutie was born on August 15, 2022, with a super special
            mission – to share the magic of Shardeum culture with the entire
            world! Shardeum Pepe is a true pioneer, leading the way in spreading
            joy and humility wherever they go. Let&rsquo;s join this cute
            mission and embrace the charm of Shardeum together! 😊🌍
          </div>
        </div>
        <div className="">
          <div className="text-3xl font-bold mb-2">Phase:</div>
          <div className="flex flex-row">
            <img
              src={heroBar}
              alt=""
              className="h-[full] w-[1.5%] mr-5 border-black border-[3px] rounded-md"
            />
            <div className="flex flex-row justify-between gap-10 w-full ">
              <div className="flex flex-col justify-between">
                <div className="">
                  <div className="text-xl mb-2">
                    Whitelisting (01st August to 12th August)
                  </div>
                  <button className="bg-[#7BFF81] px-2 py-1 text-xl rounded-md font-bold mb-4 cursor:pointer">
                    Get Whitelisted Now
                  </button>
                </div>
                <div className="">
                  <div className="text-xl mb-2">Mint of Pepe (15th August)</div>
                  <button className="bg-[#7BFF81] px-2 py-1 text-xl rounded-md font-bold mb-4 cursor:pointer">
                    Mint CEO - The Pepe
                  </button>
                </div>
                <div className="">
                  <div className="text-xl mb-2">Tweet & Flex</div>
                  <button className="bg-[#7BFF81] px-2 py-1 text-xl rounded-md font-bold mb-4 cursor:pointer">
                    Tweet! Tweet! Tweet!
                  </button>
                </div>
              </div>
              <div className="flex flex-col items-end justify-end"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
