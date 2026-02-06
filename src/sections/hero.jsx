import {
	ArrowRight,
	ChevronDown,
	Download,
	Github,
	Linkedin,
} from "lucide-react";
import BorderBeamButton from "@/components/animated-button";
import Button from "@/components/button";
import { TypingAnimation } from "@/components/ui/typing-animation";
import designSystemImage from "/skills/design-system.png";
import figmaLogo from "/skills/figma.png";
import gitLogo from "/skills/git.png";
import mobileImage from "/skills/mobile.png";
import prototypeImage from "/skills/prototipagem.png";
import reactLogo from "/skills/react.png";
import tailwindLogo from "/skills/tailwind.png";
import typescriptLogo from "/skills/typescript.png";
import uxResearchImage from "/skills/ux-research.png";
import SpaceBackground from "../components/space-background";

const skills = [
	{ name: "Design System", icon: designSystemImage },
	{ name: "Figma", icon: figmaLogo },
	{ name: "Git", icon: gitLogo },
	{ name: "Mobile Design", icon: mobileImage },
	{ name: "Prototipagem", icon: prototypeImage },
	{ name: "React", icon: reactLogo },
	{ name: "Tailwind CSS", icon: tailwindLogo },
	{ name: "Typescript", icon: typescriptLogo },
	{ name: "UX Research", icon: uxResearchImage },
];

export default function Hero() {
	return (
		<section className="relative min-h-screen flex flex-col items-center overflow-hidden">
			<div className="absolute inset-0">
				<img
					src="/hero-bg.png"
					alt="hero background"
					className="w-full h-full object-cover opacity-40"
				/>
			</div>
			<div className="absolute inset-0 bg-gradient-to-b from-background/20 via-background/80 to-background/80" />

			<div className="absolute inset-0 overflow-hidden pointer-events-none">
				<SpaceBackground />
			</div>

			{/* content */}
			<div className="container mx-auto px-6 pt-32 pb-5 relative z-10">
				<div className="items-center justify-center">
					{/* left-column - text content */}
					<div className="space-y-8">
						<div className="animate-fade-in">
							<span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm text-primary">
								<span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
								UX Designer & Dev Front-end • Especialista em Figma
							</span>
						</div>

						{/* headline */}
						<div className="space-y-2">
							<h1 className="text-3xl md:text-5xl font-bold leading-tight animate-fade-in animation-delay-200">
								Interfaces despertam{" "}
								<span className="font-serif italic font-normal text-white">
									interesse.
								</span>
								<br />
								<span className="text-primary glow-text">
									<TypingAnimation
										words={[
											"Perspectivas reais",
											"Soluções eficazes",
											"Experiências memoráveis",
											"UX Designers",
										]}
										loop
									/>
								</span>{" "}
								convertem
								<br />
								<span className="font-serif italic font-normal text-white">
									usuários.
								</span>
							</h1>

							<p className="text-normal text-muted-foreground max-w-lg animate-fade-in animation-delay-400">
								Olá, sou o Jeferson LRS - Desvendo o comportamento humano para
								construir interfaces que antecipam desejos. Unindo investigação
								de UX e execução técnica há 5 anos para gerar resultados reais.
							</p>
						</div>

						{/* CTAs */}

						<div className="flex flex-col gap-2 md:flex-row">
							<Button size="md" className="animate-fade-in animation-delay-600">
								Entrar em contato
								<ArrowRight className="h-5 w-5" />
							</Button>

							<BorderBeamButton
								size="md"
								className="animate-fade-in animation-delay-600"
							>
								Baixar Currículo
								<Download className="h-5 w-5" />
							</BorderBeamButton>
						</div>

						{/* social links */}
						<div className="flex items-center mt-8 gap-2">
							<span className="opacity-50">Redes Sociais: </span>
							{[
								{ icon: Github, url: "#" },
								{ icon: Linkedin, url: "#" },
							].map((social, idx) => (
								<a
									// biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
									key={idx}
									href={social.url}
									target="_blank"
									rel="noopener noreferrer"
									className="inline-block p-2 rounded-full glass hover:bg-primary/20 transition-colors"
								>
									<social.icon className="h-5 w-5 text-primary" />
								</a>
							))}
						</div>
					</div>
				</div>
			</div>
			{/* skill section */}
			<div className="animate-fade-in animation-delay-600">
				<div className="relative overflow-hidden">
					<div className="flex gap-0 animate-marquee">
						{[...skills, ...skills].map((skill, idx) => (
							// biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
							<div key={idx} className="shrink-0 px-8 py-4">
								<span className="text-sm md:text-normal items-center justify-center flex flex-col font-semibold text-muted-foreground opacity-50 hover:opacity-100 transition-opacity">
									<img
										src={skill.icon}
										alt={skill.name}
										className="w-24 h-24 md:w-36 md:h-36 inline-block "
									/>
									{skill.name}
								</span>
							</div>
						))}
					</div>
				</div>
			</div>

			{/* SCROLL DOWN */}
			<div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-fade-in animation-delay-800">
				<a
					href="#about"
					className="flex flex-col items-center justify-center gap-2 text-muted-foreground hover:text-primary"
				>
					<span className="text-xs uppercase tracking-wider flex flex-col items-center justify-center">
						Scroll
						<ChevronDown className="h-6 w-6 animate-bounce" />
					</span>
				</a>
			</div>
		</section>
	);
}
