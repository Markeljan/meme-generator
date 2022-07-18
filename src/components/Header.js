
import troll from "../troll.svg";

function Header() {
    return (
        <div className="header-container">
            <div>
                <img src={troll} className="header-img" alt="troll face" />
                <p>Meme Generator</p>          
            </div>
            <p className="header-text">NFT Meme Generator</p>
        </div>
    );
}

export default Header;
        