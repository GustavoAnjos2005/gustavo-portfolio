"use client";

import CountUp from "react-countup";

const stats = [
  {
    num: 3,
    text: "Anos de experiência acadêmico",
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
    num: 14,
    text: "Certificados concluídos",
  },
];

const Stats = () => {
	return (
		<section className="pt-4 pb-12 xl:pt-0 xl:pb-0">
			<div className="container mx-auto">
				<div className="flex flex-wrap gap-6 max-w-[80px] mx-auto xl:max-w-none">
					{stats.map((item, index) => {
						return (
							<div
								key={index}
								className="flex-1 flex gap-4 items-center justify-center xl:justify-start"
							>
								<h2 className="text-4xl xl:text-6xl font-extrabold">
									<CountUp end={item.num} duration={5} />
								</h2>
								<p
									className={`${
										item.text.length < 15
											? "max-w-[100px]"
											: "max-w-[150px]"
									} leading-snug text-white/80`}
								>
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
