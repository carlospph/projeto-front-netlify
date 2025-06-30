import { NavLink } from "react-router-dom"
import './Header.css';
 
export const DesktopMenu = () => {

    return (
        <ul className="desktop-menu">
            <li>
                <NavLink className="link" to="/">Home</NavLink>
            </li>
            <li>
                <NavLink className="link" to="/Produtos">Produtos</NavLink>
            </li>
            <li>
                <NavLink className="link" to="/Categorias">Categorias</NavLink>
            </li>
        </ul> 
    )
  }