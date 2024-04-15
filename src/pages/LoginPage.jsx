import '../styles/LoginPage.css';

import meca from '../images/MECA-09.png';
import google from '../images/google.svg';
import face from '../images/facebook.svg';

const RankingPage = () => {
    return (
        <div className="RankingPage">
            <div class="logo">
                <img className='meca' src={meca} alt=""/>
            </div>

            <div class="login_form">
                <h5>INICIA SESIÓN</h5>
                <input type="text" placeholder='Email'></input><br></br>
                <input type="text" placeholder='Contraseña'></input><br></br>
                <button class="entar">Entar</button><br></br>
                <button className='google'><img className='google' src={google} alt=""/></button>
                <button className="facebook"><img className='facebook' src={face} alt=""/></button>
            </div>

            
        </div>        
    )
}

export default RankingPage;