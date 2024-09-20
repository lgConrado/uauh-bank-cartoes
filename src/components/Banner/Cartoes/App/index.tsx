import undraw from "../../../../assets/cartoes/ilustracao-app.png";

const BannerAppCartoes = () => {
  return (
    <section className="banner--c--app" id="banner--c--app">
      <div className="banner--c--app__content">
        <div className="banner--c--app__content__left">
          <img src={undraw} className="banner--c--app__content__left__ilustracao"/>
        </div>
        <div className="banner--c--app__content__right">
          <div className="banner--c--app__content__right__texts">
            <h1 className="heading--c--primary">Baixe nosso App</h1>
            <h2 className="heading--c--secondary">
              Baixe agora mesmo o app e entenda porque somos UAUH, extrato,
              saldo, busca de estabelecimentos mais próximos entre outros.
            </h2>
          </div>
          <div className="banner--c--app__content__right__buttons">
            <button className="button button--c--azul">
              Disponível no <br /> <b>Google Play</b>
            </button>
            <button className="button button--c--azul">
              Disponível no <br /> <b>Apple Store</b>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BannerAppCartoes;
