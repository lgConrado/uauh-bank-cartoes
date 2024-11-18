import { jsx as _jsx } from "react/jsx-runtime";
const Figure = ({ theme }) => {
    switch (theme) {
        case "azul":
            return _jsx("div", { className: "figure figure--azul" });
        case "branca":
            return _jsx("div", { className: "figure figure--branca" });
        case "laranja":
            return _jsx("div", { className: "figure figure--laranja" });
    }
};
export default Figure;
