import '../../styles/Events.css';
import { useState } from 'react';
import EventMonumentPhoto from './EventMonumentPhoto1';
import MonumentRoute1 from '../MonumentRoute1';
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
        <div className={`rect ${expanded ? 'expanded' : ''} w-[90%] h-[15vw] md:h-[5vw]`}>
            <img className="EventLogo" src="/Image/ebook.png" alt="BooksLogo" />
            <p className='bigger eventoTitle'>{event.title}</p>
            <button id={`triangleButton${event.id}`} className="expandBut" onClick={() => { rotateTriangle(); toggleExpand(); }}>
                <img className="trianglebuttonImg" src='/Image/triangle.png' alt="triangle" />
                {expanded ? '' : ''}
            </button>
            {expanded && (
                <div className='hiddenContent'>
                    <div className='Monument1 w-[270px] justify-center ml-[43%] lg:w-[370px]'>
                        <EventMonumentPhoto />
                    </div>
                    <div className='w-[270px] ml-[43%] Route lg:w-[70%]'>
                        <MonumentRoute1 />
                    </div>
                    <div className='Profile'>
                        <EventCreator1 />
                    </div>
                    <div className='Paragraph'>
                        <EventDescription1 />
                    </div>
                </div>
            )}
        </div>
    );
}

export default Event;