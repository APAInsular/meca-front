import './Obras.css'
import firstObra from './Photos/Obra.jpg'


function Obrasdest() {
    return (
        <>
            <div className="parent">
                <div className="div obraTitle">OBRAS DESTACADAS</div>
                <div className="div6"><img className="obraPng" src={firstObra} alt="Obra" /></div>
                <div className="div7"><img className="obraPng" src={firstObra} alt="Obra" /></div>
                <div className="div8"><img className="obraPng" src={firstObra} alt="Obra" /></div>
                <div className="div9"><img className="obraPng" src={firstObra} alt="Obra" /></div>
            </div>
        </>
    );
}

export default Obrasdest;