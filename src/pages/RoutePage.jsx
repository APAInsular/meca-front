import '../styles/RoutePage.css';
import map from '../images/maps.png';

const RoutePage = () => {
    return (
        <div className="RoutePage">
            <div class="left">
                <img class="map" src={map} alt=''/>
            </div>
        </div>        
    )
}

export default RoutePage;