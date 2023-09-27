import { CustomButton } from "../../components";
// import Duck from "../../assets/images/duck-bounce-2.gif";
// import Coin from "../../assets/images/duck-bounce-1.gif";
import { Card, CustomCard } from "../../components/card";
import { FiArrowUpRight } from "react-icons/fi";

const Home = () => {
  return (
    <>
      <section className="flex w-full md:h-screen md:overflow-hidden">
        <div className="container mx-auto w-[85%] items-center flex flex-col md:flex-row">
          <div className="md:w-[65%] py-20 md:py-0">
            <div className="max-w-fit leading-tight">
              <h1 className="text-[30px] md:text-[40px] font-[400] text-white">
                The{" "}
                <span className="text-[#FDB833] font-[800]">
                  ultimate fastest
                </span>
                , cheapest flexible blockchain for decentralized apps and cross
                chain <span className="text-[#FDB833]">Dapps</span>.
              </h1>
              <p className="text-[12px] leading-tight py-3 max-w-[600px] text-[rgba(255,255,255,0.50)]">
                Welcome to the world of Duckcoin (DuckChain), the leading
                payment and blockchain token packed with incredible utilities!
                Embrace the people&apos;s cryptocurrency and join the global
                community of Duckies as we venture into the realm of
                decentralized finance.
              </p>
              <div className="py-3">
                <CustomButton
                  color="red"
                  label="Start building"
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
          <div className="-mt-[50px] md:-mt-0 mb-[30px] md:mb-0 md:w-[55%] md:h-[100%] md:flex items-center mix-blend-lighten">
            {/* <Image src={Duck} alt="duck" className="h-[300px] md:h-auto" /> */}
          </div>
        </div>
      </section>
      <section className="flex w-full pb-8">
        <div className="container mx-auto w-[85%]">
          <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-3">
            <Card
              text="Gain entry to our documents and commence the construction
                  process."
              title="Build"
            />
            <a
              href="https://duckcoin.xyz/bridge"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Card
                text="Contribute to enhancing network security by assigning Duck Tokens."
                title="Stake"
              />
            </a>

            <Card text="Transfer assets" title="Bridge" />
          </div>
        </div>
      </section>
      <section className="w-full text-center flex justify-center md:pt-[100px]">
        <div className="container mx-auto w-[85%]">
          <h1 className="text-[20px] md:text-[60px] font-[900] text-white leading-tight">
            The <span className="text-[#EFCF24]">scaling technology</span> that
            has garnered the most widespread adoption.
          </h1>
        </div>
      </section>

      <section className="container flex mx-auto w-[85%] pt-[80px] md:pt-[150px] flex-col gap-y-6">
        <div className="flex items-center w-full justify-between md:flex-row-reverse">
          <div className="md:w-1/2">
            <h1 className="border-[4px] border-r-0 border-b-0 border-l-[#FDB833] border-t-0 p-4 md:text-[30px] text-white font-[700]">
              Duck Chain DPOS
            </h1>
            <ul
              style={{ listStyle: "disc" }}
              className="ml-8 py-2 leading-relaxed text-[rgba(255,255,255,.5)] text-[12px] md:text-[14px]"
            >
              <li>introducing Duck delegated proof of stake consensus.</li>
              <li>Building a Duckchain Dapps.</li>
              <li>Ensuring security, efficiency, and sustainability.</li>
            </ul>
            <div className="py-8 flex">
              <CustomButton
                color="red"
                label="Learn More"
                icon={<FiArrowUpRight />}
                style={{
                  background: "transparent",
                  borderRadius: "20px",
                  padding: "10px 20px",
                  color: "#fff",
                  textTransform: "capitalize",
                  fontSize: "12px",
                  textDecoration: "underline",
                }}
              />
            </div>
          </div>
          <div className="w-1/3 "></div>
        </div>
        <div className="flex items-center w-full justify-between">
          <div className="md:w-1/2">
            <h1 className="border-[5px] border-r-0 border-b-0 border-l-[#9747FF] border-t-0 p-4 md:text-[30px] text-white font-[700]">
              Duckchain zkEVM
            </h1>
            <ul
              style={{ listStyle: "disc" }}
              className="ml-8 py-2 leading-relaxed text-[rgba(255,255,255,.5)] text-[12px] md:text-[14px]"
            >
              <li>
                Build with Duckchain low-cost and lightning-fast Ethereum L2
                blockchain powered Polygon CDK.
              </li>
              <li>
                Supported programming languages for smart contract development.
              </li>
              <li>Seamlessly integrating DApps into the ecosystem.</li>
            </ul>
            <div className="py-8 flex">
              <CustomButton
                color="red"
                label="Learn More"
                icon={<FiArrowUpRight />}
                style={{
                  background: "transparent",
                  borderRadius: "20px",
                  padding: "10px 20px",
                  color: "#fff",
                  textTransform: "capitalize",
                  fontSize: "12px",
                  textDecoration: "underline",
                }}
              />
            </div>
          </div>
          <div className="w-1/3 "></div>
        </div>
      </section>

      <section className="flex w-full ">
        <div className="container mx-auto  w-[85%]">
          <div className="w-full flex items-center justify-between my-[100px] flex-col md:flex-row">
            <div>
              <h1 className="text-[30px] md:text-[40px] font-[600] text-white">
                Our Community in Numbers
              </h1>
            </div>
            <div>
              <span className="leading-tight py-4">
                <h1 className="text-[90px] font-[600] heading">1000K+</h1>
                <p className="text-sm ml-4 md:-mt-5 text-[rgba(255,255,255,0.50)]">
                  Total Users
                </p>
              </span>
              <span className="leading-tight">
                <h1 className="text-[90px] font-[600] heading">{`<$0.02`}</h1>
                <p className="text-sm ml-4 md:-mt-5 text-[rgba(255,255,255,0.50)]">
                  Avg.transaction fee
                </p>
              </span>
            </div>
          </div>
        </div>
      </section>
      <section className="flex w-full">
        <div className="container mx-auto w-[85%] flex  justify-between gap-6 flex-col md:flex-row">
          <div className="md:w-1/3 text-left mix-blend-lighten">
            <h1 className="text-[30px] text-white">
              Made for <span className="text-[#FDB833]">mass adoption.</span>
            </h1>
            {/* <Image
              src={Duck}
              alt="duck"
              className="text-left h-[400px] hidden md:flex"
            /> */}
          </div>
          <div className="md:w-2/3">
            <div className="grid grid-cols-2 gap-5">
              <CustomCard
                title="Fast"
                color="FDB833"
                count="3.969"
                label="transactions per second"
                text="Eliminate user waiting times with Duck Chain, featuring rapid
                  block times of just 400 milliseconds. Plus, as hardware speeds
                  advance, the network will also accelerate accordingly."
              />

              <CustomCard
                title="Decentralized"
                color="9747FF"
                count="1,675"
                label="VALIDATOR NODES"
                text="The Duck network's integrity is confirmed by a multitude of nodes that function autonomously. This guarantees the security and resistance to censorship of your data."
              />
              <CustomCard
                title="Scalable"
                color="597D4B"
                count="163,077,581,394"
                label="TOTAL TRANSACTIONS"
                text="Scale rapidly with Duck Chain, effortlessly handling thousands of transactions per second, all while maintaining consistently low fees for developers and users, priced under $0.01."
              />
              <CustomCard
                title="Energy Efficient"
                color="E56428"
                count="0%"
                label="NET CARBON IMPACT"
                text="DuckChain's proof-of-stake network and innovative advancements significantly reduce its environmental footprint. A single Duck transaction consumes energy equivalent to just a few Google searches."
              />
            </div>
          </div>
        </div>
      </section>
      <section className="flex w-full md:h-screen">
        <div className="container mx-auto w-[85%] flex items-center justify-between flex-col-reverse md:flex-row">
          <div className="md:w-1/2">
            <h1 className="text-white font-[400] md:text-[38px] leading-tight">
              Powered by <span className="text-[#FDB833]">Duckcoin</span>. Check
              out <span className="text-[#FDB833]">Duckcoin.</span>
            </h1>
            <p className="text-[rgba(255,255,255,0.50)] text-[12px] py-3">
              Duckcoin embodies the friendly, curious, and intelligent nature of
              Duckies, fostering a vibrant DeFi ecosystem. Our utilities include
              a live Bridge, Blockchain, Duckswap, NFT ticketing platform,
              lottery, and engaging games, providing endless possibilities for
              our community
            </p>
            <div className="py-3">
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
            </div>
          </div>
          <div className="md:w-1/3 mix-blend-lighten">
            {/* <Image src={Coin} alt="coin" /> */}
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
