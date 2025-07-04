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
              entrega de soluções escaláveis e bem estruturadas. Comprometido
              com aprendizado contínuo e boas práticas de desenvolvimento,
              sempre buscando agregar valor real aos projetos em que atuo.
            </p>
            <div className="flex flex-col xl:flex-row items-center gap-8">
              <a
                href="/assets/Gustavo_Anjos_Dev_FullStack.pdf"
                className="flex items-center gap-2"
              >
                <Button
                  variant="outline"
                  size="lg"
                  className="uppercase flex items-center gap-2"
                >
                  <span>Abaixar Currículo</span>
                  <FiDownload className="text-xl" />
                </Button>
              </a>
              <div className="mb-8 xl:mb-0">
                <Socials
                  containerStyles="flex gap-6"
                  iconStyles="w-9 h-9 border border-accent rounded-full flex justify-center items-center text-accent text-base hover:bg-accent hover:text-primary hover:transition-all duration-500"
                />
              </div>
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
