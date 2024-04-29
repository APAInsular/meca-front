import '../../styles/EventTitle.css'
import { useTranslation } from 'react-i18next';

const EventTitle = () => {
    const [t, i18n] = useTranslation("global");
    return (
        <div>
            <div className='titleHead text-center '>{t("eventPage.events")}</div>
        </div>
    );
}

export default EventTitle;