"use client";

import { motion } from "framer-motion";
import React, { useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import { BsArrowUpRight, BsGithub } from "react-icons/bs"

import { Tooltip, TooltipContent, TooltipTrigger, TooltipProvider } from "@/components/ui/tooltip";
import Link from "next/link";
import Image from "next/image";
import WorkSliderBtns from "@/components/WorkSliderBtns";

const projects = [
  {
    num: '01',
    category: 'Front-End',
    title: 'Jobify',
    description: 'Projeto simulando um site de aplicação de emprego',
    stack: [{ name: "React.ts" }, { name: "TailWind CSS" }, { name: "Next-Auth" }, { name: "FireBase" }],
    image: '/assets/jobify.jpeg',
    live: 'https://jobify-sand.vercel.app/',
    github: 'https://github.com/GustavoAnjos2005/jobify',
  },
  {
    num: '02',
    category: 'Full-Stack',
    title: 'project 1',
    description: 'Projeto que replica o YouTube, utilizando a API do Youtube',
    stack: [{ name: "React.js" }],
    image: '/assets/vid-tube.jpeg',
    live: 'https://vid-tube-henna.vercel.app/',
    github: 'https://github.com/GustavoAnjos2005/VidTube',
  },
  {
    num: '03',
    category: 'Front-End',
    title: 'Landing Page',
    description: 'Landing Page criado com o Angular 17',
    stack: [{ name: "Angular" }],
    image: '/assets/landing-page.jpeg',
    live: 'https://landing-page-lilac-five-93.vercel.app/',
    github: 'https://github.com/GustavoAnjos2005/landing-page',
  },
  {
    num: '04',
    category: 'Full-Stack',
    title: 'Jogo Multijogador',
    description: 'Projeto de jogo multijogador, atualmente funcionando somente para computadores (mesmo podendo entrar no mobile)',
    stack: [{ name: "HTML 5" }, { name: "CSS 3" }, { name: "JavaScript" }, { name: "FireBase" }],
    image: '/assets/jogo.jpeg',
    live: 'https://jogo-multijogador.netlify.app/',
    github: 'https://github.com/GustavoAnjos2005/Jogo_Multijogador',
  },
  {
    num: '05',
    category: 'Front-End',
    title: 'Site iPhone 15',
    description: 'Site simulando a Apple anunciando o iPhone 15',
    stack: [{ name: "React.js" }, { name: "TailWind CSS" }, { name: "GSAP" }, { name: "Three.js" }],
    image: '/assets/iphone.jpeg',
    live: 'https://iphone-15-nine.vercel.app/',
    github: 'https://github.com/GustavoAnjos2005/iPhone-15',
  },
  {
    num: '06',
    category: 'Full-Stack',
    title: 'Lingo',
    description: 'Plataforma de cursos de idiomas inspirado no Duolingo',
    stack: [{ name: "Next.js" }, { name: "React.ts" }, { name: "TailWind CSS" }],
    image: '/assets/lingo.jpeg',
    live: 'https://lingo-sepia.vercel.app/',
    github: 'https://github.com/GustavoAnjos2005/lingo',
  },
  {
    num: '07',
    category: 'Full-Stack',
    title: 'Loja Borcelle',
    description: 'Projeto FullStack de uma e-commerce, contendo uma página para administrar os produtos',
    stack: [{ name: "Next.js" }, { name: "React.ts" }, { name: "TailWind CSS" }, { name: "MongoDB" }],
    image: '/assets/borcelle.png',
    live: 'https://borcelle-shop.vercel.app/',
    github: 'https://github.com/GustavoAnjos2005/borcelle-shop',
  },
  {
    num: '08',
    category: 'Front-End',
    title: 'Repeat.AI',
    description: 'Pagína inicial de uma ferramenta I.A',
    stack: [{ name: "SvelteKit" }, { name: "GSAP" }, { name: "Prismic" }],
    image: '/assets/repeat.jpeg',
    live: 'https://repeat-ai-chi.vercel.app/',
    github: 'https://github.com/GustavoAnjos2005/Repeat.AI',
  },
  {
    num: '09',
    category: 'Full-Stack',
    title: 'Monster Collection',
    description: 'Jogo inspirado em pokemon',
    stack: [{ name: "Python" }],
    image: '/assets/monster.png',
    live: '/',
    github: 'https://github.com/GustavoAnjos2005/monster-collection',
  },
  {
    num: '10',
    category: 'Front-End',
    title: 'JRM Veículos',
    description: 'Meu primeiro projeto PEX realizado na faculdade! Um e-commerce para uma empresa automotiva, integrada com um ChatBot para tirar dúvidas comuns dos usuários',
    stack: [{ name: "Html 5" }, { name: "Css 3" }, { name: "JavaScript" }],
    image: '/assets/JRM2.png',
    live: 'https://jrm-veiculos.vercel.app/',
    github: 'https://github.com/GustavoAnjos2005/JRM-Veiculos',
  },
  {
    num: '11',
    category: 'Full-Stack',
    title: 'SecureTI',
    description: 'Meu terceiro projeto PEX realizado na faculdade! Site para uma empresa focada em segurança da informação e banco de dados. Nele tem páginas explicando sobre os serviços oferecidos, e em cada uma dessas páginas contém um quiz para testar o conhecimento do usuário sobre o assunto abordado.',
    stack: [{ name: "Next.JS" }, { name: "React.TS" }, { name: "TailWindCSS" }, { name: "MongoDB" }],
    image: '/assets/secure1.png',
    live: 'https://secure-ti.vercel.app/',
    github: 'https://github.com/GustavoAnjos2005/secureTI',
  },
  {
    num: '12',
    category: 'Full-Stack',
    title: 'Real-Chat',
    description: 'Chat-Bot para usuários se comunicarem em tempo real, com autenticação de usuários e persistência de mensagens. Nele poderá mandar mensagens, fazer ligações em tempo real, compartilhar fotos e arquivos. Além de conter um chat com a I.A.',
    stack: [{ name: "Node.JS" }, { name: "React.TS" }, { name: "TailWindCSS" }, { name: "PostgreSQL" }, { name: "Redis" }],
    image: '/assets/chat1.png',
    live: 'https://realtime-chat-zeta-gray.vercel.app/',
    github: 'https://github.com/GustavoAnjos2005/realchat',
  },
]

const Work = () => {
  const [project, setProject] = useState(projects[0]);
  const handleSlideChange = (swiper) => {
    const currentIndex = swiper.activeIndex;
    setProject(projects[currentIndex]);
  }
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1, transition: { delay: 2.4, duration: 0.4, ease: "easeIn" }, }} className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0">
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row xl:gap-[30px]">
          <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
            <div className="flex flex-col gap-[30px] h-[50%]">
              <div className="text-8xl leading-none font-extrabold text-transparent text-outline">{project.num}</div>
              <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize">projeto {project.category}</h2>
              <p className="text-white/60">{project.description}</p>
              <ul className="flex gap-4">
                {project.stack.map((item, index) => {
                  return (
                    <li key={index} className="text-xl text-accent">{item.name}
                      {index !== project.stack.length - 1 && ","}
                    </li>
                  )
                })}
              </ul>
              <div className="border border-white/20"></div>
              <div className="flex items-center gap-4">
                <Link href={project.live}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                        <BsArrowUpRight className="text-white text-3xl group-hover:text-accent" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Projeto ao Vivo</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
                <Link href={project.github}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                        <BsGithub className="text-white text-3xl group-hover:text-accent" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Repositório do GithHub</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
              </div>
            </div>
          </div>
          <div className="w-full xl:w-[50%]">
            <Swiper spaceBetween={30} slidesPerView={1} className="xl:h-[520px] mb-12" onSlideChange={handleSlideChange}>
              {projects.map((project, index) => {
                return <SwiperSlide key={index} className="w-full">
                  <div className="h-[460px] relative group flex justify-center items-center bg-pink-50/20">
                    <div className="absolute top-0 bottom-0 w-full h-full bg-black/10 z-10"></div>
                    <div className="relative w-full h-full">
                      <Image src={project.image} fill className="object-cover" alt="" />
                    </div>
                  </div>
                </SwiperSlide>
              })}
              <WorkSliderBtns containerStyles="flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none" 
              btnStyles="bg-accent hover:bg-accent-hover text-primary text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all"
              />
            </Swiper>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default Work