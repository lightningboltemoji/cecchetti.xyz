import { faGithubSquare, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faSquareEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Home() {
  return (
    <div className="flex flex-col w-full items-center">
      <video
        className="w-48 rounded-full"
        autoPlay
        loop
        muted
        playsInline
        controls={false}
      >
        <source src="memoji.mp4" type="video/mp4" />
        There should be a memoji here, but it looks like your browser
        doesn&apos;t support it!
      </video>
      <h1>Tanner Cecchetti</h1>
      <p>Software engineer 👨‍💻</p>
      <p>Seattle, WA 🌲</p>
      <div>
        <a target="_" href="https://www.linkedin.com/in/tanner-cecchetti/">
          <FontAwesomeIcon className="inline w-11" icon={faLinkedin} />
        </a>
        <a target="_" href="https://github.com/lightningboltemoji">
          <FontAwesomeIcon className="inline w-11 ml-1" icon={faGithubSquare} />
        </a>
        <a target="_" href="mailto:tanner@cecchetti.xyz">
          <FontAwesomeIcon
            className="inline w-11 ml-1"
            icon={faSquareEnvelope}
          />
        </a>
      </div>
    </div>
  );
}
