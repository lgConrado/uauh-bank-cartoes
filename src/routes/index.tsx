import { Route, Routes } from "react-router-dom";

const Rotas = () => {
  return (
    <Routes>
      <Route path="/" element={<h1>Olá mundo</h1>}></Route>
    </Routes>
  );
};

export default Rotas;
