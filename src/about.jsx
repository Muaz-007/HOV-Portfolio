function About() {
  const tools = {
    "Frontend Development": [
      "JavaScript",
      "React",
      "HTML5",
      "CSS3",
      "Tailwind CSS",
      "Bootstrap"
    ],
    "Backend & Tools": [
      "Node.js",
      "Git",
      "GitHub",
      "REST APIs"
    ],
    "Platforms & CMS": [
      "WordPress",
      "Wix",
      "Shopify"
    ],
    "Design & Creative": [
      "Graphic Design",
      "UI/UX Design",
      "Logo Design",
      "Figma",
      "Adobe Photoshop",
      "Adobe Illustrator"
    ]
  };

  return (
    <div id="about">
      <div className="text-center my-12">
        <p className="font-semibold uppercase tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-green-300 via-green-400 to-green-500">
          About Me
        </p>

        <h2 className="text-4xl font-extrabold bg-clip-text bg-gradient-to-r text-white mt-2">
          A Sneak Peak At What I Do
        </h2>

        <div className="text-gray-400 mt-2 max-w-2xl mx-auto">
          <p className="text-gray-300 max-w-2xl mx-auto leading-relaxed">
            From my workspace in <span className="text-green-400">Lahore, Pakistan</span>, I blend <span className="text-green-400">code and creativity</span>
            as a <span className="text-green-400">web developer and graphic designer</span>. I build dynamic WordPress
            solutions and design captivating visuals that make brands stand out.
            Beyond pixels and programming, I'm constantly learning new
            technologies and embracing creative problems that fuel my growth in
            this ever-evolving digital landscape.
          </p>
        </div>
      </div>
      
      <div className="p-6 text-center my-12 border border-green-500 rounded-2xl bg-gray-800 max-w-[850px] mx-auto shadow-[0_0_25px_rgba(34,197,94,0.3)]">
        <h2 className="text-2xl font-extrabold bg-clip-text bg-gradient-to-r text-white mt-2">
          My Toolbox
        </h2>

        <p className="text-gray-400 mt-2">
          Explore the technologies and tools I use to craft exceptional digital
          experiences.
        </p>

        {/* Render tools by category */}
        {Object.entries(tools).map(([category, skills]) => (
          <div key={category} className="mt-6">
            <h3 className="text-lg font-semibold text-green-400 mb-3">
              {category}
            </h3>
            <div className="flex flex-wrap justify-center gap-3">
              {skills.map((skill, index) => (
                <span
                  key={index}
                  className="px-4 py-2 text-neutral-100 border border-gray-700 rounded-md text-sm bg-[#0f172a] transition-all duration-300 hover:border-green-400 hover:shadow-[0_0_15px_rgba(34,197,94,0.3)] hover:scale-105 cursor-pointer"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="bg-gradient-to-r from-cyan-400 to-emerald-400 rounded-lg p-6 flex flex-col md:flex-row items-center justify-between max-w-[850px] mx-auto mt-12">
        <div>
          <h2 className="text-xl md:text-2xl font-bold text-black">
            Let&apos;s create something amazing together
          </h2>
          <p className="text-sm text-black/70 mt-1">
            Ready to bring your next project to life? Let&apos;s connect and
            discuss how I can help you achieve your goals.
          </p>
        </div>
        <button className="mt-4 md:mt-0 px-5 py-2 bg-black text-white rounded-md hover:bg-gray-800 transition-all duration-300 hover:scale-105">
          Contact Me
        </button>
      </div>
    </div>
  );
}

export default About;