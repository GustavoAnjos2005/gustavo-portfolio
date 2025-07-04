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
    category: 'Full-Stack',
    title: 'Real-Chat',
    description: 'Sistema de chat em tempo real com recursos avançados de comunicação. Implementa chamadas de vídeo, compartilhamento de arquivos e integração com IA, utilizando Node.js e PostgreSQL.',
    stack: [{ name: "Node.JS" }, { name: "React.TS" }, { name: "TailWindCSS" }, { name: "PostgreSQL" }, { name: "Redis" }],
    image: '/assets/chat1.png',
    live: 'https://realtime-chat-zeta-gray.vercel.app/',
    github: 'https://github.com/GustavoAnjos2005/realchat',
  },
  {
    num: '02',
    category: 'Full-Stack',
    title: 'Loja Borcelle',
    description: 'E-commerce completo com painel administrativo integrado. Desenvolvido com Next.js, TypeScript e MongoDB, implementando funcionalidades de gerenciamento de produtos e pedidos.',
    stack: [{ name: "Next.js" }, { name: "React.ts" }, { name: "TailWind CSS" }, { name: "MongoDB" }],
    image: '/assets/borcelle.png',
    live: 'https://borcelle-shop.vercel.app/',
    github: 'https://github.com/GustavoAnjos2005/borcelle-shop',
  },
  {
    num: '03',
    category: 'Full-Stack',
    title: 'Jobify',
    description: 'Plataforma de recrutamento desenvolvida com React.ts e Firebase. Implementa autenticação segura e interface responsiva com TailwindCSS para uma experiência de usuário otimizada.',
    stack: [{ name: "React.ts" }, { name: "TailWind CSS" }, { name: "Next-Auth" }, { name: "FireBase" }],
    image: '/assets/jobify.jpeg',
    live: 'https://jobify-sand.vercel.app/',
    github: 'https://github.com/GustavoAnjos2005/jobify',
  },
  {
    num: '04',
    category: 'Full-Stack',
    title: 'SecureTI',
    description: 'Plataforma educacional sobre segurança da informação com sistema integrado de quiz. Desenvolvida com Next.js e MongoDB, oferecendo conteúdo interativo e avaliação de conhecimento.',
    stack: [{ name: "Next.JS" }, { name: "React.TS" }, { name: "TailWindCSS" }, { name: "MongoDB" }],
    image: '/assets/secure1.png',
    live: 'https://secure-ti.vercel.app/',
    github: 'https://github.com/GustavoAnjos2005/secureTI',
  },
  {
    num: '05',
    category: 'Front-End',
    title: 'Site iPhone 15',
    description: 'Recriação da landing page do iPhone 15 utilizando React.js e Three.js para animações 3D. Demonstra habilidades avançadas em animações e design interativo.',
    stack: [{ name: "React.js" }, { name: "TailWind CSS" }, { name: "GSAP" }, { name: "Three.js" }],
    image: '/assets/iphone.jpeg',
    live: 'https://iphone-15-nine.vercel.app/',
    github: 'https://github.com/GustavoAnjos2005/iPhone-15',
  },
  {
    num: '06',
    category: 'Full-Stack',
    title: 'Lingo',
    description: 'Plataforma de ensino de idiomas inspirada no Duolingo, desenvolvida com Next.js e TypeScript. Implementa sistema de progressão e gamificação para aprendizado interativo.',
    stack: [{ name: "Next.js" }, { name: "React.ts" }, { name: "TailWind CSS" }],
    image: '/assets/lingo.jpeg',
    live: 'https://lingo-sepia.vercel.app/',
    github: 'https://github.com/GustavoAnjos2005/lingo',
  },
  {
    num: '07',
    category: 'Full-Stack',
    title: 'Jogo Multijogador',
    description: 'Sistema de jogo multiplayer com Firebase como backend em tempo real. Implementa lógica de jogabilidade sincronizada e persistência de dados para múltiplos jogadores.',
    stack: [{ name: "HTML 5" }, { name: "CSS 3" }, { name: "JavaScript" }, { name: "FireBase" }],
    image: '/assets/jogo.jpeg',
    live: 'https://jogo-multijogador.netlify.app/',
    github: 'https://github.com/GustavoAnjos2005/Jogo_Multijogador',
  },
  {
    num: '08',
    category: 'Full-Stack',
    title: 'VidTube',
    description: 'Clone do YouTube utilizando a API oficial do YouTube. Implementa funcionalidades de busca, reprodução e recomendações, demonstrando integração eficiente com APIs externas.',
    stack: [{ name: "React.js" }],
    image: '/assets/vid-tube.jpeg',
    live: 'https://vid-tube-henna.vercel.app/',
    github: 'https://github.com/GustavoAnjos2005/VidTube',
  },
  {
    num: '09',
    category: 'Front-End',
    title: 'Repeat.AI',
    description: 'Landing page para ferramenta de IA desenvolvida com SvelteKit. Utiliza GSAP para animações fluidas e Prismic para gerenciamento de conteúdo dinâmico.',
    stack: [{ name: "SvelteKit" }, { name: "GSAP" }, { name: "Prismic" }],
    image: '/assets/repeat.jpeg',
    live: 'https://repeat-ai-chi.vercel.app/',
    github: 'https://github.com/GustavoAnjos2005/Repeat.AI',
  },
  {
    num: '10',
    category: 'Full-Stack',
    title: 'Monster Collection',
    description: 'Jogo inspirado em Pokémon desenvolvido em Python. Implementa sistema de batalha, coleta de criaturas e progressão de personagem.',
    stack: [{ name: "Python" }],
    image: '/assets/monster.png',
    live: '/',
    github: 'https://github.com/GustavoAnjos2005/monster-collection',
  },
  {
    num: '11',
    category: 'Front-End',
    title: 'Landing Page',
    description: 'Landing page moderna desenvolvida com Angular 17, demonstrando domínio das últimas funcionalidades do framework e boas práticas de desenvolvimento front-end.',
    stack: [{ name: "Angular" }],
    image: '/assets/landing-page.jpeg',
    live: 'https://landing-page-lilac-five-93.vercel.app/',
    github: 'https://github.com/GustavoAnjos2005/landing-page',
  },
  {
    num: '12',
    category: 'Front-End',
    title: 'JRM Veículos',
    description: 'E-commerce automotivo com ChatBot integrado para suporte ao cliente. Projeto acadêmico que demonstra implementação de interface responsiva e interatividade com usuário.',
    stack: [{ name: "Html 5" }, { name: "Css 3" }, { name: "JavaScript" }],
    image: '/assets/JRM2.png',
    live: 'https://jrm-veiculos.vercel.app/',
    github: 'https://github.com/GustavoAnjos2005/JRM-Veiculos',
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