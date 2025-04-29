import Link from "next/link";
import React from "react";
import Layout from "./Layout";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faLinkedin,
  faYoutube
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <footer className="w-full border-t border-solid border-dark/75 dark:border-light/75 font-medium text-lg dark:text-light sm:text-base">
      <div className="w-full sm:py-4 p-8 py-8 flex flex-row items-center justify-center gap-6 sm:!gap-4 lg:flex-col lg:items-center lg:p-16 lg:py-8">
        <div className="flex flex-row items-center lg:flex-col lg:gap-2">
          <div>Dr.S.Dhanaraj</div>
          <div>
            <a href="mailto:dhanarajsms@gmail.com" className="hover:underline">
              dhanarajsms@gmail.com
            </a>
          </div>
        </div>
        <div className="flex items-center justify-center gap-4">
          <a href="#" aria-label="Instagram">
            <FontAwesomeIcon
              icon={faInstagram}
              className="h-8 w-8 md:h-10 md:w-10"
              style={{height:'28px', width:'28px'}}
            />
          </a>
          <a href="#" aria-label="LinkedIn">
            <FontAwesomeIcon
              icon={faLinkedin}
              className="h-8 w-8 md:h-10 md:w-10"
              style={{height:'28px', width:'28px'}}
            />
          </a>
          <a href="#" aria-label="YouTube">
            <FontAwesomeIcon
              icon={faYoutube}
              className="h-8 w-8 md:h-10 md:w-10"
              style={{height:'28px', width:'28px'}}
            />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
