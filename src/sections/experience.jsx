import { MapPin } from "lucide-react";
import SpaceBackground from "@/components/space-background";
import { AvatarCircles } from "@/components/ui/avatar-circles";

import figmaLogo from "/stacks/figma.png";
import iaLogo from "/stacks/ia.png";
import nestjsLogo from "/stacks/nestjs.png";
import nextjsLogo from "/stacks/nextjs.png";
import nodejsLogo from "/stacks/nodejs.png";
import pythonLogo from "/stacks/python.png";
import reactLogo from "/stacks/react.png";
import tailwindLogo from "/stacks/tailwind.png";
import typescriptLogo from "/stacks/typescript.png";

const experiences = [
	{
		period: "Out 2021 - Atual",
		role: "Consultor de UX & Tech Lead",
		company: "Freelance",
		description:
			"Desenvolvimento de SaaS White Label e projetos internacionais para ONG suíça. Em UX, atuei no redesign de apps de mobilidade urbana, modernizando fluxos e otimizando a jornada de passageiros e motoristas.",
		techlonogies: [
			{ name: "Figma", logo: figmaLogo },
			{ name: "React", logo: reactLogo },
			{ name: "TypeScript", logo: typescriptLogo },
			{ name: "Node.js", logo: nodejsLogo },
			{ name: "Tailwind CSS", logo: tailwindLogo },
			{ name: "Next.js", logo: nextjsLogo },
			{ name: "IA", logo: iaLogo },
		],
		current: true,
		modality: "Remota",
		local: "Brasília, Distrito Federal, Brasil",
	},
	{
		period: "Out 2025 - Atual",
		role: "Product Designer & Tech Lead",
		company: "NextBuild",
		description:
			"Liderança end-to-end de SaaS Brasil/Suíça. Atuo da arquitetura no Figma ao código (React/Nest) , unindo design e viabilidade técnica, além de implementar agentes de IA para automação de tarefas críticas.",
		techlonogies: [
			{ name: "Figma", logo: figmaLogo },
			{ name: "React", logo: reactLogo },
			{ name: "TypeScript", logo: typescriptLogo },
			{ name: "Tailwind CSS", logo: tailwindLogo },
			{ name: "Nest.js", logo: nestjsLogo },
			{ name: "IA", logo: iaLogo },
		],
		current: true,
		modality: "Remota",
		local: "Brasília, Distrito Federal, Brasil",
	},
	{
		period: "Mai 2024 - Nov 2025",
		role: "UI/UX Designer",
		company: "Sinerji Instituto de Pesquisa e Desenvolvimento Tecnológico",
		description:
			"Concepção de SaaS premiado em licitações públicas. Atuação híbrida (UX Designer + Dev Front), traduzindo processos burocráticos de grandes órgãos (como FNDE e MEC) em experiências digitais fluidas e integrando IA para otimização de buscas em editais.",
		techlonogies: [
			{ name: "Figma", logo: figmaLogo },
			{ name: "React", logo: reactLogo },
			{ name: "TypeScript", logo: typescriptLogo },
			{ name: "Tailwind CSS", logo: tailwindLogo },
			{ name: "Python", logo: pythonLogo },
			{ name: "IA", logo: iaLogo },
		],
		current: true,
		modality: "Presencial",
		local: "Brasília, Distrito Federal, Brasil",
	},
];

export default function Experience() {
	return (
		<section id="experience" className="py-32 relative overflow-hidden">
			{/* bg-glows */}
			<div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
			<div className="absolute top-1/4 left-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />

			<div className="absolute inset-0 overflow-hidden pointer-events-none">
				<SpaceBackground />
			</div>

			<div className="container mx-auto px-6 relative z-10">
				{/* Section Header */}
				<div className="text-center mx-auto max-w-3xl mb-16">
					<span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase">
						Experiências
					</span>
					<h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 leading-tight animate-fade-in animation-delay-100 text-secondary-foreground">
						Experiências que{" "}
						<span className="font-serif italic font-normal text-white">
							{" "}
							moldaram minha carreira
						</span>
					</h2>
					<p className="text-muted-foreground animate-fade-in animation-delay-200">
						Liderança end-to-end de produtos SaaS complexos no Brasil e no
						exterior. Do Discovery ao Front-end, transformo desafios de negócio
						em soluções digitais escaláveis, unindo UX estratégica, Design
						Systems e Engenharia de IA.
					</p>
				</div>

				{/* TIMELINE */}
				<div className="relative">
					<div className="timeline-glow absolute left-0 md:left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-primary/70 via-primary/30 to-transparent md:-translate-x-1/2 shadow-[0_0_25px_rgba(32,178,166,0.8)]" />

					{/* Experience items */}
					<div className="space-y-12">
						{experiences.map((exp, index) => (
							<div
								// biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
								key={index}
								className="relative grid md:grid-cols-2 gap-8 animate-fade-in"
								style={{
									animationDelay: `${(index + 1) * 200}ms`,
								}}
							>
								{/* TIMELINE DOT */}
								<div className="absolute left-0 md:left-1/2 top-0 w-3 h-3 bg-primary rounded-full -translate-x-1/2 ring-4 ring-background z-10">
									<span className="absolute inset-0 rounded-full bg-primary animate-ping opacity-70" />
								</div>

								{/* CONTENT */}
								<div
									className={`pl-8 md:pl-0 ${index % 2 === 0 ? "md:pr-16" : "md:col-start-2 md:pl-16"}`}
								>
									<div
										className={`glass p-6 rounded-2xl border border-primary/30 hover:border-primary/50 transition-all duration-500 flex flex-col gap-6`}
									>
										<div>
											<span className="px-3 py-1 rounded-full bg-primary/20 border-[0.5px] border-primary/50 text-primary font-medium text-sm">
												{exp.modality}
											</span>
										</div>
										<div>
											<h3 className="text-xl font-bold md:text-2xl">
												{exp.role}
											</h3>
											<p className="text-muted-foreground font-semibold">
												{exp.company}
											</p>
										</div>
										<div>
											<span className="flex gap-3 items-center text-muted-foreground/70">
												<MapPin size={16} />
												<p>{exp.local}</p>
											</span>
										</div>

										<p className="text-white/70 flex-1">{exp.description}</p>
										<div>
											<AvatarCircles
												avatarUrls={exp.techlonogies.map((tech) => ({
													imageUrl: tech.logo,
												}))}
											/>
										</div>
									</div>
									<p className="text-muted-foreground/70 mt-2 text-[12px]">
										{exp.period}
									</p>
								</div>
							</div>
						))}
					</div>
				</div>
			</div>
		</section>
	);
}
