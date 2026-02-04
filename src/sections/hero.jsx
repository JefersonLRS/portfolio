import { ArrowRight, Download, Github, Linkedin } from "lucide-react";
import BorderBeamButton from "@/components/animated-button";
import Button from "@/components/button";
import SpaceBackground from "../components/space-background";

export default function Hero() {
	return (
		<section className="relative min-h-screen flex items-center overflow-hidden">
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
			<div className="container mx-auto px-6 pt-32 pb-20 relative z-10">
				<div className="grid lg:grid-cols-2 gap-12 items-center">
					{/* left-column - text content */}
					<div className="space-y-8">
						<div className="animate-fade-in">
							<span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm text-primary">
								<span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
								UX Designer & Dev Front-end • Especialista em Figma
							</span>
						</div>

						{/* headline */}
						<div className="space-y-4">
							<h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight animate-fade-in animation-delay-200">
								Interfaces despertam interesse
								<br />
								<span className="text-primary glow-text">Perspectivas</span>{" "}
								reais convertem
								<br />
								<span className="font-serif italic font-normal text-white">
									usuários.
								</span>
							</h1>

							<p className="text-lg text-muted-foreground max-w-lg animate-fade-in animation-delay-400">
								Olá, sou o Jeferson LRS - Desvendo o comportamento humano para
								construir interfaces que antecipam desejos. Unindo investigação
								de UX e execução técnica há 5 anos para gerar resultados reais.
							</p>
						</div>

						{/* CTAs */}

						<div className="flex gap-2">
							<Button size="lg" className="animate-fade-in animation-delay-600">
								Entrar em contato
								<ArrowRight className="h-5 w-5" />
							</Button>

							<BorderBeamButton size="lg">
								Baixar Currículo
								<Download className="h-5 w-5" />
							</BorderBeamButton>
						</div>

						{/* social links */}
						<div className="flex items-center mt-8 gap-2">
							<span>Redes Sociais: </span>
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
									className="inline-block p-2 rounded-full bg-primary/10 hover:bg-primary/20 transition-colors"
								>
									<social.icon className="h-5 w-5 text-primary" />
								</a>
							))}
						</div>
					</div>
					{/* right-column - profile image */}
				</div>
			</div>
		</section>
	);
}
