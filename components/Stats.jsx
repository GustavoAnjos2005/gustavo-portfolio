"use client";

import CountUp from "react-countup";

const stats = [
  {
    num: 3,
    text: "Anos de experiência",
  },
  {
    num: 30,
    text: "Projetos concluídos",
  },
  {
    num: 9,
    text: "Tecnologias masterizadas",
  },
  {
    num: 15,
    text: "Certificados concluídos",
  },
];

const Stats = () => {
  return (
    <section className="py-8 xl:py-0">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((item, index) => {
            return (
              <div
                key={index}
                className="text-center xl:text-left"
              >
                <h2 className="text-3xl xl:text-5xl font-extrabold mb-2">
                  <CountUp end={item.num} duration={5} />
                </h2>
                <p className="text-sm xl:text-base text-white/80 max-w-[100px] mx-auto xl:mx-0">
                  {item.text}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Stats;
