import { Route, Routes } from "react-router-dom";
import Cartoes from "../pages/Cartoes";
import Bank from "../pages/Bank";
import PoliticaBank from "../pages/Bank/Politica";
import PoliticaCartoes from "../pages/Cartoes/Politica";
import QuemSomosBank from "../pages/Bank/QuemSomos";
import QuemSomosCartoes from "../pages/Cartoes/QuemSomos";
import Default from "../pages/Default";

const Rotas = () => {
  return (
    <Routes>
      <Route path="/" element={<Default />}>
        <Route path="" element={<Cartoes />} />
        <Route
          path="politica-privacidade"
          element={<PoliticaCartoes />}
        />
        <Route path="quem-somos" element={<QuemSomosCartoes />} />
        <Route path="bank" element={<Bank />} />
        <Route path="bank/politica-privacidade" element={<PoliticaBank />} />
        <Route path="bank/quem-somos" element={<QuemSomosBank />} />
      </Route>
    </Routes>
  );
};

export default Rotas;
