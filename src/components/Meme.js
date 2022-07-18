import memesData from "../memesData";

function Meme() {
    function getMemeImage() {
        const memesArray = memesData.data.memes;
        const randomIndex = Math.floor(Math.random() * memesArray.length);
        const url = memesArray[randomIndex].url;
        console.log(url);
    }
 
    return (
        <div className="meme-container">
            <div className="meme-inputs">
                <input className="meme-input" placeholder="top text"></input>
                <input className="meme-input" placeholder="bottom text"></input>
            </div>
            <button onClick={getMemeImage} className="meme-button">Get a new meme image 🖼</button>
        </div>
    );

}

export default Meme;