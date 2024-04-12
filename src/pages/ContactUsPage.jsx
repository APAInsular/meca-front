import myImage from '../images/pin-48.svg';
import myImage1 from '../images/mail.svg';
import myImage2 from '../images/phone.svg';
import '../styles/ContactUs.css';
import NavBarMobile from "../components/NavBarMobile.jsx";
import Footer from "../components/Footer.jsx";


const ContactUs = () => {
        return (
            <div>
                <NavBarMobile/> 
            <div className="ContactUs">
                <p class="info text-center">Contact Us</p>
                <p class="info2 text-center mx-5 my-0">Any question or remarks? </p>
                <p class="info2 text-center mx-5">Just write us a message!</p>
                <div class="ContactUs1 my-5">
            <div className="row-1"> 
            <div className="box text-center">
            <img className='email' src={myImage1} alt=""/>
                <h3>Email</h3>
                <p>contact@example.com</p>
                <button className='button'>CONTACTA</button>
            </div>

            <div className="box text-center">
            <img className='phone' src={myImage2} alt=""/>
                <h3>Teléfono</h3>
                <p>(123) 456-7890</p>
                <button className='button'>CONTACTA</button>
            </div>
            </div>
            <div className="box text-center">
                <img className='pin' src={myImage} alt=""/>
                <h3>Oficina     </h3>
                <p>(Agrega tu ubicación)</p>
                <button className='button'>CONTACTA</button>
            </div>
            </div>
            </div>
            {/* <div class='form-box'>
                <button className='button-submit mx-1'>Submit</button>
                <input className="form-input mx-1" placeholder='Submit a form'></input>
            </div> */}
            <Footer/>
            </div>
          );
        }

export default ContactUs;