import '../styles/Events.css';
import Event from './Event';

const Events = () => {

    const events = [
        {
            title: 'Event1',
            id: '1',
            date: '01-01-2010',
            author: {
                name: 'John Doe',
            },
            max_ammount: '100',
            already_in: '10'
        },
        {
            title: 'Event2',
            id: '2',
            date: '01-02-2010',
            author: {
                name: 'John Doe',
            },
            max_ammount: '100',
            already_in: '50'
        },
        {
            title: 'Event3',
            id: '3',
            date: '01-03-2010',
            author: {
                name: 'John Doe',
            },
            max_ammount: '100',
            already_in: '13'
        },
        {
            title: 'Event4',
            id: '4',
            date: '01-04-2010',
            author: {
                name: 'John Doe',
            },
            max_ammount: '100',
            already_in: '17'
        },
        {
            title: 'Event5',
            id: '5',
            date: '01-04-2010',
            author: {
                name: 'John Doe',
            },
            max_ammount: '100',
            already_in: '17'
        }

    ]


    return (
        <div>
            {events.map((event) => (
                <Event key={event.id} event={event} />
            ))}
        </div>
    );
}

// key={index} event_data={event_data} eventId={events.id}

export default Events;