import { Outlet } from "react-router-dom";
import FooterBank from "../../../components/Footer/Bank";

const DefaultBank = () => {
  return (
    <>
      <Outlet />
      <FooterBank />
    </>
  );
};

export default DefaultBank;
