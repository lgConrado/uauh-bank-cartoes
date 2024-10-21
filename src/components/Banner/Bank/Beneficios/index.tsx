import beneficios from "./beneficios.json";
import banco_parceiro from "../../../../assets/bank/ilustracao-banco-parceiro.jpg";
import sem_burocracia from "../../../../assets/bank/ilustracao-sem-burocracia.png";
import equipe_comprometida from "../../../../assets/bank/ilustracao-equipe-comprometida.jpg";
import solucoes_comprometidas from "../../../../assets/bank/ilustracao-solucoes-financeiras.jpg";

interface IBeneficio {
  id: string;
  conteudo: string;
}

const BannerBankBeneficios = () => {
  const cardBeneficio = (id: string) => {
    switch (id) {
      case "banco-parceiro":
        return (
          <img
            src={banco_parceiro}
            className="banner--b--beneficios__content__card__ilustracao"
          />
        );
      case "sem-burocracia":
        return (
          <img
            src={sem_burocracia}
            className="banner--b--beneficios__content__card__ilustracao"
          />
        );
      case "equipe-comprometida":
        return (
          <img
            src={equipe_comprometida}
            className="banner--b--beneficios__content__card__ilustracao"
          />
        );
      case "solucoes-financeiras":
        return (
          <img
            src={solucoes_comprometidas}
            className="banner--b--beneficios__content__card__ilustracao"
          />
        );
    }
  };
  return (
    <section className="banner--b--beneficios" id="banner--beneficios">
      <div className="banner--b--beneficios__content">
        {beneficios.map((beneficio: IBeneficio, index) => {
          return (
            <div className="banner--b--beneficios__content__card" key={index}>
              {cardBeneficio(beneficio.id)}
              <p
                dangerouslySetInnerHTML={{
                  __html: beneficio.conteudo,
                }}
                className="banner--b--beneficios__content__card__conteudo"
              />
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default BannerBankBeneficios;
