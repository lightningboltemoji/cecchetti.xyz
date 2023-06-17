import { faGithubSquare, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faSquareEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Spiral from "./spiral";

export default function Home() {
  return (
    <div className="flex flex-col w-screen h-screen justify-center overflow-hidden">
      <div className="flex flex-col items-center">
        <div className="grid grid-rows-1 grid-cols-1">
          <video
            className="w-48 rounded-full mb-2 row-span-full col-span-full"
            autoPlay
            loop
            muted
            playsInline
            controls={false}
          >
            <source src="memoji.mp4" type="video/mp4" />
            There should be a memoji here, but it looks like your browser doesn&apos;t support it!
          </video>
          <div className="m-auto -z-50 row-span-full col-span-full">
            <Spiral />
          </div>
        </div>
        <h1 className="text-[2rem] md:text-[3.125rem] font-bold mb-1">Tanner Cecchetti</h1>
        <p className="text-[1.375rem]">Software engineer 👨‍💻</p>
        <p className="text-[1.375rem] mb-4">Seattle, WA 🌲</p>
        <div>
          <a target="_" href="https://www.linkedin.com/in/tanner-cecchetti/">
            <FontAwesomeIcon className="inline w-10" icon={faLinkedin} />
          </a>
          <a target="_" href="https://github.com/lightningboltemoji">
            <FontAwesomeIcon className="inline w-10 ml-1" icon={faGithubSquare} />
          </a>
          <a target="_" href="mailto:tanner@cecchetti.xyz">
            <FontAwesomeIcon className="inline w-10 ml-1" icon={faSquareEnvelope} />
          </a>
        </div>
      </div>
    </div>
  );
}
