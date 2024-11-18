import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import beneficios from "./beneficios.json";
import Figure from "../../../Figures";
const BannerCartoesBeneficios = () => {
    const cartao_alimentacao = "../../../../assets/cartoes/cartao-alimentacao.png";
    const cartao_multi = "../../../../assets/cartoes/cartao-multi.png";
    const cartao_transporte = "../../../../assets/cartoes/cartao-transporte.png";
    const cartao_trocoFrete = "../../../../assets/cartoes/cartao-troco-frete.png";
    const cardBeneficio = (beneficio) => {
        switch (beneficio) {
            case "Alimentação":
                return (_jsx("img", { className: "banner--c--beneficios__content__cartao", src: cartao_alimentacao, alt: `Imagem do Cartão ${beneficio}` }));
            case "Multi benefícios":
                return (_jsx("img", { className: "banner--c--beneficios__content__cartao", src: cartao_multi, alt: `Imagem do Cartão ${beneficio}` }));
            case "Transporte":
                return (_jsx("img", { className: "banner--c--beneficios__content__cartao", src: cartao_transporte, alt: `Imagem do Cartão ${beneficio}` }));
            case "Troco frete":
                return (_jsx("img", { className: "banner--c--beneficios__content__cartao", src: cartao_trocoFrete, alt: `Imagem do Cartão ${beneficio}` }));
        }
    };
    return (_jsx("div", { className: "banner--c--beneficios__container", id: "beneficios", children: beneficios.map((beneficio, index) => {
            return (_jsxs("section", { className: `banner--c--beneficios banner--c--beneficios--${beneficio.tema}`, children: [_jsxs("div", { className: "banner--c--beneficios__content", children: [cardBeneficio(beneficio.beneficio), _jsxs("div", { className: "banner--c--beneficios__content__texts", children: [_jsx("h1", { className: "heading--c--primary", children: beneficio.beneficio }), _jsx("ul", { children: beneficio.descricao.map((topico, index) => {
                                            return _jsx("li", { children: topico }, index);
                                        }) })] })] }), _jsx("div", { className: "banner--c--beneficios__figure banner--c--beneficios__figure--azul", children: _jsx(Figure, { theme: "azul" }) }), _jsx("div", { className: "banner--c--beneficios__figure banner--c--beneficios__figure--branca", children: _jsx(Figure, { theme: "branca" }) }), _jsx("div", { className: "banner--c--beneficios__figure banner--c--beneficios__figure--laranja", children: _jsx(Figure, { theme: "laranja" }) })] }, index));
        }) }));
};
export default BannerCartoesBeneficios;
