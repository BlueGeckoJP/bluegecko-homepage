import { faGithub, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../styles/Home.css";
import profileImage from "/profile-icon.png";

function Home() {
  const blowingMessages = [
    "I can sleep for another 12 hours.",
    "Watching YouTube.",
    "I'm coding.",
    "日本からこんにちはー！！！！！",
    "やっぱり丸亀製麺のうどんが一番",
    "Playing Visual Studio Code.",
  ];

  return (
    <>
      <div className="profile">
        <div className="blowing-message">
          <span>
            {
              blowingMessages[
                Math.floor(Math.random() * blowingMessages.length)
              ]
            }
          </span>
        </div>
        <div className="profile-flex">
          <div>
            <p className="profile-msg">Hi I'm BlueGecko!</p>
            <p>I'm from Japan! I do coding as a hobby!</p>
          </div>
          <img src={profileImage}></img>
        </div>
      </div>
      <div className="section">
        <p className="section-title">Self Introduction</p>
        <p className="section-body">
          I am a hobbyist programmer living in Japan.
          <br></br>
          I'm studying English and experimenting with various languages and
          technologies.
          <br></br>
          My favorite language is Rust.
          <br></br>
          (最近めっちゃ使ってるけどやっぱRustがさいきょー!)
        </p>
      </div>
      <div className="section">
        <p className="section-title">What I like</p>
        <p className="section-body">
          Coding, Rust, VSCode, Linux(Especially Arch Linux), Japan, Australia,
          Melbourne, Japanese Noodles, and more!
        </p>
      </div>
      <div className="section">
        <p className="section-title">Links</p>
        <div className="section-body">
          <FontAwesomeIcon icon={faGithub} color="#9db2b7"></FontAwesomeIcon>
          <a className="link" href="https://github.com/BlueGeckoJP">
            @BlueGeckoJP
          </a>
        </div>
        <div className="section-body">
          <FontAwesomeIcon icon={faTwitter} color="#9db2b7"></FontAwesomeIcon>
          <a className="link" href="https://twitter.com/BlueGeckoJP">
            @BlueGeckoJP
          </a>
        </div>
      </div>
    </>
  );
}

export default Home;
