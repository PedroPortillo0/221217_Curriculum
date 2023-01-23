import Logo from "../../assets/img/foto.svg";
import Informacion from "../../data/data";
import '../../assets/styles/Header.css';
function Header() {
    return (  
        <div className="Header">
            <div className="Foto"> 
                <img className="Fooot" src={Logo} alt="foto de perfil" />
            </div>
            <div className="Texto">
                <div className="name">
                    <h1>{Informacion.Nombre}</h1>
                </div>
                <div className="carrera">
                    <p>{Informacion.Profesion}</p>
                </div>
            </div>

        </div>
    );
}

export default Header;