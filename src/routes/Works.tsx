import {
  faGithub,
  faGolang,
  faReact,
  IconDefinition,
} from "@fortawesome/free-brands-svg-icons";
import { faK } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import GitHubRepo from "../components/GitHubRepo";
import "../styles/Works.css";

interface GithubRepsitory {
  name: string;
  url: string;
  description: string;
  icon: IconDefinition;
  color: string;
}

function Works() {
  const githubRepos: GithubRepsitory[] = [
    {
      name: "FramelessViewer",
      url: "https://github.com/BlueGeckoJP/FramelessViewer",
      description: "Image viewer with tiling",
      icon: faK,
      color: "#a534f6",
    },
    {
      name: "parax2",
      url: "https://github.com/BlueGeckoJP/parax2",
      description: "Application to list images in a folder",
      icon: faGolang,
      color: "#007d9c",
    },
    {
      name: "bluegecko-homepage",
      url: "https://github.com/BlueGeckoJP/bluegecko-homepage",
      description: "This HomePage!",
      icon: faReact,
      color: "#58c4dc",
    },
  ];

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
        {
          githubRepos.map((repo) => (
            <GitHubRepo
              key={repo.name}
              name={repo.name}
              url={repo.url}
              description={repo.description}
              icon={repo.icon}
              className="section-body"
              color={repo.color}
            />
          ))
        }
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
