import '../styles/Events.css';
import triangleButton from './Photos/triangle.png';
import { useState } from 'react';


const Event4 = () => {
    const [expanded, setExpanded] = useState(false);

    const toggleExpand = () => {
        setExpanded(!expanded);
    };

    const rotateTriangle = (id) => {
        let triangleButton = document.getElementById(`triangleButton${id}`);
        triangleButton.classList.toggle("rotated");
    }
    return(
        <div className="container4">
                <div className={`rect ${expanded ? 'expanded' : ''}`}>
                    <p className='bigger eventoTitle'>Evento4</p>
                    <button id='triangleButton4' className="expandBut4" onClick={() => { rotateTriangle(4); toggleExpand(); }}>
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

export default Event4;