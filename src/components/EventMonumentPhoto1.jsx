import MonumentPic1 from './Photos/Obra.jpg';
import '../styles/EventMonumentPhoto1.css';



const EventMonumentPhoto1 = () => {
    return(
        <div className='Monument1'>
            <img className="first-monument-pic Element2" src={MonumentPic1} alt="MonumentPhoto" />
        </div>
    );

}

export default EventMonumentPhoto1;