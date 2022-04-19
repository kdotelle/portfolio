import React from "react";

export default function Contact() {
  function encode(data) {
    return Object.keys(data).map(
      (key) =>
        encodeURIComponent(key) + "=" + encodeURIComponent(data[key]).join("&")
    );
  }

  return (
    <section id="contact" className="relative">
      <div className="container px-5 py-10 mx-auto flex sm:flex-nowrap flex-wrap">
        <div className="mx-auto bg-gray-900 rounded-lg overflow-hidden sm:mr-6 p-10 inline-block flex items-end justify-start relative">
          <img
            alt="headshot"
            src="./headshot.png"
            className="w-0 sm:w-1/2 h-auto rounded-full flex object-cover object-center invisible sm:visible"
          />
        </div>
        <div
          name="contact"
          className="flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0"
        >
          <h2 className="text-white sm:text-4xl text-3xl mb-1 font-medium title-font">
            Hire Me
          </h2>
          <p className="leading-relaxed mb-5">
            Or simply start a conversation. Whatever it is, let's chat!
          </p>
          <div className="bg-gray-900 relative flex flex-wrap py-6 rounded shadow-md">
            <div className="lg:w-1/2 px-6 mt-2 lg:mt-0">
              <h2 className="title-font font-semibold text-white tracking-widest text-xs">
                EMAIL
              </h2>
              <a
                className="text-indigo-400 leading-relaxed"
                href="mailto:lloyd.kristen91@gmail.com"
              >
                lloyd.kristen91@gmail.com
              </a>

              <h2 className="title-font font-semibold text-white tracking-widest text-xs mt-4">
                LINKEDIN
              </h2>
              <a
                className="text-indigo-400 leading-relaxed"
                href="www.linkedin.com/in/kristenlloyd/"
                target="_blank"
              >
                www.linkedin.com/in/kristenlloyd/
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
