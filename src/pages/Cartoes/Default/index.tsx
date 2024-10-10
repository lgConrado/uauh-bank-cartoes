import { Outlet } from "react-router-dom";
import FooterCartoes from "../../../components/Footer/Cartoes";

const DefaultCartoes = () => {
  return (
    <>
      <Outlet />
      <FooterCartoes />
    </>
  );
};

export default DefaultCartoes;
