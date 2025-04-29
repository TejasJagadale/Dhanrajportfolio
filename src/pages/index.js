import Layout from "@/components/Layout";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import TransitionEffect from "@/components/TransitionEffect";
import profilePic from "../../public/images/profile/dhanaraj.png";
import { HireMe2 } from "@/components/HireMe2";

export default function Home() {
  return (
    <>
      <Head>
        <title>Dhanaraj - Microsoft certified professional</title>
        <meta
          name="description"
          content="MPeoples Business Solutions Private Limites"
        />
      </Head>

      <TransitionEffect />
      <article
        className={`flex min-h-screen items-center text-dark dark:text-light sm:items-start`}
      >
        <Layout className="!pt-24 md:!pt-16 sm:!pt-10">
        <div className="flex w-full items-start justify-between md:flex-col pb-20 sm:pb-10">
            {/* Image container - modified for center alignment */}
            <div className="w-1/2 flex justify-center lg:hidden md:flex md:w-full sm:w-full sm:flex sm:justify-center sm:pb-6">
              {
                <Image
                  priority={true}
                  src={profilePic}
                  alt="image"
                  className="h-auto w-100"
                  height={340}
                  width={340}
                  sizes="33vw"
                />
              }
            </div>
            <div className="flex w-1/2 flex-col items-center self-center lg:w-full lg:text-center">
              {/* Rest of your content remains the same */}
              <div className="py-2 w-full mx-auto flex flex-col items-center justify-center text-center overflow-hidden sm:py-0">
                <h1 className="text-dark dark:text-light text-8xl font-bold w-full capitalize !text-left !text-4xl xl:!text-5xl lg:!text-center lg:!text-6xl md:!text-5xl sm:!text-2xl xl:text-6xl">
                  <span className="inline-block sm:text-3xl">
                    Dr.S.Dhanaraj.,&nbsp;
                  </span>
                  <span className="font-medium text-2xl sm:!text-1xl">
                    MCA.,M.Phil.,Ph.D
                  </span>
                </h1>
              </div>
              <div className="flex w-full items-center items-start lg:w-full lg:!justify-center sm:!justify-center md:!text-center md:inline-block md:w-full mb-3">
                <h2 className="animate-text bg-gradient-to-r from-lightGreen via-lightGreen to-slideGreen bg-clip-text text-transparent font-semibold capitalize !text-3xl xl:!text-3xl lg:!text-3xl md:!text-3xl sm:!text-xl">
                  Microsoft Certified Professional
                </h2>
              </div>
              <div className="flex w-full items-center items-start lg:w-full lg:!justify-center sm:!justify-center md:!text-center md:inline-block md:w-full">
                <p className="">
                  To obtain a position that will enable me to use my skills,
                  educational background, and ability to work well with people
                  to enhance students' performance. • Microsoft Certified
                  Professional [MCP] in Developing and Implementing Windows
                  based Applications
                </p>
              </div>
              <div className="mt-10 flex items-center self-start gap-3 grid-cols-2 lg:self-center gap-5">
                <Link
                  href="/about/"
                  target={"_self"}
                  className={`flex items-center rounded-lg border-2 border-solid bg-dark p-2.5 px-6 text-lg font-semibold
                capitalize text-light hover:border-dark hover:bg-transparent hover:text-dark
                dark:bg-light dark:text-dark dark:hover:border-light dark:hover:bg-dark dark:hover:text-light
                md:p-2 md:px-4 md:text-base
                `}
                >
                  About Me
                </Link>
                <Link
                  href="/contact/"
                  target={"_self"}
                  className={`flex items-center rounded-lg border-2 border-dark bg-light p-2.5 px-6 text-lg font-semibold
                capitalize text-dark hover:border-dark hover:bg-transparent hover:text-dark
                dark:bg-light dark:text-dark dark:hover:border-dark dark:hover:bg-ligh dark:hover:text-light
                md:p-2 md:px-4 md:text-base
                `}
                >
                  Contact me
                </Link>
              </div>
            </div>
          </div>
          {/* <div style={{ marginTop: "120px" }}>
            <div className="!text-left !text-6xl xl:!text-5xl lg:!text-center lg:!text-6xl md:!text-5xl sm:!text-3xl">
              My Goal
            </div>
            <p className="pt-10 font-medium">
              Aiming to enhance student success, I mentor them to achieve
              academic excellence and guiding research scholars to contribute
              meaningfully to their fields. I am committed to expanding
              collaborative opportunities by strengthening industry-academia
              partnerships, organizing events that bridge academic theory with
              practical application, and publishing high-quality research in
              reputable journals and conferences.
            </p>
          </div>
          <div className="pt-10">
            <div className="!text-left !text-6xl xl:!text-5xl lg:!text-center lg:!text-6xl md:!text-5xl sm:!text-3xl">
              Experience Summary
            </div>
            <p className="pt-10 font-medium">
              With Sixteen years of Teaching and Research experience in Computer
              Science and Applications. Four Plus years of work experience in
              Teaching Software and latest IT Trends in Technical Training
              institutes.• Having extensive experience in developing and
              implementing various applications in Oracle, Visual Basic 6.0,
              ASP, VB.Net, ADO.Net and ASP.Net.• Produced 51 Microsoft Certified
              Professionals [MCP’s]in Dot net Technologies.
            </p>
          </div>
          <div className="pt-10">
            <div className="!text-left !text-6xl xl:!text-5xl lg:!text-center lg:!text-6xl md:!text-5xl sm:!text-3xl">
              Membership
            </div>
            <ul className="pt-10 font-medium">
              <li>
                {" "}
                &#10003; JCI (Junior Chamber International – Coimbatore Cosmo){" "}
              </li>
              <li>
                {" "}
                &#10003; The Indian Science Congress Association – New Delhi{" "}
              </li>
              <li>
                {" "}
                &#10003; International Association of Computer Science and
                Information Technology – Singapore{" "}
              </li>
              <li>
                {" "}
                &#10003; International Association of Engineers and Computer
                Scientists{" "}
              </li>
              <li>
                {" "}
                &#10003; Computer Science Teachers Association, United States
              </li>
            </ul>
          </div>
          <div className="mt-10 flex items-center self-start gap-3 grid-cols-2 lg:self-center">
            <Link
              href="/contact/"
              target={"_self"}
              className={`flex items-center rounded-lg border-2 border-dark bg-light p-2.5 px-6 text-lg font-semibold
                  capitalize text-dark hover:border-dark hover:bg-transparent hover:text-dark
                  dark:bg-light dark:text-dark dark:hover:border-dark dark:hover:bg-ligh dark:hover:text-light
                  md:p-2 md:px-4 md:text-base
                  `}
            >
              Contact me
            </Link>
          </div> */}
        </Layout>
        <HireMe2 />
      </article>
    </>
  );
}

