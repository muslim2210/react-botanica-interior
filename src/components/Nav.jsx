// React
import { useState } from "react";
import logo from "../assets/logo2-botanica.png";
import cartIcon from "../assets/cart-icon.svg";
import NavLink from "../components/NavLink";

// react icons
import { HiMenuAlt3 } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai";

const Nav = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [navbar, setNavbar] = useState(false);

  // change background navbar logic
  const changeBackgorundNavbar = () => {
    if (window.scrollY >= 80) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  window.addEventListener("scroll", changeBackgorundNavbar);

  return (
    <nav
      className={`fixed z-50 w-full  ${
        navbar ? "bg-slate-700 shadow-xl" : "bg-transparent"
      }`}
    >
      <div className="container flex items-center py-3 justify-between mx-auto px-4 xl:px-10">
        <div className="flex items-center  gap-2">
          <img src={logo} alt="" className="w-[60px] h-[60px]" />
          <p className="text-white font-montserrat font-bold xl:text-3xl xs:text-xl">
            Botanica
          </p>
        </div>
        <ul className="hidden md:flex items-center gap-10 lg:gap-[68px]">
          <NavLink to="services">Services</NavLink>
          <NavLink to="products">Shop</NavLink>
          <NavLink to="reference">Reference</NavLink>
          <NavLink to="care">Care</NavLink>
        </ul>

        <img src={cartIcon} className="hidden md:block cursor-pointer" alt="" />
        <HiMenuAlt3
          size={30}
          className="block md:hidden cursor-pointer text-white"
          onClick={() => setShowMobileMenu((prev) => !prev)}
        />

        <div
          className={`block md:hidden w-full fixed ${
            !showMobileMenu ? "-top-[410px]" : "top-0"
          } left-0 bg-[#dde0e5] h-[410px] transition-all duration-[800ms] shadow-xl py-8 px-12 rounded-b-xl`}
        >
          <AiOutlineClose
            size={25}
            className="absolute top-5 right-5 cursor-pointer"
            onClick={() => setShowMobileMenu(false)}
          />
          <ul className="pt-[60px] items-center flex flex-col gap-8">
            <NavLink to="services" mobileMenu>
              Services
            </NavLink>
            <NavLink to="products" mobileMenu>
              Shop
            </NavLink>
            <NavLink to="reference" mobileMenu>
              Reference
            </NavLink>
            <NavLink to="care" mobileMenu>
              Care
            </NavLink>
          </ul>

          <img src={cartIcon} className="mt-8 mx-auto cursor-pointer" alt="" />
        </div>
      </div>
    </nav>
  );
};

export default Nav;
