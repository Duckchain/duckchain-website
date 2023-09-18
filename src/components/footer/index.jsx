import { Discord, Github, LogoWhite, Telegram, Twitter } from "../icons";
import Links from "../link";

const Footer = () => {
  return (
    <>
      <footer className="w-full flex justify-between py-[57px]  items-center bg-[rgba(253,184,51,0.20)]">
        <div className="container flex w-[85%] mx-auto  md:flex-row flex-col">
          <aside className="w-full md:w-1/3 flex flex-col pb-[20px]">
            <div className="py-3">
              <LogoWhite />
            </div>
            <div>
              <p className="text-[14px] text-[rgba(255,255,255,0.5)] font-[400]">
                The leading payment and blockchain token packed with incredible
                utilities!
              </p>
              <span className="flex gap-3 items-center pt-3">
                <Discord />
                <Github />
                <Twitter />
                <Telegram />
              </span>
            </div>
          </aside>
          <div className="w-full md:w-2/3 text-[rgba(255,255,255,0.5)] grid grid-cols-2 md:grid-cols-4 gap-5 md:ml-[150px]">
            <div className="leading-[2em]">
              <h1 className="text-[18px] font-[700] text-white">Ecosystem</h1>
              <Links url="/" label="Synoptic Finance" />
              <Links url="/" label="Duckswap" />
              <Links url="/" label="Web Wallet" />
              <Links url="/" label="Wallet Extension" />
            </div>
            <div className="leading-[2em]">
              <h1 className="text-[18px] font-[700] text-white">Build</h1>
              <Links url="/" label="Network Documentation" />
              <Links url="/" label="Native Block Explorer" />
              <Links url="/" label="GitHub Repository" />
            </div>
            <div className="leading-[2em]">
              <h1 className="text-[18px] font-[700] text-white">Support</h1>
              <Links url="/" label="Forum" />
              <Links url="/" label="Partnership" />
              <Links url="/" label="Contact Us" />
            </div>
            <div className="leading-[2em]">
              <h1 className="text-[18px] font-[700] text-white">Legal</h1>
              <Links url="/" label="Privacy Policy" />
              <Links url="/" label="Terms of Use" />
              <Links url="/" label="Disclaimer" />
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
