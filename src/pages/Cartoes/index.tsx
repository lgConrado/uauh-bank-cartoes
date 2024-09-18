import BannerCartoesPrincipal from "../../components/Banner/Cartoes/Principal";
import BannerCartoesBeneficios from "../../components/Banner/Cartoes/Beneficios";
import Portais from "../../components/Portais";
import BannerAppCartoes from "../../components/Banner/Cartoes/App";

const Cartoes = () => {
  return (
    <main className="main-c">
      <BannerCartoesPrincipal />
      <Portais />
      <BannerCartoesBeneficios />
      <BannerAppCartoes />
    </main>
  );
};

export default Cartoes;
