import './Header.css';
import logotop from "../../assets/icones/logo-header.svg";
import { ActionUser } from "../actionUser/ActionUser";
import { Link } from "react-router-dom";

import { useState } from "react";
import { DesktopMenu } from "./DesktopMenu";
import { MobileMenu } from "./MobileMenu";


export const Headerversion = () => {

    const [search, setSearch] = useState(false);
    const [menu, setMenu] = useState(false);

    return (

        <header>

            <div className="header-container">

                <i className="fa-solid fa-bars hamburguer" onClick={() => setMenu(!menu)} ></i>

                <Link to="/">
                    <img src={logotop} alt="logomarca" className='logo' />
                </Link>


                {/* Campo pesquisa para mobile  */}

                {search && (
                    <div className="field">
                        <input type="text" placeholder="Buscar produtos" />
                        <button className='btn-input-search'>
                            <i className="fa-solid fa-search"></i>
                        </button>
                    </div>
                )}

                {/* Pesquisa para computadores | tablet  */}
                <div className="onlyComputer">
                    <DesktopMenu />
                </div>

                <div className="field-computer">
                    <input type="text" placeholder="Buscar" />
                    <i className="fa-solid fa-search"></i>
                </div>

                <div className="actions">
                    <ActionUser />
                </div>

                <i className="fa-solid fa-cart-shopping carrinho" />
                <i className="fa-solid fa-search btnSearch" onClick={() => setSearch(!search)} />
            </div>


            {menu && (
                <div className="onlyMobile">
                    <MobileMenu />
                </div>
            )}

        </header>
    )
}