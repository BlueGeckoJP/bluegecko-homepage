import { faGithub, IconDefinition } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../styles/GitHubRepos.css";

type Props = {
  name: string;
  url: string;
  description: string;
  icon: IconDefinition;
  className?: string;
};

function GitHubRepo(props: Props) {
  return (
    <a className={`github-repos ${props.className}`} href={props.url}>
      <div>
        <FontAwesomeIcon
          icon={faGithub}
          color="#9db2b7"
          className="repo-icon"
        />
        <span className="repo-name">{props.name}</span>
        <FontAwesomeIcon
          icon={props.icon}
          color="#9db2b7"
          className="repo-icon"
        />
        <span>{props.description}</span>
      </div>
    </a>
  );
}

export default GitHubRepo;
