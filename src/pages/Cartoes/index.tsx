import BannerCartoesPrincipal from "../../components/Banner/Cartoes/Principal";
import BannerCartoesBeneficios from "../../components/Banner/Cartoes/Beneficios";
import Portais from "../../components/Portais";
import BannerAppCartoes from "../../components/Banner/Cartoes/App";
import BannerCartoesRede from "../../components/Banner/Cartoes/Rede";
import { useEffect } from "react";
import BannerBankNovidade from "../../components/Banner/Bank/Novidade";
import FooterCartoes from "../../components/Footer/Cartoes";

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
      <main className="main">
        <BannerCartoesPrincipal />
        <Portais />
        <div>
          <BannerCartoesBeneficios />
          <BannerAppCartoes />
          <BannerCartoesRede />
          <BannerBankNovidade />
        </div>
      </main>
      <FooterCartoes />
    </>
  );
};

export default Cartoes;
