import '../styles/MonumentRoute1.css';


const MonumentRoute1 = () => {
    const popOutImage = () => {
        let image = document.getElementById("popOutImage");
        let overlay = document.getElementById("overlay");
    
        image.classList.toggle("enlarged");
        overlay.style.display = image.classList.contains("enlarged") ? "block" : "none";
    }
    return(
        <div className='Route'>
            <img id="popOutImage" onClick={popOutImage} className="Element3 popOutImage" src="/Image/Map.png" alt="MapImg" />
            <div id="overlay"></div>
        </div>
    );
}

export default MonumentRoute1;