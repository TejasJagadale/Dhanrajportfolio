"use client";
import AnimatedText from "@/components/AnimatedText";
import { motion, useMotionValue } from "framer-motion";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import TransitionEffect from "@/components/TransitionEffect";
import { HireMe2 } from "@/components/HireMe2";
const FramerImage = motion(Image);

const MovingImg = ({ title, img, link }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const imgRef = useRef(null);

  function handleMouse(event) {
    imgRef.current.style.display = "inline-block";
    x.set(event.pageX);
    y.set(-10);
  }

  function handleMouseLeave(event) {
    imgRef.current.style.display = "none";
    x.set(0);
    y.set(0);
  }
  return (
    <>
      <Link
        href={link}
        target={"_blank"}
        className="relative"
        onMouseMove={handleMouse}
        onMouseLeave={handleMouseLeave}
      >
        <h2 className="capitalize text-xl font-semibold hover:underline dark:text-light md:text-lg xs:text-base sm:self-start">
          {title}
        </h2>
        <FramerImage
          src={img}
          ref={imgRef}
          alt={title}
          className="w-96 h-auto z-10 hidden absolute rounded-lg md:!hidden"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1, transition: { duration: 0.2 } }}
          style={{
            x: x,
            y: y
          }}
          sizes="(max-width: 768px) 60vw,
              (max-width: 1200px) 40vw,
              33vw"
        />
      </Link>
    </>
  );
};

