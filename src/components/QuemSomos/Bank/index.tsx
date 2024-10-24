import Logo from "../../Logo";

const QuemSomosUauhBank = () => {
  return (
    <section className="politica">
      <div className="politica__logo">
        <Logo theme="azul-claro" variant="bank" />
      </div>
      <article>
        <span>
          <h1>Missão</h1>
          <p>
            Atender as necessidades financeiras de nossos clientes, com a
            entrega de soluções flexíveis e adaptadas à sua realidade, sendo
            facilitador no processo de aquisição de recursos e serviços para as
            pessoas jurídicas e físicas com transparência, qualidade e
            atendimento de excelência.
          </p>
        </span>
        <span>
          <h1>Visão</h1>
          <p>
            Ser reconhecida como uma das melhores instituições financeiras do
            mercado, sendo referência como agente facilitador na obtenção de
            crédito e soluções flexíveis
          </p>
        </span>
        <span>
          <h1>Valores</h1>
          <ul>
            <li>Humanização no relacionamento com os clientes</li>
            <li>Relacionamento de parceria com os clientes</li>
            <li>
              Conhecer o cliente, estar em contato com ele - saber do resultado
              dele
            </li>
            <li>Melhor feito do que perfeito</li>
            <li>Transparência</li>
          </ul>
        </span>
      </article>
    </section>
  );
};

export default QuemSomosUauhBank;
