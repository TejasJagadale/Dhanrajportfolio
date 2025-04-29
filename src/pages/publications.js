"use client";
import AnimatedText from "@/components/AnimatedText";
// import Layout from "@/components/Layout";
import Link from "next/link";
import { useState } from 'react';
import Head from 'next/head';
import Image from "next/image";
import { HireMe2 } from "@/components/HireMe2";
import TransitionEffect from "@/components/TransitionEffect";
import { motion, useMotionValue } from "framer-motion";
const FramerImage = motion(Image);

export default function Projects() {
  const [showHonours, setShowHonours] = useState(true);

  const toggleHonours = () => {
    setShowHonours(!showHonours);
  };

  return (
    <>
      <Head>
        <title>Projects & Achievements | Dr. S. Dhanaraj</title>
        <meta
          name="description"
          content="Explore Dr. S. Dhanaraj's funded projects, patents, publications, and professional certifications"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <TransitionEffect />
      <main className={`mb-16 flex w-full flex-col items-center justify-center dark:text-light`}>
        <div className="pt-16">
          <AnimatedText
            text="Research & Professional Milestones"
            className=" !text-5xl lg:!text-6xl !leading-tight sm:mb-8 sm:!text-5xl xs:!text-3xl text-center"
          />
          <HireMe2 />
        </div>
        
        <div className="container mx-auto px-4 sm:px-6 py-8 max-w-6xl">
          {/* Funded Projects Section */}
          <section className="mb-12 sm:mb-10 bg-gradient-to-r from-blue-50 to-indigo-50 p-6 sm:p-3 rounded-2xl shadow-lg">
            <h2 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 flex items-center text-blue-800">
              <i className="fas fa-project-diagram mr-2 sm:mr-3 text-xl sm:text-2xl"></i> 
              Funded Research
            </h2>
            <ul className="space-y-4 sm:space-y-6">
              <li className="bg-white p-4 sm:p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
                <div className="flex items-start gap-3 sm:gap-4">
                  <div className="sm:hidden bg-blue-100 p-2 sm:p-3 rounded-full flex-shrink-0">
                    <i className="fas fa-microscope text-blue-600 text-lg sm:text-xl"></i>
                  </div>
                  <div>
                    <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-1">
                      Image Compression vs Quality Tradeoff Study
                    </h3>
                    <p className="text-gray-700 text-sm sm:text-base mb-2">
                      Minor research project funded by University Grants Commission (UGC)
                    </p>
                    <span className="inline-block bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">
                      Project No.F.MRP-4391/12
                    </span>
                  </div>
                </div>
              </li>
              <li className="bg-white p-4 sm:p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
                <div className="flex items-start gap-3 sm:gap-4">
                  <div className="sm:hidden sm:flex bg-indigo-100 p-2 sm:p-3 rounded-full flex-shrink-0">
                    <i className="fas fa-users-gear text-indigo-600 text-lg sm:text-xl"></i>
                  </div>
                  <div>
                    <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-1">
                      Entrepreneurship Awareness Camps (4)
                    </h3>
                    <p className="text-gray-700 text-sm sm:text-base mb-2">
                      NIMAT project by Dept. of Science & Technology, Govt. of India
                    </p>
                  </div>
                </div>
              </li>
            </ul>
          </section>

          {/* Patents Section */}
          <section className="mb-12 sm:mb-10 bg-gradient-to-r from-purple-50 to-pink-50 p-6 sm:p-3 rounded-2xl shadow-lg">
            <h2 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 flex items-center text-purple-800">
              <i className="fas fa-lightbulb mr-2 sm:mr-3 text-xl sm:text-2xl"></i> 
              Patents
            </h2>
            <div className="bg-white p-4 sm:p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
              <div className="flex items-start gap-3 sm:gap-4">
                <div className="sm:hidden bg-purple-100 p-2 sm:p-3 rounded-full flex-shrink-0">
                  <i className="fas fa-shield-alt text-purple-600 text-lg sm:text-xl"></i>
                </div>
                <div>
                  <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-1">
                    Behavioral IoT Security System
                  </h3>
                  <p className="text-gray-700 text-sm sm:text-base mb-2">
                    Published in Patent Office Journal No. 34/2020
                  </p>
                  <div className="flex flex-wrap gap-1 sm:gap-2 mt-2 sm:mt-3">
                    <span className="bg-purple-100 text-purple-800 text-xs px-2 py-1 rounded">
                      G06F21/62
                    </span>
                    <span className="bg-pink-100 text-pink-800 text-xs px-2 py-1 rounded">
                      IoT Security
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Publications Section */}
          <section className="mb-12 sm:mb-10 bg-gradient-to-r from-green-50 to-teal-50 p-6 sm:p-3 rounded-2xl shadow-lg">
            <h2 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 flex items-center text-green-800">
              <i className="fas fa-book-open mr-2 sm:mr-3 text-xl sm:text-2xl"></i> 
              Selected Publications
            </h2>
            <div className="grid gap-4 sm:gap-6">
              {[
                {
                  title: "E-mail image spam filtering techniques",
                  venue: "IEEE Pattern Recognition Conference 2013",
                  link: "https://ieeexplore.ieee.org/document/6583665",
                  tags: ["IEEE", "Pattern Recognition"]
                },
                {
                  title: "Performance of Association Rule Mining",
                  venue: "ICDSA'17 Conference",
                  tags: ["Data Mining", "Association Rules"]
                },
                {
                  title: "Anti Image Spam Filter Using Feature Fusion",
                  venue: "Int. Journal of Pure & Applied Math 2018",
                  tags: ["Image Spam", "Feature Fusion"]
                },
                {
                  title: "Impact of Image Spam and Avoidance",
                  venue: "Journal of Applied Science 2019",
                  tags: ["Cybersecurity", "Spam Analysis"]
                }
              ].map((pub, index) => (
                <div key={index} className="bg-white p-4 sm:p-5 rounded-xl shadow-md hover:shadow-lg transition-shadow">
                  <h3 className="font-bold text-gray-900 text-sm sm:text-base mb-1 sm:mb-2">{pub.title}</h3>
                  <p className="text-gray-600 text-xs sm:text-sm mb-2 sm:mb-3">{pub.venue}</p>
                  <div className="flex flex-wrap gap-1 sm:gap-2">
                    {pub.tags.map((tag, i) => (
                      <span key={i} className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded">
                        {tag}
                      </span>
                    ))}
                  </div>
                  {pub.link && (
                    <a
                      href={pub.link}
                      className="mt-2 sm:mt-3 inline-flex items-center text-blue-600 hover:underline text-xs sm:text-sm"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className="fas fa-external-link-alt mr-1"></i>View
                    </a>
                  )}
                </div>
              ))}
            </div>
            <div className="mt-4 sm:mt-6 text-center">
              <a
                href="https://scholar.google.com/citations?user=puRCNvoAAAAJ&hl=en"
                className="inline-flex items-center bg-blue-600 hover:bg-blue-700 text-white px-3 py-2 sm:px-4 sm:py-2 rounded-lg transition-colors text-sm sm:text-base"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fas fa-graduation-cap mr-2"></i>
                View All on Google Scholar
              </a>
            </div>
          </section>
          {/* Patents Section */}
          {/* <motion.section
            className="mb-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h2 className="text-2xl sm:text-3xl font-bold mb-6 pb-3 border-b-2 border-yellow-500/50 dark:border-yellow-400/50 flex items-center">
              <span className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg bg-yellow-100 dark:bg-yellow-900/50 flex items-center justify-center mr-3 sm:mr-4">
                <i className="fa-solid fa-file-shield text-yellow-600 dark:text-yellow-400 text-sm sm:text-base"></i>
              </span>
              Patents
            </h2>

            <div className="p-4 sm:p-6 bg-white dark:bg-gray-800 rounded-lg sm:rounded-xl shadow-md border-l-4 border-yellow-500 dark:border-yellow-400">
              <h3 className="text-lg sm:text-xl font-semibold mb-2 text-gray-800 dark:text-gray-200">
                Dynamic policy based behavioral IoT security enforcement system
                using computer environment
              </h3>
              <div className="flex flex-wrap items-center gap-2 mb-2 sm:mb-3">
                <span className="text-xs sm:text-sm px-2 py-1 bg-yellow-100 dark:bg-yellow-900/50 text-yellow-800 dark:text-yellow-200 rounded">
                  Published Patent
                </span>
              </div>
              <div className="text-sm sm:text-base text-gray-700 dark:text-gray-300 space-y-2">
                <p>
                  <span className="font-medium">Published in:</span> The Patent
                  Office Journal No. 34/2020 Dated 21/08/2020
                </p>
                <p>
                  <span className="font-medium">Classification:</span> G06F21/62
                </p>
              </div>
            </div>
          </motion.section> */}

          {/* Books Section */}
          <motion.section
            className="mb-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h2 className="text-2xl sm:text-3xl font-bold mb-6 pb-3 border-b-2 border-green-500/50 dark:border-green-400/50 flex items-center">
              <span className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg bg-green-100 dark:bg-green-900/50 flex items-center justify-center mr-3 sm:mr-4">
                <i className="fa-solid fa-book text-green-600 dark:text-green-400 text-sm sm:text-base"></i>
              </span>
              Books
            </h2>

            <div className="flex flex-col md:flex-row gap-4 sm:gap-6">
              <div className="flex-1 p-4 sm:p-6 bg-white dark:bg-gray-800 rounded-lg sm:rounded-xl shadow-md border-l-4 border-green-500 dark:border-green-400">
                <div className="flex flex-col md:flex-row gap-3 sm:gap-4">
                  <div className="w-full md:w-1/3">
                    {/* Book cover placeholder - uncomment when you have the image */}
                    {/* <div className="aspect-[2/3] bg-gray-100 dark:bg-gray-700 rounded-lg overflow-hidden shadow-md">
                      <Image 
                        src="/images/books/smartphone-guide.jpg" 
                        alt="Book Cover"
                        width={200}
                        height={300}
                        className="w-full h-full object-cover"
                      />
                    </div> */}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg sm:text-xl font-semibold mb-1 sm:mb-2 text-gray-800 dark:text-gray-200">
                      பாதுகாப்பான ஸ்மார்ட்போன் பயன்பாடு மற்றும் வழிகாட்டுதல்கள்
                    </h3>
                    <p className="text-sm sm:text-base text-gray-700 dark:text-gray-300 mb-3 sm:mb-4">
                      (Secure Smartphone Usage and Guidelines - Tamil)
                    </p>
                    <div className="flex flex-wrap items-center gap-2 mb-3">
                      <span className="text-xs sm:text-sm px-2 py-1 bg-green-100 dark:bg-green-900/50 text-green-800 dark:text-green-200 rounded">
                        Amazon Kindle eBook
                      </span>
                    </div>
                    <Link
                      href="https://www.amazon.in/dp/B0846JZLWZ"
                      target="_blank"
                      rel="noopener"
                      className="inline-flex items-center px-3 sm:px-4 py-1 sm:py-2 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-full shadow-md hover:shadow-lg transition-all transform hover:scale-105 text-sm sm:text-base"
                    >
                      <i className="fab fa-amazon mr-1 sm:mr-2"></i>
                      View on Amazon
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </motion.section>
        </div>
      </main>
    </>
  );
}