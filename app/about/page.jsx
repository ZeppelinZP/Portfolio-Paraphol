"use client";
import { motion } from "framer-motion";
import { ScrollArea } from "../../components/ui/scroll-area";
import Image from "next/image";

// components
import Stats from "../../components/Stats";
import Testimoials from "../../components/Testimoials";
import Info from "../../components/info";
import Journey from "../../components/Journey";
import Skills from "../../components/Skills";
import Blob from "../../components/Blob";
import Socials from "../../components/Socials";
import avatarImg from "../../public/assets/avatar.png";
import ctImg1 from "../../public/assets/ct-1.png";
import ctImg2 from "../../public/assets/ct-2.png";
const About = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="h-screen flex items-center"
    >
      <div className="container max-auto px-0">
        <div className="flex flex-col xl:flex-row items-center gap-24 w-fll h-[680px]">
          {/* img & social icons */}
          <div className="hidden xl:flex flex-col w-full h-full pt-14 max-w-[430px] relative">
            <Image
              src={avatarImg}
              width={320}
              height={496}
              alt=""
              className="z-20 relative"
            />
            {/* overlay */}
            <div className="w-full h-[60px] absolute left-0 top-[420px] right-0 bg-gradient-to-t from-primary via-primary/90 z-30"></div>

            {/* blob */}
            <div className="absolute top-[80px] -left-[80px] z-10">
              <Blob containerStyles="w-[420px] h-[420px]" />
            </div>

            <Socials
              containerstyles="flex gap-4 z-40 w-max transform translate-x-[30px]"
              iconStyles="w-[48px] h-[48px] text-[22px] text-accent hover:text-accent-hover transition-all flex items-center justify-center rounded-full cursor-pointer"
            />
          </div>
          {/* scroll area */}
          <ScrollArea className="w-full h-[680px]">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-2 h-2 bg-accent rounded-full"></div>
                <p>About Me</p>
              </div>
              <h2 className="h2 mb-6">
                <span className="text-accent">Paraphol</span> Puangpee
              </h2>
              <p className="max-w-[540px] mb-12">
                Front-end enthusiast and CS student, passionate about building
                responsive, modern websites. Constantly learning through
                personal projects and UI/UX experimentation.
              </p>
              <div className="flex flex-col items-start gap-16">
                <Stats />
                <Testimoials />
                <Info />

                {/* ct */}
                <div className="flex flex-col gap-5 pl-15 ">
                  <Image
                    src={ctImg1}
                    width={400}
                    height={400}
                    alt=""
                    className="rounded-xl shadow-lg"
                  />
                  <Image
                    src={ctImg2}
                    width={400}
                    height={400}
                    alt=""
                    className="rounded-xl shadow-lg"
                  />
                </div>
                <Journey />
                <Skills />
              </div>
            </div>
          </ScrollArea>
        </div>
      </div>
    </motion.section>
  );
};

export default About;
