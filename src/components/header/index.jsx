import Image from "../image";
import Logo from "../../assets/images/logo.png";
import Links from "../link";
import CustomButton from "../button";
import { Link } from "react-router-dom";
import WhitePaper from "../../assets/DuckChain-whitepaper.pdf";
import { FiChevronDown, FiX } from "react-icons/fi";
import { useState } from "react";
import { MobileMenu } from "../menu";
import {
  Book,
  Discord,
  Github,
  GlobeIcon,
  MenuIcon,
  Telegram,
  Twitter,
} from "../icons";

const Header = () => {
  const [openNav, setOpenNav] = useState(false);

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
            <div className="relative ecosystem">
              <Links
                url="/"
                label="Ecosystem"
                className="text-[16px] flex items-center p-3 gap-2 rounded-[5px] hover:text-[#FDB833] ease-in duration-300"
                icon={<FiChevronDown />}
              />
              <div className="hidden absolute bg-[#151311] flex-col w-[300px] top-[47px] -left-[90px] z-50 ecosystem-ul border border-[rgba(253,184,51,0.2)] ">
                <div className="flex items-center gap-3 px-10 py-5">
                  <span>
                    <GlobeIcon />
                  </span>
                  <h1>Ecosystem</h1>
                </div>
                <div>
                  <ul>
                    <li className="hover:bg-[rgba(253,184,51,0.20)] px-10 py-2 flex flex-col cursor-pointer hover:rounded-[5px] mx-[2px] hover:border-[rgba(239,207,36,0.2)] hover:border-[0.5px] rounded-[5px] border-transparent border-[0.5px]">
                      <span className="text-[14px] font-[700]">
                        Synoptic Finance
                      </span>
                      <span className="text-[12px] text-[rgba(255,255,255,0.5)]">
                        Transfer assets{" "}
                      </span>
                    </li>
                    <li className="hover:bg-[rgba(253,184,51,0.20)] px-10 py-2 flex flex-col cursor-pointer hover:rounded-[5px] mx-[2px] hover:border-[rgba(239,207,36,0.2)] hover:border-[0.5px] rounded-[5px] border-transparent border-[0.5px]">
                      <a
                        href="https://x.com/0xDuckswap/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex flex-col"
                      >
                        <span className="text-[14px] font-[700]">Duckswap</span>
                        <span className="text-[12px] text-[rgba(255,255,255,0.5)]">
                          A decentralized exchange where you can swap and
                          provide liquidity
                        </span>
                      </a>
                    </li>
                    <li className="hover:bg-[rgba(253,184,51,0.20)] px-10 py-2 flex flex-col cursor-pointer hover:rounded-[5px] mx-[2px] hover:border-[rgba(239,207,36,0.2)] hover:border-[0.5px] rounded-[5px] border-transparent border-[0.5px]">
                      <span className="text-[14px] font-[700]">Web Wallet</span>
                      <span className="text-[12px] text-[rgba(255,255,255,0.5)]">
                        A multi-chain web wallet to delegrate Duckcoin, swap,
                        send and receive tokens.
                      </span>
                    </li>
                    <li className="hover:bg-[rgba(253,184,51,0.20)] px-10 py-2 flex flex-col cursor-pointer hover:rounded-[5px] mx-[2px] hover:border-[rgba(239,207,36,0.2)] hover:border-[0.5px] rounded-[5px] border-transparent border-[0.5px]">
                      <span className="text-[14px] font-[700]">
                        Wallet Extension
                      </span>
                      <span className="text-[12px] text-[rgba(255,255,255,0.5)]">
                        A multi-chain Chrome extension for Crypto, NFTs, dApps
                        and Web3.
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="relative ecosystem">
              <Links
                url="/"
                label="Build"
                className="text-[16px] flex items-center p-3 gap-2 rounded-[5px] hover:text-[#FDB833] ease-in duration-300"
                icon={<FiChevronDown />}
              />
              <div className="hidden absolute bg-[#151311] flex-col w-[300px] top-[47px] -left-[90px] z-50 build border border-[rgba(253,184,51,0.2)] ">
                <div className="flex items-center gap-3 px-10 py-5">
                  <span>
                    <Book />
                  </span>
                  <h1>Build</h1>
                </div>
                <div>
                  <ul>
                    <li className="hover:bg-[rgba(253,184,51,0.20)] px-10 py-2 flex flex-col cursor-pointer hover:rounded-[5px] mx-[2px] hover:border-[rgba(239,207,36,0.2)] hover:border-[0.5px] rounded-[5px] border-transparent border-[0.5px]">
                      <span className="text-[14px] font-[700]">
                        Network Documentation
                      </span>
                      <span className="text-[12px] text-[rgba(255,255,255,0.5)]">
                        Official Network and Program Libary docs
                      </span>
                    </li>
                    <li className="hover:bg-[rgba(253,184,51,0.20)] px-10 py-2 flex flex-col cursor-pointer hover:rounded-[5px] mx-[2px] hover:border-[rgba(239,207,36,0.2)] hover:border-[0.5px] rounded-[5px] border-transparent border-[0.5px]">
                      <span className="text-[14px] font-[700]">
                        Native Block Explorer
                      </span>
                      <span className="text-[12px] text-[rgba(255,255,255,0.5)]">
                        Explore Networks blockchain in real time
                      </span>
                    </li>
                    <li className="hover:bg-[rgba(253,184,51,0.20)] px-10 py-2 flex flex-col cursor-pointer hover:rounded-[5px] mx-[2px] hover:border-[rgba(239,207,36,0.2)] hover:border-[0.5px] rounded-[5px] border-transparent border-[0.5px]">
                      <span className="text-[14px] font-[700]">
                        GitHub Repository
                      </span>
                      <span className="text-[12px] text-[rgba(255,255,255,0.5)]">
                        Checkout templates and packages for integrating or
                        building on Duckchain
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="relative ecosystem">
              <Links
                url="/"
                label="Resources"
                className="text-[16px] flex items-center p-3 gap-2 rounded-[5px] hover:text-[#FDB833] ease-in duration-300"
                icon={<FiChevronDown />}
              />
              <div className="hidden absolute bg-[#151311] flex-col w-[300px] top-[47px] -left-[90px] z-50 resources border border-[rgba(253,184,51,0.2)] ">
                <div className="flex items-center gap-3 px-10 py-5">
                  <span>
                    <Book />
                  </span>
                  <h1>Resources</h1>
                </div>
                <div>
                  <ul>
                    <li className="hover:bg-[rgba(253,184,51,0.20)] px-10 py-2 flex flex-col cursor-pointer hover:rounded-[5px] mx-[2px] hover:border-[rgba(239,207,36,0.2)] hover:border-[0.5px] rounded-[5px] border-transparent border-[0.5px]">
                      <a
                        href={WhitePaper}
                        target="_blank"
                        rel="noreferrer"
                        className="flex flex-col"
                      >
                        <span className="text-[14px] font-[700]">
                          Whitepaper
                        </span>
                        <span className="text-[12px] text-[rgba(255,255,255,0.5)]">
                          Utility and Tokenomics
                        </span>
                      </a>
                    </li>
                    <li className="hover:bg-[rgba(253,184,51,0.20)] px-10 py-2 flex flex-col cursor-pointer hover:rounded-[5px] mx-[2px] hover:border-[rgba(239,207,36,0.2)] hover:border-[0.5px] rounded-[5px] border-transparent border-[0.5px]">
                      <a
                        href="https://medium.com/@duckchain17"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex flex-col"
                      >
                        <span className="text-[14px] font-[700]">Blog</span>
                        <span className="text-[10px] text-[rgba(255,255,255,0.5)]">
                          The latest news, product updates, thought Leadership
                          and more from Duckchain
                        </span>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="relative ecosystem">
              <Links
                url="/"
                label="Community"
                className="text-[16px] flex items-center p-3 gap-2 rounded-[5px] hover:text-[#FDB833] ease-in duration-300"
                icon={<FiChevronDown />}
              />
              <div className="hidden absolute bg-[#151311] flex-col w-[300px] top-[47px] -left-[90px] z-50 community border border-[rgba(253,184,51,0.2)] ">
                <div className="flex items-center gap-3 px-10 py-5">
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="21"
                      viewBox="0 0 20 21"
                      fill="none"
                    >
                      <path
                        d="M5.5 6.5C6.29565 6.5 7.05871 6.18393 7.62132 5.62132C8.18393 5.05871 8.5 4.29565 8.5 3.5C8.5 2.70435 8.18393 1.94129 7.62132 1.37868C7.05871 0.816071 6.29565 0.5 5.5 0.5C4.70435 0.5 3.94129 0.816071 3.37868 1.37868C2.81607 1.94129 2.5 2.70435 2.5 3.5C2.5 4.29565 2.81607 5.05871 3.37868 5.62132C3.94129 6.18393 4.70435 6.5 5.5 6.5ZM0 9.268C0 8.29 0.791 7.5 1.768 7.5H6.535C6.1834 8.10782 5.99883 8.79782 6 9.5C5.99933 10.0676 6.11976 10.6288 6.35325 11.1461C6.58674 11.6635 6.92792 12.125 7.354 12.5H6.268C5.7044 12.5 5.15421 12.672 4.6909 12.9929C4.22758 13.3138 3.87318 13.7684 3.675 14.296C2.177 13.93 1.248 13.113 0.701 12.203C0 11.036 0 9.836 0 9.627V9.268ZM14 9.5C14.0012 8.79781 13.8166 8.1078 13.465 7.5H18.232C19.21 7.5 20 8.291 20 9.268V9.628C20 9.835 20 11.036 19.3 12.203C18.752 13.113 17.823 13.93 16.325 14.296C16.1269 13.7683 15.7726 13.3136 15.3092 12.9927C14.8459 12.6718 14.2956 12.4999 13.732 12.5H12.646C13.0721 12.125 13.4133 11.6635 13.6468 11.1461C13.8802 10.6288 14.0007 10.0676 14 9.5ZM17.5 3.5C17.5 4.29565 17.1839 5.05871 16.6213 5.62132C16.0587 6.18393 15.2956 6.5 14.5 6.5C13.7044 6.5 12.9413 6.18393 12.3787 5.62132C11.8161 5.05871 11.5 4.29565 11.5 3.5C11.5 2.70435 11.8161 1.94129 12.3787 1.37868C12.9413 0.816071 13.7044 0.5 14.5 0.5C15.2956 0.5 16.0587 0.816071 16.6213 1.37868C17.1839 1.94129 17.5 2.70435 17.5 3.5ZM4.5 15.268C4.5 14.29 5.291 13.5 6.268 13.5H13.732C14.709 13.5 15.5 14.291 15.5 15.268V15.628C15.5 15.835 15.5 17.036 14.8 18.203C14.057 19.437 12.613 20.5 10 20.5C7.387 20.5 5.942 19.437 5.2 18.203C4.5 17.036 4.5 15.836 4.5 15.627V15.268ZM10 12.5C10.394 12.5 10.7841 12.4224 11.1481 12.2716C11.512 12.1209 11.8427 11.8999 12.1213 11.6213C12.3999 11.3427 12.6209 11.012 12.7716 10.6481C12.9224 10.2841 13 9.89397 13 9.5C13 9.10603 12.9224 8.71593 12.7716 8.35195C12.6209 7.98797 12.3999 7.65726 12.1213 7.37868C11.8427 7.1001 11.512 6.87913 11.1481 6.72836C10.7841 6.5776 10.394 6.5 10 6.5C9.20435 6.5 8.44129 6.81607 7.87868 7.37868C7.31607 7.94129 7 8.70435 7 9.5C7 10.2956 7.31607 11.0587 7.87868 11.6213C8.44129 12.1839 9.20435 12.5 10 12.5Z"
                        fill="#FDB833"
                      />
                    </svg>
                  </span>
                  <h1>Community</h1>
                </div>
                <div>
                  <ul>
                    <li className="px-10 py-2 flex cursor-pointer">
                      <span className="text-[14px] font-[700] flex gap-5 items-center hover:text-[rgba(239,207,36,0.8)]">
                        <a
                          href="http://"
                          target="_blank"
                          rel="noreferrer"
                          className="flex items-center gap-5"
                        >
                          <Discord /> Discord
                        </a>
                      </span>
                    </li>
                    <li className="px-10 py-2 flex cursor-pointer">
                      <span className="text-[14px] font-[700] flex gap-5 items-center hover:text-[rgba(239,207,36,0.8)]">
                        <a
                          href="https://github.com/Duckchain"
                          target="_blank"
                          rel="noreferrer"
                          className="flex items-center gap-5"
                        >
                          <Github /> Github
                        </a>
                      </span>
                    </li>
                    <li className="px-10 py-2 flex cursor-pointer">
                      <span className="text-[14px] font-[700] flex gap-5 items-center hover:text-[rgba(239,207,36,0.8)]">
                        <a
                          href="https://x.com/0xDuckchainLabs?s=20"
                          target="_blank"
                          rel="noreferrer"
                          className="flex items-center gap-5"
                        >
                          <Twitter /> X (Twitter)
                        </a>
                      </span>
                    </li>
                    <li className="px-10 py-2 flex cursor-pointer">
                      <span className="text-[14px] font-[700] flex gap-5 items-center hover:text-[rgba(239,207,36,0.8)]">
                        <a
                          href="https://t.me/Duckchain_portal"
                          target="_blank"
                          rel="noreferrer"
                          className="flex items-center gap-5"
                        >
                          <Telegram /> Telegram
                        </a>
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="relative ecosystem">
              <Links
                url="/"
                label="Explore"
                className="text-[16px] flex items-center p-3 gap-2 rounded-[5px] hover:text-[#FDB833] ease-in duration-300"
                icon={<FiChevronDown />}
              />
              <div className="hidden absolute bg-[#151311] flex-col w-[300px] top-[47px] -left-[90px] z-50 explore border border-[rgba(253,184,51,0.2)] ">
                <div className="flex items-center gap-3 px-10 py-5">
                  <span>
                    <GlobeIcon />
                  </span>
                  <h1>Explore</h1>
                </div>
                <div>
                  <ul>
                    <li className="hover:bg-[rgba(253,184,51,0.20)] px-10 py-2 flex flex-col cursor-pointer hover:rounded-[5px] mx-[2px] hover:border-[rgba(239,207,36,0.2)] hover:border-[0.5px] rounded-[5px] border-transparent border-[0.5px]">
                      <span className="text-[14px] font-[700]">
                        Duckchain DPOS
                      </span>
                      <span className="text-[12px] text-[rgba(255,255,255,0.5)]">
                        The native chain for Duckchain
                      </span>
                    </li>
                    <li className="hover:bg-[rgba(253,184,51,0.20)] px-10 py-2 flex flex-col cursor-pointer hover:rounded-[5px] mx-[2px] hover:border-[rgba(239,207,36,0.2)] hover:border-[0.5px] rounded-[5px] border-transparent border-[0.5px]">
                      <span className="text-[14px] font-[700]">
                        BNB Duckchain DRC20
                      </span>
                      <span className="text-[12px] text-[rgba(255,255,255,0.5)]">
                        The layer 2 for BNB chain
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
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

      <MobileMenu />
    </>
  );
};

export default Header;
