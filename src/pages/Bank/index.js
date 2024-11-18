import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import BannerBankBeneficios from "../../components/Banner/Bank/Beneficios";
import BannerBankContaDigital from "../../components/Banner/Bank/ContaDigital";
import BannerBankEmprestimoConsignado from "../../components/Banner/Bank/EmprestimoConsignado";
import BannerBankPrincipal from "../../components/Banner/Bank/Principal";
import { useEffect } from "react";
import FooterBank from "../../components/Footer/Bank";
const Bank = () => {
    useEffect(() => {
        const scrollToBannerPrincipal = () => {
            const element = document.getElementById("banner--b--principal");
            if (element) {
                element.scrollIntoView({ behavior: "smooth" });
            }
        };
        window.addEventListener("load", scrollToBannerPrincipal);
        return () => {
            window.removeEventListener("load", scrollToBannerPrincipal);
        };
    }, []);
    return (_jsxs(_Fragment, { children: [_jsx("main", { className: "main", children: _jsxs("div", { children: [_jsx(BannerBankPrincipal, {}), _jsx(BannerBankContaDigital, {}), _jsx(BannerBankBeneficios, {}), _jsx(BannerBankEmprestimoConsignado, {})] }) }), _jsx(FooterBank, {})] }));
};
export default Bank;
