import { Outlet } from "react-router-dom";
import FooterBank from "../../components/Footer/Bank";
import FooterCartoes from "../../components/Footer/Cartoes";
import { useEffect, useState } from "react";

const Default = () => {
  const [isBankRoute, setIsBankRoute] = useState(false);

  useEffect(() => {
    // O código dentro de useEffect só será executado no lado do cliente
    const path = window.location.pathname;
    setIsBankRoute(path.includes("/bank"));
  }, []);

  return (
    <>
      <Outlet />
      {isBankRoute ? <FooterBank /> : <FooterCartoes />}
    </>
  );
};

export default Default;
