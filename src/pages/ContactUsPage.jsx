import myImage from "../images/pin-48.svg";
import myImage1 from "../images/mail.svg";
import myImage2 from "../images/phone.svg";
import "../styles/ContactUs.css";
import { useTranslation } from 'react-i18next';

const ContactUs = () => {
    const [t, i18n] = useTranslation("global");
        return (
            <div className="ContactUs">
                <h1 class="info">{t("contactPage.contactUs")}</h1>
                <p class="info2">{t("contactPage.contactDesc")}</p>
                <div class="ContactUs1">

                    <div className="box">
                        <img className='email' src={myImage1} alt=""/>
                        <h3>Email</h3>
                        <p className="contact">contact@example.com</p>
                        <button className='emailb'>{t("contactPage.contactEmailButton")}</button>
                    </div>

                    <div className="box">
                        <img className='phone' src={myImage2} alt=""/>
                        <h3>{t("contactPage.contactPhone")}</h3>
                        <p>Office. (phone number)</p>
                        <button className='phoneb'>{t("contactPage.contactPhoneButton")}</button>
                    </div>

                    <div className="box">
                        <img className='pin' src={myImage} alt=""/>
                        <h3>{t("contactPage.contactOffice")}</h3>
                        <p>(Agrega tu ubicación)</p>
                        <button className='oficinab'>{t("contactPage.contactOfficeButton")}</button>
                    </div>

                    <div className="downbox">
                        <button className='entegar'>{t("contactPage.contactFormButton")}</button>
                        <div className="downboxinside">
                            <h3>{t("contactPage.contactFormText")}</h3>
                        </div>
                        
                    </div>
                </div>
            </div>
          );
        }

export default ContactUs;
