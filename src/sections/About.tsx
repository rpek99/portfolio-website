
import { Globe } from "../components/globe";
import { Frameworks } from "@/components/Frameworks";

const About = () => {
  return (
    <section className="c-space section-spacing" id="about">
      <h2 className="text-heading">About Me</h2>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-6 md:auto-rows-[18rem] mt-12">
        <div className="flex items-end grid-default-color grid-1 relative overflow-hidden">
            {/* <img
                src="assets/rpek-img1.png"
                className="absolute inset-0 w-full h-full object-cover object-[80%_center] scale-95 md:scale-100 opacity-70 transition-transform duration-300"
            /> */}
          <video
            className="absolute inset-0 w-full h-full object-cover object-[30%_center] scale-100 opacity-50 pointer-events-none"
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
          >
            <source src="assets/vid3.mp4" type="video/mp4" />
          </video>
          <div className="z-10">
            <p className="headtext font-bold text-2xl md:text-3xl">Hi, I&apos;m Rüstem Pek</p>
            <p className="subtext mt-4 text-sm md:text-base">
                With 3+ years of full-stack experience, I craft dynamic web and mobile applications that combine secure back-end logic with seamless user experiences.
            </p>
          </div>
          <div className="absolute inset-x-0 pointer-evets-none -bottom-4 h-1/2 sm:h-1/3 bg-gradient-to-t from-indigo" />
        </div>
        <div className="grid-default-color grid-2">
          <div className="z-10 w-[50%]">
            <p className="headText font-bold text-2xl md:text-3xl">Technologies</p>
            <p className="subtext mt-4 text-sm md:text-base">
                Skilled across modern frameworks and technologies, I craft applications that are scalable, secure, and future-ready.
            </p>
          </div>
          <div className="absolute inset-y-0 md:inset-y-9 w-full h-full start-[50%] md:scale-125">
            <Frameworks />
          </div>
        </div>
        <div className="grid-black-color grid-3">
          <div className="z-10 w-[35%]">
            <p className="headtext font-bold text-2xl md:text-3xl">Global Collaboration</p>
            <p className="subtext mt-4 text-sm md:text-base">
                Remote-ready and experienced in global teamwork across multiple time zones.
            </p>
          </div>
          <figure className="absolute left-[30%] top-[10%]">
            <Globe className={undefined} />
          </figure>
        </div>
      </div>
    </section>
  );
};

export default About;
