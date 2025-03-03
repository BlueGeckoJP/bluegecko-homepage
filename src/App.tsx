import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect } from "react";
import { Link, Outlet } from "react-router";
import "./styles/App.css";

function App() {
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
            <Link to="/" className="nav-link">
              Home
            </Link>
            <Link to="/works" className="nav-link">
              Works
            </Link>
            <div className="nav-with-icon nav-link">
              <FontAwesomeIcon
                icon={faGithub}
                color="#dde6ed"
              ></FontAwesomeIcon>
              <a href="https://github.com/BlueGeckoJP">GitHub</a>
            </div>
          </div>
        </header>
        {/*<span
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
        </span>*/}
        <div className="centre-container">
          <Outlet />
        </div>
      </div>
    </>
  );
}

export default App;
