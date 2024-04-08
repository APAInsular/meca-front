import myImage from '../images/pin-48.svg';
import myImage1 from '../images/mail.svg';
import myImage2 from '../images/phone.svg';
import '../styles/ContactUs.css';


const ContactUs = () => {
        return (
            <div className="ContactUs">
                <h1 class="info">Contacta con nosotras</h1>
                <p class="info2">¿Alguna pregunta o comentario? ¡Solo escríbenos un mensaje!</p>
                <div class="ContactUs1">
            
            <div className="box">
            <img className='phone' src={myImage2} alt=""/>
                <h3>Teléfono:</h3>
                <p>(123) 456-7890</p>
                <button className='phoneb'>LLAMAR</button>
            </div>

            <div className="box">
            <img className='email' src={myImage1} alt=""/>
                <h3>Email:</h3>
                <p>contact@example.com</p>
                <button className='emailb'>CONTACTO</button>
            </div>

            <div className="box">
                <img className='pin' src={myImage} alt=""/>
                <h3>Oficina:</h3>
                <p>(Agrega tu ubicación)<br />Fuerteventura</p>
                <button className='oficinab'>UBICACIÓN</button>
            </div>
            </div>
            </div>
          );
        }

export default ContactUs;