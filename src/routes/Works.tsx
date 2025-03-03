import {
  faGithub,
  faGolang,
  faReact,
} from "@fortawesome/free-brands-svg-icons";
import { faK } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../styles/Works.css";

function Works() {
  return (
    <>
      <div className="section">
        <p className="section-title">Works</p>
        <p className="section-body">
          I'll make something amazing in the future :D
        </p>
      </div>
      <div className="section">
        <p className="section-title">Some GitHub Repos</p>
        <a
          className="section-body github-repos"
          href="https://github.com/BlueGeckoJP/FramelessViewer"
        >
          <div>
            <FontAwesomeIcon
              icon={faGithub}
              color="#9db2b7"
              className="repo-icon"
            ></FontAwesomeIcon>
            <span className="repo-name">FramelessViewer</span>
            <FontAwesomeIcon
              icon={faK}
              color="#9db2b7"
              className="repo-icon"
            ></FontAwesomeIcon>
            <span>Image viewer with tiling</span>
          </div>
        </a>
        <a
          className="section-body github-repos"
          href="https://github.com/BlueGeckoJP/parax2"
        >
          <div>
            <FontAwesomeIcon
              icon={faGithub}
              color="#9db2b7"
              className="repo-icon"
            ></FontAwesomeIcon>
            <span className="repo-name">parax2</span>
            <FontAwesomeIcon
              icon={faGolang}
              color="#9db2b7"
              className="repo-icon"
            ></FontAwesomeIcon>
            <span>Application to list images in a folder</span>
          </div>
        </a>
        <a
          className="section-body github-repos"
          href="https://github.com/BlueGeckoJP/bluegecko-homepage"
        >
          <div>
            <FontAwesomeIcon
              icon={faGithub}
              color="#9db2b7"
              className="repo-icon"
            ></FontAwesomeIcon>
            <span className="repo-name">bluegecko-homepage</span>
            <FontAwesomeIcon
              icon={faReact}
              color="#9db2b7"
              className="repo-icon"
            ></FontAwesomeIcon>
            <span>This HomePage!</span>
          </div>
        </a>
      </div>
    </>
  );
}

export default Works;
