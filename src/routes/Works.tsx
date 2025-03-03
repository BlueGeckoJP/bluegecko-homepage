import {
  faGithub,
  faGolang,
  faReact,
} from "@fortawesome/free-brands-svg-icons";
import { faK } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import GitHubRepo from "../components/GitHubRepo";
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
        <GitHubRepo
          name="FramelessViewer"
          url="https://github.com/BlueGeckoJP/FramelessViewer"
          description="Image viewer with tiling"
          icon={faK}
          className="section-body"
          color="#a534f6"
        />
        <GitHubRepo
          name="parax2"
          url="https://github.com/BlueGeckoJP/parax2"
          description="Application to list images in a folder"
          icon={faGolang}
          className="section-body"
          color="#007d9c"
        />
        <GitHubRepo
          name="bluegecko-homepage"
          url="https://github.com/BlueGeckoJP/bluegecko-homepage"
          description="This HomePage!"
          icon={faReact}
          className="section-body"
          color="#58c4dc"
        />
      </div>
      <div className="section">
        <p className="section-title">And more!</p>
        <p className="section-body">
          There are other smaller repositories on GitHub
        </p>
        <div className="section-body">
          <FontAwesomeIcon icon={faGithub} color="#9db2b7"></FontAwesomeIcon>
          <a
            className="link"
            href="https://github.com/BlueGeckoJP?tab=repositories"
          >
            GitHub Repositories
          </a>
        </div>
      </div>
    </>
  );
}

export default Works;
