import '../styles/Events.css';
import triangleButton from './Photos/triangle.png';
import { useState } from 'react';


const Event1 = () => {
    const [expanded, setExpanded] = useState(false);

    const toggleExpand = () => {
        setExpanded(!expanded);
    };

    const rotateTriangle = (id) => {
        let triangleButton = document.getElementById(`triangleButton${id}`);
        triangleButton.classList.toggle("rotated");
    }
    return(
        <div className="container1">
        <div className={`rect ${expanded ? 'expanded' : ''}`}>
            <p className='bigger eventoTitle'>Evento1</p>
            <button id='triangleButton1' className="expandBut" onClick={() => { rotateTriangle(1); toggleExpand(); }}>
                <img className="trianglebuttonImg" src={triangleButton} alt="triangle" />
                {expanded ? '' : ''}
            </button>
            {expanded && (
                <div>
                    <p>Extra content goes here...</p>
                    <p>Extra content goes here...</p>
                    <p>Extra content goes here...</p>
                </div>
            )}
        </div>
    </div>
    );
}

export default Event1;