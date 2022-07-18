import memesData from "../memesData";
import {useState} from "react";

function Meme() {

    const memesArray = memesData.data.memes;
    const [url, setUrl] = useState(memesArray[getRandomIndex()].url);
    
    function getMeme() {
        setUrl(memesArray[getRandomIndex()].url)
        console.log(url);
    }

    function getRandomIndex() {
        return ( Math.floor(Math.random() * memesArray.length) )
    }
 
    return (
        <div className="meme-container">
            <div className="meme-inputs">
                <input className="meme-input" placeholder="top text"></input>
                <input className="meme-input" placeholder="bottom text"></input>
            </div>
            <button onClick={getMeme} className="meme-button">Get a new meme image 🖼</button>

            <img className="meme-img" src={url}></img>
        </div>
    );

}

export default Meme;