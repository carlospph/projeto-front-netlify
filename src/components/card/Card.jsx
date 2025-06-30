 import { ButtonDefault } from "../button/ButtonDefault";
import styles from "./Card.module.css";
 import { Link } from "react-router-dom";
 
 export const Card = () => {
	const products = [
    {
        id: "prod1001",
        imageUrl: "/tenis1.png",
        altText: "Tênis Esportivo",
        discount: "30% off",
        title: "Tênis",
        description: "K-Swiss V8 - Masculino",
        oldPrice: "R$200,00",  
        price: "R$140,00"   
    },
    {
        id: "prod1002",
        imageUrl: "/tenis2.png",
        altText: "Tênis Casual",
        discount: "25% off",
        title: "Tênis",
        description: "Nike Air Max - Feminino",
        oldPrice: "R$180,00", 
        price: "R$135,00"   
    },
    {
        id: "prod1003",
        imageUrl: "/fonede.png",
        altText: "Headset fone de ouvido",
        title: "Headset",
        description: "Headset fone de ouvido",
        oldPrice: "R$220,00",
        price: "R$170,99",
        discount: '20% off',
    },
    {
        id: "prod1004",
        imageUrl: "/calca1.png",
        altText: "Calça masculina - jeans",
        title: "Calça",
        description: "Calça jeans Masculino",
        oldPrice: "R$190,00", 
        price: "R$150,00"   
    },
    {
        id: "prod1005",
        imageUrl: "/relogiofem.png",
        altText: "Relógio retrô feminino",
        title: "Relógio",
        description: "Relógio analógico feminino",
        oldPrice: "R$470,00",
        price: "R$345,00"
    },
    {
        id: "prod1006",
        imageUrl: "/tshirt1.png",
        altText: "Camisa básica preta unissex",
        title: "Tshirt ou camisa",
        description: "Camisa básica preta unissex",
        oldPrice: "R$210,00", 
        price: "R$190,00"   
    },
    {
        id: "prod1007",
        imageUrl: "/tshirt2.png",
        altText: "Camiseta básica feminina",
        title: "Tênis",  
        description: "Camiseta básica feminina",
        oldPrice: "R$350,00", 
        price: "R$320,00"   
    },
    {
        id: "prod1008",
        imageUrl: "/relogio_masculino.png",
        altText: "Relógio masculino",
        title: "Relógio",
        description: "Relógio masculino",
        oldPrice: "R$240,00",
        price: "R$200,00"
    }
];


	 return (
		  <>
			 {products.map((product) => (  
				 <Link key={product.id} to={`/produto/${product.id}`} className={styles.card__link}>
					 
					 <div className={styles.card__product}>
						 <img
							 src={product.imageUrl}
							 alt={product.altText}
							 className={styles.card__image}
						 />

						 
						 {product.discount && (
							 <span className={styles.tag__off}>{product.discount}</span>
						 )}

						 <div className={styles.card__body}>
							 <p className={styles.title__card__product}>{product.title}</p>
							 <p className={styles.card__description}>{product.description}</p>
							 <p>
 								 <span className={styles.oldPrice}>
									 {product.oldPrice}
								 </span>
  								 <span className={styles.price}>
									 {product.price}
								 </span>
							 </p>
                            </div>
                            <div className={styles.btnCard}>
                                <ButtonDefault>
                                     Comprar
                                </ButtonDefault>
                            </div>
					 </div>
				 </Link>
			 ))}
			 </>
 	 );
 };
