import '../styles/EventCreator1.css';
import PersonPicture from '../components/Photos/chucknorris.jpeg.jpg';


const EventCreator1 = () => {
    const Creator = 'Chuck Norris';
    return(
        <div className='Profile'>
            <img className="ProfilePic1" src={PersonPicture} alt="Profile" />
            <div className='ChatBoxProfile'>
                <p>Este evento es creado por {Creator}</p>
            </div>
        </div>
    );
}

export default EventCreator1;