import Logo from "../../Logo";

const FooterCartoes = () => {
  return (
    <footer className="footer--c">
      <div className="footer--c__content">
        <div className="footer--c__content__logo">
          <Logo variant="cartoes" theme="azul" />
        </div>
        <div className="footer--c__content__lists">
          <div className="footer--c__content__list">
            <h4 className="heading--quaternary">Sobre nós</h4>
            <ul>
              <li className="text--cinza">Ética e Compilance</li>
              <li className="text--cinza">Política de privacidade</li>
              <li className="text--cinza">Quem somos?</li>
            </ul>
          </div>
          <div className="footer--c__content__list">
            <h4 className="heading--quaternary">Serviços</h4>
            <ul>
              <a href="#banner--c--principal" className="link">
                <li>Cartões benefícios</li>
              </a>
              <a href="" className="link">
                <li>Conta digital</li>
              </a>
            </ul>
          </div>
          <div className="footer--c__content__list">
            <h4 className="heading--quarternary">Navegação</h4>
            <ul>
              <a href="#portais" className="link">
                <li>Acesso aos portais</li>
              </a>
              <a href="#banner--c--app" className="link">
                <li>App</li>
              </a>
              <a href="#banner--c--beneficios" className="link">
                <li>Benefícios</li>
              </a>
              <a href="#banner--c--rede" className="link">
                <li>Rede de aceitação</li>
              </a>
            </ul>
          </div>
          <div className="footer--c__content__list">
            <h4 className="heading--quaternary">Fale conosco</h4>
            <ul>
              <li className="text--cinza">0800 360 9000</li>
              <li className="text--cinza">+55 (44) 9.9185-8651</li>
              <li className="text--cinza">contato@uauh.com.br</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="footer--c__banner">
        Copyright &copy; 2024. Todos os direitos reservados.
        <br />
        <b>MH Administradora de Cartões Ltda - CNPJ: 34.180.727/0001-10</b>
      </div>
    </footer>
  );
};

export default FooterCartoes;
