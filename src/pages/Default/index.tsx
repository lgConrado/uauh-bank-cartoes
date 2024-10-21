import { Outlet } from "react-router-dom";
import FooterBank from "../../components/Footer/Bank";
import FooterCartoes from "../../components/Footer/Cartoes";

const Default = () => {
  const path = window.location.pathname;

  return (
    <>
      <Outlet />
      {path.includes("/bank") ? <FooterBank /> : <FooterCartoes />}
    </>
  );
};

export default Default;
