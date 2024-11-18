import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import beneficios from "./beneficios.json";
const BannerBankBeneficios = () => {
    const bancoParceiro = "/assets/bank/ilustracao-banco-parceiro.jpg";
    const semBurocracia = "/assets/bank/ilustracao-sem-burocracia.png";
    const equipeComprometida = "/assets/bank/ilustracao-equipe-comprometida.jpg";
    const solucoesComprometidas = "/assets/bank/ilustracao-solucoes-financeiras.jpg";
    const cardBeneficio = (id) => {
        switch (id) {
            case "banco-parceiro":
                return (_jsx("img", { src: bancoParceiro, className: "banner--b--beneficios__content__card__ilustracao" }));
            case "sem-burocracia":
                return (_jsx("img", { src: semBurocracia, className: "banner--b--beneficios__content__card__ilustracao" }));
            case "equipe-comprometida":
                return (_jsx("img", { src: equipeComprometida, className: "banner--b--beneficios__content__card__ilustracao" }));
            case "solucoes-financeiras":
                return (_jsx("img", { src: solucoesComprometidas, className: "banner--b--beneficios__content__card__ilustracao" }));
        }
    };
    return (_jsx("section", { className: "banner--b--beneficios", id: "banner--beneficios", children: _jsx("div", { className: "banner--b--beneficios__content", children: beneficios.map((beneficio, index) => {
                return (_jsxs("div", { className: "banner--b--beneficios__content__card", children: [cardBeneficio(beneficio.id), _jsx("p", { dangerouslySetInnerHTML: {
                                __html: beneficio.conteudo,
                            }, className: "banner--b--beneficios__content__card__conteudo" })] }, index));
            }) }) }));
};
export default BannerBankBeneficios;
