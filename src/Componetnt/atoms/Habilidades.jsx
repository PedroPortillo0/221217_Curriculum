import barras from "../../assets/img/barras.png";
import "../../assets/styles/habilidades.css";
function Habilidades() {
    return ( 
        <div className="habilidades">
            <div className="hab">
                <h2>HABILIDADES</h2>
            </div>
            <div className="barras">
                <img src={barras} alt="barras estadisticas" />
            </div>
        </div>
     );
}

export default Habilidades;