// import Layout from "@/components/Layout";
// import Head from "next/head";
// import Image from "next/image";
// import profile from "../../public/images/profile/Riley.png";
// import { useInView, useMotionValue, useSpring } from "framer-motion";
// import { useEffect, useRef } from "react";
// import AnimatedText from "@/components/AnimatedText";
// import TransitionEffect from "@/components/TransitionEffect";
// import Link from "next/link";
// import { HireMe2 } from "@/components/HireMe2";
// import Experience from "@/components/Experience";
// import Articles from "./articles";

// function AnimatedNumberFramerMotion({ value }) {
//   const ref = useRef(null);
//   const motionValue = useMotionValue(0);
//   const springValue = useSpring(motionValue, { duration: 3000 });
//   const isInView = useInView(ref, { once: true });
//   useEffect(() => {
//     if (isInView) {
//       motionValue.set(value);
//     }
//   }, [motionValue, value, isInView]);

//   useEffect(
//     () =>
//       springValue.on("change", (latest) => {
//         if (ref.current && latest.toFixed(0) <= value) {
//           ref.current.textContent = latest.toFixed(0);
//         }
//       }),
//     [springValue, value]
//   );

//   return <span ref={ref} />;
// }

// export default function About() {
//   return (
//     <>
//       <Head>
//         <title>About NexTemp</title>
//         <meta
//           name="description"
//           content="NexTemp, A open-source portfolio theme built with Nextjs"
//         />
//       </Head>

//       <article
//         className={`flex items-center text-dark dark:text-light sm:items-start headtexts`}
//       >
//         <Layout className="pt-16 lg:pt-12 md:pt-8">
//           <div className="flex w-full items-start justify-between md:flex-col" style={{marginLeft:'60px'}}>
//             <div className="flex flex-col items-center self-center lg:w-full lg:text-center">
//               <AnimatedText
//                 text="Hey, I’m Dr.S.Dhanaraj., "
//                 className="!text-left !text-6xl xl:!text-5xl lg:!text-center lg:!text-6xl md:!text-5xl sm:!text-3xl"
//               />
//               <div className="flex w-1/2 w-full items-center items-start lg:w-full  lg:!justify-center  sm:!justify-center  md:!text-center md:inline-block md:w-full">
//                 <h2 className="animate-text bg-gradient-to-r from-lightGreen via-lightGreen to-slideGreen bg-clip-text text-transparent font-semibold capitalize !text-5xl xl:!text-4xl lg:!text-4xl md:!text-5xl sm:!text-3xl">
//                   MCA.,M.Phil.,Ph.D
//                 </h2>
//               </div>
//             </div>
//           </div>
//         </Layout>
//       </article>

