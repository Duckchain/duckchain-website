import { CustomButton } from "../../components";
import { CustomCard } from "../../components/card";
const Dpos = () => {
  return (
    <>
      <section className="flex w-full">
        <div className="container flex md:w-[85%] mx-auto flex-col">
          <div className="flex justify-between items-center flex-col md:flex-row md:pt-[100px]">
            <div className="md:w-1/2 w-[85%] py-20 md:py-0 ">
              <h1 className="text-white text-[32px] md:text-[60px] font-[900] leading-tight">
                Delegated Proof of Stake
                <span className="text-[#FDB833] leading-tight">
                  (DPOS)
                </span>{" "}
              </h1>
              <p className="text-[12px] text-[rgba(255,255,255,0.50)]">
                Delegated Proof of Stake (DPOS) blockchain designed to
                revolutionize the landscape of decentralized applications
                (dApps) and smart contracts. The ever-evolving blockchain
                landscape calls for innovative solutions to address scalability,
                security, and interoperability challenges.
              </p>

              <div className="py-8 flex">
                <CustomButton
                  color="red"
                  label="Documentation"
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
                  label="Ecosystem DApps"
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
          </div>
        </div>
      </section>
      <section className="flex w-full py-20">
        <div className="container mx-auto w-[85%] flex justify-between gap-6 flex-col md:flex-row">
          <div className="md:w-1/3 text-left mix-blend-lighten">
            <h1 className="text-[28px] text-white leading-tight">
              <span className="text-[#FDB833]">Duckchain's DPoS</span>
              &nbsp;model offers the following advantages:
            </h1>
          </div>
          <div className="md:w-2/3">
            <div className="grid grid-cols-2 gap-5">
              <CustomCard
                title="Scalability"
                color="FDB833"
                text="Adaptive validator sets and rotation reduce bottlenecks, enabling higher throughput and faster transactions."
                className="py-5"
              />

              <CustomCard
                title="Decentralized"
                color="9747FF"
                text="Randomized rotation prevents centralization tendencies, ensuring a more distributed network."
                className="py-5"
              />
              <CustomCard
                title="Security"
                color="597D4B"
                text="Enhanced incentives and dynamic adjustments bolster network security against malicious actors."
                className="py-5"
              />
            </div>
          </div>
        </div>
      </section>
      <section className="flex w-full pb-20">
        <div className="container mx-auto w-[85%] flex justify-between gap-6 flex-col md:flex-row">
          <div className="md:w-1/3 text-left mix-blend-lighten">
            <h1 className="text-[28px] text-white leading-tight">
              <span className="text-[#FDB833]">Duckchain's DPoS</span>
              &nbsp;innovations have broad applications, including
            </h1>
          </div>
          <div className="md:w-2/3">
            <div className="grid grid-cols-2 gap-5">
              <CustomCard
                title="High-Transaction
                Volume Enviroment"
                color="FDB833"
                text="DPOS suits applications with frequent transactions, such as payment systems and decentralized apps."
                className="py-5"
              />

              <CustomCard
                title="IoT and Supply
                Chain"
                color="9747FF"
                text="Duckchain's scalability and security improvements make it suitable for loT and supply chain solutions."
                className="py-5"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Dpos;
