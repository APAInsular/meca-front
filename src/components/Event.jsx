import '../styles/Events.css';
import { useState } from 'react';
import EventMonumentPhoto from './EventMonumentPhoto1';
import MonumentRoute1 from './MonumentRoute1';
import EventCreator1 from './EventCreator1';
import EventDescription1 from './EventDescription1';


const Event = ({ event }) => {
    const [expanded, setExpanded] = useState(false);

    const toggleExpand = () => {
        setExpanded(!expanded);
    };

    const rotateTriangle = () => {
        let triangleButton = document.getElementById(`triangleButton${event.id}`);
        triangleButton.classList.toggle("rotated");
    };

    return (
        <div className={`rect ${expanded ? 'expanded' : ''}`}>
            <img className="EventLogo" src="/Image/ebook.png" alt="BooksLogo" />
            <p className='bigger eventoTitle'>{event.title}</p>
            <button id={`triangleButton${event.id}`} className="expandBut" onClick={() => { rotateTriangle(); toggleExpand(); }}>
                <img className="trianglebuttonImg" src='/Image/triangle.png' alt="triangle" />
                {expanded ? '' : ''}
            </button>
            {expanded && (
                <div className='hiddenContent'>
                    <EventMonumentPhoto />
                    <MonumentRoute1 />
                    <EventCreator1 />
                    <EventDescription1 />
                </div>
            )}
        </div>
    );
}

export default Event;