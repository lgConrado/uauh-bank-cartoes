import Logo from "../../../Logo";
import undraw from "../../../../assets/bank/ilustracao-novidade.jpg";

const BannerBankNovidade = () => {
  return (
    <section className="banner--b--novidade" id="banner--b--novidade">
      <div className="banner--b--novidade__logo">
        <Logo variant="bank" theme="azul" />
      </div>
      <div className="banner--b--novidade__content">
        <div className="banner--b--novidade__content__texts">
          <h1 className="heading--b--primary">
            <span>
              Vem conhecer o <br />
            </span>{" "}
            UAUH Bank!
          </h1>
          <h2 className="heading--b--secondary">
            <b>Chegou a hora de ter um banco que está do seu lado. </b>
            Atendimento personalizado, tecnologia de ponta, taxas competitivas,
            soluções completas e um compromisso real com você.
          </h2>
          <div className="banner--b--novidade__content__button">
            <a href="/bank">
              <button className="button button--b--primary">
                Quero conhecer!
              </button>
            </a>
          </div>
        </div>
        <img
          src={undraw}
          className="banner--b--novidade__content__ilustracao"
        />
      </div>
      <div className="banner--b--novidade__figure" />
    </section>
  );
};

export default BannerBankNovidade;
