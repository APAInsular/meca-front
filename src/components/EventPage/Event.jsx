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
                    <div className='Monument1 w-[270px] lg:w-[370px] mt-5 xl:ml-[43%] lg:ml-[43%] customFix-position'>
                        <EventMonumentPhoto />
                    </div>
                    <div className='w-[270px] ml-[43%] Route lg:w-[70%] customFix-position'>
                        <MonumentRoute1 />
                    </div>
                    <div className='Profile customFix-position2 lg:ml-6'>
                        <EventCreator1 />
                    </div>
                    <div className='Paragraph mt-[1.4rem] customFix-position3'>
                        <EventDescription1 />
                    </div>
                </div>
            )}
        </div>
    );
}

export default Event;