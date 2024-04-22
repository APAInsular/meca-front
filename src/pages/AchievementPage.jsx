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
                <h4>100%</h4>
            </div>
            <div class='event1'>
            <h3 className='logros'>Visita 5 figuras</h3>
                <div className='line2'>   
                </div>
            </div>
            <div class='event1'>
            <h3 className='logros'>Completa dos rutas en el mismo dia</h3>
                <div className='line2'>  
                </div>
            </div>
            <div class='event1'>
            <h3 className='logros'>Logro#3</h3>
                <div className='line2'>
                    
                </div>
            </div>
        </div>
    )
};

export default AchivementPage;