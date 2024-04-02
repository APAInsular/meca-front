import '../styles/Events.css';
import { useState } from 'react';



const Events = () => {
    // function toggleDropdown() {
    //     var dropdown = document.getElementById("myDropdown");
    //     dropdown.classList.toggle("show");
    // }

    // window.onclick = function(event) {
    //     if (!event.target.matches('.dropbtn')) {
    //         var dropdowns = document.getElementsByClassName("dropdown-content");
    //         for (var i = 0; i < dropdowns.length; i++) {
    //             var openDropdown = dropdowns[i];
    //             if (openDropdown.classList.contains('show')) {
    //                 openDropdown.classList.remove('show');
    //             }
    //         }
    //     }
    // }
    const [expanded, setExpanded] = useState(false);

    const toggleExpand = () => {
        setExpanded(!expanded);
    };


    return (
        <div>
            {/* <div class="dropdown">
    <button onclick={toggleDropdown()} class="dropbtn">Event1</button>
    <div id="myDropdown" class="dropdown-content">
        <p>fmajnankanknqkbnkbnbrqknrqrb</p>
            <img src="../components/Photos/Obra.jpg" alt="ffgf" />
            <img src="../components/Photos/Cesar.jpg" alt="fdfd" />
    </div>
</div> */}

            {!expanded ? (
                <div className='eventContent'>
                    <p className='bigger'>Click the button to expand</p>
                    <button onClick={toggleExpand}>Expand</button>
                </div>
            ) : (
                <div className='eventContent'>
                    <p>Expanded Div with More Information</p>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing
                        elit. Sed tempor nunc non libero ullamcorper, nec
                        scelerisque metus lobortis. Vivamus maximus consequat
                        consequat. Integer quis velit ut enim tempus
                        tristique non nec odio.
                    </p>
                    <button onClick={toggleExpand}>Collapse</button>
                </div>
            )}
        </div>
    );
}

export default Events;