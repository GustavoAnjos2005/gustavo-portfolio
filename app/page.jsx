import Photo from "@/components/Photo";
import Socials from "@/components/Socials";
import Stats from "@/components/Stats";
import { Button } from "@/components/ui/button";
import { FiDownload } from "react-icons/fi";

const Home = () => {
  return (
    <section className="h-full">
      <div className="container mx-auto h-full">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
          <div className="text-center xl:text-left order-2 xl:order-none">
            <span className="text-xl">Desenvolvedor Full-Stack</span>
            <h1 className="h1">
              Olá! Eu sou <br />
              <span className="text-accent">Gustavo Anjos</span>
            </h1>
            <p className="max-w-[500px] mb-19 text-white/80">
              Desenvolvedor Full-Stack com foco em criar soluções web modernas,
              funcionais e centradas na experiência do usuário. Possuo formação
              técnica sólida e vivência prática em projetos de desenvolvimento,
              com habilidades em resolução de problemas, organização de código e
              entrega de soluções escaláveis e bem estruturadas. Atualmente estou
              realizando minha primeira experiência profissional como
              Jovem Aprendiz de TI, com foco em Infraestrutura e Telecom. Sou
              comprometido com aprendizado contínuo e boas práticas, sempre buscando agregar valor real aos projetos
              em que atuo.
            </p>
            <div className="flex items-center gap-6">
              <Socials
                containerStyles="flex gap-6"
                iconStyles="w-10 h-10 rounded-full bg-white/5 flex justify-center items-center text-accent hover:bg-accent hover:text-primary transition-all transform hover:scale-105"
              />
            </div>
          </div>
          <div className="order-1 xl:order-none mb-8 xl:mb-0">
            <Photo />
          </div>
        </div>
      </div>
      <Stats />
    </section>
  );
};

export default Home;
