import '../styles/Achivement.css';
import star from '../images/star.svg'

const AchivementPage = () => {
    return (
        <div className='AchivementPage'>
            <div class='progres'>
                <img src={star} alt="/" style={{width: "40px", height: "40px"}} className='star'/>
                <h3 className='logros'>Logros</h3>
                <div className='line'>
                    <div className='lineinside'>
                        
                    </div>
                </div>
            </div>
        </div>
    )
};

export default AchivementPage;