import { Route, Routes } from "react-router-dom";
import Cartoes from "../pages/Cartoes";
import Bank from "../pages/Bank";
import PoliticaBank from "../pages/Bank/Politica";
import PoliticaCartoes from "../pages/Cartoes/Politica";
import QuemSomosBank from "../pages/Bank/QuemSomos";
import QuemSomosCartoes from "../pages/Cartoes/QuemSomos";

const Rotas = () => {
  return (
    <Routes>
      <Route path="/cartoes" element={<Cartoes />} />
      <Route
        path="/cartoes/politica-privacidade"
        element={<PoliticaCartoes />}
      />
      <Route path="/cartoes/quem-somos" element={<QuemSomosCartoes />} />
      <Route path="/bank" element={<Bank />} />
      <Route path="/bank/politica-privacidade" element={<PoliticaBank />} />
      <Route path="/bank/quem-somos" element={<QuemSomosBank />} />
    </Routes>
  );
};

export default Rotas;
