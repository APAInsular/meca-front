import { useTranslation } from 'react-i18next';

const TermsConditionsPage = () => {
    const [t, i18n] = useTranslation("global");
    return(
        <div className="p-4 overflow-hidden"> 
            <div className="bg-[#263C5C] w-[70%] md:w-[60%] lg:w-[70%] mx-auto rounded-3xl mb-4"> 
                <h1 className="text-[20px] md:text-[40px] lg:text-[50px] text-white tracking-widest mx-auto text-center py-4">{t("termsAndCondition.termsTitle")}</h1>
            </div>
            
            <img className="w-[15%] md:w-[10%] h-auto mx-auto mt-2" src="/Image/lock.png" alt="padlock"/>
            
            <ol className="w-[90%] md:w-[80%] lg:w-[60%] mx-auto list-decimal mt-2">
                <li className="mb-4">{t("termsAndCondition.termsAgreement")}</li>
                <div className="w-full bg-black h-[2px] mb-4"></div>
                <li className="mb-4">{t("termsAndCondition.termsProtection")}</li>
                <div className="w-full bg-black h-[2px] mb-4"></div>
                <li className="mb-4">{t("termsAndCondition.termsSecurity")}</li>
                <div className="w-full bg-black h-[2px] mb-4"></div>
                <li className="mb-4">{t("termsAndCondition.termsGuidelines")}</li>
                <div className="w-full bg-black h-[2px] mb-4"></div>
                <li className="mb-4">{t("termsAndCondition.termsIntellectual")}</li>
                <div className="w-full bg-black h-[2px] mb-4"></div>
                <li className="mb-4">{t("termsAndCondition.termsUpdates")}</li>
                <div className="w-full bg-black h-[2px] mb-4"></div>
                <li className="mb-4">{t("termsAndCondition.termsResolution")}</li>
                <div className="w-full bg-black h-[2px] mb-4"></div>
                <li className="mb-[70%] lg:mb-[20%] ">{t("termsAndCondition.termsLimitations")}</li>
            </ol>

        </div>
    );
 }

export default TermsConditionsPage;



