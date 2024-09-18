import undraw from "../../assets/ilustracao-cartoes.png";
import logo from "../../assets/logo-branca-cartoes.svg";

const BannerCartoes = () => {
  return (
    <section className="banner-c">
      <div className="banner-c__content">
        <img
          className="logo--c--branca banner-c__content__logo"
          src={logo}
          alt="Logo principal"
        />
        <img
          className="banner-c__content__ilustracao"
          src={undraw}
          alt="Ilustração de cartões"
        />
        <div className="banner-c__content__texts">
          <h1 className="heading--primary">
            Benefícios que vão te surpreender!
          </h1>
          <h2 className="heading--secondary">
            Descubra como nossos produtos podem transformar o ambiente
            corporativo, garantindo satisfação e produtividade.
          </h2>
        </div>
      </div>
    </section>
  );
};

export default BannerCartoes;
