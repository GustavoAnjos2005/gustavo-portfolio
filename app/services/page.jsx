"use client"

import { BsArrowDownRight } from "react-icons/bs"
import Link from "next/link"
import { motion } from "framer-motion";

const services = [
  {
    num: "01",
    title: "Dev Front-End",
    description: "Especializado no desenvolvimento de interfaces modernas e responsivas utilizando tecnologias de ponta como JavaScript, TypeScript, React.js, Next.js e Angular. Experiência comprovada em design systems com Tailwind CSS e ferramentas de prototipação como Figma e Canva.",
    href: "https://github.com/GustavoAnjos2005"
  },
  {
    num: "02",
    title: "Dev Back-End",
    description: "Proficiente no desenvolvimento de APIs robustas e escaláveis utilizando PHP, Python, C# e Java. Foco em arquiteturas modernas, práticas de clean code e desenvolvimento orientado a testes para garantir a qualidade e manutenibilidade do código.",
    href: "https://github.com/GustavoAnjos2005"
  },
  {
    num: "03",
    title: "Dev de Banco de Dados",
    description: "Expertise em modelagem, implementação e otimização de bancos de dados relacionais e não-relacionais. Experiência sólida com MySQL, MongoDB, Firebase e PostgreSQL, garantindo performance, segurança e integridade dos dados.",
    href: "https://github.com/GustavoAnjos2005"
  },
  {
    num: "04",
    title: "Análise de Dados",
    description: "Capacitado em análise e visualização de dados utilizando ferramentas como Power BI, Excel avançado e bibliotecas Python para análise de dados. Certificado pelo programa de Análise de Dados do Google, com foco em transformar dados em insights estratégicos para tomada de decisões.",
    href: "https://github.com/GustavoAnjos2005"
  },
];

const Services = () => {
  return (
    <section className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0">
      <div className="container mx-auto">
        <motion.div initial={{ opacity: 0 }} animate={{
          opacity: 1, transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
        }}
        className="grid grid-cols-1 md:grid-cols-2 gap-[60px]"
        >
          {services.map((service, index) => {
            return (
            <div key={index} className="flex-1 flex flex-col justify-center gap-6 group">
              <div className="w-full flex justify-between items-center">
                <div className="text-6xl font-extrabold text-outline text-transparent group-hover:text-outline-hover duration-500">{service.num}</div>
                <Link href={service.href} className="w-[70px] h-[70px] rounded-full bg-white group-hover:bg-accent transition-all duration-500 flex justify-center items-center hover:-rotate-45">
                  <BsArrowDownRight className="text-primary text-3xl"/>
                </Link>
              </div>
              <h2 className="text-[36px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500">{service.title}</h2>
              <p className="text-white/60">{service.description}</p>
              <div className="border-b border-white/20 w-full"></div>
            </div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}

export default Services