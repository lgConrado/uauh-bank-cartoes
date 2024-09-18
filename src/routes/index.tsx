import { Route, Routes } from "react-router-dom";
import Cartoes from "../pages/Cartoes";

const Rotas = () => {
  return (
    <Routes>
        <Route path="/cartoes" element={<Cartoes/>}></Route>
    </Routes>
  );
};

export default Rotas;
