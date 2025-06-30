import { ButtonDefault } from "../button/ButtonDefault"; 
import styles from "./OfertSpecial.module.css"; 

export const OfertSpecials = () => {
  return (
    
    <div className={styles.container}> 
         <div className={styles.container__image}>
          <img
            src="tenisespecial.png"
            alt="Imagem do tênis em promoção"
            className={styles.image__ofert}
          />
         </div>
        <div className={styles.texts__container}>
          <span className={styles.title__ofert}>Oferta especial</span>
          <h2 className={styles.title__ofert__2}>Air Jordan edição de colecionador</h2>
          <p>
            Aproveite nossa OFERTA ESPECIAL por tempo limitado! Todos os nossos produtos premium estão com 50% de desconto até o final desta semana. Esta é uma oportunidade única para adquirir soluções completas pelo melhor preço do ano.
          </p>
          
          <ButtonDefault className="btn">
            Ver oferta
          </ButtonDefault>
        </div>
      </div>
   );
};