import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import gsap from "gsap";
import { useEffect } from "react";
import { Link, Outlet } from "react-router";
import "./styles/App.css";

function App() {
  function animateBackgroundShape(shape: HTMLElement) {
    const randomLeft = Math.random() * 100;
    const duration = Math.random() * 2 + 1;
    const delay = Math.random() * 2;
    const size = Math.random() * 5 + 1;

    gsap.set(shape, {
      left: `${randomLeft}vw`,
      width: `${size}rem`,
      height: `${size}rem`,
      y: "150px",
      rotation: 0,
      opacity: 0.2,
      borderRadius: 0,
    });

    gsap.to(shape, {
      y: "-100vh",
      rotation: 720,
      opacity: 0,
      borderRadius: "50%",
      duration: duration,
      delay: delay,
      ease: "none",
      repeat: -1,
    });
  }

  useEffect(() => {
    const shapes = document.querySelectorAll(".background-shape");
    shapes.forEach((shape) => {
      animateBackgroundShape(shape as HTMLElement);
    });
  }, []);

  return (
    <>
      <ul className="background-shapes">
        {Array.from({ length: 10 }).map((_, index) => (
          <li
            key={index}
            className="background-shape bg-white absolute block list-none"
          ></li>
        ))}
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
