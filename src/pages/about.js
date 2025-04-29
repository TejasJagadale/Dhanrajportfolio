import Layout from "@/components/Layout";
import { useState } from 'react';
import { motion } from "framer-motion";
import Head from "next/head";
import Image from "next/image";
import profile from "../../public/images/profile/abt.png";
import { useInView, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useRef } from "react";
import Experience from "@/components/Experience";
import AnimatedText from "@/components/AnimatedText";
import TransitionEffect from "@/components/TransitionEffect";
import { HireMe2 } from "@/components/HireMe2";
import Link from "next/link";

function AnimatedNumberFramerMotion({ value }) {
  const ref = useRef(null);
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, { duration: 3000 });
  const isInView = useInView(ref, { once: true });
  useEffect(() => {
    if (isInView) {
      motionValue.set(value);
    }
  }, [motionValue, value, isInView]);

  useEffect(
    () =>
      springValue.on("change", (latest) => {
        if (ref.current && latest.toFixed(0) <= value) {
          ref.current.textContent = latest.toFixed(0);
        }
      }),
    [springValue, value]
  );

  return <span ref={ref} />;
}
const FramerImage = motion(Image);
const Article = ({ img, title, date, link }) => {
  return (
    <motion.li
      initial={{ y: 200 }}
      whileInView={{ y: 0, transition: { duration: 0.5, ease: "easeInOut" } }}
      viewport={{ once: true }}
      className="relative w-full p-4 py-6 my-2 rounded-xl flex sm:flex-col justify-between 
      bg-light text-dark first:mt-0 border border-solid border-dark
      border-r-4 border-b-4 dark:bg-dark dark:border-light
      "
    >
      <MovingImg img={img} title={title} link={link} />
      <span
        className="text-primary font-semibold dark:text-primaryDark min-w-max pl-4 sm:self-start 
      sm:pl-0 xs:text-sm"
      >
        {date}
      </span>
    </motion.li>
  );
};
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
          alt={""}
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

