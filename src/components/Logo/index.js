import { jsx as _jsx, Fragment as _Fragment } from "react/jsx-runtime";
import logo_cartoes_azul from "../../assets/cartoes/logo-azul-cartoes.svg";
import logo_cartoes_branca from "../../assets/cartoes/logo-branca-cartoes.svg";
import logo_bank from "../../assets/bank/logo-azul-bank.svg";
import logo_bank_escuro from "../../assets/bank/logo-azul-escuro-bank.svg";
const Logo = ({ variant, theme }) => {
    switch (variant) {
        case "bank":
            switch (theme) {
                case "azul":
                    return (_jsx("img", { className: "logo", src: logo_bank_escuro, alt: "Logo Uauh Bank" }));
                case "azul-claro":
                    return _jsx("img", { className: "logo", src: logo_bank, alt: "Logo Uauh Bank" });
            }
            return _jsx(_Fragment, {});
        case "cartoes":
            switch (theme) {
                case "azul":
                    return (_jsx("img", { className: "logo", src: logo_cartoes_azul, alt: "Logo Uauh Cart\u00F5es" }));
                case "branca":
                    return (_jsx("img", { className: "logo", src: logo_cartoes_branca, alt: "Logo Uauh Cart\u00F5es" }));
            }
    }
};
export default Logo;
