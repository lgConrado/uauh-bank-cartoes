import { Route, Routes } from "react-router-dom";
import Cartoes from "../pages/Cartoes";
import Bank from "../pages/Bank";
import PoliticaBank from "../pages/Bank/Politica";
import DefaultBank from "../pages/Bank/Default";
import DefaultCartoes from "../pages/Cartoes/Default";
import PoliticaCartoes from "../pages/Cartoes/Politica";
import QuemSomosBank from "../pages/Bank/QuemSomos";
import QuemSomosCartoes from "../pages/Cartoes/QuemSomos";

const Rotas = () => {
  return (
    <Routes>
      <Route path="/" element={<DefaultCartoes />}>
        <Route path="" element={<Cartoes />} />
        <Route path="politica-privacidade" element={<PoliticaCartoes />} />
        <Route path="quem-somos" element={<QuemSomosCartoes />} />
      </Route>
      <Route path="/uauh-bank" element={<DefaultBank />}>
        <Route path="" element={<Bank />} />
        <Route path="politica-privacidade" element={<PoliticaBank />} />
        <Route path="quem-somos" element={<QuemSomosBank />} />
      </Route>
    </Routes>
  );
};

export default Rotas;
