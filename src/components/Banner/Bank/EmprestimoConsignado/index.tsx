import undraw from "../../../../assets/bank/ilustracao-app-bank.png";

const BannerBankEmprestimoConsignado = () => {
  return (
    <section className="banner--b--emprestimo-consignado">
      <div className="banner--b--emprestimo-consignado__content">
        <div className="banner--b--emprestimo-consignado__content__left">
          <div className="banner--b--emprestimo-consignado__content__texts">
            <h1 className="heading--b--primary">Empréstimo Consignado</h1>
            <h2 className="heading--b--secondary">
              <strong>Resolva suas finanças com facilidade!</strong>
              <br /> Pague suas parcelas com desconto direto em folha, aproveite
              taxas baixas e condições especiais. Processo rápido e
              descomplicado, com a segurança de um contrato transparente.{" "}
            </h2>
          </div>
          <div className="banner--b--emprestimo-consignado__content__footer">
            <h2 className="heading--b--secondary">
              <strong>Simule pelo nosso App</strong>
            </h2>
            <div className="banner--b--emprestimo-consignado__content__buttons">
              <button className="button button--c--azul">
                Disponível no <br /> <b>Google Play</b>
              </button>
              <button className="button button--c--azul">
                Disponível no <br /> <b>Apple Store</b>
              </button>
            </div>
          </div>
        </div>
        <div className="banner--b--emprestimo-consignado__content__right">
          <img
            src={undraw}
            className="banner--b--emprestimo-consignado__content__ilustracao"
          />
        </div>
      </div>
    </section>
  );
};

export default BannerBankEmprestimoConsignado;
