"use client";
import { motion } from "framer-motion";

// swiper
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "../../components/ui/tabs";
import Link from "next/link";
import Image from "next/image";
import { MdArrowOutward } from "react-icons/md";
import { FaGithub } from "react-icons/fa";

//data

const projects = [
  {
    id: 1,
    category: "frontend",
    title: "Website Shopping",
    description: "React + Tailwind Landing page",
    image: "/assets/work/thumb1.png",
    link: "",
    github: "",
    tech: ["HTML", "CSS", "Javascript"],
  },
  {
    id: 2,
    category: "frontend",
    title: "Website Developer",
    description: "Next.js Portfolio site",
    image: "/assets/work/thumb2.png",
    link: "",
    github: "",
    tech: ["HTML", "CSS", "Javascript"],
  },
  {
    id: 3,
    category: "fullstack",
    title: "Zeppelin Cafe",
    description: "Marn app with authentication",
    image: "/assets/work/thumb3.png",
    link: "",
    github: "",
    tech: ["Python", "SQLite"],
  },
  {
    id: 5,
    category: "uiux",
    title: "Fashion Shopping",
    description: "Mobile-firs Figma design",
    image: "/assets/work/thumb6.png",
    link: "https://www.figma.com/design/byOQHwJ4QDyc0apm0kQGhI/Final-Project?node-id=17-15&t=H65yWomWURnSSeF1-1",
    github: "",
    tech: ["Figma", "Photoshop"],
  },
  {
    id: 6,
    category: "uiux",
    title: "Personal Finance & Mental Wellness App",
    description: "Redesign of e-commerce dashboard",
    image: "/assets/work/thumb5.png",
    link: "https://www.figma.com/design/Kiv9fHlVlTGY07af24EWzM/Untitled?node-id=0-1&t=vuayaBlrCrp82ior-1",
    github: "",
    tech: ["Figma", "Photoshop"],
  },
  {
    id: 7,
    category: "uiux",
    title: "Zeppelin Clinic",
    description: "A bold and earthy visual identity for a modern coffee brandd",
    image: "/assets/work/thumb7.png",
    link: "https://www.figma.com/design/jHH7VbdeXh2oLg5ZKU5rdV/ZeppeClinic?node-id=1-12&t=frmenKwbmf1O7R2t-1",
    github: "",
    tech: ["Figma", "Photoshop"],
  },
  {
    id: 8,
    category: "branding",
    title: "ISLogo DESIGNER",
    description: "Elegant branding for a premium skincare product line",
    image: "/assets/work/thumb8.png",
    link: "",
    github: "",
    tech: ["Photoshop", "Figma", "Canva"],
  },

];

const categories = ["frontend", "fullstack", "uiux", "branding"];

const Work = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-screen flex items-center py-24 xl:py-0"
    >
      <div className="container mx-auto w-full h-full flex flex-col justify-center">
        {/* heading */}
        <h2 className="h2 mb-6 xl:mb-12 max-w-[600px]">
          My Lates <span className="text-accent">Work</span>
        </h2>
        {/* tabs */}
        <Tabs
          defaultValue="frontend"
          className="w-full flex flex-col gap-6 xl:gap-12"
        >
          {/* tabs list */}
          <TabsList className="flex flex-wrap justify-center items-center gap-4 h-full mb-4 xl:mb-0">
            {categories.map((category) => {
              return (
                <TabsTrigger
                  key={category}
                  value={category}
                  className="capitalize border border-white/10 data-[state=active]:bg-accent h-[48px] px-6 rounded-full cursor-pointer"
                >
                  {category === "uiux" ? "UI UX Design" : category}
                </TabsTrigger>
              );
            })}
          </TabsList>
          {/* tab content */}
          <div className="h-[400px] scrollbar scrollbar-thumb-accent scrollbar-track-accent/5 overflow-y-scroll xl:overflow-y-visible">
            {categories.map((category) => {
              return (
                <TabsContent key={category} value={category}>
                  <Swiper>
                    {projects
                      .filter((project) => project.category === category)
                      .map((project) => {
                        return (
                          <SwiperSlide key={project.id} className="h-full">
                            <div className="flex flex-col xl:flex-row gap-8 xl:gap-12">
                              {/* project info */}
                              <div className="w-full max-w-[380px] flex flex-col gap-6 xl:gap-8 xl:pt-6 order-2 xl:order-none">
                                {/* title */}
                                <h3 className="h3">{project.title}</h3>
                                {/* texh */}
                                <div className="xl:mb-4 max-w-[300px] min-h-[130px]">
                                  <p className="mb-4">Techologies Used</p>
                                  <ul className="flex flex-wrap gap-4">
                                    {project.tech.map((item, index) => {
                                      return (
                                        <li
                                          key={index}
                                          className="flex items-center gap-4 bg-[#a883ff]/13 h-[28px] px-[14px] rounded-full"
                                        >
                                          {item}
                                        </li>
                                      );
                                    })}
                                  </ul>
                                </div>
                                {/* btns */}
                                <div className="flex flex-col sm:flex-row gap-4 items-start">
                                  <Link href={project.link}>
                                    <button className="btn btn-sm btn-accent flex gap-2">
                                      <MdArrowOutward className="text-xl" />
                                      <span>Live Project</span>
                                    </button>
                                  </Link>
                                  <Link href={project.github}>
                                    <button className="btn btn-sm btn-white flex gap-2">
                                      <MdArrowOutward className="text-xl" />
                                      <span>Github Repo</span>
                                    </button>
                                  </Link>
                                </div>
                              </div>
                              {/* project img */}
                              <div className="w-full h-[200px] md:h-[300px] xl:h-[400px] relative bg-pink-50/10 order-1 xl:order-none rounded-lg overflow-hidden">
                                <Image
                                  src={project.image}
                                  alt={project.image}
                                  fill
                                  className="object-cover"
                                />
                              </div>
                            </div>
                          </SwiperSlide>
                        );
                      })}
                  </Swiper>
                </TabsContent>
              );
            })}
          </div>
        </Tabs>
      </div>
    </motion.section>
  );
};

export default Work;
