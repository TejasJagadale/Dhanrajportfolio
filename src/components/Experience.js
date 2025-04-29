"use client";
import React, { useRef } from "react";
import { motion, useScroll } from "framer-motion";
import LiIcon from "./LiIcon";
import Link from "next/link";

const Details = ({ position, company, companyLink, time, address, work }) => {
  const ref = useRef(null);
  return (
    <li
      ref={ref}
      className="my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-start justify-between md:w-[80%]"
    >
      <LiIcon reference={ref} />
      <motion.div
        initial={{ y: 50 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.1, type: "spring" }}
      >
        <h3 className="capitalize font-bold text-2xl sm:text-xl xs:text-lg">
          {position}{" "}
          <a
            className="capitalize text-slideGreen dark:text-primaryDark"
            href={companyLink}
            target={"_blank"}
          >
            @{company}
          </a>
        </h3>
        <span className="capitalize text-dark/75 font-medium dark:text-light/50 xs:text-sm">
          {time}  {address}
        </span>
        <p className="font-medium w-full md:text-sm"> {work}</p>
      </motion.div>
    </li>
  );
};

const Experience = () => {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    // offset: ["start end", "center start"]
  });

  const { scrollProgress } = useScroll({
    target: ref,
    // offset: ["start end", "center start"]
  });

  return (
    <>
      <div className="my-20">
        <h2 className="font-bold text-6xl w-full text-start md:text-6xl xs:text-4xl mb-20">
          Education
        </h2>

        <div
          ref={ref}
          className="relative w-[100%] mx-auto lg:w-[90%] md:w-full"
        >
          <motion.div
            className="absolute left-9 top-0 w-[4px] md:w-[2px] md:left-[30px] xs:left-[20px] h-full bg-primaryDark shadow-3xl 
          origin-top  dark:bg-primaryDark dark:shadow-3xl"
            style={{ scaleY: scrollProgress }}
          />

          <ul className="w-full flex flex-col items-start justify-between xs:ml-2">
            <Details
              position="Ph.D"
              company="Computer Applications at Bharathiar University"
              // time="Jan 2025 - Till Date"
            />

            <Details
              position="M.Phil"
              company="Computer Science (M.Phil)  MaduraiKamarajar University"
              // time="Dec 2023 - Dec 2024"
            />
            <Details
              position="Master of Computer Applications (M.C.A.) "
              company="Bharathidasan University"
              // time="Sep 2022 - Aug 2023"
            />
            <Details
              position="Bachelor of Commerce (B.Com)"
              company="Bharathiar University"
              // time="Feb 2022 - Sep 2022"
            />
          </ul>
        </div>
      </div>
      <div className="my-20">
        <h2 className="font-bold text-6xl w-full text-start md:text-6xl xs:text-4xl mb-20">
          Experience
        </h2>

        <div
          ref={ref}
          className="relative w-[100%] mx-auto lg:w-[90%] md:w-full"
        >
          <motion.div
            className="absolute left-9 top-0 w-[4px] md:w-[2px] md:left-[30px] xs:left-[20px] h-full bg-primaryDark shadow-3xl 
            origin-top  dark:bg-primaryDark dark:shadow-3xl"
            style={{ scaleY: scrollYProgress }}
          />

          <ul className="w-full flex flex-col items-start justify-between xs:ml-2">
            <Details
              position="Founder & Director"
              company="SecForgTek Solutions, Coimbatore"
              time="Jan 2025 - Till Date"
            />

            <Details
              position="Dean - Academics"
              company="CareerTiQ Solutions Private Ltd, Coimbatore."
              time="Dec 2023 - Dec 2024"
            />
            <Details
              position="Senior Faculty & Advisor for Vels University, Chennai."
              company="I Nurutre Education Solutions, Bangalore."
              time="Sep 2022 - Aug 2023"
            />
            <Details
              position="Associate Professor & Director – Computer Science"
              company="Kamalam College of Arts & Science, Pollachi"
              time="Feb 2022 - Sep 2022"
            />
            <Details
              position="Director - Academics"
              company="Cognizance Academia, Coimbatore"
              time="Jun 2020 - Noc 2021"
            />
            <Details
              position="HoD- Department of Digital and Cyber Forensic Science"
              company="Sree Saraswathi Thyagaraja College, Pollachi"
              time="Jun 2019 - Apr 2020"
            />
            <Details
              position="Assistant Professor – MCA Department."
              company="Sree Saraswathi Thyagaraja College, Pollachi"
              time="Dec 2010 - May 2019"
            />
            <Details
              position="Assistant Professor –MCA Department."
              company="Coimbatore Institute of Management And Technology, Coimbatore"
              time="Sep 2006 - Dec 2010"
            />
            <Details
              position="Lecturer in Computer Science"
              company="Kovai Kalaimagal College of Arts and Science, Coimbatore"
              time="Jun 2005 - Aug 2006"
            />
            <Details
              position="Technical Head"
              company="SSi Limited, Coimbatore"
              time="Jan 2001 - May 2005"
            />
          </ul>
        </div>
        {/* <div className="mt-20 flex items-center justify-center gap-3 grid-cols-2">
          <Link
            href="/projects/"
            target={"_self"}
            className={`flex items-center rounded-lg border-2 border-solid bg-light p-2.5 px-6 text-lg font-semibold
            capitalize text-dark hover:border-light hover:bg-dark hover:text-light 
            dark:bg-dark dark:text-light dark:hover:bg-light dark:hover:text-dark
            md:p-2 md:px-4 md:text-base
             `}
          >
            View Projects
          </Link>
          <Link
            href="/articles/"
            target={"_self"}
            className={`flex items-center rounded-lg border-2 border-solid bg-dark p-2.5 px-6 text-lg font-semibold
            capitalize text-light hover:border-dark hover:bg-transparent hover:text-dark 
            dark:bg-light dark:text-dark dark:hover:border-light dark:hover:bg-dark dark:hover:text-light
            md:p-2 md:px-4 md:text-base
             `}
             style={{background:'#7CAADC'}}
          >
            View Articles
          </Link>
        </div> */}
      </div>
    </>
  );
};

export default Experience;