export default function Articles() {
  return (
    <>
      <Head>
        <title>Academic Portfolio | Dr. S. Dhanaraj</title>
        <meta
          name="description"
          content="Academic portfolio of Dr. S. Dhanaraj - Researcher, Educator & Cyber Security Specialist with numerous publications, patents, and invited talks."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <TransitionEffect />
      <main
        className={`w-full mb-16 flex flex-col items-center justify-center dark:text-light overflow-hidden`}
      >
        <div className="pt-16 px-4 sm:px-6">
          <AnimatedText
            text="Certifications"
            className="!text-5xl !leading-tight mb-12 lg:!text-6xl sm:!text-4xl xs:!text-3xl sm:mb-8"
          />
          <HireMe2 />
        </div>

        {/* Main Content Container */}
        <div className="w-full max-w-6xl mx-auto rounded-2xl py-6 px-4 sm:px-6    md:px-8 lg:px-10">
          {/* Certifications Section */}
          <section className="mb-12 sm:mb-10  bg-green-100 p-6 sm:p-3 rounded-2xl shadow-lg">
            <h2 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 flex items-center text-amber-800">
              <i className="fas fa-certificate mr-2 sm:mr-3 text-xl sm:text-2xl"></i>
              International Certifications
            </h2>
            <div className="grid gap-4 sm:gap-6">
              {[
                {
                  icon: "fab fa-microsoft",
                  title:
                    "Microsoft Certified Professional [MCP] in Developing and Implementing Windows based Applications with Microsoft VisualBasic.Net and Microsoft Visual Studio.Net.",
                  description: "Visual Basic.Net Applications",
                  highlight: true
                },
                {
                  icon: "fas fa-brain",
                  title: "BrainBench Certified",
                  description: "ASP.Net Technologies",
                  highlight: false
                }
              ].map((cert, index) => (
                <div
                  key={index}
                  className={`p-4 sm:p-5 rounded-xl shadow-md hover:shadow-lg transition-shadow ${
                    cert.highlight
                      ? "bg-white border-l-4 border-amber-500"
                      : "bg-white"
                  }`}
                >
                  <div className="flex items-start gap-3 sm:gap-4">
                    <div
                      className={`p-2 sm:p-3 rounded-full ${
                        cert.highlight
                          ? "bg-amber-100 text-amber-600"
                          : "bg-gray-100 text-gray-600"
                      } flex-shrink-0 sm:hidden`}
                    >
                      <i className={`${cert.icon} text-lg sm:text-xl`}></i>
                    </div>
                    <div>
                      <h3
                        className={`font-bold mb-1 text-sm sm:text-base ${
                          cert.highlight ? "text-amber-800" : "text-gray-800"
                        }`}
                      >
                        {cert.title}
                      </h3>
                      <p className="text-gray-600 text-xs sm:text-sm">
                        {cert.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section className="mb-12 sm:mb-10 bg-gradient-to-r from-amber-50 to-orange-50 p-6 sm:p-3 rounded-2xl shadow-lg">
            <h2 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 flex items-center text-amber-800">
              <i className="fas fa-certificate mr-2 sm:mr-3 text-xl sm:text-2xl"></i>
              Online Certifications
            </h2>
            <div className="grid gap-4 sm:gap-6">
              {[
                {
                  icon: "fab fa-microsoft",
                  title:
                    "Cyber security for Industrial Control Systems-Mapping IT Defense-In-Depth Security Solutions to ICS",
                  description: "National Cybersecurity& Communications Integration Center- Industrial Control Systems, U.S.Department of Homeland Security.",
                  highlight: true
                },
                {
                  icon: "fas fa-brain",
                  title: "Computer Hacking and Forensics",
                  description: "Cybrary",
                  highlight: false
                },
                {
                  icon: "fas fa-brain",
                  title: "Digital Forensics",
                  description: "Distinction from Charles Sturt University, Australia.",
                  highlight: false
                },
                {
                  icon: "fas fa-brain",
                  title: "Google Analytics for Beginners",
                  description: "Google",
                  highlight: false
                },
                {
                  icon: "fas fa-brain",
                  title: "Python 101 for Data science",
                  description: "Cognitive class [An IBM initiative].",
                  highlight: false
                },
                {
                  icon: "fas fa-brain",
                  title: "DIGITAL SKILLS: DIGITAL SKILLS FOR WORK AND LIFE",
                  description: " Conducted by ACCENTURE.",
                  highlight: false
                },
                {
                  icon: "fas fa-brain",
                  title: "Leveraging Services for Development: Prospects and Policies",
                  description: "Conducted by Asian Development Bank Institute,Japan.",
                  highlight: false
                },
                {
                  icon: "fas fa-brain",
                  title: "Nine days Faculty development Programme on Machine Learning & Its applications",
                  description: "conducted by IIT-Roorkee (EICT) from 04.05.2020 to 12.05.2020",
                  highlight: false
                },
                {
                  icon: "fas fa-brain",
                  title: "Effective and Efficient Online Teaching in the Age of Corona, A Hands-on Workshop",
                  description: "conducted by IIT-Bombay.",
                  highlight: false
                }
              ].map((cert, index) => (
                <div
                  key={index}
                  className={`p-4 sm:p-5 rounded-xl shadow-md hover:shadow-lg transition-shadow ${
                    cert.highlight
                      ? "bg-white border-l-4 border-amber-500"
                      : "bg-white"
                  }`}
                >
                  <div className="flex items-start gap-3 sm:gap-4">
                    <div
                      className={`p-2 sm:p-3 rounded-full ${
                        cert.highlight
                          ? "bg-amber-100 text-amber-600"
                          : "bg-gray-100 text-gray-600"
                      } flex-shrink-0 sm:hidden`}
                    >
                      <i className={`${cert.icon} text-lg sm:text-xl`}></i>
                    </div>
                    <div>
                      <h3
                        className={`font-bold mb-1 text-sm sm:text-base ${
                          cert.highlight ? "text-amber-800" : "text-gray-800"
                        }`}
                      >
                        {cert.title}
                      </h3>
                      <p className="text-gray-600 text-xs sm:text-sm">
                        {cert.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
          {/* Academic Publications */}
          {/* <motion.section
            className="mb-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h2 className="text-2xl sm:text-3xl font-bold mb-6 pb-3 border-b-2 border-blue-500/50 dark:border-blue-400/50 flex items-center">
              <span className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg bg-blue-100 dark:bg-blue-900/50 flex items-center justify-center mr-3 sm:mr-4">
                <i className="fa-solid fa-book-open-reader text-blue-600 dark:text-blue-400 text-sm sm:text-base"></i>
              </span>
              Online Certifications
            </h2>

            <div className="space-y-4 sm:space-y-6">
              <motion.div
                className="p-4 sm:p-5 bg-white dark:bg-gray-800 rounded-lg sm:rounded-xl shadow-md hover:shadow-lg transition-shadow border-l-4 border-blue-500 dark:border-blue-400"
                whileHover={{ scale: 1.01 }}
              >
                <h3 className="text-lg sm:text-xl font-semibold mb-2 text-gray-800 dark:text-gray-200">
                  Cyber security for Industrial Control Systems-Mapping IT
                  Defense-In-Depth Security Solutions to ICS
                </h3>
                <div className="flex flex-wrap items-center gap-2 mb-2 sm:mb-3">
                  <span className="text-xs sm:text-sm px-2 py-1 bg-blue-100 dark:bg-blue-900/50 text-blue-800 dark:text-blue-200 rounded">
                    National Cybersecurity& Communications Integration Center-
                    Industrial Control Systems, U.S.Department of Homeland
                    Security
                  </span>
                </div>
              </motion.div>
              <motion.div
                className="p-4 sm:p-5 bg-white dark:bg-gray-800 rounded-lg sm:rounded-xl shadow-md hover:shadow-lg transition-shadow border-l-4 border-purple-500 dark:border-purple-400"
                whileHover={{ scale: 1.01 }}
              >
                <h3 className="text-lg sm:text-xl font-semibold mb-2 text-gray-800 dark:text-gray-200">
                  Computer Hacking and Forensics
                </h3>
                <div className="flex flex-wrap items-center gap-2 mb-2 sm:mb-3">
                  <span className="text-xs sm:text-sm px-2 py-1 bg-purple-100 dark:bg-purple-900/50 text-purple-800 dark:text-purple-200 rounded">
                    Cybrary
                  </span>
                </div>
              </motion.div>
              <motion.div
                className="p-4 sm:p-5 bg-white dark:bg-gray-800 rounded-lg sm:rounded-xl shadow-md hover:shadow-lg transition-shadow border-l-4 border-green-500 dark:border-green-400"
                whileHover={{ scale: 1.01 }}
              >
                <h3 className="text-lg sm:text-xl font-semibold mb-2 text-gray-800 dark:text-gray-200">
                  Digital Forensics
                </h3>
                <div className="flex flex-wrap items-center gap-2 mb-2 sm:mb-3">
                  <span className="text-xs sm:text-sm px-2 py-1 bg-green-100 dark:bg-green-900/50 text-green-800 dark:text-green-200 rounded">
                    Distinction from Charles Sturt University, Australia.
                  </span>
                </div>
              </motion.div>
              <motion.div
                className="p-4 sm:p-5 bg-white dark:bg-gray-800 rounded-lg sm:rounded-xl shadow-md hover:shadow-lg transition-shadow border-l-4 border-green-500 dark:border-green-400"
                whileHover={{ scale: 1.01 }}
              >
                <h3 className="text-lg sm:text-xl font-semibold mb-2 text-gray-800 dark:text-gray-200">
                  Google Analytics for Beginners
                </h3>
                <div className="flex flex-wrap items-center gap-2 mb-2 sm:mb-3">
                  <span className="text-xs sm:text-sm px-2 py-1 bg-blue-100 dark:bg-green-900/50 text-green-800 dark:text-green-200 rounded">
                    Google
                  </span>
                </div>
              </motion.div>
              <motion.div
                className="p-4 sm:p-5 bg-white dark:bg-gray-800 rounded-lg sm:rounded-xl shadow-md hover:shadow-lg transition-shadow border-l-4 border-green-500 dark:border-green-400"
                whileHover={{ scale: 1.01 }}
              >
                <h3 className="text-lg sm:text-xl font-semibold mb-2 text-gray-800 dark:text-gray-200">
                  Python 101 for Data science
                </h3>
                <div className="flex flex-wrap items-center gap-2 mb-2 sm:mb-3">
                  <span className="text-xs sm:text-sm px-2 py-1 bg-purple-100 dark:bg-green-900/50 text-green-800 dark:text-green-200 rounded">
                    Cognitive class [An IBM initiative].
                  </span>
                </div>
              </motion.div>
              <motion.div
                className="p-4 sm:p-5 bg-white dark:bg-gray-800 rounded-lg sm:rounded-xl shadow-md hover:shadow-lg transition-shadow border-l-4 border-green-500 dark:border-green-400"
                whileHover={{ scale: 1.01 }}
              >
                <h3 className="text-lg sm:text-xl font-semibold mb-2 text-gray-800 dark:text-gray-200">
                  DIGITAL SKILLS: DIGITAL SKILLS FOR WORK AND LIFE
                </h3>
                <div className="flex flex-wrap items-center gap-2 mb-2 sm:mb-3">
                  <span className="text-xs sm:text-sm px-2 py-1 bg-green-100 dark:bg-green-900/50 text-green-800 dark:text-green-200 rounded">
                    Conducted by ACCENTURE.
                  </span>
                </div>
              </motion.div>
              <motion.div
                className="p-4 sm:p-5 bg-white dark:bg-gray-800 rounded-lg sm:rounded-xl shadow-md hover:shadow-lg transition-shadow border-l-4 border-green-500 dark:border-green-400"
                whileHover={{ scale: 1.01 }}
              >
                <h3 className="text-lg sm:text-xl font-semibold mb-2 text-gray-800 dark:text-gray-200">
                  Leveraging Services for Development: Prospects and Policies
                </h3>
                <div className="flex flex-wrap items-center gap-2 mb-2 sm:mb-3">
                  <span className="text-xs sm:text-sm px-2 py-1 bg-blue-100 dark:bg-green-900/50 text-green-800 dark:text-green-200 rounded">
                    Conducted by Asian Development Bank Institute,Japan.
                  </span>
                </div>
              </motion.div>
              <motion.div
                className="p-4 sm:p-5 bg-white dark:bg-gray-800 rounded-lg sm:rounded-xl shadow-md hover:shadow-lg transition-shadow border-l-4 border-green-500 dark:border-green-400"
                whileHover={{ scale: 1.01 }}
              >
                <h3 className="text-lg sm:text-xl font-semibold mb-2 text-gray-800 dark:text-gray-200">
                  Effective and Efficient Online Teaching in the Age of Corona,
                  A Hands-on Workshop
                </h3>
                <div className="flex flex-wrap items-center gap-2 mb-2 sm:mb-3">
                  <span className="text-xs sm:text-sm px-2 py-1 bg-purple-100 dark:bg-green-900/50 text-green-800 dark:text-green-200 rounded">
                    IIT-Bombay.
                  </span>
                </div>
              </motion.div>
              <motion.div
                className="p-4 sm:p-5 bg-white dark:bg-gray-800 rounded-lg sm:rounded-xl shadow-md hover:shadow-lg transition-shadow border-l-4 border-green-500 dark:border-green-400"
                whileHover={{ scale: 1.01 }}
              >
                <h3 className="text-lg sm:text-xl font-semibold mb-2 text-gray-800 dark:text-gray-200">
                  Nine days Faculty development Programme on "Machine Learning &
                  Its applications"
                </h3>
                <div className="flex flex-wrap items-center gap-2 mb-2 sm:mb-3">
                  <span className="text-xs sm:text-sm px-2 py-1 bg-green-100 dark:bg-green-900/50 text-green-800 dark:text-green-200 rounded">
                    IIT-Roorkee (EICT) from 04.05.2020 to 12.05.2020
                  </span>
                </div>
              </motion.div>
            </div>
          </motion.section> */}

          {/* Invited Talks Section */}
          <motion.section
            className="mb-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <h2 className="text-2xl sm:text-3xl font-bold mb-6 pb-3 border-b-2 border-purple-500/50 dark:border-purple-400/50 flex items-center">
              <span className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg bg-purple-100 dark:bg-purple-900/50 flex items-center justify-center mr-3 sm:mr-4">
                <i className="fa-solid fa-microphone text-purple-600 dark:text-purple-400 text-sm sm:text-base"></i>
              </span>
              Invited Talks & Editorial
            </h2>

            <div className="flex flex-col gap-4 sm:gap-6">
              {/* Radio Talks */}
              <div className="p-4 sm:p-6 bg-white dark:bg-gray-800 rounded-lg sm:rounded-xl shadow-md border-l-4 border-blue-500 dark:border-blue-400">
                <h3 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4 flex items-center text-gray-800 dark:text-gray-200">
                  <i className="sm:hidden fa-solid fa-radio mr-2 sm:mr-3 text-blue-500 dark:text-blue-400 text-sm sm:text-base"></i>
                  Radio Talks
                </h3>
                <ul className="space-y-3 sm:space-y-4">
                  <li className="flex items-start">
                    <span className="sm:hidden flex-shrink-0 w-5 h-5 sm:w-6 sm:h-6 mt-1 mr-2 sm:mr-3 bg-blue-100 dark:bg-blue-900/50 text-blue-600 dark:text-blue-400 rounded-full flex items-center justify-center">
                      <i className="fa-solid fa-volume-up text-xs"></i>
                    </span>
                    <div>
                      <h4 className="font-medium text-gray-800 dark:text-gray-200 text-sm sm:text-base">
                        Awareness on Cyber and Digital Forensic
                      </h4>
                      <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">
                        Panel discussion on FM Rainbow (AIR), Coimbatore -
                        26.10.2019
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="sm:hidden flex-shrink-0 w-5 h-5 sm:w-6 sm:h-6 mt-1 mr-2 sm:mr-3 bg-blue-100 dark:bg-blue-900/50 text-blue-600 dark:text-blue-400 rounded-full flex items-center justify-center">
                      <i className="fa-solid fa-volume-up text-xs"></i>
                    </span>
                    <div>
                      <h4 className="font-medium text-gray-800 dark:text-gray-200 text-sm sm:text-base">
                        Recent trends in cyber security
                      </h4>
                      <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">
                        All India Radio (AIR) - 06.12.2019
                      </p>
                    </div>
                  </li>
                </ul>
              </div>

              {/* College & Conference Talks */}
              <div className="p-4 sm:p-6 bg-white dark:bg-gray-800 rounded-lg sm:rounded-xl shadow-md border-l-4 border-purple-500 dark:border-purple-400">
                <h3 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4 flex items-center text-gray-800 dark:text-gray-200">
                  <i className="sm:hidden fa-solid fa-chalkboard-user mr-2 sm:mr-3 text-purple-500 dark:text-purple-400 text-sm sm:text-base"></i>
                  College & Conference Talks
                </h3>
                <ul className="space-y-2 sm:space-y-3">
                  <li className="flex items-center">
                    <span className="sm:hidden flex-shrink-0 w-5 h-5 sm:w-6 sm:h-6 mr-2 sm:mr-3 bg-purple-100 dark:bg-purple-900/50 text-purple-600 dark:text-purple-400 rounded-full flex items-center justify-center">
                      <i className="fa-solid fa-bullhorn text-xs"></i>
                    </span>
                    <span className="text-gray-800 dark:text-gray-200 text-sm sm:text-base">
                      Cyber Security and Awareness
                    </span>
                  </li>
                  <li className="flex items-center">
                    <span className="sm:hidden flex-shrink-0 w-5 h-5 sm:w-6 sm:h-6 mr-2 sm:mr-3 bg-purple-100 dark:bg-purple-900/50 text-purple-600 dark:text-purple-400 rounded-full flex items-center justify-center">
                      <i className="fa-solid fa-bullhorn text-xs"></i>
                    </span>
                    <span className="text-gray-800 dark:text-gray-200 text-sm sm:text-base">
                      Doom in Palm
                    </span>
                  </li>
                  <li className="flex items-center">
                    <span className="sm:hidden flex-shrink-0 w-5 h-5 sm:w-6 sm:h-6 mr-2 sm:mr-3 bg-purple-100 dark:bg-purple-900/50 text-purple-600 dark:text-purple-400 rounded-full flex items-center justify-center">
                      <i className="fa-solid fa-bullhorn text-xs"></i>
                    </span>
                    <span className="text-gray-800 dark:text-gray-200 text-sm sm:text-base">
                      Dotnet Technologies
                    </span>
                  </li>
                </ul>
              </div>

              {/* Journal Reviewer */}
              <div className="p-4 sm:p-6 bg-white dark:bg-gray-800 rounded-lg sm:rounded-xl shadow-md border-l-4 border-green-500 dark:border-green-400 md:col-span-2">
                <h3 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4 flex items-center text-gray-800 dark:text-gray-200">
                  <i className="sm:hidden fa-solid fa-pen-fancy mr-2 sm:mr-3 text-green-500 dark:text-green-400 text-sm sm:text-base"></i>
                  Journal Reviewer
                </h3>
                <div className="flex flex-col gap-4 sm:gap-6">
                  <div className="flex items-start">
                    <span className="sm:hidden flex-shrink-0 w-5 h-5 sm:w-6 sm:h-6 mt-1 mr-2 sm:mr-3 bg-green-100 dark:bg-green-900/50 text-green-600 dark:text-green-400 rounded-full flex items-center justify-center">
                      <i className="fa-solid fa-check text-xs"></i>
                    </span>
                    <div>
                      <h4 className="font-medium text-gray-800 dark:text-gray-200 text-sm sm:text-base">
                        International Journal of Innovative Technology and
                        Creative Engineering
                      </h4>
                      <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">
                        United Kingdom
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <span className="sm:hidden flex-shrink-0 w-5 h-5 sm:w-6 sm:h-6 mt-1 mr-2 sm:mr-3 bg-green-100 dark:bg-green-900/50 text-green-600 dark:text-green-400 rounded-full flex items-center justify-center">
                      <i className="fa-solid fa-check text-xs"></i>
                    </span>
                    <div>
                      <h4 className="font-medium text-gray-800 dark:text-gray-200 text-sm sm:text-base">
                        International Arab Journal of Information Technology
                        (IAJIT)
                      </h4>
                      <div className="flex items-center gap-2 mt-1">
                        <span className="text-xs px-2 py-0.5 bg-green-100 dark:bg-green-900/50 text-green-800 dark:text-green-200 rounded">
                          Scopus indexed
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.section>

          {/* Call to Action */}
          <motion.div
            className="text-center py-8 sm:py-10 px-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 text-gray-800 dark:text-gray-200">
              Interested in Collaborating on Research?
            </h3>
            <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 mb-4 sm:mb-6 max-w-2xl mx-auto">
              I'm always open to discussing research projects, collaborations,
              or speaking engagements. Feel free to reach out for academic or
              professional opportunities.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center px-6 sm:px-8 py-2 sm:py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full text-sm sm:text-base font-semibold shadow-lg hover:shadow-xl transition-all transform hover:scale-105"
            >
              <i className="fa-solid fa-paper-plane mr-1 sm:mr-2"></i>
              Get In Touch
            </Link>
          </motion.div>
        </div>
      </main>
    </>
  );
}
