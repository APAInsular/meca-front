import '../styles/EventCreator1.css';
// import PersonPicture from '/Image/chucknorris.jpeg.jpg'


const EventCreator1 = () => {
    // const Creator = 'Chuck Norris';
    return(
        <div className='Profile'>
            <img className="ProfilePic1" src='/Image/chucknorris.jpeg.jpg' alt="Profile" />
            <div className='ChatBoxProfile'>
                <p>Este evento es creado por Chuck Norris</p>
            </div>
        </div>
    );
}

export default EventCreator1;