import '../styles/Events.css';
import { useState } from 'react';
import triangleButton from './Photos/triangle.png';

const Events = () => {
    const [expanded, setExpanded] = useState(false);

    const toggleExpand = () => {
        setExpanded(!expanded);
    };
    const rotateTriangle = () => {
        let triangleButton = document.getElementById("triangleButton");
        triangleButton.classList.toggle("rotated");
    }
    return (
        <div className="container">
            <div className={`rect ${expanded ? 'expanded' : ''}`}>
                <p className='bigger eventoTitle'>Evento1</p>
                <button id='triangleButton' className="expandBut" onClick={() => { rotateTriangle(); toggleExpand(); }}>
                    <img className="trianglebuttonImg" src={ triangleButton } alt="triangle" />
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


export default Events;