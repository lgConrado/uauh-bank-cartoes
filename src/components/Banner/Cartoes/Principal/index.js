import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import Figure from "../../../Figures";
import Logo from "../../../Logo";
import undraw from "../../../../assets/cartoes/ilustracao-cartoes.png";
const BannerCartoesPrincipal = () => {
    return (_jsxs("section", { className: "banner--c--principal", id: "banner--c--principal", children: [_jsxs("div", { className: "banner--c--principal__content", children: [_jsx("div", { className: "banner--c--principal__content__logo", children: _jsx(Logo, { variant: "cartoes", theme: "branca" }) }), _jsx("img", { className: "banner--c--principal__content__ilustracao", src: undraw, alt: "Ilustra\u00E7\u00E3o de cart\u00F5es" }), _jsxs("div", { className: "banner--c--principal__content__texts", children: [_jsx("h1", { className: "heading--c--primary", children: "Benef\u00EDcios que v\u00E3o te surpreender!" }), _jsx("h2", { className: "heading--c--secondary", children: "Descubra como nossos produtos podem transformar o ambiente corporativo, garantindo satisfa\u00E7\u00E3o e produtividade." })] })] }), _jsx("div", { className: "banner--c--principal__figure banner--c--principal__figure--azul", children: _jsx(Figure, { theme: "azul" }) }), _jsx("div", { className: "banner--c--principal__figure banner--c--principal__figure--branca", children: _jsx(Figure, { theme: "branca" }) }), _jsx("div", { className: "banner--c--principal__figure banner--c--principal__figure--laranja", children: _jsx(Figure, { theme: "laranja" }) })] }));
};
export default BannerCartoesPrincipal;
