import Link from "next/link";
import React from "react";
import {
  AiFillFacebook,
  AiFillTwitterSquare,
  AiFillLinkedin,
  AiFillInstagram,
} from "react-icons/ai";

function Footer() {
  return (
    <>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#1f2937"
          fill-opacity="1"
          d="M0,224L24,197.3C48,171,96,117,144,90.7C192,64,240,64,288,80C336,96,384,128,432,133.3C480,139,528,117,576,101.3C624,85,672,75,720,80C768,85,816,107,864,112C912,117,960,107,1008,117.3C1056,128,1104,160,1152,154.7C1200,149,1248,107,1296,117.3C1344,128,1392,192,1416,224L1440,256L1440,320L1416,320C1392,320,1344,320,1296,320C1248,320,1200,320,1152,320C1104,320,1056,320,1008,320C960,320,912,320,864,320C816,320,768,320,720,320C672,320,624,320,576,320C528,320,480,320,432,320C384,320,336,320,288,320C240,320,192,320,144,320C96,320,48,320,24,320L0,320Z"></path>
      </svg>
      <div className="bg-[#1f2937] text-gray-300 -mt-5 pt-0 pb-1 px-5 lg:px-16 2xl:px-80">
        <div className="footer text-center sm:text-start grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          <div className="logo flex justify-center sm:justify-between items-center sm:items-start flex-col gap-5">
            <img src="/img/logo_text.png" alt="Logo" className="w-32 md:w-48" />
            <div className="social flex justify-center items-center gap-5">
              <div>
                <Link href={``}>
                  <AiFillFacebook className="text-2xl md:text-3xl hover:text-[#ee3e38] transition duration-300" />
                </Link>
              </div>
              <div>
                <Link href={``}>
                  <AiFillTwitterSquare className="text-2xl md:text-3xl hover:text-[#ee3e38] transition duration-300" />
                </Link>
              </div>
              <div>
                <Link href={``}>
                  <AiFillInstagram className="text-2xl md:text-3xl hover:text-[#ee3e38] transition duration-300" />
                </Link>
              </div>
              <div>
                <Link href={``}>
                  <AiFillLinkedin className="text-2xl md:text-3xl hover:text-[#ee3e38] transition duration-300" />
                </Link>
              </div>
            </div>
          </div>
          <div className="links">
            <h2 className="text-[#ee3e38] md:text-xl 2xl:text-2xl font-bold">
              Useful Links
            </h2>
            <div className="mt-2 uppercase text-gray-300 text-sm">
              <div>
                <Link href={``}>About</Link>
              </div>
              <div>
                <Link href={``}>Services</Link>
              </div>
              <div>
                <Link href={``}>Projects</Link>
              </div>
              <div>
                <Link href={``}>Blog</Link>
              </div>
            </div>
          </div>
          <div className="contact">
            <h2 className="text-[#ee3e38] font-bold md:text-xl 2xl:text-2xl">
              Keep in touch
            </h2>
            <div className="mt-2">
              <p>123 Demo St, San Fransisco, CA 45678, United States.</p>
              <p>+1 123-456-7890</p>
              <p>mail@example.com</p>
            </div>
          </div>
        </div>

        <p className="py-2 mt-14 uppercase text-center text-gray-500/100">&copy; Axiodesk, {new Date().getFullYear()} </p>
      </div>
    </>
  );
}

export default Footer;
