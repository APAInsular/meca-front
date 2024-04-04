import '../styles/Events.css';
import { useState } from 'react';
import Event1 from './Event1';
import Event2 from './Event2';
import Event3 from './Event3';
import Event4 from './Event4';

const Events = () => {
    return (
        <div>
            <Event1 />
            <Event2 />
            <Event3 />
            <Event4 />
        </div>
    );
}


export default Events;