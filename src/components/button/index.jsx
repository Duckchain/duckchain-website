import { Button } from "@material-tailwind/react";

// eslint-disable-next-line react/prop-types
const CustomButton = ({ textcolor, bg, label, icon, ...children }) => {
  return (
    <>
      <Button
        color={bg}
        {...children}
        className={`text-[${textcolor}] flex items-center gap-2`}
      >
        {label} {icon}
      </Button>
    </>
  );
};

export default CustomButton;
