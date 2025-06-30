import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "../pages/Home";
import { Produtos } from "../pages/Produtos";
import { Erro } from "../pages/Erro";
import { Produto } from "../components/produto/Produto";
import { NewUser } from "../pages/NewUser";
  
export const Paths = () => {
  return (
    <>
    <BrowserRouter>
      <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/produtos" element={<Produtos/>}/>
      <Route path="/produto/:id" element={<Produto/>}/>
       <Route path="/NewUser" element={<NewUser/>}/>
      <Route path="*" element={<Erro/>}/>
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default Paths;