"use client"

import { BsArrowDownRight } from "react-icons/bs"
import Link from "next/link"
import { motion } from "framer-motion";

const services = [
  {
    num: "01",
    title: "Dev Front-End",
    description: "Meu grande forte é no desenvolvimento e construção de projetos, incluindo sites e e-commerces, com sólida experiência no uso de ferramentas de design online, como Figma e Canva. Possuo conhecimento avançado em linguagens de programação e frameworks, como JavaScript, TypeScript, React.js, Next.js, Tailwind CSS e Angular.",
    href: "https://github.com/GustavoAnjos2005"
  },
  {
    num: "02",
    title: "Dev Back-End",
    description: "Possuo ampla experiência com as linguagens PHP, Python, C# e Java. Atualmente, estou me dedicando para a criação em desenvolvimento de novos projetos Back-End, além de expandir meus conhecimentos em novas linguagens e frameworks.",
    href: "https://github.com/GustavoAnjos2005"
  },
  {
    num: "03",
    title: "Dev de Banco de Dados",
    description: "Tenho uma experiência sólida na construção de bancos de dados, bem como na análise, reformulação e otimização de bases de dados existentes. Tenho maior familiaridade com bancos como MySQL, MongoDB, Firebase e PostgreSQL.",
    href: "https://github.com/GustavoAnjos2005"
  },
  {
    num: "04",
    title: "Análise de Dados",
    description: "Estou atualmente me aprofundando meus conhecimentos na área de dados, com foco especial em Análise de Dados. Tenho buscado constante aprimoramento por meio de desenvolvimento de projetos, cursos com certificação e cursos profissionalizantes, incluindo o curso de Análise de Dados oferecido pelo Google. Paralelamente, venho aplicando meus conhecimentos em projetos voltados para a área de dados, com ênfase no uso de bancos de dados relacionais e não relacionais, bem como em ferramentas como Excel, Power BI e outras voltadas à manipulação, transformação e visualização de dados.",
    href: "https://github.com/GustavoAnjos2005"
  },
]

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
                <div className="text-5xl font-extrabold text-outline text-transparent group-hover:text-outline-hover duration-500">{service.num}</div>
                <Link href={service.href} className="w-[70px] h-[70px] rounded-full bg-white group-hover:bg-accent transition-all duration-500 flex justify-center items-center hover:-rotate-45">
                  <BsArrowDownRight className="text-primary text-3xl"/>
                </Link>
              </div>
              <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500">{service.title}</h2>
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