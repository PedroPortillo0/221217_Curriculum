import Informacion from "../../data/data";
import "../../assets/styles/Formacion.css"
function Formacion() {
    return (  
        <div className="formacion">
           <div >
                <h2>Formacion</h2>
           </div>
           <div className="textoo">
                <p>{Informacion.Primaria}</p>
                <p>{Informacion.Secundaria}</p>
                <p>{Informacion.Preparatoria}</p>
                <p>{Informacion.Universidad}</p>
           </div>
        </div>
    );
}

export default Formacion;