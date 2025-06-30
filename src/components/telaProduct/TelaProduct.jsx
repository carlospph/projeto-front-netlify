import { useParams } from 'react-router-dom';
import produtos from './dados.json';
import { ProductsRelacionations } from '../productsRelacionations/ProductsRelacionations';
import styled from 'styled-components';

const RowOne = styled.div`
    padding: 1rem;
    gap: 1.5rem;
    margin: 0;
    display: grid;
    grid-template-columns: 1fr 1fr;
    max-width: 1140px;
    margin: 0 auto;
    padding:1rem;

    @media (max-width: 768px) {
        grid-template-columns: 1fr;
    }
`;

const RowTwo = styled.div`
    max-width: 1140px;
    margin: 0 auto;
    padding:2rem 1rem;

    @media (max-width: 768px) {
        grid-template-columns: 1fr;
    }
`;

const ContainerScreen = styled.div`
    background-color:white;
    border:7px solid red;
    padding:1rem;
`;

const Buttons = styled.div`
    display: flex;
    gap: .5em;
    margin: 0;

    & button:first-child {
        background-color: transparent;
        border: 2px solid orange;
    }

    & button:last-child {
        background-color: transparent;
        border: 2px solid green;
    }
`;

const Btn = styled.button`
    border-radius: 5px;
    cursor: pointer;
    padding: 0.2rem;
    border: 1px solid #ccc;
    background-color: #fff;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const ThumbnailImage = styled.img`
    width: 60px;
    height: 60px;
    object-fit: cover;
    border-radius: 3px;
    display: block;
`;


const Figure = styled.div`
    border-radius: 6px;
    overflow: hidden;
    height: 502px;
    width: 100%;

    & img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
`;

const ContainerDatas = styled.div`
    padding: 0 1rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;

    & h1 {
        font-size: 2.4rem;
        line-height: 100%;
        color: rgb(16, 16, 96);
    }
`;

const AvaliationUser = styled.div`
    align-items: center;
    display: flex;
    gap: .5em;
    border:2px solid red;
    & i {
        color: orange;
        display: block;
    }

    & span {
        color: orange;
        font-weight: bold;
    }
`;

const NotaAvaliation = styled.div`
    background: orange;
    padding: .5rem;
    border-radius: 5px;
    display: flex;
    align-items: center;
    gap: .5em;

    & i {
        color: white;
    }

    & span {
        color: white;
        font-weight: bold;
    }
`;

const NumberAvaliation = styled.div`
    color: gray;
    font-size: 1.2rem;
    font-weight: bold;
    line-height: 100%;
`;

const ContainerPrice = styled.div`
    display: flex;
    align-items: end;
    gap: 1rem;
    border:1px solid red;
`;

const Price = styled.span`
    font-size: 28px;
    font-weight: bold;
    line-height: 100%;
    color: rgb(16, 16, 96);
`;

const PriceOld = styled.span`
    color: gray;
    font-size: 20px;
    font-weight: bold;
    line-height: 100%;
    text-decoration: line-through;
    margin-left: 0;
`;

const Description = styled.div`
    margin-top: 0;

    & h4 {
        font-size: 1.4rem;
        font-weight: bold;
        line-height: 100%;
        color: rgb(16, 16, 96);
        margin-bottom: 0.5rem;
    }

    & p{
        font-size: .9;
        line-height: 130%;
        color: rgb(16, 16, 96);
        font-weight: 400;
    }
`;

const Size = styled.div`
    margin-top: 0;
    display: flex;
    flex-direction: column;

    & h4 {
        font-size: 1.4rem;
        font-weight: bold;
        line-height: 100%;
        color: rgb(16, 16, 96);
        margin-bottom: 0.5rem;
    }

    & div {
        display: flex;
        gap: 1rem;
    }

    & button {
        border: 1px solid #ccc;
        border-radius: 6px;
        padding: 0;
        background-color: white;
        cursor: pointer;
        font-size: 1.1rem;
        min-width: 45px;
        text-align: center;
        transition: background-color 0.2s, color 0.2s;

        &:hover {
            background-color: #eee;
        }
        &:active {
            background-color: #ddd;
        }
    }
