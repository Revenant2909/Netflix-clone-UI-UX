import { InfoOutlined, PlayArrow } from "@material-ui/icons";
import "./featured.scss";

function Featured({type}) {
  return (
    <div className="featured">
        {type && (
            <div className="category">
                <span>{type==="movie" ? "Movies" : "Tv Shows"}</span>
                <select name="genre" id="genre">
                    <option>Genre</option>
                     <option value="hindi">Hindi</option>
                     <option value="tamil">Tamil</option>
                     <option value="punjabi">Punjabi</option>
                     <option value="telugu">Telugu</option>
                     <option value="malyalam">Malyalam</option>
                     <option value="marathi">Marathi</option>
                     <option value="bengali">Bengali</option>
                     <option value="english">English</option>
                     <option value="international">International</option>
                     <option value="independent">Independent</option>
                     <option value="comedies">Comedies</option>
                     <option value="action">Action</option>
                     <option value="romance">Romance</option>
                     <option value="dramas">Dramas</option>
                     <option value="thriller">Thriller</option>
                     <option value="horror">Horror</option>
                     <option value="sci-fi">Sci-Fi</option>
                     <option value="crime">Crime</option>
                     <option value="fantasy">Fantasy</option>
                     <option value="sports">Sports</option>
                     <option value="bollywood">Bollywood</option>
                     <option value="hollywood">Hollywood</option>
                     <option value="children & family">Children & Family</option>
                     <option value="award-winning">Award-Winning</option>
                     <option value="documentaries">Documentaries</option>
                     <option value="shorts">Shorts</option>
                     <option value="stand-up comedy">Stand-Up Comedy</option>
                     <option value="anime">Anime</option>
                </select>
            </div>
        )}
        <img src="https://i.ibb.co/0yFYr9t/wallpaperflare-com-wallpaper.jpg" alt="wallpaperflare-com-wallpaper" width="100%"border="0"/>
        <div className="info">
        <img src="https://i.ibb.co/GQmWtsx/lostinspace-removebg.png" alt="lostinspace-removebg" border="0"/>
            <span className="description">After crash-landing on an alien planet, the Robinson family fight against all odds to survive and escape, but they're surrounded by hidden dangers.</span>
            <div className="buttons">
                <button className="play">
                    <PlayArrow/>
                    <span> Play</span>
                </button>
                <button className="more">
                    <InfoOutlined/>
                    <span> More Info</span>
                </button>
            </div>
        </div>
    </div>
  )
}

export default Featured