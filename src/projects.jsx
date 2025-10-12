import green from "./assets/green.png";
import dynasty from "./assets/dynasty.png";
import expert from "./assets/expert.png"
import nivrt from "./assets/nivrt.png"
function Projects() {
  return (
    <>
      {/* Heading Section */}
      <div className="text-center my-12">
        <p
          className="font-semibold uppercase tracking-wide
        bg-gradient-to-l from-green-500 via-green-400 to-green-400
        text-transparent bg-clip-text"
        >
          Real-World Results
        </p>
        <h1 className="text-4xl text-white font-extrabold mt-1">
          Featured Projects
        </h1>
        <p className="text-gray-400 mt-2">
          See how I transform concepts into engaging digital experiences
        </p>
      </div>

      {/* Grid Container for Cards */}
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 place-items-center px-6">
        {/* Card 1 */}
        <div className="max-w-sm bg-[#1e293b] rounded-xl shadow-lg overflow-hidden">
          <img
            src={green}
            alt="Green Fuel Renewal Cycle"
            className="w-full h-48 object-cover"
          />
          <div className="p-4">
            <h2 className="text-lg font-bold text-green-400">
              Green Fuel Renewal Cycle
            </h2>
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mt-2">
              <p className="text-gray-300 text-sm">
                A process showcasing renewable green products, NuPower Gas™, and
                Green Power solutions.
              </p>
              <a
                href="https://example.com"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 sm:mt-0 sm:ml-4 px-4 py-2 bg-green-500 hover:bg-green-600 
                text-white text-sm rounded-lg shadow transition whitespace-nowrap"
              >
                Visit Site
              </a>
            </div>
          </div>
        </div>

        {/* Card 2 */}
        <div className="max-w-sm bg-[#1e293b] rounded-xl shadow-lg overflow-hidden">
          <img
            src={dynasty}
            alt="dynasty sleep solutions"
            className="w-full h-48 object-cover"
          />
          <div className="p-4">
            <h2 className="text-lg font-bold text-green-400">Dynasty Mattress</h2>
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mt-2">
              <p className="text-gray-300 text-sm">
                Dynasty Mattress provides high-quality, affordable mattresses and
                sleep solutions.
              </p>
              <a
                href="https://dynastymattress.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 sm:mt-0 sm:ml-4 px-4 py-2 bg-green-500 hover:bg-green-600 text-white text-sm rounded-lg shadow transition whitespace-nowrap"
              >
                Visit Site
              </a>
            </div>
          </div>
        </div>

        {/* Card 3 */}
        <div className="max-w-sm bg-[#1e293b] rounded-xl shadow-lg overflow-hidden">
          <img
            src={expert}
            alt="expert "
            className="w-full h-48 object-cover"
          />
          <div className="p-4">
            <h2 className="text-lg font-bold text-green-400">Expert Thermal</h2>
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mt-2">
              <p className="text-gray-300 text-sm">
              Expert Thermal provides advanced thermal design solutions for product reliability.

              </p>
              <a
                href="https://dynastymattress.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 sm:mt-0 sm:ml-4 px-4 py-2 bg-green-500 hover:bg-green-600 text-white text-sm rounded-lg shadow transition whitespace-nowrap"
              >
                Visit Site
              </a>
            </div>
          </div>
        </div>
        {/* card 4  */}  
        <div className="max-w-sm bg-[#1e293b] rounded-xl shadow-lg overflow-hidden">
          <img
            src={nivrt}
            alt="dynasty sleep solutions"
            className="w-full h-48 object-cover"
          />
          <div className="p-4">
            <h2 className="text-lg font-bold text-green-400">NIVRT</h2>
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mt-2">
              <p className="text-gray-300 text-sm">
               Helps its clients, to introspect, modernize, scale and optimize.

              </p>
              <a
                href="https://dynastymattress.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 sm:mt-0 sm:ml-4 px-4 py-2 bg-green-500 hover:bg-green-600 text-white text-sm rounded-lg shadow transition whitespace-nowrap"
              >
                Visit Site
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Projects;
