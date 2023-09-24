import { Outlet } from "react-router-dom";
import Footer from "./footer";
import Header from "./header";
import Alert from "./alert";

const Layout = () => {
  return (
    <>
      <Alert />
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

export default Layout;
