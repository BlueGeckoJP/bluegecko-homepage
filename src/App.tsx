import { faGithub, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect } from "react";
import "./App.css";
import profileImage from "./assets/profile-icon.png";

function App() {
  const blowingMessages = [
    "I can sleep for another 12 hours.",
    "Watching YouTube.",
    "I'm coding.",
    "日本からこんにちはー！！！！！",
    "やっぱり丸亀製麺のうどんが一番",
    "Playing Visual Studio Code.",
  ];

  useEffect(() => {
    const shapes = document.querySelectorAll(".background-shapes li");
    shapes.forEach((shape) => {
      const s = shape as HTMLElement;
      s.style.left = `${Math.random() * 100}vw`;
      s.style.animationDuration = `${Math.random() * 2 + 1}s`;
      s.style.animationDelay = `${Math.random() * 2}s`;

      const size = Math.random() * 5 + 1;
      s.style.width = `${size}rem`;
      s.style.height = `${size}rem`;
    });
  }, []);

  return (
    <>
      <ul className="background-shapes">
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
      </ul>
      <div className="app">
        <header className="app-header">
          <span>BlueGecko's HomePage</span>
          <div className="nav-bar">
            <a>Home</a>
            <a>Works</a>
            <div className="nav-with-icon">
              <FontAwesomeIcon
                icon={faGithub}
                color="#dde6ed"
              ></FontAwesomeIcon>
              <a href="https://github.com/BlueGeckoJP">GitHub</a>
            </div>
          </div>
        </header>
        <div className="centre-container">
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
              I am a hobbyist programmer living in Japan. I'm studying English
              and experimenting with various languages and technologies. My
              favorite language is Rust (though I haven't used it much lately).
            </p>
          </div>
          <div className="section">
            <p className="section-title">What I like</p>
            <p className="section-body">
              Coding, Rust, VSCode, Linux(Especially Arch Linux), Japan,
              Australia, Melbourne, Japanese Noodles, and more!
            </p>
          </div>
          <div className="section">
            <p className="section-title">Links</p>
            <div className="section-body">
              <FontAwesomeIcon
                icon={faGithub}
                color="#9db2b7"
              ></FontAwesomeIcon>
              <a className="link" href="https://github.com/BlueGeckoJP">
                @BlueGeckoJP
              </a>
            </div>
            <div className="section-body">
              <FontAwesomeIcon
                icon={faTwitter}
                color="#9db2b7"
              ></FontAwesomeIcon>
              <a className="link" href="https://twitter.com/BlueGeckoJP">
                @BlueGeckoJP
              </a>
            </div>
          </div>
          <span
            style={{
              backgroundColor: "red",
              padding: "0.5rem",
              borderRadius: "0.5rem",
              margin: "0 auto",
              display: "block",
              width: "fit-content",
            }}
          >
            This page is work in progress.
          </span>
        </div>
      </div>
    </>
  );
}

export default App;
