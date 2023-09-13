import Image from "../image";
import Logo from "../../assets/images/logo.png";
import Links from "../link";
import CustomButton from "../button";

const Header = () => {
  return (
    <>
      <div className="flex w-full sticky top-0 z-50 bg-[#221410]">
        <div className="container mx-auto w-[85%] flex justify-between h-[70px] items-center ">
          <div>
            <Image src={Logo} alt="logo" />
          </div>
          <div className="md:flex gap-8 text-white hidden">
            <Links url="/" label="Ecosystem" className="text-[16px]" />
            <Links url="/build" label="Build" className="text-[16px]" />
            <Links url="/" label="Community" className="text-[16px]" />
            <Links url="/" label="Explore" className="text-[16px]" />
          </div>
          <div>
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
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
