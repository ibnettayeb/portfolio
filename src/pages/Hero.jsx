import { firstName, lastName, job, shortDesc, skills } from "../data/data";
import Marquee from "react-fast-marquee";

function Hero() {
  return (
    <section className="w-full h-screen flex justify-center items-center overflow-hidden">
      <div className="w-[50%]">
        <h1 className="font-syncopate text-6xl font-bold text-center">
          <span className="text-primary">{firstName}</span> {lastName}
        </h1>
        <h2 className="font-syncopate text-xl tracking-[1.24em] text-center">
          {job}
        </h2>
        <p className="text-base font-extralight mt-8 text-center  w-[85%] m-auto">
          {shortDesc}
        </p>
        <Marquee
          direction="right"
          gradient={true}
          gradientColor="#0F172A"
          className="mt-8"
        >
          <div className="mx-2 flex gap-5 items-center justify-center">
            {skills.map((skill, index) => (
              <div
                key={index}
                className="bg-bg-100 flex justify-evenly gap-3 items-center w-fit rounded-full px-3 py-2 border border-bg-200"
              >
                <span className="text-primary">{skill.icon}</span>
                <span className="font-syncopate text-sm">{skill.text}</span>
              </div>
            ))}
          </div>
        </Marquee>
      </div>
    </section>
  );
}

export default Hero;
