import '../styles/Events.css';
// import triangleButton from './Photos/triangle.png';
import { useState } from 'react';
// import BooksLogo from './Photos/books.png';
import EventMonumentPhoto1 from './EventMonumentPhoto1';
import MonumentRoute1 from './MonumentRoute1';
import EventCreator1 from './EventCreator1';
import EventDescription1 from './EventDescription1';


const Event = () => {
    const [expanded, setExpanded] = useState(false);

    const toggleExpand = () => {
        setExpanded(!expanded);
    };

    const rotateTriangle = (id) => {
        let triangleButton = document.getElementById(`triangleButton${id}`);
        triangleButton.classList.toggle("rotated");
    }
    return(
        
        <div className={`rect1 ${expanded ? 'expanded' : ''}`}>
            <img className="EventLogo" src={"/public/Image/books.png"} alt="BooksLogo" />
            <p className='bigger eventoTitle'>Evento1</p>
            <button id='triangleButton1' className="expandBut" onClick={() => { rotateTriangle(1); toggleExpand(); }}>
                <img className="trianglebuttonImg" src={'/public/Image/triangle.png'} alt="triangle" />
                {expanded ? '' : ''}
            </button>
            {expanded && (
                <div className='hiddenContent'>
                    <EventMonumentPhoto1 />
                    <MonumentRoute1 />
                    <EventCreator1 />
                    <EventDescription1 />
                </div>
            )}
        </div>
    );
}

export default Event;