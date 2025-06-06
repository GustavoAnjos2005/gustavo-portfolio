"use client";

import { FaHtml5, FaCss3, FaJs, FaReact, FaFigma, FaAngular, FaPhp, FaPython, FaGit, FaJava } from "react-icons/fa";
import { SiTailwindcss, SiNextdotjs, SiTypescript, SiPostgresql } from "react-icons/si";
import { DiMongodb, DiMysql, DiRedis } from "react-icons/di";
import { GiSmart, GiFireSilhouette, GiLovers } from "react-icons/gi";
import { IoLogoFirebase, IoTimer } from "react-icons/io5";
import { AiOutlineTeam } from "react-icons/ai";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { ScrollArea } from "@/components/ui/scroll-area";
import { motion } from "framer-motion";

const about = {
  title: "Minha Trajetória!",
  description: "Tenho 20 anos e iniciei minha trajetória na área de T.I durante a pandemia, com cursos online de programação e fundamentos gerais. Esse interesse me levou a me aprofundar cada vez mais, começando pelo Prepara Cursos, onde pratiquei meus conhecimentos, e posteriormente na ETEC, onde obtive uma formação profissional em diversas áreas de T.I. Atualmente, estou cursando Análise e Desenvolvimento de Sistemas na Faculdade Carlos Drummond de Andrade (FCDA). Dedico meu tempo livre a projetos e ao aprendizado contínuo, sempre buscando evolução na área que tanto amo. Estou empenhado em conquistar minha primeira oportunidade profissional para aplicar e contribuir com meus conhecimentos, além de ganhar experiência em ambiente profisiional!",
  info: [
    {
      fieldName: "Nome",
      fieldValue: "Gustavo Anjos de Souza",
    },
    {
      fieldName: "WhatsApp",
      fieldValue: "(+11) 95874-8848",
    },
    {
      fieldName: "Experiência",
      fieldValue: "3 Anos",
    },
    {
      fieldName: "Email",
      fieldValue: "anjos7623@gmail.com",
    },
    {
      fieldName: "Idioma",
      fieldValue: "Inglês Intermediário",
    },
  ]
}

const education = {
  title: "Minha Formação",
  description: "Este é o meu percusso em formações acadêmicas!",
  items: [
    {
      institution: "Colégio Sena de Miranda",
      degree: "Ensino Médio",
      duration: "2019 - 2022",
    },
    {
      institution: "Prepara Cursos",
      degree: "Curso Técnico de Informática",
      duration: "2022 - 2024",
    },
    {
      institution: "ETEC",
      degree: "Curso Profissinalizante Noturno de Informática",
      duration: "2022 - 2023",
    },
    {
      institution: "Faculdade Carlos Drummond de Andrade (FCDA)",
      degree: "Graduação Tecnólogo de Análise e Desenvolvimento de Sistemas (ADS)",
      duration: "2024 - 2026",
    },
  ]
}

const skills = {
  title: "Principais Hard/Soft Skills",
  description: "Essas são as linguagens de programação, bancos de dados e tecnologias com as quais possuo maior familiaridade e proficiência. Além disso, destaco ao final minhas principais soft-skills.",
  skillList: [
    {
      icon: <FaHtml5 />,
      name: "HTML 5",
    },
    {
      icon: <FaCss3 />,
      name: "CSS 3",
    },
    {
      icon: <FaJs />,
      name: "JavaScript",
    },
    {
      icon: <FaReact />,
      name: "React.js",
    },
    {
      icon: <SiNextdotjs />,
      name: "Next.js",
    },
    {
      icon: <SiTailwindcss />,
      name: "Tailwind.css",
    },
    {
      icon: <FaFigma />,
      name: "Figma",
    },
    {
      icon: <FaAngular />,
      name: "Angular",
    },
    {
      icon: <FaPhp />,
      name: "PHP",
    },
    {
      icon: <FaJava />,
      name: "Java",
    },
    {
      icon: <FaPython />,
      name: "Python",
    },
    {
      icon: <FaGit />,
      name: "Git",
    },
    {
      icon: <SiTypescript />,
      name: "TypeScript",
    },
    {
      icon: <DiMysql />,
      name: "MySQL",
    },
    {
      icon: <DiMongodb />,
      name: "Mongo DB",
    },
    {
      icon: <IoLogoFirebase />,
      name: "Firebase",
    },
    {
      icon: <SiPostgresql />,
      name: "PostgreSQL",
    },
    {
      icon: <DiRedis />,
      name: "Redis",
    },
    {
      icon: <AiOutlineTeam />,
      name: "Trabalho em Equipe",
    },
    {
      icon: <GiFireSilhouette />,
      name: "Resiliência",
    },
    {
      icon: <GiSmart />,
      name: "Adaptabilidade",
    },
    {
      icon: <GiLovers />,
      name: "Inteligência Emocional",
    },
    {
      icon: <IoTimer />,
      name: "Gestão de Tempo",
    },
  ]
}

const Resume = () => {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{
      opacity: 1, transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
    }}
      className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
    >
      <div className="container mx-auto">
        <Tabs defaultValue="about" className="flex flex-col xl:flex-row gap-[60px]">
          <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
            <TabsTrigger value="about">Sobre Mim</TabsTrigger>
            <TabsTrigger value="education">Educação</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
          </TabsList>

          <div className="min-h-[70vh] w-full">
            <TabsContent value="about" className="w-full text-center xl:text-left">
              <div className="felx flex-col gap-[30px]">
                <h3 className="text-4xl font-bold">{about.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{about.description}</p>
                <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[620px] mx-auto xl:mx-0">
                  {about.info.map((item, index) => {
                    return (
                      <li key={index} className="flex items-center justify-center xl:justify-start gap-4">
                        <span className="text-white/60">{item.fieldName}</span>
                        <span className="text-xl">{item.fieldValue}</span>
                      </li>
                    )
                  })}
                </ul>
              </div>
            </TabsContent>
            <TabsContent value="education" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{education.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{education.description}</p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {education.items.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className="bg-[#232329] py-6 px-6 rounded-xl flex flex-col gap-2"
                        >
                          <span className="text-accent">{item.duration}</span>
                          <h3 className="text-xl font-bold break-words">
                            {item.degree}
                          </h3>
                          <p className="text-white/60 break-words">{item.institution}</p>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>
            <TabsContent value="skills" className="w-full h-full">
              <div className="flex flex-col gap-[30px]">
                <div className="flex flex-col gap-[30px] text-center xl:text-left">
                  <h3 className="text-4xl font-bold">{skills.title}</h3>
                  <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{skills.description}</p>
                </div>
                <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-[30px]">
                  {skills.skillList.map((skill, index) => {
                    return (
                      <li key={index}>
                        <TooltipProvider delayDuration={100}>
                          <Tooltip>
                            <TooltipTrigger className="w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group">
                              <div className="text-6xl group-hover:text-accent transition-all duration-300">{skill.icon}</div>
                            </TooltipTrigger>
                            <TooltipContent>
                              <p className="capitalize">{skill.name}</p>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      </li>
                    )
                  })}
                </ul>
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  )
}

export default Resume