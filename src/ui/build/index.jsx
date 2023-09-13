import Image from "../../components/image";
import DuckBuild from "../../assets/images/duck-build.png";
import Duck from "../../assets/images/duck.png";
import { CustomButton } from "../../components";

const Build = () => {
  return (
    <>
      <section className="w-full flex">
        <div className="container mx-auto md:w-[85%] flex justify-between gap-5 md:-mt-[80px]">
          <div className="flex justify-between items-center flex-col md:flex-row">
            <div className="md:w-1/2 w-[85%] py-20 md:py-0 ">
              <h1 className="text-white text-[32px] md:text-[64px] font-[900]">
                <span className="text-[#FDB833] leading-tight">Developer</span>{" "}
                Resources
              </h1>
              <p className="text-[12px] text-[rgba(255,255,255,0.50)]">
                Guide to Becoming Part of the Solana Ecosystem: Crafted by
                Developers, for Developers
              </p>
              <div className="py-8 flex">
                <CustomButton
                  color="red"
                  label="Build Now"
                  style={{
                    background: "#FDB833",
                    borderRadius: "20px",
                    padding: "10px 20px",
                    color: "#fff",
                    textTransform: "capitalize",
                    fontSize: "12px",
                  }}
                />
                <CustomButton
                  color="red"
                  label="Stack Exchange"
                  style={{
                    background: "transparent",
                    borderRadius: "20px",
                    padding: "10px 20px",
                    color: "#fff",
                    textDecoration: "underline",
                    textTransform: "capitalize",
                    fontSize: "12px",
                  }}
                />
              </div>
            </div>
            <div className="md:w-1/2">
              <Image
                src={DuckBuild}
                alt="duck"
                className="md:ml-[112px] -mt-[200px] md:-mt-0 -ml-[50px]"
              />
            </div>
          </div>
        </div>
      </section>
      <section className="text-center flex justify-center mb-[100px] ">
        <div className="container mx-auto w-[80%]">
          <h1 className="text-[30px] md:text-[60px] font-[900] text-white leading-tight">
            The <span className="text-[#FDB833]">scaling technology</span> that
            has garnered the most widespread adoption.
          </h1>
        </div>
      </section>
      <section>
        <div className="container flex mx-auto w-[85%] pb-[50px] flex-col gap-y-6">
          <div className="flex items-center w-full justify-between">
            <div className="w-1/2">
              <h1 className="border-[4px] border-r-0 border-b-0 border-l-[#FDB833] border-t-0 p-4 md:text-[30px] text-white font-[700]">
                Duck Chain (DAC)
              </h1>
              <ul
                style={{ listStyle: "disc" }}
                className="ml-8 py-2 leading-relaxed text-[rgba(255,255,255,.5)] text-[12px] md:text-[14px]"
              >
                <li>Introducing Duck Authority Consensus (DAC) mechanism.</li>
                <li>
                  Advantages of DAC over Proof of Work (PoW) and Proof of Stake
                  (PoS).
                </li>
                <li>Ensuring security, efficiency, and sustainability.</li>
              </ul>
              <div className="py-8 flex">
                <CustomButton
                  color="red"
                  label="Duckcoin"
                  style={{
                    background: "#FDB833",
                    borderRadius: "20px",
                    padding: "10px 20px",
                    color: "#fff",
                    textTransform: "capitalize",
                    fontSize: "12px",
                  }}
                />
                <CustomButton
                  color="red"
                  label="Learn More"
                  style={{
                    background: "transparent",
                    borderRadius: "20px",
                    padding: "10px 20px",
                    color: "#fff",
                    textTransform: "capitalize",
                    fontSize: "12px",
                  }}
                />
              </div>
            </div>
            <div className="w-1/3 ">
              <Image
                src={Duck}
                alt="duck"
                className="blur-[2px] bg-contain h-[300px] w-[300px] -mt-[40px]"
              />
            </div>
          </div>
          <div className="flex items-center w-full justify-between flex-row-reverse">
            <div className="w-1/2">
              <h1 className="border-[5px] border-r-0 border-b-0 border-l-[#9747FF] border-t-0 p-4 md:text-[30px] text-white font-[700]">
                DuckVM
              </h1>
              <ul
                style={{ listStyle: "disc" }}
                className="ml-8 py-2 leading-relaxed text-[rgba(255,255,255,.5)] text-[12px] md:text-[14px]"
              >
                <li>Introduction to DuckVM (Duckchain Virtual Machine).</li>
                <li>
                  Supported programming languages for smart contract
                  development.
                </li>
                <li>Seamlessly integrating DApps into the ecosystem.</li>
              </ul>
              <div className="py-8 flex">
                <CustomButton
                  color="red"
                  label="Build Now"
                  style={{
                    background: "#FDB833",
                    borderRadius: "20px",
                    padding: "10px 20px",
                    color: "#fff",
                    textTransform: "capitalize",
                    fontSize: "12px",
                  }}
                />
                <CustomButton
                  color="red"
                  label="Learn More"
                  style={{
                    background: "transparent",
                    borderRadius: "20px",
                    padding: "10px 20px",
                    color: "#fff",
                    textTransform: "capitalize",
                    fontSize: "12px",
                  }}
                />
              </div>
            </div>
            <div className="w-1/3 ">
              <Image
                src={Duck}
                alt="duck"
                className="blur-[2px] bg-contain  h-[300px] w-[300px] -mt-[40px]"
              />
            </div>
          </div>
          <div className="flex items-center w-full justify-between">
            <div className="w-1/2">
              <h1 className="border-[5px] border-r-0 border-b-0 border-l-[#E56428] border-t-0 p-4 md:text-[30px] text-white font-[700]">
                DuckDAO
              </h1>
              <ul
                style={{ listStyle: "disc" }}
                className="ml-8 py-2 leading-relaxed text-[rgba(255,255,255,.5)] text-[12px] md:text-[14px]"
              >
                <li>
                  Implementation of DuckDAO: Decentralized Autonomous
                  Organization.
                </li>
                <li>
                  Token holders participation in protocol upgrades and
                  alterations.
                </li>
                <li>Community-driven development and decision-making.</li>
                <li>Interoperability and Cross-Chain Communication</li>
                <li>
                  Duckbridge: Enabling seamless cross-chain communication.
                </li>
                <li>Collaborating with diverse blockchain ecosystems.</li>
              </ul>
              <div className="py-8 flex">
                <CustomButton
                  color="red"
                  label="Duckcoin"
                  style={{
                    background: "#FDB833",
                    borderRadius: "20px",
                    padding: "10px 20px",
                    color: "#fff",
                    textTransform: "capitalize",
                    fontSize: "12px",
                  }}
                />
                <CustomButton
                  color="red"
                  label="Learn More"
                  style={{
                    background: "transparent",
                    borderRadius: "20px",
                    padding: "10px 20px",
                    color: "#fff",
                    textTransform: "capitalize",
                    fontSize: "12px",
                  }}
                />
              </div>
            </div>
            <div className="w-1/3 ">
              <Image
                src={Duck}
                alt="duck"
                className="blur-[2px] bg-contain  h-[300px] w-[300px] -mt-[40px]"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Build;
