import React, {useState, useEffect} from "react";

function Meme() {

    const [allMemes, setAllMemes] = useState([]);
    const [meme, setMeme] = useState(
        {
            topText: "",
            bottomText: "",
            imageUrl: "http://i.imgflip.com/1bij.jpg"
        }    );

    React.useEffect( () => {
        async function getMemes() {
            const res = await fetch("https://api.imgflip.com/get_memes");
            const data = await res.json();
            setAllMemes(data.data.memes)
        }
        getMemes();

        
    }, [])


    function handleChange(event) {
        const targetName = event.target.name; 
        const targetValue = event.target.value;
        setMeme(prevMeme => ({
            ...prevMeme,
            [targetName]: targetValue
        }))
    }

    function handleSubmit(event) {
        console.log(meme);
        event.preventDefault();

    }
 
    function getMeme() {
        setMeme(prevMeme => {
            const randomUrl = allMemes[getRandomIndex()].url
            return {
                ...prevMeme,
                imageUrl: randomUrl
            }
        });
    }

    function getRandomIndex() {
        return ( Math.floor(Math.random() * allMemes.length) )
    }
 
    return (
        <div className="meme-container">

            <form onSubmit={handleSubmit}>
                <div className="meme-inputs">
                    <textarea 
                        name="topText"
                        value={meme.topText}
                        className="meme-input" 
                        placeholder="top text"
                        onChange={handleChange}
                    />
                    <textarea 
                        name="bottomText"
                        value={meme.bottomText}
                        className="meme-input" 
                        placeholder="bottom text"
                        onChange={handleChange}
                    />
                </div>
        
                <button onClick={getMeme} className="meme-button">Get a new meme image 🖼</button>

            </form>
            <div className="image-container">
                <p className="meme-text-top">{meme.topText}</p>
                <p className="meme-text-bottom">{meme.bottomText}</p>
                <img className="meme-img" alt="dank meme" src={meme.imageUrl}></img>
            </div>
        </div>
    );

}

export default Meme;