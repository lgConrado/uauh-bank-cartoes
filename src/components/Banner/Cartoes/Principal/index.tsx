import undraw from "../../../../assets/ilustracao-cartoes.png";
import Figure from "../../../Figures";
import Logo from "../../../Logo";

const BannerCartoesPrincipal = () => {
  return (
    <section className="banner--c--principal">
      <div className="banner--c--principal__content">
        <div className="banner--c--principal__content__logo">
          <Logo variant="cartoes" theme="branca" />
        </div>
        <img
          className="banner--c--principal__content__ilustracao"
          src={undraw}
          alt="Ilustração de cartões"
        />
        <div className="banner--c--principal__content__texts">
          <h1 className="heading--primary">
            Benefícios que vão te surpreender!
          </h1>
          <h2 className="heading--secondary">
            Descubra como nossos produtos podem transformar o ambiente
            corporativo, garantindo satisfação e produtividade.
          </h2>
        </div>
      </div>

      <div className="banner--c--principal__figure banner--c--principal__figure--azul">
        <Figure theme="azul" />
      </div>
      <div className="banner--c--principal__figure banner--c--principal__figure--branca">
        <Figure theme="branca" />
      </div>
      <div className="banner--c--principal__figure banner--c--principal__figure--laranja">
        <Figure theme="laranja" />
      </div>
    </section>
  );
};

export default BannerCartoesPrincipal;