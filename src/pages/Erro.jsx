import { ScrollPage } from "../components/scrollPage/ScrollPage";
import Layout from "./Layout";
import {Link} from 'react-router-dom';
 
export const Erro = () => {
  return (
    <>

    <ScrollPage/>
      <Layout>
        <h2 className="title__erro">
          Ops! Página não localizada!
        </h2>

        <img src='/error404.png' alt="Imagem de erro" className="image__erro"/>


        <Link to="/" className="btn__back"> Voltar para página inicial</Link>
      </Layout>
    </>
  );
};