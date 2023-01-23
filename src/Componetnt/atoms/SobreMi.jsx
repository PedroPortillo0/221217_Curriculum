import Informacion from "../../data/data";
import "../../assets/styles/SobreMi.css";
function SobreMi() {
    return (  
        <div>
            <div className="SobreMi">
                <div className="Suptitulo">
                    <h2 >ACERCA DE MI</h2>
                </div>
                <div className="tex">
                    <p>{Informacion.AcercaDeMi}</p>
                </div>
            </div >
        </div>
       
    );
}

export default SobreMi;