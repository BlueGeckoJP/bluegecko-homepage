import { faGithub, IconDefinition } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../styles/GitHubRepo.css";

type Props = {
  name: string;
  url: string;
  description: string;
  icon: IconDefinition;
  className?: string;
  color: string;
};

function GitHubRepo(props: Props) {
  return (
    <a
      className={`github-repo ${props.className}`}
      href={props.url}
      style={{
        backgroundImage: `linear-gradient(90deg, #1f1f1f 0%, #1f1f1f 85%, ${props.color} 100%)`,
      }}
    >
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
