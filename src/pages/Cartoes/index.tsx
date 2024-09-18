import BannerCartoesPrincipal from "../../components/Banner/Cartoes/Principal";
import BannerCartoesBeneficios from "../../components/Banner/Cartoes/Beneficios";
import Portais from "../../components/Portais";
import BannerAppCartoes from "../../components/Banner/Cartoes/App";
import BannerCartoesRede from "../../components/Banner/Cartoes/Rede";

const Cartoes = () => {
  return (
    <main className="main-c">
      <BannerCartoesPrincipal />
      <Portais />
      <div>
        <BannerCartoesBeneficios />
        <BannerAppCartoes />
        <BannerCartoesRede />
      </div>
    </main>
  );
};

export default Cartoes;
