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

    shape.style.width = `${size}rem`;
    shape.style.height = `${size}rem`;
    shape.style.left = `${randomLeft}vw`;

    gsap.set(shape, {
      y: "0",
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
      <ul className="absolute top-0 left-0 w-full h-full -z-10 overflow-hidden m-0">
        {Array.from({ length: 10 }).map((_, index) => (
          <li
            key={index}
            className="background-shape bg-white absolute block list-none -bottom-32"
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
        <div className="centre-container">
          <Outlet />
        </div>
      </div>
    </>
  );
}

export default App;
