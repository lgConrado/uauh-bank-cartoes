import { Route, Routes } from "react-router-dom";
import Cartoes from "../pages/Cartoes";
import Bank from "../pages/Bank";

const Rotas = () => {
  return (
    <Routes>
      <Route path="/" element={<Cartoes />}></Route>
      <Route path="/uauh-bank" element={<Bank />}></Route>
    </Routes>
  );
};

export default Rotas;
