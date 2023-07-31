import pepeNavbar from "../assets/pepeNavbar.png";

const Navbar = () => {
  return (
    <div className="flex flex-row justify-start items-center pt-2">
      <img src={pepeNavbar} alt="Navbar Pepe" className="w-[5rem] h-[5rem] " />
      <div className="text-3xl">Shardeum Pepe</div>
    </div>
  );
};

export default Navbar;
