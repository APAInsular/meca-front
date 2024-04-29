import '../../styles/EventDescription1.css'
import { useTranslation } from 'react-i18next';

const EventDescription1 = () => {
    const [t, i18n] = useTranslation("global");
    return (
        <div className='containerDescription Element1 Paragraph'>
            <p className='EventText'>En este evento, podrás experimentar muchas cosas diferentes y ganar puntos de evento.</p>
            <button id='SeeMoreEvent' className='EventButton'>{t("eventPage.seeMore")}</button>
        </div>
    );
}


export default EventDescription1;