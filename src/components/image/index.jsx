/* eslint-disable react/prop-types */
const Image = ({ src, alt, ...children }) => {
  return (
    <>
      <img src={src} alt={alt} {...children} />
    </>
  );
};

export default Image;
