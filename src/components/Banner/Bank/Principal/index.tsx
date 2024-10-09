import Logo from "../../../Logo";
import undraw from "../../../../assets/bank/ilustracao-principal.jpg";

const BannerBankPrincipal = () => {
  return (
    <section className="banner--b--principal" id="banner--b--principal">
      <div className="banner--b--principal__logo">
        <Logo variant="bank" theme="azul" />
      </div>
      <div className="banner--b--principal__content">
        <div className="banner--b--principal__content__texts">
          <h1 className="heading--b--primary">
            <span>
              Bem-vindo(a) <br />
              ao
            </span>{" "}
            UAUH Bank!
          </h1>
          <h2 className="heading--b--secondary">
            Sinta a diferença de ter um <br />
            banco que <b>entenda as suas necessidades.</b>
          </h2>
        </div>
        <img
          src={undraw}
          className="banner--b--principal__content__ilustracao"
        />
      </div>
      <div className="banner--b--principal__figure" />
    </section>
  );
};

export default BannerBankPrincipal;
