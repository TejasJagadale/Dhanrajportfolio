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
          <HireMe2 />
        </div>
        <div className="w-full max-w-6xl mx-auto rounded-2xl py-6 px-4 sm:px-6    md:px-8 lg:px-10">
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
                      <p className="text-xs px-2 py-0.5 text-green-800 dark:text-green-200 rounded">
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
                        <span className="text-xs px-2 py-0.5  text-green-800 dark:text-green-200 rounded">
                          Scopus indexed
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="p-4 sm:p-6 bg-white dark:bg-gray-800 rounded-lg sm:rounded-xl shadow-md border-l-4 border-purple-500 dark:border-purple-400 md:col-span-2">
                <h3 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4 flex items-center text-gray-800 dark:text-gray-200">
                  <i className="sm:hidden fa-solid fa-pen-fancy mr-2 sm:mr-3 text-green-500 dark:text-green-400 text-sm sm:text-base"></i>
                  Conference organized
                </h3>
                <div className="flex flex-col gap-4 sm:gap-6">
                  <div className="flex items-start">
                    <span className="sm:hidden flex-shrink-0 w-5 h-5 sm:w-6 sm:h-6 mt-1 mr-2 sm:mr-3 bg-purple-100 dark:bg-purple-900/50 text-purple-600 dark:text-green-400 rounded-full flex items-center justify-center">
                      <i className="fa-solid fa-check text-xs"></i>
                    </span>
                    <div>
                      <h4 className="font-medium text-gray-800 dark:text-gray-200 text-sm sm:text-base">
                        National Conference on “Challenges in Computational
                        Research and Applications “
                      </h4>
                      <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">
                        11thJan2017 at Sree Saraswathi Thyagaraja College,
                        Pollachi.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <span className="sm:hidden flex-shrink-0 w-5 h-5 sm:w-6 sm:h-6 mt-1 mr-2 sm:mr-3 bg-purple-100 dark:bg-purple-900/50 text-purple-600 dark:text-green-400 rounded-full flex items-center justify-center">
                      <i className="fa-solid fa-check text-xs"></i>
                    </span>
                    <div>
                      <h4 className="font-medium text-gray-800 dark:text-gray-200 text-sm sm:text-base">
                        National Conference on “Advanced Computing and
                        Communication Technologies”
                      </h4>
                      <div className="flex items-center gap-2 mt-1">
                        <span className="text-xs px-2 py-0.5 dark:bg-green-900/50 text-green-800 dark:text-green-200 rounded">
                          2nd&3rdDecember 2011 at Sree Saraswathi Thyagaraja
                          College, Pollachi.
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <span className="sm:hidden flex-shrink-0 w-5 h-5 sm:w-6 sm:h-6 mt-1 mr-2 sm:mr-3 bg-purple-100 dark:bg-purple-900/50 text-purple-600 dark:text-green-400 rounded-full flex items-center justify-center">
                      <i className="fa-solid fa-check text-xs"></i>
                    </span>
                    <div>
                      <h4 className="font-medium text-gray-800 dark:text-gray-200 text-sm sm:text-base">
                        National Conference on “Challenges in Computational
                        Research and Applications “
                      </h4>
                      <div className="flex items-center gap-2 mt-1">
                        <span className="text-xs px-2 py-0.5  text-green-800 dark:text-green-200 rounded">
                          3rd and 4th December 2013 at Sree Saraswathi
                          Thyagaraja College, Pollachi.
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="p-4 sm:p-6 bg-white dark:bg-gray-800 rounded-lg sm:rounded-xl shadow-md border-l-4 border-purple-500 dark:border-purple-400 md:col-span-2">
                <h3 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4 flex items-center text-gray-800 dark:text-gray-200">
                  <i className="sm:hidden fa-solid fa-pen-fancy mr-2 sm:mr-3 text-green-500 dark:text-green-400 text-sm sm:text-base"></i>
                  Faculty Development Programmes
                </h3>
                <div className="flex flex-col gap-4 sm:gap-6">
                  <div className="flex items-start">
                    <span className="sm:hidden flex-shrink-0 w-5 h-5 sm:w-6 sm:h-6 mt-1 mr-2 sm:mr-3 bg-purple-100 dark:bg-purple-900/50 text-purple-600 dark:text-green-400 rounded-full flex items-center justify-center">
                      <i className="fa-solid fa-check text-xs"></i>
                    </span>
                    <div>
                      <h4 className="font-medium text-gray-800 dark:text-gray-200 text-sm sm:text-base">
                        “J2EE, Eclipse IDE, DB2 and Web Sphere”
                      </h4>
                      <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">
                        IBMAcademic Initiative from 9&10 August 2007 at Bannari
                        Amman Institute of Technology, Sathyamangalam.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <span className="sm:hidden flex-shrink-0 w-5 h-5 sm:w-6 sm:h-6 mt-1 mr-2 sm:mr-3 bg-purple-100 dark:bg-purple-900/50 text-purple-600 dark:text-green-400 rounded-full flex items-center justify-center">
                      <i className="fa-solid fa-check text-xs"></i>
                    </span>
                    <div>
                      <h4 className="font-medium text-gray-800 dark:text-gray-200 text-sm sm:text-base">
                        ” Research Issues in Image Processing and Applications”
                      </h4>
                      <div className="flex items-center gap-2 mt-1">
                        <span className="text-xs px-2 py-0.5 dark:bg-green-900/50 text-green-800 dark:text-green-200 rounded">
                          ISTE on 5th &6th March 2009 at PSNA College of
                          Engineering and Technology, Dindigul.
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <span className="sm:hidden flex-shrink-0 w-5 h-5 sm:w-6 sm:h-6 mt-1 mr-2 sm:mr-3 bg-purple-100 dark:bg-purple-900/50 text-purple-600 dark:text-green-400 rounded-full flex items-center justify-center">
                      <i className="fa-solid fa-check text-xs"></i>
                    </span>
                    <div>
                      <h4 className="font-medium text-gray-800 dark:text-gray-200 text-sm sm:text-base">
                        FDP on “ Teaching Corporate Social Responsibility in
                        Management Schools”
                      </h4>
                      <div className="flex items-center gap-2 mt-1">
                        <span className="text-xs px-2 py-0.5  text-green-800 dark:text-green-200 rounded">
                          Conducted by British council, CCGC – IIM Bangalore and
                          ICCSR, Nottingham University on7th April 2009 at
                          Coimbatore Institute of Management and Technology,
                          Coimbatore
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <span className="sm:hidden flex-shrink-0 w-5 h-5 sm:w-6 sm:h-6 mt-1 mr-2 sm:mr-3 bg-purple-100 dark:bg-purple-900/50 text-purple-600 dark:text-green-400 rounded-full flex items-center justify-center">
                      <i className="fa-solid fa-check text-xs"></i>
                    </span>
                    <div>
                      <h4 className="font-medium text-gray-800 dark:text-gray-200 text-sm sm:text-base">
                        “The Eclipse Parallel Tools Platform”
                      </h4>
                      <div className="flex items-center gap-2 mt-1">
                        <span className="text-xs px-2 py-0.5  text-green-800 dark:text-green-200 rounded">
                          IBM Academic Initiative on 25th August 2010 at The
                          Residency, Coimbatore. Coimbatore
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <span className="sm:hidden flex-shrink-0 w-5 h-5 sm:w-6 sm:h-6 mt-1 mr-2 sm:mr-3 bg-purple-100 dark:bg-purple-900/50 text-purple-600 dark:text-green-400 rounded-full flex items-center justify-center">
                      <i className="fa-solid fa-check text-xs"></i>
                    </span>
                    <div>
                      <h4 className="font-medium text-gray-800 dark:text-gray-200 text-sm sm:text-base">
                        FDP on “Cloud Computing Interoperability and Services”
                      </h4>
                      <div className="flex items-center gap-2 mt-1">
                        <span className="text-xs px-2 py-0.5  text-green-800 dark:text-green-200 rounded">
                          9th to 15th November 2010 at Sree SaraswathiThyagaraja
                          College, Pollachi.
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <span className="sm:hidden flex-shrink-0 w-5 h-5 sm:w-6 sm:h-6 mt-1 mr-2 sm:mr-3 bg-purple-100 dark:bg-purple-900/50 text-purple-600 dark:text-green-400 rounded-full flex items-center justify-center">
                      <i className="fa-solid fa-check text-xs"></i>
                    </span>
                    <div>
                      <h4 className="font-medium text-gray-800 dark:text-gray-200 text-sm sm:text-base">
                        "Image processing and its practical approach"
                      </h4>
                      <div className="flex items-center gap-2 mt-1">
                        <span className="text-xs px-2 py-0.5  text-green-800 dark:text-green-200 rounded">
                          09.12.2011 conducted by D.J.Academy for Managerial
                          Excellence, Coimbatore.
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <span className="sm:hidden flex-shrink-0 w-5 h-5 sm:w-6 sm:h-6 mt-1 mr-2 sm:mr-3 bg-purple-100 dark:bg-purple-900/50 text-purple-600 dark:text-green-400 rounded-full flex items-center justify-center">
                      <i className="fa-solid fa-check text-xs"></i>
                    </span>
                    <div>
                      <h4 className="font-medium text-gray-800 dark:text-gray-200 text-sm sm:text-base">
                        “People Empowering People “
                      </h4>
                      <div className="flex items-center gap-2 mt-1">
                        <span className="text-xs px-2 py-0.5  text-green-800 dark:text-green-200 rounded">
                          ICT Academy of Tamilnadu, from 20th to24thJanuary 2014
                          at CMC College of Engineering and Technology,
                          Coimbatore.
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <span className="sm:hidden flex-shrink-0 w-5 h-5 sm:w-6 sm:h-6 mt-1 mr-2 sm:mr-3 bg-purple-100 dark:bg-purple-900/50 text-purple-600 dark:text-green-400 rounded-full flex items-center justify-center">
                      <i className="fa-solid fa-check text-xs"></i>
                    </span>
                    <div>
                      <h4 className="font-medium text-gray-800 dark:text-gray-200 text-sm sm:text-base">
                        “Entrepreneurship Education”
                      </h4>
                      <div className="flex items-center gap-2 mt-1">
                        <span className="text-xs px-2 py-0.5  text-green-800 dark:text-green-200 rounded">
                          Conducted by Entrepreneurship Development and
                          Innovation Institute, from 25th July to 27th July 2017
                          at Kumaraguru College of Technology, Coimbatore.
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="p-4 sm:p-6 bg-white dark:bg-gray-800 rounded-lg sm:rounded-xl shadow-md border-l-4 border-purple-500 dark:border-purple-400 md:col-span-2">
                <h3 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4 flex items-center text-gray-800 dark:text-gray-200">
                  <i className="sm:hidden fa-solid fa-pen-fancy mr-2 sm:mr-3 text-green-500 dark:text-green-400 text-sm sm:text-base"></i>
                  Entrepreneurship Faculty Development Programmes
                </h3>
                <div className="flex flex-col gap-4 sm:gap-6">
                  <div className="flex items-start">
                    <span className="sm:hidden flex-shrink-0 w-5 h-5 sm:w-6 sm:h-6 mt-1 mr-2 sm:mr-3 bg-purple-100 dark:bg-purple-900/50 text-purple-600 dark:text-green-400 rounded-full flex items-center justify-center">
                      <i className="fa-solid fa-check text-xs"></i>
                    </span>
                    <div>
                      <h4 className="font-medium text-gray-800 dark:text-gray-200 text-sm sm:text-base">
                        14 days FDP on “Entrepreneurship” Sponsored by National
                        Science and Technology Entrepreneurship Development
                        Board (NSTEDB)
                      </h4>
                      <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">
                        01st to 14th November 2016 at PSGR Krishnammal College,
                        Coimbatore.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <span className="sm:hidden flex-shrink-0 w-5 h-5 sm:w-6 sm:h-6 mt-1 mr-2 sm:mr-3 bg-purple-100 dark:bg-purple-900/50 text-purple-600 dark:text-green-400 rounded-full flex items-center justify-center">
                      <i className="fa-solid fa-check text-xs"></i>
                    </span>
                    <div>
                      <h4 className="font-medium text-gray-800 dark:text-gray-200 text-sm sm:text-base">
                        14 days FDP on “Entrepreneurship” Sponsored by National
                        Science and Technology Entrepreneurship Development
                        Board (NSTEDB)
                      </h4>
                      <div className="flex items-center gap-2 mt-1">
                        <span className="text-xs px-2 py-0.5 dark:bg-green-900/50 text-green-800 dark:text-green-200 rounded">
                          27thNovember to 09thDecember 2017 at IIT-Madras.
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.section>
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