`;

const Color = styled.div`
    margin-top: 0;
    display: flex;
    flex-direction: column;

    & h4 {
        font-size: 1.4rem;
        font-weight: bold;
        line-height: 100%;
        color: rgb(16, 16, 96);
        margin-bottom: 0.5rem;
    }

    & div {
        display: flex;
        gap: 1rem;
    }

    & button {
        border: 1px solid #ccc;
        border-radius: 6px;
        padding: 0;
        background-color: white;
        cursor: pointer;
        font-size: 1.1rem;
        min-width: 45px;
        text-align: center;
        transition: background-color 0.2s, color 0.2s;

        &:hover {
            background-color: #eee;
        }
        &:active {
            background-color: #ddd;
        }
    }
`;

const Comprar = styled.button`
    border: 1px solid orange;
    border-radius: 6px;
    padding: 0;
    background-color: white;
    cursor: pointer;
    font-size: 1.1rem;
`;

export function TelaProduct() {
    const params = useParams();
    const produto = produtos.find((produto) => { return produto.id === params.id });

    if (!produto) {
        <h2>Produto não localizado</h2>
    }

    const [UrlImage, setUrlImage] = useState('https://images.pexels.com/photos/6481840/pexels-photo-6481840.jpeg');

    const thumbnail1Url = 'https://images.pexels.com/photos/9645566/pexels-photo-9645566.jpeg';
    const thumbnail2Url = 'https://images.pexels.com/photos/6481840/pexels-photo-6481840.jpeg';

    const thumbnail3Url = 'https://images.unsplash.com/photo-1695753648663-72cc4dd99449?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3Dhttps://images.pexels.com/photos/6481840/pexels-photo-6481840.jpeg';


    function handle1() {
        setUrlImage(thumbnail1Url);
    }

    function handle2() {
        setUrlImage(thumbnail2Url);
    }

    function handle3() {
        setUrlImage(thumbnail3Url);
    }

    return (
        <div style={{background: 'white'}}>
            <RowOne>
                <ContainerScreen>
                    <Figure>
                        <img src={UrlImage} alt="imagem principal" />
                    </Figure>

                    <Buttons>
                        <Btn onClick={handle1}>
                            <ThumbnailImage src={thumbnail1Url} alt="Thumbnail Orange" />
                        </Btn>

                        <Btn onClick={handle2}>
                            <ThumbnailImage src={thumbnail2Url} alt="Thumbnail Verde" />
                        </Btn>

                        <Btn onClick={handle3}>
                            <ThumbnailImage src={thumbnail3Url} alt="Thumbnail Verde" />
                        </Btn>
                    </Buttons>
                </ContainerScreen>

                <ContainerDatas>
                    <h1>{produto.title}</h1>
                    <p>
                        Ref.: Tênis Nike - x876
                    </p>
                    <AvaliationUser>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-regular fa-star"></i>
                        <i className="fa-regular fa-star"></i>

                        <NotaAvaliation>
                            <i className="fa-solid fa-star"></i>
                            <span>6.5</span>
                        </NotaAvaliation>

                        <NumberAvaliation>
                            (90 avaliações)
                        </NumberAvaliation>
                    </AvaliationUser>

                    <ContainerPrice>
                        <Price>
                            {produto.price}
                        </Price>

                        <PriceOld>
                            {produto.priceOld}
                        </PriceOld>
                    </ContainerPrice>

                    <Description>
                        <h4>Descrição do produto</h4>
                        <p>
                            {produto.description}
                        </p>
                    </Description>

                    <Size>
                        <h4>Tamanho</h4>
                        <div>
                            <button>36</button>
                            <button>37</button>
                            <button>38</button>
                            <button>39</button>
                            <button>40</button>
                        </div>
                    </Size>

                    <Color>
                        <h4>Cor</h4>
                        <div>
                            <button>Verde</button>
                            <button>Azul</button>
                            <button>Preto</button>
                        </div>
                    </Color>

                    <Comprar>
                        Comprar
                    </Comprar>
                </ContainerDatas>
            </RowOne>

            <RowTwo>

                <ProductsRelacionations/>

            </RowTwo>
        </div>
    );
}
