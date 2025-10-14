import { FaHandPointRight } from "react-icons/fa";
import pfp from "./assets/hovportfolio.jpg"
function Hero() {
  return (
    <section className="bg-[#0f172a] text-center pt-32 pb-16 px-6 min-h-screen flex flex-col justify-center items-center">
      {/* Personal profile image */}
      <img
        src={pfp}
        alt="Waqar Profile pic"
        className="w-32 h-32 rounded-full border-4 border-green-400 shadow-[0_0_15px_#86efac] mb-6"
      />

      <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">
        Hi, I’m <span className="text-green-400">Waqar Shah!</span>
      </h2>

      <p className="text-gray-400 text-lg max-w-2xl mb-8">
        I’m a passionate <span className="text-green-400">Web Developer</span>,{" "}
        <span className="text-green-400">WordPress Specialist</span>, and{" "}
        <span className="text-green-400">Graphic Designer</span>. I create smart
        digital solutions that help people and businesses grow, scale, and
        succeed in today’s fast-paced world.
      </p>

      <img
        src="https://em-content.zobj.net/source/apple/391/globe-showing-asia-australia_1f30f.png"
        alt="Globe Emoji"
        className="w-12 h-12 mb-2"
      />

      <div className="flex items-center space-x-2 bg-[#1e293b] border border-gray-600 rounded-lg px-3 py-1 mb-6">
        <span className="w-2.5 h-2.5 bg-green-400 rounded-full shadow-[0_0_8px_#86efac]"></span>
        <span className="text-gray-200 text-sm">
          Delivering innovative solutions worldwide
        </span>
      </div>

      <h1 className="text-3xl md:text-5xl font-extrabold text-white mb-4">
        Turning Ideas Into <br />
        <span className="text-green-400">Smart</span>{" "}
        <span className="text-green-500">Digital Experiences</span>
      </h1>
      <p className="text-gray-400 text-lg max-w-2xl mx-auto mt-2">
        I create responsive, user-friendly websites, alongside delivering
        WordPress and graphic design solutions combining clean code with
        creative design to build impactful digital experiences.
      </p>
      <div className="flex space-x-4 mt-3">
        <a
          href="#projects"
          className="bg-[#1e293b] hover:bg-[#334155] px-5 py-2 text-white rounded-lg cursor-pointer"
        >
          Explore my work
        </a>
        <button  className="bg-green-500 hover:bg-green-600 text-white px-5 py-2 rounded-lg shadow flex items-center space-x-2 cursor-pointer">
          <FaHandPointRight />
          <span>Let's connect</span>
        </button>
      </div>
    </section>
  );
}
export default Hero;
