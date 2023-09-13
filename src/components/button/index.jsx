import { Button } from "@material-tailwind/react";

// eslint-disable-next-line react/prop-types
const CustomButton = ({ textcolor, bg, label, ...children }) => {
  return (
    <>
      <Button color={bg} {...children} className={`text-[${textcolor}]`}>
        {label}
      </Button>
    </>
  );
};

export default CustomButton;
