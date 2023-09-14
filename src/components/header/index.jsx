import Image from "../image";
import Logo from "../../assets/images/logo.png";
import Links from "../link";
import CustomButton from "../button";
import { Link } from "react-router-dom";
import WhitePaper from "../../assets/DuckChain-whitepaper.pdf";

const Header = () => {
  return (
    <>
      <div className="flex w-full sticky top-0 z-50 bg-[#221410]">
        <div className="container mx-auto w-[85%] flex justify-between h-[70px] items-center ">
          <div>
            <Link to="/">
              <Image src={Logo} alt="logo" />
            </Link>
          </div>
          <div className="md:flex gap-8 text-white hidden">
            <Links url="/" label="Ecosystem" className="text-[16px]" />
            <Links url="/build" label="Build" className="text-[16px]" />
            <Links url="/" label="Community" className="text-[16px]" />
            <Links url="/" label="Explore" className="text-[16px]" />
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
    </>
  );
};

export default Header;
