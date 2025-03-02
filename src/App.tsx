import { faGithub } from "@fortawesome/free-brands-svg-icons";
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
          <span>BlueGecko</span>
          <div className="nav-bar">
            <a>Home</a>
            <a>Works</a>
            <div className="nav-with-icon">
              <FontAwesomeIcon
                icon={faGithub}
                color="#dde6ed"
              ></FontAwesomeIcon>
              <a>GitHub</a>
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
        </div>
      </div>
    </>
  );
}

export default App;
