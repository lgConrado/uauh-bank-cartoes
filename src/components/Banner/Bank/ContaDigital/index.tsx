import undraw from "../../../../assets/bank/ilustracao-conta-digital.png";

const BannerBankContaDigital = () => {
  return (
    <section className="banner--b--conta-digital">
      <div className="banner--b--conta-digital__content">
        <img
          src={undraw}
          className="banner--b--conta-digital__content__ilustracao"
        />
        <div className="banner--b--conta-digital__content__texts">
          <h1 className="heading--b--primary">Conta digital</h1>
          <h2 className="heading--b--secondary">
            Experimente a <b>simplicidade e a segurança</b> de ter seu banco
            digital sempre à mão.
          </h2>
          <div className="banner--b--conta-digital__content__button">
            <button className="button button--b--primary">Acessar conta</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BannerBankContaDigital;