import { useState } from 'react';

const Home = () => {
    const [name, setName] = useState('mario');
    const [age, setAge] = useState(25);
    const handleClick = (e) =>{
        console.log('AAAAAAAAAAAAAAAAAAAAAHHH', e);
    }

    const handleClickAgain = () =>{
        setName('Luigi');
        setAge(47);
    }
    return ( 
        <div className="home">
            <h2>HomePage</h2>
            <button onClick={handleClick}>Click ME</button>
            <button onClick={(e) => {
                handleClickAgain('Thomas', e)
            }}>Click me again</button>
            <p>{ name }</p>
            <p>{ name } is { age } years old</p>
        </div>
     );
}
 
export default Home;