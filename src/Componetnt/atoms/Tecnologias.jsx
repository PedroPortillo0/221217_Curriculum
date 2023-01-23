import "../../assets/styles/Tecnologias.css";
import Informacion from "../../data/data";

function Tecnologias() {
    return (  
        <div>
            <div className="Tecnologias">
                <div>
                    <h2>TECNOLOGIAS</h2>
                </div>
                <div className="tec">
                    <p>{Informacion.C}</p>
                    <p>{Informacion.C2}</p>
                    <p>{Informacion.HTML}</p>
                    <p>{Informacion.CSS}</p>
                    <p>{Informacion.javaScript}</p>
                </div>
            </div>
        </div>
    );
}

export default Tecnologias;