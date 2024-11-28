import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Route, Routes } from "react-router-dom";
import Cartoes from "../pages/Cartoes";
import Bank from "../pages/Bank";
import PoliticaBank from "../pages/Bank/Politica";
import PoliticaCartoes from "../pages/Cartoes/Politica";
import QuemSomosBank from "../pages/Bank/QuemSomos";
import QuemSomosCartoes from "../pages/Cartoes/QuemSomos";
const Rotas = () => {
    return (_jsxs(Routes, { children: [_jsx(Route, { path: "/", element: _jsx(Cartoes, {}) }), _jsx(Route, { path: "/politica-privacidade", element: _jsx(PoliticaCartoes, {}) }), _jsx(Route, { path: "/quem-somos", element: _jsx(QuemSomosCartoes, {}) }), _jsx(Route, { path: "/bank", element: _jsx(Bank, {}) }), _jsx(Route, { path: "/bank/politica-privacidade", element: _jsx(PoliticaBank, {}) }), _jsx(Route, { path: "/bank/quem-somos", element: _jsx(QuemSomosBank, {}) }), _jsx(Route, { path: "*", element: _jsx("div", { children: "404 - P\u00E1gina n\u00E3o encontrada" }) })] }));
};
export default Rotas;
