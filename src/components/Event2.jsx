import '../styles/Events.css';
import triangleButton from './Photos/triangle.png';
import { useState } from 'react';


const Event2 = () => {
    const [expanded, setExpanded] = useState(false);

    const toggleExpand = () => {
        setExpanded(!expanded);
    };

    const rotateTriangle = (id) => {
        let triangleButton = document.getElementById(`triangleButton${id}`);
        triangleButton.classList.toggle("rotated");
    }
    return(
        <div className="container2">
                <div className={`rect2 ${expanded ? 'expanded' : ''}`}>
                    <p className='bigger eventoTitle'>Evento2</p>
                    <button id='triangleButton2' className="expandBut2" onClick={() => { rotateTriangle(2); toggleExpand(); }}>
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

export default Event2;