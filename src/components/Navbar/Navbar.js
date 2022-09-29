import  "./Navbar.css"
import CartWidget from "../CartWidget/CartWidget"
import logotipo from './assets/logotipo.jpg'


const Navbar = () => {
    return(
        <nav class="navbar bg-primary">
            <img src={logotipo} alt='logotipo'/>
            <h4>Inicio</h4>
            
            
            
            
            <div>
                <button>Calzado</button>
                <button>Accesorios</button>
                <button>Vestimenta</button>
            </div>
            <CartWidget/>
        </nav>

    )
}
export default Navbar