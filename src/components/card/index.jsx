/* eslint-disable react/prop-types */
const Card = ({ title, text }) => {
  return (
    <>
      <div
        className="px-[20px] py-[40px] rounded-[20px] flex items-center gap-2 justify-between"
        style={{
          background: "rgba(177, 129, 37, 0.20)",
          border: "0.5px solid #FDB833",
        }}
      >
        <span>
          <h1 className="text-[40px] text-white">{title}</h1>
          <p className="text-white text-[12px] max-w-[200px]">{text}</p>
        </span>
        <span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="33"
            height="30"
            viewBox="0 0 33 30"
            fill="none"
          >
            <circle cx="18" cy="15" r="15" fill="#FDB833" fillOpacity="0.5" />
            <path
              d="M23.756 15.5883C24.0813 15.2629 24.0813 14.7345 23.756 14.4091L19.5909 10.244C19.2655 9.91865 18.7371 9.91865 18.4117 10.244C18.0863 10.5694 18.0863 11.0979 18.4117 11.4233L21.158 14.167L13.1715 14.167C12.7108 14.167 12.3385 14.5392 12.3385 15C12.3385 15.4608 12.7108 15.833 13.1715 15.833L21.158 15.833L18.4143 18.5767C18.0889 18.9021 18.0889 19.4306 18.4143 19.756C18.7397 20.0813 19.2681 20.0813 19.5935 19.756L23.7586 15.5909L23.756 15.5883Z"
              fill="white"
            />
          </svg>
        </span>
      </div>
    </>
  );
};

const CustomCard = ({ color, text, title, count, label }) => {
  return (
    <>
      <div className="md:p-10 py-5 md:py-0">
        <h1
          className={`border-[2px] border-t-0 border-r-0 border-b-0 px-4 md:text-[28px] text-white font-[400]`}
          style={{ borderLeftColor: `#${color}` }}
        >
          {title}
        </h1>
        <p className="text-[rgba(255,255,255,0.50)] text-[11px] md:text-[12px] font-[400] py-3 md:py-2">
          {text}
        </p>
        <span className="relative">
          <span className="absolute left-0">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="5"
              height="5"
              viewBox="0 0 5 5"
              fill="none"
            >
              <circle
                cx="2.5"
                cy="2.5"
                r="2.5"
                transform="matrix(1 0 0 -1 0 5)"
                fill={`#${color}`}
              />
            </svg>
          </span>
          <h1 className="md:text-[28px] text-white font-[400] ml-1 py-2 md:py-0">
            {count}
          </h1>
          <p className="text-[rgba(255,255,255,0.50)] text-[12px] font-[400] uppercase">
            {label}
          </p>
        </span>
      </div>
    </>
  );
};
export { Card, CustomCard };
