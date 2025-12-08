import {
  faGithub,
  faGolang,
  faReact,
  faRust,
  IconDefinition,
} from "@fortawesome/free-brands-svg-icons";
import { faK } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import GitHubRepo from "../components/GitHubRepo";

interface GithubRepository {
  name: string;
  url: string;
  description: string;
  icon: IconDefinition;
  color: string;
}

function Works() {
  const githubRepos: GithubRepository[] = [
    {
      name: "rustic-viewer",
      url: "https://github.com/BlueGeckoJP/rustic-viewer",
      description: "An experimental image viewer using web tech stacks",
      icon: faReact,
      color: "#58c4dc",
    },
    {
      name: "explotty",
      url: "https://github.com/BlueGeckoJP/explotty",
      description: "Combined terminal and file explorer application",
      icon: faRust,
      color: "#dea584",
    },
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
    {
      name: "gridx2",
      url: "https://github.com/BlueGeckoJP/gridx2",
      description: "The successor project of parax2. faster and simpler",
      icon: faRust,
      color: "#dea584",
    },
  ];

  return (
    <>
      <div className="mt-8">
        <p className="text-2xl font-bold w-full border-b-2 border-[#9db2bf] mb-4 text-[#dde6ed]">
          Works
        </p>
        <p className="mx-2 mb-2 text-[#dde6ed]">
          I'll make something amazing in the future :D
        </p>
      </div>
      <div className="mt-8">
        <p className="text-2xl font-bold w-full border-b-2 border-[#9db2bf] mb-4 text-[#dde6ed]">
          Some GitHub Repos
        </p>
        {githubRepos.map((repo) => (
          <GitHubRepo
            key={repo.name}
            name={repo.name}
            url={repo.url}
            description={repo.description}
            icon={repo.icon}
            className="mx-2 mb-2"
            color={repo.color}
          />
        ))}
      </div>
      <div className="mt-8">
        <p className="text-2xl font-bold w-full border-b-2 border-[#9db2bf] mb-4 text-[#dde6ed]">
          And more!
        </p>
        <p className="mx-2 mb-2 text-[#dde6ed]">
          There are other smaller repositories on GitHub
        </p>
        <div className="mx-2 mb-2 flex items-center">
          <FontAwesomeIcon icon={faGithub} color="#9db2b7"></FontAwesomeIcon>
          <a
            className="text-[#9db2bf] no-underline pl-4"
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
