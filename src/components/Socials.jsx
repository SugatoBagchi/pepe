// import React from 'react'

const Socials = () => {
  return (
    <div className="w-full h-full text-black flex justify-between items-center">
      <div className="w-3/5 grid grid-cols-3 gap-x-12 justify-start">
        <button className="bg-[#7BFF81] px-2 py-1 text-xl rounded-md font-bold mb-4 cursor:pointer">
          Twitter @Shardeum
        </button>

        <button className="bg-[#7BFF81] px-2 py-1 text-xl rounded-md font-bold mb-4 cursor:pointer">
          Twitter @ShardeumPepe
        </button>

        <button className="bg-[#7BFF81] px-2 py-1 text-xl rounded-md font-bold mb-4 cursor:pointer">
          Twitter @onBANDIT
        </button>

        <button className="bg-[#7BFF81] px-2 py-1 text-xl rounded-md font-bold mb-4 cursor:pointer">
          Discord / Shardeum
        </button>

        <button className="bg-[#7BFF81] px-2 py-1 text-xl rounded-md font-bold mb-4 cursor:pointer">
          Discord / ShardeumPEPE
        </button>

        <button className="bg-[#7BFF81] px-2 py-1 text-xl rounded-md font-bold mb-4 cursor:pointer">
          Discord / BANDIT
        </button>
      </div>
      <div className="flex flex-row pr-20">
        <div className="text-white text-xl text-bold font-manrope">Made with 💖 by Sugato Bagchi</div>
      </div>
    </div>
  );
};

export default Socials;
