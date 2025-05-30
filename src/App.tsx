import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import gsap from "gsap";
import { useEffect } from "react";
import { Link, Outlet } from "react-router";

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
      <div className="w-screen h-screen flex flex-col">
        <header className="flex justify-between items-center py-4 px-8 w-1/2 mx-auto">
          <span className="text-2xl font-bold text-[#dde6ed]">
            BlueGecko's HomePage
          </span>
          <div className="flex justify-between items-center">
            <Link
              to="/"
              className="text-[#dde6ed] no-underline py-2 px-4 border-b border-transparent transition-colors duration-500 ease-linear hover:border-[#dde6ed]"
            >
              Home
            </Link>
            <Link
              to="/works"
              className="text-[#dde6ed] no-underline py-2 px-4 border-b border-transparent transition-colors duration-500 ease-linear hover:border-[#dde6ed]"
            >
              Works
            </Link>
            <div className="flex justify-center items-center py-2 px-4 border-b border-transparent transition-colors duration-500 ease-linear hover:border-[#dde6ed]">
              <FontAwesomeIcon
                icon={faGithub}
                color="#dde6ed"
              ></FontAwesomeIcon>
              <a
                href="https://github.com/BlueGeckoJP"
                className="text-[#dde6ed] no-underline p-0 ml-2"
              >
                GitHub
              </a>
            </div>
          </div>
        </header>
        <div className="w-[32rem] flex-grow backdrop-blur-md mx-auto">
          <Outlet />
        </div>
      </div>
    </>
  );
}

export default App;

// General styles that were in App.css and are now applied via Tailwind:
// body, html: margin: 0; -> Applied by default or through resets, ensure your global styles or a reset CSS handles this.
// body: background-color: #27374d; -> This should be applied to the root element or body in your main.css or index.html if not already.
// *: box-sizing: border-box; font-family: "Montserrat", serif; font-optical-sizing: auto; font-weight: normal; font-style: normal; -> Handled by Tailwind's preflight or can be configured in tailwind.config.js.
// span, p: color: #dde6ed; margin: 0; -> text-[#dde6ed] m-0 applied where needed.
// .section: margin-top: 2rem; -> mt-8
// .section .section-title: font-size: 1.5rem; font-weight: 700; width: 100%; border-bottom: 2px solid #9db2bf; margin-bottom: 1rem; -> text-2xl font-bold w-full border-b-2 border-[#9db2bf] mb-4
// .section .section-body: margin-left: 0.5rem; margin-right: 0.5rem; margin-bottom: 0.5rem; -> mx-2 mb-2
// .link: color: #9db2bf; text-decoration: none; padding-left: 1rem; -> text-[#9db2bf] no-underline pl-4
// ::view-transition-old(root), ::view-transition-new(root): animation-duration: 0.6s; -> This is for View Transitions API, not directly convertible to Tailwind classes. Keep this in a global CSS file if needed.

// The .background-shapes and its animation are handled by GSAP and inline styles, so no Tailwind conversion is needed for those.
