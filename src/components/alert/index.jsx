import Countdown from "../countdown";

const Alert = () => {
  return (
    <div className="w-full flex flex-col justify-center bg-[#FDB833] py-3 px-1 items-center text-white">
      <p className="font-semibold text-center ">
        Blockchain, Explorer, Bridge, Duckswap launching soon...
      </p>
      <Countdown />
    </div>
  );
};

export default Alert;
