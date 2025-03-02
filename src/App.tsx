import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./App.css";

function App() {
  return (
    <>
      <div className="app">
        <div className="centre-container">
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
        </div>
      </div>
    </>
  );
}

export default App;
