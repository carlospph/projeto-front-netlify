import styles from './Footer.module.css';
import logo from '../../assets/icones/logo__bottom.png';
import { Link } from 'react-router-dom';
import { ScrollPage } from '../scrollPage/ScrollPage';

export const Footer = () => {
  return (
    
    <section className="bg-dark">
      <ScrollPage/>
      <div className="container py-3 text-white">
        <div className={styles.row}>
          <div className={styles.footer__lema}>
           <Link to="/">  
           <img
              src={logo}
              alt="Logo do rodapé da página - Digital College - imagem em branco"
              className={styles.logo__bottom}
            />
           </Link>
            

            <p>
              Por: Antonio Carlos Pereira do Nascimento - PcD oculta. Projeto final para obtenção da nota do curso stack full Geração Tech 2.0.
            </p> 

            <div className={styles.socialMedia}>
              <i className="fa-brands fa-facebook-f"></i>
              <i className="fa-brands fa-instagram"></i>
              <i className="fa-brands fa-twitter"></i>
            </div>
          </div>

          <div className={styles.footer__info}>
            <ul>
              <li className="fw-bold py-4">Informação</li>
              <li className="py-1">Sobre DripStore</li>
              <li className="py-1">Segurança</li>
              <li className="py-1">Wishlist</li>
              <li className="py-1">Blog</li>
              <li className="py-1">Trabalhe conosco</li>
              <li className="py-1">Meus Pedidos</li>
            </ul>
          </div>

          <div className={styles.footer__category}>
            <ul>
              <li className="fw-bold py-4">Categorias</li>
              <li className="py-1">Camisetas</li>
              <li className="py-1">Calças</li>
              <li className="py-1">Bonés</li>
              <li className="py-1">Headphones</li>
              <li className="py-1">Tênis</li>
            </ul>
          </div>
          
          <div className={styles.footer__contact}>
            <ul>
              <li className="fw-bold py-4">Contato</li>
              <li className="py-1">
                Av. Santos Dumont, 1510 - 1 andar - Aldeota, Fortaleza - CE,
                60150-161
              </li>

              <li className={styles.phoneWhatsapp}>
                <a href="https://wa.me/55889997828388?text=Olá! Vi seu contanto na web: Digital Collection" title='Clique para ir ao whatsapp'>(88) 9.9783-8872</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="row">
          <hr />
          <p className={styles.copyRight}>
            &copy; 2025 Digital College
          </p>
        </div>
      </div>
    </section>
  );
};
