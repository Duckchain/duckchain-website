import Image from "../image";
import Logo from "../../assets/images/logo.png";
import Links from "../link";
import CustomButton from "../button";
import { Link } from "react-router-dom";
import WhitePaper from "../../assets/DuckChain-whitepaper.pdf";
import { FiChevronDown, FiX } from "react-icons/fi";
import { useState } from "react";
import {
  Build,
  Community,
  Ecosystem,
  Explore,
  MobileMenu,
  Resources,
} from "../menu";
import { MenuIcon } from "../icons";

const Header = () => {
  const [isOpen, setisOpen] = useState(false);
  const [direction, setDirection] = useState(0);
  const [display, setDisplay] = useState("");
  const [openNav, setOpenNav] = useState(false);
  const showNav = (elem, val) => {
    setisOpen(elem);
    if (val === "ecosystem") {
      setDisplay(<Ecosystem />);
    } else if (val === "build") {
      setDisplay(<Build />);
    } else if (val === "resources") {
      setDisplay(<Resources />);
    } else if (val === "community") {
      setDisplay(<Community />);
    } else if (val === "explore") {
      setDisplay(<Explore />);
    } else {
      setDisplay(<Ecosystem />);
    }
  };
  return (
    <>
      <div className="flex w-full sticky top-0 z-50 bg-[#151515]">
        <div className="container mx-auto w-[85%] flex justify-between h-[70px] items-center ">
          <div>
            <Link to="/">
              <Image src={Logo} alt="logo" className="w-[150px] md:h-fit" />
            </Link>
          </div>
          <div className="md:flex gap-3 text-white hidden">
            <Links
              url="/"
              label="Ecosystem"
              className="text-[16px] flex items-center p-3 gap-2 rounded-[5px] hover:bg-[#FDB833] ease-in duration-300"
              icon={<FiChevronDown />}
              onClick={() => {
                showNav(!isOpen, "ecosystem"), setDirection("right-[780px]");
              }}
            />
            <Links
              url="/"
              label="Build"
              className="text-[16px] flex items-center p-3 gap-2 rounded-[5px] hover:bg-[#FDB833] ease-in duration-300"
              icon={<FiChevronDown />}
              onClick={() => {
                showNav(!isOpen, "build"), setDirection("right-[680px]");
              }}
            />
            <Links
              url="/"
              label="Resources"
              className="text-[16px] flex items-center p-3 gap-2 rounded-[5px] hover:bg-[#FDB833] ease-in duration-300"
              icon={<FiChevronDown />}
              onClick={() => {
                showNav(!isOpen, "resources"), setDirection("right-[580px]");
              }}
            />
            <Links
              url="/"
              label="Community"
              className="text-[16px] flex items-center p-3 gap-2 rounded-[5px] hover:bg-[#FDB833] ease-in duration-300"
              icon={<FiChevronDown />}
              onClick={() => {
                showNav(!isOpen, "community"), setDirection("right-[440px]");
              }}
            />
            <Links
              url="/"
              label="Explore"
              className="text-[16px] flex items-center p-3 gap-2 rounded-[5px] hover:bg-[#FDB833] ease-in duration-300"
              icon={<FiChevronDown />}
              onClick={() => {
                showNav(!isOpen, "explore"), setDirection("right-[300px]");
              }}
            />
            <div
              className={`absolute bg-[#151311] w-[300px] ${
                isOpen
                  ? "top-[70px] h-fit show z-50 pb-2 " + direction
                  : "top-0 right-0 hidden"
              } `}
            >
              {display}
            </div>
          </div>
          <div
            className="md:hidden flex cursor-pointer -mr-8"
            onClick={() => setOpenNav(!openNav)}
          >
            <label htmlFor="my-drawer" className="drawer-button cursor-pointer">
              {!openNav ? (
                <MenuIcon />
              ) : (
                <FiX className="text-[40px] text-[rgba(255,255,255,0.8)] bg-[#FDB833] rounded-[10px] p-1" />
              )}
            </label>
          </div>
          <div>
            <a href={WhitePaper} target="_blank" rel="noreferrer">
              <CustomButton
                textcolor="#fff"
                bg="red"
                label="Whitepaper"
                style={{
                  background: "#FDB833",
                  borderRadius: "20px",
                  padding: "10px 20px",
                  color: "#fff",
                  textTransform: "capitalize",
                  fontSize: "12px",
                }}
              />
            </a>
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="w-full bg-[rgba(0,0,0,0.5)]  top-0 h-screen fixed z-30"></div>
      )}
      <MobileMenu />
    </>
  );
};

export default Header;
