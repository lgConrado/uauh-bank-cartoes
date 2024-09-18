import undraw from "../../../../assets/ilustracao-busca-credenciado.png";
import Figure from "../../../Figures";

const BannerCartoesRede = () => {
  return (
    <section className="banner--c--rede">
      <div className="banner--c--rede__content">
        <img
          className="banner--c--rede__content__ilustracao"
          src={undraw}
          alt="Ilustração de cartões"
        />
        <div className="banner--c--rede__content__texts">
          <h1 className="heading--primary">Explore nossa rede de aceitação!</h1>
          <h2 className="heading--secondary">
            Onde você estiver, estamos com você. Explore nossa rede de aceitação
            e faça suas compras com segurança e praticidade!
          </h2>
          <div className="banner--c--rede__content__button">
            <button className="button button--c--laranja">Buscar</button>
          </div>
        </div>
      </div>

      <div className="banner--c--rede__figure banner--c--rede__figure--azul">
        <Figure theme="azul" />
      </div>
      <div className="banner--c--rede__figure banner--c--rede__figure--branca">
        <Figure theme="branca" />
      </div>
      <div className="banner--c--rede__figure banner--c--rede__figure--laranja">
        <Figure theme="laranja" />
      </div>
    </section>
  );
};

export default BannerCartoesRede;
