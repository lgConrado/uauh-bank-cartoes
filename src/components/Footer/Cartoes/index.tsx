import Logo from "../../Logo";

const Footer = () => {
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
              <li className="text--cinza">App</li>
              <li className="text--cinza">Benefícios</li>
              <li className="text--cinza">Conta digital</li>
              <li className="text--cinza">Rede de aceitação</li>
              <li className="text--cinza">Portais de acesso</li>
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
        <b>MH Administradora de Cartões Ltda - CNPJ: 00.000.000/0000-00</b>
      </div>
    </footer>
  );
};

export default Footer;