//       <TransitionEffect />
//       <main
//         className={`flex  w-full flex-col items-center justify-center dark:text-light`}
//       >
//         <Layout className="pt-16 lg:pt-12 md:pt-8">
//           <div className="grid w-full grid-cols-8 gap-16 sm:gap-8 px-16 lg:px-12 md:px-6 sm:px-4">
//             <div className="col-span-3 flex flex-col items-start justify-start xl:col-span-4 md:order-2 md:col-span-8">
//               <h2 className="mb-4 text-lg font-bold uppercase text-dark/75 dark:text-light/75">
//                 BIOGRAPHY
//               </h2>
//               <p className="font-medium ">
//                 To obtain a position that will enable me to use my skills,
//                 educational background, and ability to work well with people to
//                 enhance students' performance.
//               </p>
//               <p className="my-4 font-medium">
//                 Anchored a panel discussion on “Awareness on Cyber and Digital
//                 Forensic” in FM Rainbow (AIR), Coimbatore on 26.10.2019. Gave a
//                 talk on “Recent trends in cyber security “in All India Radio
//                 (AIR) on 06.12.2019
//               </p>
//               <p className="my-4 font-medium">
//                 Having extensive experience in developing and implementing
//                 various applications in Oracle, Visual Basic 6.0, ASP, VB.Net,
//                 ADO.Net and ASP.Net.
//               </p>
//               <p className="my-4 font-medium">
//                 Invited talks given to various colleges in Coimbatore, Erode,
//                 Salem, Chennai &Mumbai on following Topics • Cyber Security and
//                 Awareness. • Doom in Palm. • Dotnet Technologies.
//               </p>
//             </div>
//             <div className="relative col-span-3 h-max rounded-2xl border-2 border-solid border-dark bg-light p-8 dark:border-light dark:bg-dark xl:col-span-4 md:col-span-8 md:order-1">
//               <div
//                 className="absolute  top-0 -right-3 -z-10 h-[103%] w-[102%]  rounded-[2rem] rounded-br-3xl "
//                 style={{ background: "#7CAADC" }}
//               />
//               <Image
//                 className="h-auto w-full rounded-2xl border-2 border-solid border-dark"
//                 priority={true}
//                 src={profile}
//                 alt="Travis Lord"
//                 sizes="(max-width: 768px) 100vw,
//               (max-width: 1200px) 50vw,
//               33vw"
//               />
//             </div>
//             <div className="col-span-2 flex flex-col gap-8 justify-between xl:col-span-8 xl:flex-column xl:items-center md:order-3">
//               <div className="flex flex-col items-center justify-center">
//                 <span className="inline-block text-3xl font-bold sm:text-4xl md:text-6xl xs:text-2xl">
//                   <AnimatedNumberFramerMotion value={16} /> years
//                 </span>
//                 <h3 className="mb-4 text-base font-medium text-center text-dark/75 dark:text-light/75 sm:text-lg md:text-xl xs:text-sm">
//                   Teaching and Research experience in Computer Science and
//                   Applications.
//                 </h3>
//               </div>
//               <div className="flex flex-col items-center justify-center">
//                 <span className="inline-block text-3xl font-bold sm:text-4xl md:text-6xl xs:text-2xl">
//                   <AnimatedNumberFramerMotion value={4} />+ years
//                 </span>
//                 <h3 className="mb-4 text-base font-medium text-center text-dark/75 dark:text-light/75 sm:text-lg md:text-xl xs:text-sm">
//                   Teaching Software and latest IT Trends in Technical Training
//                   institutes.
//                 </h3>
//               </div>
//               <div className="flex flex-col items-center justify-center">
//                 <span className="inline-block text-3xl font-bold sm:text-4xl md:text-6xl xs:text-2xl">
//                   Experience in
//                 </span>
//                 <h3 className="mb-4 text-base font-medium text-center text-dark/75 dark:text-light/75 sm:text-lg md:text-xl xs:text-sm">
//                   developing and implementing various applications in Oracle,
//                   Visual Basic 6.0, ASP, VB.Net, ADO.Net and ASP.Net.
//                 </h3>
//               </div>
//             </div>
//           </div>
//           <div className="mt-10 lg:mt-8 md:mt-6 flex items-center self-start gap-3 grid-cols-2 lg:self-center px-16 lg:px-12 md:px-6 sm:px-4">
//             <Link
//               href="/about/"
//               target={"_self"}
//               className={`flex items-center rounded-lg border-2 border-solid bg-dark p-2.5 px-6 text-lg font-semibold capitalize text-light hover:border-dark hover:bg-transparent hover:text-dark dark:bg-light dark:text-dark dark:hover:border-light dark:hover:bg-dark dark:hover:text-light md:p-2 md:px-4 md:text-base`}
//               style={{ background: "#7CAADC" }}
//             >
//               Get To Know Me
//             </Link>
//             <Link
//               href="/projects/"
//               target={"_self"}
//               className={`flex items-center rounded-lg border-2 border-solid bg-light p-2.5 px-6 text-lg font-semibold capitalize text-dark hover:border-light hover:bg-dark hover:text-light dark:bg-dark dark:text-light dark:hover:bg-light dark:hover:text-dark md:p-2 md:px-4 md:text-base`}
//             >
//               projects
//             </Link>
//           </div>
//         </Layout>
//         <HireMe2 />
//       </main>
//     </>
//   );
// }
