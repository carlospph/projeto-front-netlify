import Layout from "../../pages/Layout";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import produtos from "./dados.json";

import styled from "styled-components";
import { Titulo } from "./Titulo";
import { ProductsRelacionations } from "../productsRelacionations/ProductsRelacionations";

const Container = styled.div`
  border-radius: 5px;
  text-align: center;
  padding: 1.5rem 1rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
  margin: 0 auto;
  max-width: 1200px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const ContainerIlustration = styled.div``;

const Ilustration = styled.div`
  box-shadow: 0 0px 20px 0px #f2f2f2;
  border-radius: 5px;
  height: 480px;
  width: 100%;
  overflow: hidden;

  & img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const Thumbnails = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1rem;
  margin: 1rem;

  & img {
    width: 100%;
    height: 80%;
    object-fit: cover;
    border: 2px solid green;
    border-radius: 6px;
    padding: 5px;
    cursor: pointer;
    transition: 0.3s ease-in-out;
  }

  & img:hover {
    transition: 0.3s ease-in-out;
  }
`;

const Datas = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
  align-items: start;
`;

const Title = styled.h2`
  font-size: 2.4rem;
  line-height: 100%;
  color: rgb(16, 16, 96);
  text-align: left;
`;

const Avaliation = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  gap: 10px;

  & i {
    color: var(--warning);
  }

  & span {
    color: gray;
    font-size: 0.9rem;
    font-weight: 300;
    line-height: 100%;
    text-transform: capitalize;
  }
`;

const Nota = styled.div`
  background: var(--warning);
  padding: 3px 5px;
  border-radius: 4px;

  & i {
    color: var(--white);
    font-size: 13px;
    margin-right: 5px;
  }

  & span {
    color: var(--white);
  }
`;

const Ref = styled.span`
  color: gray;
  font-size: 0.7rem;
  font-weight: 300;
  line-height: 100%;
  text-transform: capitalize;
`;

const ContainerPrice = styled.div`
  display: flex;
  align-items: end;
  gap: 1rem;
`;

const Price = styled.span`
  font-size: 1.8rem;
  font-weight: bold;
  line-height: 100%;
  color: rgb(16, 16, 96);
`;

const OldPrice = styled.span`
  color: gray;
  font-size: 1.2rem;
  font-weight: bold;
  line-height: 100%;
  text-decoration: line-through;
  margin-left: 0;
`;

const Description = styled.p`
  font-size: 0.9rem;
  color: gray;
  line-height: 130%;
  color: rgb(16, 16, 96);
  font-weight: 400;
  text-align: left;
`;

const Sizes = styled.div`
  display: flex;
  gap: 10px;
`;

const BtnSize = styled.button`
  border: 0;
  border-radius: 5px;
  padding: 0.5rem 1rem;
`;

const ContainerAdd = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const Dflex = styled.div`
  display: flex;
  gap: 10px;
  justify-content: start;
`;

const Colores = styled.ul` 
  display:flex;
  gap:1rem;
  padding:0;
  margin:0;

  & li{
  color:transparent;
      border:1px solid gray;
   background:rgb(16,16,96);
    width:35px;
    height:35px;
    border-radius: 50%;
    transition: .3s all;
  }

  & li:hover {
  border:2px solid pink;
  cursor:pointer;
  transition:.3s all;
}

  & li:nth-child(1){
    background:black;
  }

   & li:nth-child(2){
    background:#ccc;
  }

     & li:nth-child(3){
    background:white;
  }

   & li:nth-child(4){
     background:brown;
  }

     & li:nth-child(5){
    }
`;

const BtnColor = styled.button`
  border-radius: 5px;
  border: 0;
  padding: 0.5rem 1rem;
`;

const Buy = styled.button`
  border: 0;
  border-radius: 5px;
  padding: 0.5rem 1rem;
  background-color: var(--primary);
  color: var(--white);
  cursor: pointer;
`;

export const Produto = () => {
  const params = useParams();
  const produto = produtos.find((p) => p.id === params.id);

  const [imageUrl, setImageUrl] = useState(produto ? produto.imageUrl : "");

  useEffect(() => {
    if (produto) {
      setImageUrl(produto.imageUrl);
    }
  }, [produto]);

  const handleThumbnailClick = (newImageUrl) => {
    setImageUrl(newImageUrl);
  };

  if (!produto) {
    return (
      <Layout>
        <h2>Produto não localizado.</h2>
        <p>Verifique o ID do produto ou se ele existe na sua lista de dados.</p>
      </Layout>
    );
  }

  return (
    <>
      <Layout>
        <Container>
          <ContainerIlustration>
            <Ilustration>
              <img src={imageUrl} alt={produto.title} />
            </Ilustration>

            <Thumbnails>
              {produto.fotosAdd.map((foto) => {
                return (
                  <img
                    key={foto}
                    src={foto}
                    alt={produto.title}
                    onClick={() => handleThumbnailClick(foto)}
                  />
                );
              })}
            </Thumbnails>
          </ContainerIlustration>
          <Datas>
            <Title>{produto.title}</Title>

            <Avaliation>
              <div>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-regular fa-star"></i>
                <i className="fa-regular fa-star"></i>
              </div>

              <Nota>
                <i className="fa-solid fa-star"></i>
                <span>5.6</span>
              </Nota>

              <span>(12 avaliações)</span>
            </Avaliation>

            <Ref>{produto.id}</Ref>

            <Description>{produto.description}</Description>

            <ContainerPrice>
              <Price>{produto.price}</Price>
              <OldPrice>{produto.oldPrice}</OldPrice>
            </ContainerPrice>

            <Sizes>
              <ContainerAdd>
                <Titulo labelTitle="Tamanhos" />
                <Dflex>
                  {produto.sizes.map((size) => {
                    return <BtnSize key={size}>{size}</BtnSize>;
                  })}
                </Dflex>
              </ContainerAdd>
            </Sizes>

            <ContainerAdd>
              <Titulo labelTitle="Cores" />
              <Colores>
                {produto.colors.map((color) => {
                  return (
                    <li key={color}> {color} </li>
                  );
                })}
              </Colores>
            </ContainerAdd>

            <ContainerAdd>
              <Buy>Comprar</Buy>
            </ContainerAdd>
          </Datas>
        </Container>

        <ProductsRelacionations />

      </Layout>
    </>
  );
};
