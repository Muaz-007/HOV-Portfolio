import { useState, useRef } from "react";
import emailjs from '@emailjs/browser';

function About() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const formRef = useRef();

  const tools = {
    "Frontend Development": [
      "JavaScript",
      "React",
      "HTML5",
      "CSS3",
      "Tailwind CSS",
      "Bootstrap",
    ],
    "Backend & Tools": ["Node.js", "Git", "GitHub", "REST APIs"],
    "Platforms & CMS": ["WordPress", "Wix", "Shopify"],
    "Design & Creative": [
      "Graphic Design",
      "UI/UX Design",
      "Logo Design",
      "Figma",
      "Adobe Photoshop",
      "Adobe Illustrator",
    ],
  };

  const handleContactClick = () => {
    setIsModalOpen(true);
    setSubmitStatus(null);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSubmitStatus(null);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    // EmailJS service configuration
    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    if (!serviceId || !templateId || !publicKey) {
      console.error("❌ EmailJS credentials are missing in .env file");
      setSubmitStatus("error");
      setIsSubmitting(false);
      alert("EmailJS configuration is missing. Please check your .env file.");
      return;
    }

    emailjs
      .sendForm(serviceId, templateId, formRef.current, {
        publicKey: publicKey,
      })
      .then(
        (result) => {
          console.log("✅ Email sent successfully:", result.text);
          setSubmitStatus("success");
          formRef.current.reset();

          setTimeout(() => {
            setIsModalOpen(false);
            setSubmitStatus(null);
          }, 2000);
        },
        (error) => {
          console.error("❌ Error sending email:", error.text);
          setSubmitStatus("error");
        }
      )
      .finally(() => {
        setIsSubmitting(false);
      });
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
            From my workspace in{" "}
            <span className="text-green-400">Lahore, Pakistan</span>, I blend{" "}
            <span className="text-green-400">code and creativity</span>
            as a{" "}
            <span className="text-green-400">
              web developer and graphic designer
            </span>
            . I build dynamic WordPress solutions and design captivating visuals
            that make brands stand out. Beyond pixels and programming, I'm
            constantly learning new technologies and embracing creative problems
            that fuel my growth in this ever-evolving digital landscape.
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

      <div
        id="contact"
        className="bg-gradient-to-r from-green-500 via-green-400 to-cyan-400 rounded-lg p-6 flex flex-col md:flex-row items-center justify-between max-w-[850px] mx-auto mt-12"
      >
        <div>
          <h2 className="text-xl md:text-2xl font-bold text-black">
            Let&apos;s create something amazing together
          </h2>
          <p className="text-sm text-black/70 mt-1">
            Ready to bring your next project to life? Let&apos;s connect and
            discuss how I can help you achieve your goals.
          </p>
        </div>
        <button
          onClick={handleContactClick}
          className="mt-4 md:mt-0 px-5 py-2 bg-black text-white rounded-md hover:bg-gray-800 transition-all duration-300 hover:scale-105"
        >
          Contact Me
        </button>
      </div>

      {/* Contact Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-gray-800 rounded-2xl p-6 w-full max-w-md border border-green-500 shadow-[0_0_25px_rgba(34,197,94,0.3)]">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl font-bold text-white">Get In Touch</h3>
              <button
                onClick={closeModal}
                className="text-gray-400 hover:text-white text-2xl"
              >
                &times;
              </button>
            </div>

            {submitStatus === "success" ? (
              <div className="text-center py-8">
                <div className="text-green-400 text-5xl mb-4">✓</div>
                <h4 className="text-white text-lg font-semibold mb-2">
                  Message Sent!
                </h4>
                <p className="text-gray-400">
                  Thank you for reaching out. I'll get back to you soon!
                </p>
              </div>
            ) : (
              <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-300 mb-1"
                  >
                    Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="from_name"
                    required
                    className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md text-white placeholder-gray-400 focus:outline-none focus:border-green-500 focus:ring-1 focus:ring-green-500"
                    placeholder="Your Name"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-300 mb-1"
                  >
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="from_email"
                    required
                    className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md text-white placeholder-gray-400 focus:outline-none focus:border-green-500 focus:ring-1 focus:ring-green-500"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label
                    htmlFor="subject"
                    className="block text-sm font-medium text-gray-300 mb-1"
                  >
                    Subject *
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    required
                    className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md text-white placeholder-gray-400 focus:outline-none focus:border-green-500 focus:ring-1 focus:ring-green-500"
                    placeholder="Project Inquiry"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-300 mb-1"
                  >
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows="4"
                    className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md text-white placeholder-gray-400 focus:outline-none focus:border-green-500 focus:ring-1 focus:ring-green-500 resize-none"
                    placeholder="Tell me about your project..."
                  ></textarea>
                </div>

                {submitStatus === "error" && (
                  <div className="text-red-400 text-sm text-center">
                    Failed to send message. Please try again.
                  </div>
                )}

                <div className="flex gap-3 pt-2">
                  <button
                    type="button"
                    onClick={closeModal}
                    className="flex-1 px-4 py-2 border border-gray-600 text-gray-300 rounded-md hover:bg-gray-700 transition-colors"
                    disabled={isSubmitting}
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="flex-1 px-4 py-2 bg-gradient-to-r from-green-500 to-green-600 text-white rounded-md hover:from-green-600 hover:to-green-700 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default About;
