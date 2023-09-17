import { CustomButton, Image } from "../../components";
import DuckCoin from "../../assets/images/coin.svg";
import badge from "../../assets/images/1.gif";
import trophy from "../../assets/images/2.gif";
const Benefits = () => {
  return (
    <>
      <div className="flex w-full">
        <div className="container flex md:w-[85%] mx-auto flex-col">
          <div className="flex justify-between items-center flex-col md:flex-row">
            <div className="md:w-1/2 w-[85%] py-20 md:py-0 ">
              <h1 className="text-white text-[32px] md:text-[50px] font-[900] leading-tight">
                Accrue rewards by safeguarding the&nbsp;
                <span className="text-[#FDB833] leading-tight">
                  DAC mechanism.
                </span>{" "}
              </h1>
              <p className="text-[12px] text-[rgba(255,255,255,0.50)]">
                Utilizing DUCK tokens, individuals can actively contribute to
                network security and earn rewards.
              </p>

              <div className="py-8 flex">
                <CustomButton
                  color="red"
                  label="Set up a Node"
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
                  label="Become a Delegator"
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
            <div className="md:w-1/2 mix-blend-lighten">
              <Image
                src={DuckCoin}
                alt="duck"
                className="-ml-[50px] md:m-0 -mt-[100px] md:-mt-0 "
              />
            </div>
          </div>
          <div className="flex ml-[30px] md:ml-0 md:w-full py-5">
            <h1 className="font-[700] text-[20px] md:text-[40px] text-white max-w-[20ch] leading-tight">
              What are the benefits of staking&nbsp;
              <span className="text-[#FDB833] leading-tight">Duck Chain?</span>
            </h1>
          </div>
          <div className="w-full flex py-10">
            <div className="md:w-full w-[90%] mx-auto md:mx-0 grid md:grid-cols-3 gap-10">
              <div className="bg-[rgba(253,184,51,0.10)] p-10 rounded-[20px] border-[0.5px] border-[rgba(253,184,51,0.3)] ">
                <Image
                  src={badge}
                  alt="duck"
                  className="w-[250px] h-[250px] object-contain"
                />
                <h1 className="text-white font-[700] text-[30px] pb-1">
                  Earn Rewards
                </h1>
                <p className="text-[rgba(255,255,255,0.5)] text-[12px] leading-relaxed">
                  A portion of the complete 10 billion DUCK Token supply,
                  specifically 12%, is designated for supporting staking
                  rewards. Validators have the autonomy to determine their own
                  commission rates for accepting delegations to their nodes, and
                  there are additional annual incentives accessible as well!
                </p>
              </div>
              <div className="bg-[rgba(253,184,51,0.10)] p-10 rounded-[20px] border-[0.5px] border-[rgba(253,184,51,0.3)] ">
                <Image
                  src={trophy}
                  alt="duck"
                  className="w-[250px] h-[250px] object-contain"
                />
                <h1 className="text-white font-[700] text-[30px] pb-1">
                  Stake Sustainably
                </h1>
                <p className="text-[rgba(255,255,255,0.5)] text-[12px] leading-relaxed">
                  You do not need to use energy-intensive computers to stake,
                  which lessens the environmental impact.
                </p>
              </div>
              <div className="bg-[rgba(253,184,51,0.10)] p-10 rounded-[20px] border-[0.5px] border-[rgba(253,184,51,0.3)] ">
                <Image
                  src={trophy}
                  alt="duck"
                  className="w-[250px] h-[250px] object-contain"
                />
                <h1 className="text-white font-[700] text-[30px] pb-1">
                  Build the future
                </h1>
                <p className="text-[rgba(255,255,255,0.5)] text-[12px] leading-relaxed">
                  Polygon PoS is one of the most used protocols in the world and
                  continues to grow. By staking, you can help to build the
                  technology of Web3.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Benefits;
