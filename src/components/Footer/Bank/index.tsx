import Logo from "../../Logo";
import file from "../../../assets/bank/MH SCD-6 - CODIGO DE ÉTICA E CONDUTA - REV.0.pdf";

const FooterBank = () => {
  return (
    <footer className="footer footer--c">
      <div className="footer__content">
        <div className="footer__content__logo footer--b__logo">
          <Logo variant="bank" theme="azul-claro" />
        </div>
        <div className="footer__content__lists">
          <div className="footer__content__list">
            <h4 className="heading--b--quaternary">Sobre nós</h4>
            <ul>
              <a
                href={file}
                className="link"
                target="_blank"
                rel="noopener noreferrer"
              >
                <li className="text--cinza">Ética e Compilance</li>
              </a>
              <a
                href="/bank/politica-privacidade"
                className="link"
                target="_blank"
                rel="noopener noreferrer"
              >
                <li className="text--cinza">Política de privacidade</li>
              </a>
              <a
                href="/bank/quem-somos"
                className="link"
                target="_blank"
                rel="noopener noreferrer"
              >
                <li className="text--cinza">Quem somos?</li>
              </a>
            </ul>
          </div>
          <div className="footer__content__list">
            <h4 className="heading--b--quaternary">Serviços</h4>
            <ul>
              <a href="/" className="link">
                <li>Cartões benefícios</li>
              </a>
              <a href="/bank#conta-digital" className="link">
                <li>Conta digital</li>
              </a>
              <a href="/bank#emprestimo-consignado" className="link">
                <li>Empréstimo consignado</li>
              </a>
            </ul>
          </div>
          <div className="footer__content__list">
            <h4 className="heading--b--quaternary">Navegação</h4>
            <ul>
              <a href="#banner--beneficios" className="link">
                <li>Benefícios</li>
              </a>
              <a href="#banner--conta-digital" className="link">
                <li>Conta digital</li>
              </a>
              <a href="#banner--emprestimo-consignado" className="link">
                <li>Empréstimo consignado</li>
              </a>
            </ul>
          </div>
          <div className="footer__content__list">
            <h4 className="heading--b--quaternary">Fale conosco</h4>
            <ul>
              <li className="text--cinza">0800 360 9000</li>
              <li className="text--cinza">+55 (44) 9.9185-8651</li>
              <li className="text--cinza">contato@uauh.com.br</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="footer__banner footer--b__banner">
        Copyright &copy; 2024. Todos os direitos reservados.
        <br />
        <b>MH SOCIEDADE DE CREDITO DIRETO SA - CNPJ: 51.834.986/0001-36</b>
      </div>
    </footer>
  );
};

export default FooterBank;
