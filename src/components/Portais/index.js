import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import portais from "./portais.json";
const coverCard = (portal) => {
    const portal_beneficio = "../../assets/cartoes/icone-portal-beneficio.png";
    const portal_credenciado = "../../assets/cartoes/icone-portal-credenciado.png";
    const portal_frota = "../../assets/cartoes/icone-portal-frota.png";
    const portal_usuario = "../../assets/cartoes/icone-portal-usuario.png";
    switch (portal) {
        case "Portal Benefício":
            return (_jsx("img", { src: portal_beneficio, alt: `Capa ${portal}`, className: "portais__card__header__cover" }));
        case "Portal Credenciado":
            return (_jsx("img", { src: portal_credenciado, alt: `Capa ${portal}`, className: "portais__card__header__cover" }));
        case "Portal Frota":
            return (_jsx("img", { src: portal_frota, alt: `Capa ${portal}`, className: "portais__card__header__cover" }));
        case "Portal Usuário":
            return (_jsx("img", { src: portal_usuario, alt: `Capa ${portal}`, className: "portais__card__header__cover" }));
    }
};
const Portais = () => {
    return (_jsx("section", { className: "portais", id: "portais", children: _jsx("div", { className: "portais__content", children: portais.map((portal, index) => {
                return (_jsxs("div", { className: "portais__card", children: [_jsxs("div", { className: "portais__card__header", children: [coverCard(portal.portal), _jsx("h3", { className: "heading--c--tertiary", children: portal.portal })] }), _jsx("p", { className: "text--cinza portais__card__descricao", children: portal.descricao }), _jsx("div", { className: "portais__card__button", children: _jsx("a", { href: portal.link, target: "_blank", rel: "noopener noreferrer", style: { textDecoration: "none" }, children: _jsx("button", { className: "button button--c--laranja", children: "Acessar" }) }) })] }, index));
            }) }) }));
};
export default Portais;
