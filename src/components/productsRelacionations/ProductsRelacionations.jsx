import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import dados from '../../components/produto/relacionados.json';

const Container = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    gap: 1.5rem;
    max-width: 1140px;
    margin: 0 auto;
    padding: 1rem;

    @media (max-width: 768px) {
        grid-template-columns: 1fr;
    }
    @media (min-width: 769px) and (max-width: 1024px) {
        grid-template-columns: 1fr 1fr;
    }
`;

const TitleSection = styled.h2`
    text-align: left;
    font-size: 1.6rem;
    font-weight: bold;
    line-height: 120%;
    color: rgb(16, 16, 96);
    margin-bottom: 1rem;
`;

const Card = styled.div`
    border-radius: 8px;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    box-shadow: 0 4px 8px rgba(0,0,0,0.1);
    transition: transform 0.2s ease-in-out;
    cursor:point;

    &:hover {
        transform: translateY(-5px);
    }

    & img {
        width: 100%;
        height: 200px;
        object-fit: cover;
    }
`;

const BodyCard = styled.div`
    padding: .8rem 1rem;
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;

const TitleCard = styled.h4`
    font-size: 1.25rem;
    font-weight: bold;
    line-height: 120%;
    color: rgb(16, 16, 96);
    margin-bottom: 0.5rem;
`;

const DescriptionCard = styled.p`
    font-size: 0.95rem;
    font-weight: 400;
    line-height: 150%;
    color: #555;
    margin-bottom: 1rem;
    text-align: left;
`;

const Btn = styled.button`
    padding: .6rem 1.5rem;
    color: white;
    background: orange;
    border-radius: 5px;
    border: none;
    cursor: pointer;
    width: calc(100% - 2rem);
    margin: 1rem;
    align-self: center;
    font-size: 1rem;
    font-weight: bold;
    transition: background-color 0.2s ease;

    &:hover {
        background-color: darkorange;
    }
`;

export function ProductsRelacionations() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth' // Animação suave
      });
    return (
        <div className="container">
            <TitleSection>Produtos Relacionados</TitleSection>
            <div> 
            </div>

            <Container>
                {dados.map((item) => (
                    <Link to={`/produto/${item.id}`}>
                    <Card>
                        <div><img src={item.imagem} alt={item.nome} /></div>
                        <BodyCard>
                            <TitleCard>{item.nome}</TitleCard>
                            <DescriptionCard>{item.descricao}</DescriptionCard>
                        </BodyCard>
                        <div><Btn>Comprar</Btn></div>
                    </Card>
                    </Link>
                ))}

            </Container>

        </div>
    )
}
