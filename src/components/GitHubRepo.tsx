import { faGithub, IconDefinition } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

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
      className={`no-underline mb-4 p-4 rounded-lg block transition-all duration-500 ease-in-out bg-no-repeat ${props.className}`}
      href={props.url}
      style={{
        backgroundImage: `linear-gradient(90deg, #1f1f1f 0%, #1f1f1f 85%, ${props.color} 100%)`,
        backgroundSize: "150% 100%",
        backgroundPosition: "50% 0",
      }}
      onMouseEnter={(e) =>
        (e.currentTarget.style.backgroundPosition = "100% 0")
      }
      onMouseLeave={(e) => (e.currentTarget.style.backgroundPosition = "50% 0")}
    >
      <div className="grid grid-cols-[1rem_1fr] grid-rows-[auto_auto] gap-x-4 items-center">
        <FontAwesomeIcon
          icon={faGithub}
          color="#9db2b7"
          className="place-self-center"
        />
        <span className="text-xl font-bold text-[#dde6ed]">{props.name}</span>
        <FontAwesomeIcon
          icon={props.icon}
          color="#9db2b7"
          className="place-self-center"
        />
        <span className="text-[#dde6ed]">{props.description}</span>
      </div>
    </a>
  );
}

export default GitHubRepo;