export default function About() {
    const [showHonours, setShowHonours] = useState(true);
  const toggleHonours = () => {
    setShowHonours(!showHonours);
  };
  return (
    <>
      <Head>
        <title>About Dhanaraj.S</title>
        <meta
          name="description"
          content="Dhanaraj - About Dhanaraj"
        />
      </Head>

      <TransitionEffect />
      <main
        className={`flex  w-full flex-col items-center justify-center dark:text-light`}
      >
        <Layout className="pt-16">
          <AnimatedText
            text="About me"
            className="mb-16 !text-6xl !leading-tight lg:!text-7xl sm:!text-6xl xs:!text-4xl sm:mb-8 text-left"
          />

          <div className="grid w-full grid-cols-8 gap-16 sm:gap-8">
            <div
              className="col-span-3 flex flex-col items-start justify-start xl:col-span-4 md:order-2 
            md:col-span-8"
            >
              <h2 className="mb-4 text-lg font-bold uppercase text-dark/75 dark:text-light/75">
                BIOGRAPHY
              </h2>
              <p className="font-medium ">
                To obtain a position that will enable me to use my skills,
                educational background, and ability to work well with people to
                enhance students' performance.
              </p>
              <p className="my-4 font-medium">
                Anchored a panel discussion on “Awareness on Cyber and Digital
                Forensic” in FM Rainbow (AIR), Coimbatore on 26.10.2019. Gave a
                talk on “Recent trends in cyber security “in All India Radio
                (AIR) on 06.12.2019
              </p>
              <p className="my-4 font-medium">
                Having extensive experience in developing and implementing
                various applications in Oracle, Visual Basic 6.0, ASP, VB.Net,
                ADO.Net and ASP.Net.
              </p>
              <p className="my-4 font-medium">
                Invited talks given to various colleges in Coimbatore, Erode,
                Salem, Chennai &Mumbai on following Topics, Cyber Security and
                Awareness, Doom in Palm, Dotnet Technologies.
              </p>
            </div>
            <div
              className="relative col-span-3 h-max rounded-2xl border-2 border-solid border-dark 
            bg-light p-8 dark:border-light
            xl:col-span-4 md:col-span-8 md:order-1
            "
            >
              <div
                className="absolute  top-0 -right-3 -z-10 h-[103%] w-[102%]  rounded-[2rem] rounded-br-3xl "
                style={{ background: "#7CAADC" }}
              />
              <Image
                className="rounded-2xl border-2 border-solid border-dark"
                priority={true}
                src={profile}
                alt="Travis Lord"
                sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"
              />
            </div>
            <div className="col-span-2 flex flex-col gap-8 justify-between xl:col-span-8 xl:flex-column xl:items-center md:order-3">
              <div className="flex flex-col items-center items-start text-left">
                <span className="inline-block text-3xl font-bold sm:text-4xl md:text-6xl xs:text-2xl">
                  <AnimatedNumberFramerMotion value={16} /> years
                </span>
                <h3 className="mb-4 text-base font-medium text-center text-dark/75 dark:text-light/75 sm:text-lg md:text-xl xs:text-sm">
                  Teaching and Research experience in Computer Science and
                  Applications.
                </h3>
              </div>

              <div className="flex flex-col items-center justify-center text-left">
                <span className="inline-block text-3xl font-bold sm:text-4xl md:text-6xl xs:text-2xl">
                  <AnimatedNumberFramerMotion value={4} />+ years
                </span>
                <h3 className="mb-4 text-base font-medium text-center text-dark/75 dark:text-light/75 sm:text-lg md:text-xl xs:text-sm">
                  Teaching Software and latest IT Trends in Technical Training
                  institutes.
                </h3>
              </div>

              <div className="flex flex-col items-center justify-center text-left">
                <span className="inline-block text-3xl font-bold sm:text-4xl md:text-6xl xs:text-2xl text-left">
                  <AnimatedNumberFramerMotion value={9} />+
                </span>
                <h3 className="mb-4 text-base font-medium text-center text-dark/75 dark:text-light/75 sm:text-lg md:text-xl xs:text-sm text-left">
                  Projects Published
                </h3>
              </div>

              <div className="flex flex-col items-center justify-center text-left">
                <span className="inline-block text-3xl font-bold sm:text-4xl md:text-6xl xs:text-2xl text-left">
                  <AnimatedNumberFramerMotion value={8} />+
                </span>
                <h3 className="mb-4 text-base font-medium text-center text-dark/75 dark:text-light/75 sm:text-lg md:text-xl xs:text-sm text-left">
                  Faculty Developement Programmes & Papers presented
                </h3>
              </div>
            </div>
          </div>
          <Experience />

          {/* Honours & Memberships Section */}
          <section className=" bg-gradient-to-r from-indigo-50 to-blue-50 p-6 sm:p-3 rounded-2xl shadow-lg">
            <div className="flex justify-between items-center mb-4 sm:mb-6">
              <h2 className="text-xl sm:text-2xl font-bold flex items-center text-indigo-800">
                <i className="fas fa-award mr-2 sm:mr-3 text-xl sm:text-2xl"></i>
                Honors & Memberships
              </h2>
              <button
                onClick={toggleHonours}
                className="text-indigo-600 hover:text-indigo-800 focus:outline-none p-1"
                aria-expanded={showHonours}
                aria-controls="honours-section"
              >
                <i
                  className={`fas fa-chevron-${
                    showHonours ? "up" : "down"
                  } text-lg`}
                ></i>
              </button>
            </div>

            <div
              id="honours-section"
              className={`grid gap-3 sm:gap-4 transition-all duration-300 ${
                showHonours ? "grid" : "hidden"
              }`}
            >
              {[
                {
                  icon: "fas fa-users",
                  title: "Junior Chamber International",
                  org: "Coimbatore Cosmo",
                  color: "bg-indigo-100 text-indigo-800"
                },
                {
                  icon: "fas fa-flask",
                  title: "Indian Science Congress",
                  org: "New Delhi",
                  color: "bg-blue-100 text-blue-800"
                },
                {
                  icon: "fas fa-globe-asia",
                  title: "Intl. Assoc. of CS & IT",
                  org: "Singapore",
                  color: "bg-purple-100 text-purple-800"
                },
                {
                  icon: "fas fa-laptop",
                  title: "Intl. Assoc. of Engineers",
                  org: "Computer Scientists",
                  color: "bg-teal-100 text-teal-800"
                },
                {
                  icon: "fas fa-chalkboard-teacher",
                  title: "CS Teachers Association",
                  org: "USA",
                  color: "bg-cyan-100 text-cyan-800"
                }
              ].map((item, index) => (
                <div
                  key={index}
                  className="bg-white p-3 sm:p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow"
                >
                  <div className="flex items-start gap-2 sm:gap-3">
                    <div
                      className={`p-2 rounded-full ${item.color} bg-opacity-30 flex-shrink-0 sm:hidden`}
                    >
                      <i className={`${item.icon}`}></i>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 text-sm sm:text-base">
                        {item.title}
                      </h3>
                      <p className="text-gray-600 text-xs sm:text-sm">
                        {item.org}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
          {/* <h2 className="font-bold text-6xl w-full text-start md:text-6xl xs:text-4xl mb-20">
            Publications
          </h2> */}

          {/* <ul className="flex flex-col items-center relative">
            <Article
              title="A study on e-mail image spam filtering techniques"
              time="1 min read"
              date="2013"
              link=""
            />
            <Article
              title="Comparative Study of Effective Performance of Association Rule Mining"
              time="1 min read"
              date="2017"
              link=""
            />
            <Article
              title="Anti Image Spam Filter Using Unified Feature Fusion And  Hybrid Subset Selection Algorithm"
              time="1 min read"
              date="2018"
              link=""
            />
            <Article
              title="An Operational Perspective on Achieving Sustainable Competitive Advantage into a Business Environment by Adapting Enterprise Resource Planning (ERP) System"
              time="1 min read"
              date="2019"
              link=""
            />
            <Article
              title="Impact of Image Spam and its Avoidance"
              time="1 min read"
              date="2019"
              link=""
            />
            <Article
              title="Investigation and strategy of intelligent controller (ACBIC) for DC link control in SAPF system for industrial power systems"
              time="1 min read"
              date="2020"
              link=""
            />
            <Article
              title="An efficient control strategy of shunt active power filter for asymmetrical load condition using time domain approach"
              time="1 min read"
              date="2020"
              link=""
            />
            <Article
              title="Certain Improvements to Location Aided Packet Marking andDdos Attacks in Internet"
              time="1 min read"
              date="2020"
              link=""
            />
            <Article
              title="Development Of LPP Model Towards Outbound Freight Optimization For Traded Parts Among Centralized Warehouse Operations"
              time="1 min read"
              date="2020"
              link=""
            />
          </ul> */}

          <div className="mt-9 flex items-center justify-center gap-3 grid-cols-2">
            <Link
              href="/publications/"
              target={"_self"}
              className={`flex items-center rounded-lg border-2 border-solid bg-light p-2.5 px-6 text-lg font-semibold
            capitalize text-dark hover:border-light hover:bg-dark hover:text-light 
            dark:bg-dark dark:text-light dark:hover:bg-light dark:hover:text-dark
            md:p-2 md:px-4 md:text-base
             `}
            >
              View Publications
            </Link>
            <Link
              href="/certifications/"
              target={"_self"}
              className={`flex items-center rounded-lg border-2 border-solid bg-dark p-2.5 px-6 text-lg font-semibold
            capitalize text-light hover:border-dark hover:bg-transparent hover:text-dark 
            dark:bg-light dark:text-dark dark:hover:border-light dark:hover:bg-dark dark:hover:text-light
            md:p-2 md:px-4 md:text-base
             `}
             style={{background:'#7CAADC'}}
            >
              View Certifications
            </Link>
          </div>
          <HireMe2 />
        </Layout>
      </main>
    </>
  );
}
