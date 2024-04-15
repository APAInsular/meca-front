import myImage from '../images/pin-48.svg';
import myImage1 from '../images/mail.svg';
import myImage2 from '../images/phone.svg';
import '../styles/ContactUs.css';


const ContactUs = () => {
        return (
            <div className="ContactUs">
                <h1 class="info">Contact Us</h1>
                <p class="info2">Any question or remarks?<br></br>
                    Just write us a message!</p>

                <div className="box">
                    <img className='email' src={myImage1} alt=""/>
                    <p class="mejlo">example@gmail.com</p>
                    <button className='emailb'>CONTACTO</button>
                 </div>
            
                <div className="box">
                    <img className='phone' src={myImage2} alt=""/>
                    <p>Office. (+02-123-456-789)</p>
                    <button className='phoneb'>LLAMAR</button>
                </div>


                <div className="box">
                    <img className='pin' src={myImage} alt=""/>
                    <p>(Agrega tu ubicación)</p>
                    <button className='oficinab'>UBICACIÓN</button>
                </div>
            </div>
          );
        }

export default ContactUs;