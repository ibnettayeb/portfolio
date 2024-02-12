import image from "../assets/image.jpg";
import { FiGithub, FiInstagram, FiTwitter, FiLinkedin } from "react-icons/fi";

function About() {
  return (
    <div className="w-full h-screen flex justify-center items-center overflow-hidden">
      <div className="w-[50%]">
        <h3 className="text-3xl font-syncopate font-bold mb-10 text-center">
          about me
        </h3>
        <div className="w-[76%] mx-auto bg-bg-100 py-4 px-6 rounded-lg">
          <div className="flex items-center justify-between mb-5">
            <div className="flex items-center gap-3">
              <div className="w-14 h-14 rounded-full border-[3px] border-primary overflow-hidden">
                <img src={image} alt="rachid ibnettayeb" />
              </div>
              <div>
                <h4 className="font-syncopate font-bold">rachid ibnettayeb</h4>
                <span className="font-syncopate text-xs tracking-[0.4em]">
                  junior developer
                </span>
              </div>
            </div>
            <ul className="flex items-center gap-4">
              <li>
                <a href="">
                  <FiGithub size={18} />
                </a>
              </li>
              <li>
                <a href="">
                  <FiInstagram size={18} />
                </a>
              </li>
              <li>
                <a href="">
                  <FiTwitter size={18} />
                </a>
              </li>
              <li>
                <a href="">
                  <FiLinkedin size={18} />
                </a>
              </li>
            </ul>
          </div>
          <div className="flex flex-col gap-4 text-textColor">
            <p>
              I'm a junior front-end web developer passionate about crafting
              immersive digital experiences through code. My journey in web
              development is fueled by a relentless drive to learn and innovate,
              constantly seeking new challenges to hone my skills and push
              creative boundaries.
            </p>
            <p>
              Equipped with a solid foundation in front-end technologies. My
              expertise lies in writing clean, efficient code to ensure seamless
              functionality across various devices and browsers. Additionally,
              I'm eager to explore emerging technologies and frameworks to stay
              ahead of industry trends and deliver cutting-edge solutions.
            </p>
            <p>
              My objective is to continuously enhance my expertise and remain
              abreast of the latest industry developments. I'm dedicated to
              collaborating with teams to spearhead impactful projects, refining
              user experiences and achieving tangible outcomes.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
