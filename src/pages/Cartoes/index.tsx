import BannerCartoesPrincipal from "../../components/Banner/Cartoes/Principal";
import BannerCartoesBeneficios from "../../components/Banner/Cartoes/Beneficios";
import Portais from "../../components/Portais";
import BannerAppCartoes from "../../components/Banner/Cartoes/App";
import BannerCartoesRede from "../../components/Banner/Cartoes/Rede";
import FooterCartoes from "../../components/Footer/Cartoes";
import { useEffect } from "react";

const Cartoes = () => {
  useEffect(() => {
    const scrollToBannerPrincipal = () => {
      const element = document.getElementById("banner--c--principal");
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    };

    window.addEventListener("load", scrollToBannerPrincipal);

    return () => {
      window.removeEventListener("load", scrollToBannerPrincipal);
    };
  }, []);
  return (
    <>
      <main className="main-c">
        <BannerCartoesPrincipal />
        <Portais />
        <div>
          <BannerCartoesBeneficios />
          <BannerAppCartoes />
          <BannerCartoesRede />
        </div>
      </main>
      <FooterCartoes />
    </>
  );
};

export default Cartoes;
