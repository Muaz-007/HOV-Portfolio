function Projectsam() {
  const projectdata = [
    {
      id: 1,
      title: "Green Fuel Renewal Cycle",
      description: `A process showcasing renewable green products, NuPower Gas™, 
      and Green Power solutions.`,
      img: green,
      link: "https://crccrystal.com/",
    },
    {
      id: 2,
      title: "Dynasty Mattress",
      description:  "Dynasty Mattress provides high-quality, affordable mattresses and sleep solutions.",
      img: dynasty,
      link: "https://dynastymattress.com/",
    },
    {
      id: 3,
      title: "Expert Thermal",
      description: "Expert Thermal provides advanced thermal design solutions for product reliability.",
      img: expert,
      link: "https://expertthermal.com/",
    },
    {
      id: 4,
      title: "NIVRT",
      description:"Helps its clients, to introspect, modernize, scale and optimize",
      img: nivrt,
      link: "https://kylehayungs.com/",
    },
    {
        id:5,
        title:"SowFin",
        description:"SowFin enables faster, smarter financial decisions with efficient analysis.",
        img:sowfin,
        link:"https://sowfin.com/",
    },
    {
        id:6,
        title:"Pro1laser",
        description:"Alexa CO₂ delivers advanced, versatile laser solutions for aesthetic and surgical care.",
        img:pro1laser,
        link:"https://pro1laser.com/alexa-asthetic-co2/",
    },
    {
        id:7,
        title:"Saigility",
        description:"We help businesses reinvent with AI to build a future-ready advantage.",
        img:saigility,
        link:"https://saigility.com/",
    },
    {
        id:8,
        title:"suited4success",
        description:"The Benefits of becoming a Suited 4 Success Shining Star.",
        img:suitedsucces,
        link:"https://www.suited4success.org/",
    },
    {
        id:9,
        title:"Safety Culture",
        description:"We empower frontline teams to work safer, smarter, and better daily.",
        img:safety,
        link:"https://safetyculture.com/",
    },
    {
        id:10,
        title:"Assetize.Today",
        description:"Founders shouldn’t wait to accumulate enough revenue to get funded!",
        img:assetize,
        link:"https://www.assetize.today/",
    },
    {
        id:11,
        title:"Looty",
        description:"Looty is a gamified loyalty platform where users mint NFT keys, open loot boxes, and win exclusive rewards.",
        img:looty,
        link:"https://looty.fi/",
    },
    {
        id:12,
        title:"Utility and joy",
        description:"Utility and joy your premier affiliate marketing online store",
        img:utility,
        link:"https://www.utilityandjoy.com/",
    },
    {
        id:13,
        title:"Hydration station",
        description:"More than just timekeeping, a watch that defines your style and personality every moment.",
        img:hydration,
        link:"https://hydrationstation.com/",
    },
    {
        id:14,
        title:"Move Fitness",
        description:"More than just workouts, the gym is where strength is built and your future is shaped.",
        img:move,
        link:"https://movefitness.com/",
    },
    {
        id:15,
        title:"Credtent",
        description:"Credtent helps creators protect and profit from their work in the AI era.",
        img:credtent,
        link:"https://www.credtent.org/",
    }
  ];
  return <>
  {/* text section  */}
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
      {/* card section */}
      <div className="grid gap-8 lg:grid-cols-3 sm:grid-cols-1 place-items-center px-6">
       { projectdata.map((project)=>(
        <>
        <div> </div>
        </>
       )
)};
      </div>
  </>;
}
export default Projectsam;
