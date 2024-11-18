import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import BannerCartoesPrincipal from "../../components/Banner/Cartoes/Principal";
import BannerCartoesBeneficios from "../../components/Banner/Cartoes/Beneficios";
import Portais from "../../components/Portais";
import BannerAppCartoes from "../../components/Banner/Cartoes/App";
import BannerCartoesRede from "../../components/Banner/Cartoes/Rede";
import { useEffect } from "react";
import BannerBankNovidade from "../../components/Banner/Bank/Novidade";
import FooterCartoes from "../../components/Footer/Cartoes";
const Cartoes = () => {
    useEffect(() => {
        const scrollToBannerPrincipal = () => {
            const element = document.getElementById("banner--c--principal");
            if (element) {
                element.scrollIntoView({ behavior: "smooth" });
            }
        };
        window.addEventListener("load", scrollToBannerPrincipal);
        return () => {
            window.removeEventListener("load", scrollToBannerPrincipal);
        };
    }, []);
    return (_jsxs(_Fragment, { children: [_jsxs("main", { className: "main", children: [_jsx(BannerCartoesPrincipal, {}), _jsx(Portais, {}), _jsxs("div", { children: [_jsx(BannerCartoesBeneficios, {}), _jsx(BannerAppCartoes, {}), _jsx(BannerCartoesRede, {}), _jsx(BannerBankNovidade, {})] })] }), _jsx(FooterCartoes, {})] }));
};
export default Cartoes;
