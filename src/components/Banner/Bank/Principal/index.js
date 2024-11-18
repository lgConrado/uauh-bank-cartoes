import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import Logo from "../../../Logo";
import undraw from "../../../../assets/bank/ilustracao-principal.jpg";
const BannerBankPrincipal = () => {
    return (_jsxs("section", { className: "banner--b--principal", id: "banner--b--principal", children: [_jsx("div", { className: "banner--b--principal__logo", children: _jsx(Logo, { variant: "bank", theme: "azul" }) }), _jsxs("div", { className: "banner--b--principal__content", children: [_jsxs("div", { className: "banner--b--principal__content__texts", children: [_jsxs("h1", { className: "heading--b--primary", children: [_jsxs("span", { children: ["Bem-vindo(a) ", _jsx("br", {}), "ao"] }), " ", "UAUH Bank!"] }), _jsxs("h2", { className: "heading--b--secondary", children: ["Sinta a diferen\u00E7a de ter um ", _jsx("br", {}), "banco que ", _jsx("b", { children: "entenda as suas necessidades." })] })] }), _jsx("img", { src: undraw, className: "banner--b--principal__content__ilustracao" })] }), _jsx("div", { className: "banner--b--principal__figure" })] }));
};
export default BannerBankPrincipal;
