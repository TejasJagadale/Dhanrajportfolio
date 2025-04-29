"use client";
import Layout from "@/components/Layout";
import Head from "next/head";
import AnimatedText from "@/components/AnimatedText";
import TransitionEffect from "@/components/TransitionEffect";
import { motion } from "framer-motion";
import Link from "next/link";

export default function About() {
  const contactData = [
    { 
      contact: "Email", 
      details: "dhanarajsms@gmail.com",
      link: "mailto:dhanarajsms@gmail.com"
    },
    { 
      contact: "Phone", 
      details: "+91 98946 85857",
      link: "tel:+919894685857"
    }
  ];

  const socialData = [
    { 
      contact: "LinkedIn", 
      details: "linkedin.com/in/dhanaraj",
      link: "https://linkedin.com/in/dhanaraj"
    },
    { 
      contact: "Instagram", 
      details: "@Dhanaraj",
      link: "https://instagram.com/Dhanaraj"
    },
    { 
      contact: "Twitter", 
      details: "@Dhanaraj",
      link: "https://twitter.com/Dhanaraj"
    }
  ];

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <>
      <Head>
        <title>Contact Me | Dhanaraj.S Portfolio</title>
        <meta
          name="description"
          content="Get in touch with me through various contact methods. Dhanaraj.S, A open-source portfolio theme built with Nextjs"
        />
      </Head>

      <TransitionEffect />
      <main className="flex w-full flex-col items-center justify-center dark:text-light">
        <Layout className="pt-16">
          <AnimatedText
            text="Let's Connect!"
            className="mb-4 !text-4xl !leading-tight lg:!text-7xl sm:!text-5xl xs:!text-3xl"
          />
          
          <motion.p 
            className="text-lg text-gray-600 dark:text-gray-300 mb-8 text-center max-w-3xl mx-auto px-4"
            initial="hidden"
            animate="visible"
            variants={fadeIn}
          >
            For awareness programs, guest lectures, or workshops on cybercrime and online safety, feel free to get in touch.
          </motion.p>

          <div className="w-full px-4">
            <motion.div 
              className="bg-gray-50 dark:bg-dark-2 rounded-2xl p-6 mb-12 shadow-sm"
              initial="hidden"
              animate="visible"
              variants={fadeIn}
              transition={{ delay: 0.2 }}
            >
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Just a friendly reminder that the information provided here is for
                business purposes only. If you have any questions, feel free to
                chat with me directly on my social media.
              </p>
              <p className="text-gray-600 dark:text-gray-300">
                I appreciate your understanding in using this responsibly.
              </p>
            </motion.div>

            <div className="flex flex-wrap gap-8 justify-center">
              {/* Contact Information */}
              <motion.div 
                className="flex-1 min-w-[300px] max-w-md"
                initial="hidden"
                animate="visible"
                variants={fadeIn}
                transition={{ delay: 0.3 }}
              >
                <h2 className="text-3xl font-bold mb-6 text-center sm:text-left">
                  Contact Information
                </h2>
                
                <div className="bg-white dark:bg-dark rounded-xl shadow-md overflow-hidden">
                  <div className="p-6">
                    {contactData.map((item, index) => (
                      <motion.div 
                        key={index}
                        className="mb-6 last:mb-0"
                        whileHover={{ scale: 1.02 }}
                        transition={{ type: "spring", stiffness: 400, damping: 10 }}
                      >
                        <Link href={item.link} passHref>
                          <div className="flex items-start cursor-pointer group">
                            <div className="mr-4 mt-1 w-6 h-6 flex items-center justify-center">
                              <span className="text-lg">{item.contact === "Email" ? "✉️" : "📞"}</span>
                            </div>
                            <div>
                              <h3 className="text-lg font-semibold text-gray-800 dark:text-light group-hover:text-primary dark:group-hover:text-primary-light">
                                {item.contact}
                              </h3>
                              <p className="text-gray-600 dark:text-gray-300 group-hover:text-gray-800 dark:group-hover:text-light">
                                {item.details}
                              </p>
                            </div>
                          </div>
                        </Link>
                      </motion.div>
                    ))}
                  </div>
                </div>

                <p className="mt-6 text-gray-600 dark:text-gray-300">
                  If you need any further information, such as my phone number,
                  please don't hesitate to send me an email first.
                </p>
              </motion.div>

              {/* Social Media */}
              <motion.div 
                className="flex-1 min-w-[300px] max-w-md"
                initial="hidden"
                animate="visible"
                variants={fadeIn}
                transition={{ delay: 0.4 }}
              >
                <h2 className="text-3xl font-bold mb-6 text-center sm:text-left">
                  Social Media
                </h2>
                
                <div className="bg-white dark:bg-dark rounded-xl shadow-md overflow-hidden">
                  <div className="p-6">
                    {socialData.map((item, index) => (
                      <motion.div 
                        key={index}
                        className="mb-6 last:mb-0"
                        whileHover={{ scale: 1.02 }}
                        transition={{ type: "spring", stiffness: 400, damping: 10 }}
                      >
                        <Link href={item.link} passHref target="_blank" rel="noopener noreferrer">
                          <div className="flex items-start cursor-pointer group">
                            <div className="mr-4 mt-1 w-6 h-6 flex items-center justify-center">
                              <span className="text-lg">
                                {item.contact === "LinkedIn" ? "🔗" : 
                                 item.contact === "Instagram" ? "📷" : "🐦"}
                              </span>
                            </div>
                            <div>
                              <h3 className="text-lg font-semibold text-gray-800 dark:text-light group-hover:text-primary dark:group-hover:text-primary-light">
                                {item.contact}
                              </h3>
                              <p className="text-gray-600 dark:text-gray-300 group-hover:text-gray-800 dark:group-hover:text-light">
                                {item.details}
                              </p>
                            </div>
                          </div>
                        </Link>
                      </motion.div>
                    ))}
                  </div>
                </div>

                <div className="mt-6 text-gray-600 dark:text-gray-300 space-y-4">
                  <p>
                    If you want to find me on social media, just search for
                    @Dhanaraj. That's my username on almost all platforms.
                  </p>
                  <p>
                    For your convenience, I've included quick links to the
                    social media platforms I use most frequently.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </Layout>
      </main>
    </>
  );
}