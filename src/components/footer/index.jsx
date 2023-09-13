import { FiFacebook, FiTwitter, FiLinkedin } from "react-icons/fi";

const Footer = () => {
  return (
    <>
      <div className="w-full flex justify-between gap-6 items-center">
        <div
          className="p-5 bg-[rgba(177,129,37,0.20)] w-[45%] hidden md:flex"
          style={{ borderRadius: "0px 50px 0px 0px" }}
        ></div>
        <div className="flex items-center w-full md:w-[10%] justify-center gap-4 py-5 md:py-0">
          <a href="">
            <FiFacebook />
          </a>
          <a href="">
            <FiTwitter />
          </a>
          <a href="">
            <FiLinkedin />
          </a>
        </div>
        <div
          className="p-5 bg-[rgba(177,129,37,0.20)] w-[45%] hidden md:flex"
          style={{ borderRadius: "50px 0px 0px 0px" }}
        ></div>
      </div>
    </>
  );
};

export default Footer;
