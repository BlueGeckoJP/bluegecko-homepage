import { faGithub, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import profileImage from "/profile-icon.png";

function Home() {
  const blowingMessages = [
    "I can sleep for another 12 hours.",
    "Watching YouTube.",
    "I'm coding.",
    "日本からこんにちはー！！！！！",
    "やっぱり丸亀製麺のうどんが一番",
    "Playing Visual Studio Code.",
    "Rust is the best programming language!",
    "btw, I use Arch Linux.",
    "yay -S bluegecko-homepage",
  ];

  return (
    <>
      <div className="mx-auto pt-12">
        <div className="relative p-8 w-full h-12 bg-[#526d82] rounded-[10px] mb-8 flex justify-center items-center before:content-[''] before:absolute before:right-[25px] before:-bottom-[15px] before:block before:w-0 before:h-0 before:border-r-15 before:border-r-transparent before:border-l-15 before:border-l-transparent before:border-t-15 before:border-t-[#526d82]">
          <span className="text-2xl text-[#dde6ed]">
            {
              blowingMessages[
                Math.floor(Math.random() * blowingMessages.length)
              ]
            }
          </span>
        </div>
        <div className="flex justify-between items-center">
          <div>
            <p className="text-3xl font-bold text-[#dde6ed]">
              Hi I'm BlueGecko!
            </p>
            <p className="text-[#dde6ed]">
              I'm from Japan! I do coding as a hobby!
            </p>
          </div>
          <img
            src={profileImage}
            className="w-20 h-20 rounded-full ml-4"
            alt="Profile Icon"
          ></img>
        </div>
      </div>
      <div className="mt-8">
        <p className="text-2xl font-bold w-full border-b-2 border-[#9db2bf] mb-4 text-[#dde6ed]">
          Self Introduction
        </p>
        <p className="mx-2 mb-2 text-[#dde6ed]">
          I am a hobbyist programmer living in Japan.
          <br />
          I'm studying English and experimenting with various languages and
          technologies.
          <br />
          My favorite language is Rust.
          <br />
          (最近めっちゃ使ってるけどやっぱRustがさいきょー!)
        </p>
      </div>
      <div className="mt-8">
        <p className="text-2xl font-bold w-full border-b-2 border-[#9db2bf] mb-4 text-[#dde6ed]">
          What I like
        </p>
        <p className="mx-2 mb-2 text-[#dde6ed]">
          Coding, Rust, VSCode, Linux(Especially Arch Linux), Japan, Australia,
          Melbourne, Japanese Noodles, and more!
        </p>
      </div>
      <div className="mt-8">
        <p className="text-2xl font-bold w-full border-b-2 border-[#9db2bf] mb-4 text-[#dde6ed]">
          Links
        </p>
        <div className="mx-2 mb-2 flex items-center">
          <FontAwesomeIcon icon={faGithub} color="#9db2b7"></FontAwesomeIcon>
          <a
            className="text-[#9db2bf] no-underline pl-4"
            href="https://github.com/BlueGeckoJP"
          >
            @BlueGeckoJP
          </a>
        </div>
        <div className="mx-2 mb-2 flex items-center">
          <FontAwesomeIcon icon={faTwitter} color="#9db2b7"></FontAwesomeIcon>
          <a
            className="text-[#9db2bf] no-underline pl-4"
            href="https://twitter.com/BlueGeckoJP"
          >
            @BlueGeckoJP
          </a>
        </div>
      </div>
    </>
  );
}

export default Home;
