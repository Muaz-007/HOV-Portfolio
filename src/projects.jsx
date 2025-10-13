import { useState } from "react";
import green from "./assets/green.png";
import dynasty from "./assets/dynasty.png";
import expert from "./assets/expert.png";
import nivrt from "./assets/nivrt.png";
import sowfin from "./assets/sowfin.png";
import pro1laser from "./assets/pro1laser.png";
import saigility from "./assets/saigility.png";
import suitedsucces from "./assets/suitedsucces.png";
import safety from "./assets/safety.png";
import assetize from "./assets/assetize.png";
import looty from "./assets/looty.png";
import utility from "./assets/utility.png";
import hydration from "./assets/hydration.png";
import move from "./assets/move.png";
import credtent from "./assets/credtent.png";
import simmer from "./assets/simmer.png";
import abc from "./assets/logos/abc.png";
import bestcarpet from "./assets/logos/bestcarpet.png";
import bestpetservice from "./assets/logos/bestpetservice.png";
import passplay from "./assets/logos/passplay.png";
import sowfinLogo from "./assets/logos/sowfin.png"; // Renamed to avoid conflict
import thethai from "./assets/logos/thethai.png";

function Projects() {
  const [showAll, setShowAll] = useState(false);
  const [showAllWix, setShowAllWix] = useState(false);
  const [showAllLogos, setShowAllLogos] = useState(false);

  const projectdata = [
    {
      id: 1,
      title: "Green Fuel Renewal Cycle",
      description: `A process showcasing renewable green products, NuPower Gas™, and Green Power solutions.`,
      img: green,
      link: "https://crccrystal.com/",
    },
    {
      id: 2,
      title: "Dynasty Mattress",
      description:
        "Dynasty Mattress provides high-quality, affordable mattresses and sleep solutions.",
      img: dynasty,
      link: "https://dynastymattress.com/",
    },
    {
      id: 3,
      title: "Expert Thermal",
      description:
        "Expert Thermal provides advanced thermal design solutions for product reliability.",
      img: expert,
      link: "https://expertthermal.com/",
    },
    {
      id: 4,
      title: "NIVRT",
      description:
        "Helps its clients, to introspect, modernize, scale and optimize.",
      img: nivrt,
      link: "https://kylehayungs.com/",
    },
    {
      id: 5,
      title: "SowFin",
      description:
        "SowFin enables faster, smarter financial decisions with efficient analysis.",
      img: sowfin,
      link: "https://sowfin.com/",
    },
    {
      id: 6,
      title: "Pro1laser",
      description:
        "Alexa CO₂ delivers advanced, versatile laser solutions for surgical care.",
      img: pro1laser,
      link: "https://pro1laser.com/alexa-asthetic-co2/",
    },
    {
      id: 7,
      title: "Saigility",
      description:
        "We help businesses reinvent with AI to build a future-ready advantage.",
      img: saigility,
      link: "https://saigility.com/",
    },
    {
      id: 8,
      title: "Suited4Success",
      description: "The Benefits of becoming a Suited 4 Success Shining Star.",
      img: suitedsucces,
      link: "https://www.suited4success.org/",
    },
    {
      id: 9,
      title: "Safety Culture",
      description:
        "We empower frontline teams to work safer, smarter, and better daily.",
      img: safety,
      link: "https://safetyculture.com/",
    },
    {
      id: 10,
      title: "Credtent",
      description:
        "Credtent helps creators protect and profit from their work in the AI era.",
      img: credtent,
      link: "https://www.credtent.org/",
    },
    {
      id: 11,
      title: "Utility and Joy",
      description:
        "Utility and joy your premier affiliate marketing online store.",
      img: utility,
      link: "https://www.utilityandjoy.com/",
    },
    {
      id: 12,
      title: "Hydration Station",
      description:
        "More than just timekeeping, a watch that defines your style and personality every moment.",
      img: hydration,
      link: "https://hydrationstation.com/",
    },
    {
      id: 13,
      title: "Move Fitness",
      description:
        "More than just workouts, the gym is where strength is built and your future is shaped.",
      img: move,
      link: "https://movefitness.com/",
    },
  ];
  const designs = [
    {
      id: 1,
      title: "Simmer App UI Design",
      description:
        "A gamified finance learning app UI designed to motivate users with streaks, leaderboards, and rewards. Created using Figma for a clean, intuitive user experience.",
      img: simmer,
    },
  ];
  const logoDesigns = [
    {
      id: 1,
      img: abc,
    },
    {
      id: 2,
      img: bestcarpet,
    },
    {
      id: 3,
      img: bestpetservice,
    },
    {
      id: 4,
      img: passplay,
    },
    {
      id: 5,
      img: sowfinLogo,
    },
    {
      id: 6,
      img: thethai,
    },
  ];
  const wptoggle = showAll ? projectdata.slice(0, 8) : projectdata.slice(0, 6);
  const coded = projectdata.slice(8, 10);
  const wix = projectdata.slice(10, 14);
  const logosToShow = showAllLogos ? logoDesigns : logoDesigns.slice(0, 4);

  return (
    <div className="w-full max-w-full">
      {/* Intro text */}
      <div className="text-center my-12 px-4">
        <p className="font-semibold uppercase tracking-wide bg-gradient-to-l from-green-500 via-green-400 to-green-400 text-transparent bg-clip-text">
          Real-World Results
        </p>
        <h1 className="text-4xl text-white font-extrabold mt-1">
          Featured Projects
        </h1>
        <p className="text-gray-400 mt-2">
          See how I transform concepts into engaging digital experiences
        </p>
      </div>
      
      {/* WordPress Projects */}
      <div className="text-center mb-10 mt-16 px-4">
        <h2 className="text-2xl text-green-400 font-bold">
          WordPress Projects — Designed for Impact
        </h2>
      </div>

      <div className="grid gap-8 lg:grid-cols-3 sm:grid-cols-1 place-items-center px-4 md:px-8">
        {wptoggle.map((project) => (
          <div
            key={project.id}
            className="max-w-sm bg-[#1e293b] rounded-xl shadow-lg overflow-hidden transition-all duration-500 hover:shadow-[0_0_35px_rgba(34,197,94,0.5)] hover:border-green-400 border border-transparent"
          >
            <img
              src={project.img}
              alt={project.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h2 className="text-lg font-bold text-green-400">
                {project.title}
              </h2>
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mt-2">
                <p className="text-gray-300 text-sm">{project.description}</p>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 sm:mt-0 sm:ml-4 px-4 py-2 bg-green-500 hover:bg-green-600 text-white text-sm rounded-lg shadow transition whitespace-nowrap"
                >
                  Visit Site
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* See More button */}
      <div className="text-center mt-10">
        <button
          onClick={() => setShowAll(!showAll)}
          className="group relative text-lg font-semibold inline-flex items-center gap-2 hover:gap-3 transition-all duration-300"
        >
          <span className="relative bg-gradient-to-r from-green-400 to-green-600 bg-clip-text text-transparent after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-full after:bg-gradient-to-r after:from-green-400 after:to-green-600 after:rounded-full after:transition-transform after:duration-300 group-hover:after:scale-x-105">
            {showAll ? "Show Less" : "See More"}
          </span>
          <span className="text-green-400 group-hover:translate-x-1 transition-transform duration-300">
            →
          </span>
        </button>
      </div>

      {/* Coding websites */}
      <div className="text-center mb-8 mt-16 px-4">
        <h2 className="text-2xl text-green-400 font-bold">
          Custom-Coded Projects — Built for Performance
        </h2>
      </div>

      <div className="grid gap-8 md:grid-cols-2 sm:grid-cols-1 justify-center px-4 md:px-8 place-items-center">
        {coded.map((project) => (
          <div
            key={project.id}
            className="max-w-sm bg-[#1e293b] rounded-xl shadow-lg overflow-hidden transition-all duration-500 hover:shadow-[0_0_35px_rgba(34,197,94,0.5)] hover:border-green-400 border border-transparent"
          >
            <img
              src={project.img}
              alt={project.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h2 className="text-lg font-bold text-green-400">
                {project.title}
              </h2>
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mt-2">
                <p className="text-gray-300 text-sm">{project.description}</p>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 sm:mt-0 sm:ml-4 px-4 py-2 bg-green-500 hover:bg-green-600 text-white text-sm rounded-lg shadow transition whitespace-nowrap"
                >
                  Visit Site
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Wix Projects */}
      <div className="text-center mb-8 mt-16 px-4">
        <h2 className="text-2xl text-green-400 font-bold">
          Wix Projects — Crafted for Simplicity and Style
        </h2>
      </div>

      <div className="grid gap-8 lg:grid-cols-3 sm:grid-cols-1 justify-center px-4 md:px-8">
        {(showAllWix ? wix : wix.slice(0, 3)).map((project) => (
          <div
            key={project.id}
            className="max-w-sm bg-[#1e293b] rounded-xl shadow-lg overflow-hidden transition-all duration-500 hover:shadow-[0_0_35px_rgba(34,197,94,0.5)] hover:border-green-400 border border-transparent"
          >
            <img
              src={project.img}
              alt={project.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h2 className="text-lg font-bold text-green-400">
                {project.title}
              </h2>
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mt-2">
                <p className="text-gray-300 text-sm">{project.description}</p>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 sm:mt-0 sm:ml-4 px-4 py-2 bg-green-500 hover:bg-green-600 text-white text-sm rounded-lg shadow transition whitespace-nowrap"
                >
                  Visit Site
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Combined UI/UX Mobile App Designs Section */}
      <div className="text-center mb-8 mt-16 px-4">
        <div className="rounded-xl p-6 mb-6">
          <h2 className="text-2xl text-green-400 font-bold">
            UI/UX Mobile App Designs — Crafted for Experience
          </h2>
        </div>

        <div className="flex justify-center">
          <div className="max-w-6xl w-full text-center">
            <img
              src={simmer}
              alt="Simmer App UI Design"
              className="w-full h-auto object-contain rounded-xl"
            />
            <div className="mt-4 bg-[#1e293b] rounded-xl p-6 border border-green-500/30">
              <h3 className="text-xl text-green-400 font-semibold mb-2">
                Simmer App UI/UX Design
              </h3>
              <p className="text-gray-300 text-sm">
                A gamified finance learning mobile app designed in Figma —
                featuring streak tracking, leaderboards, rewards, and clean UI
                interactions for a smooth user journey.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Logo Designs Section */}
      <div className="text-center mb-10 px-4">
        <h2 className="text-2xl text-green-400 font-bold">
          Logo Designs — Brand Identity Creation
        </h2>
      </div>

      <div className="grid gap-6 lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 place-items-center px-4 md:px-8">
        {logosToShow.map((logo) => (
          <div
            key={logo.id}
            className="w-full bg-[#1e293b] rounded-xl shadow-lg overflow-hidden transition-all duration-500 hover:shadow-[0_0_35px_rgba(34,197,94,0.5)] hover:border-green-400 border border-transparent"
          >
            <div className="p-6 flex items-center justify-center bg-white h-40">
              <img
                src={logo.img}
                alt="Logo design"
                className="w-full h-full object-contain"
              />
            </div>
          </div>
        ))}
      </div>

      {/* See More button for Logos */}
      {logoDesigns.length > 4 && (
        <div className="text-center mt-10 mb-8">
          <button
            onClick={() => setShowAllLogos(!showAllLogos)}
            className="group relative text-lg font-semibold inline-flex items-center gap-2 hover:gap-3 transition-all duration-300"
          >
            <span className="relative bg-gradient-to-r from-green-400 to-green-600 bg-clip-text text-transparent after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-full after:bg-gradient-to-r after:from-green-400 after:to-green-600 after:rounded-full after:transition-transform after:duration-300 group-hover:after:scale-x-105">
              {showAllLogos ? "Show Less Logos" : "See More Logos"}
            </span>
            <span className="text-green-400 group-hover:translate-x-1 transition-transform duration-300">
              →
            </span>
          </button>
        </div>
      )}
    </div>
  );
}

export default Projects;