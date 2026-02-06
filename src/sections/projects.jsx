import { ArrowUpRight } from "lucide-react";
import BorderBeamButton from "@/components/animated-button";
import SpaceBackground from "@/components/space-background";
import { Lens } from "@/components/ui/lens";

const projects = [
	{
		title: "Biofit",
		description:
			"Uma landing page para uma academia com estilo de containers sobrepostos e design responsivo.",
		image: "/projects/biofit.webp",
		tags: ["Next.js", "Tailwind CSS"],
		link: "#",
	},
	{
		title: "NextBuild",
		description:
			"Um SaaS em desenvolvimento para gerenciamento de projetos de construção.",
		image: "/projects/nextbuild.webp",
		tags: ["Figma"],
		link: "#",
	},
	{
		title: "Travel",
		description: "Um aplicativo em desenvolvimento para entregas e viagens.",
		image: "/projects/travel.webp",
		tags: ["Figma"],
		link: "#",
	},
	{
		title: "PprTattoo",
		description:
			"Um SaaS whitelabel em desenvolvimento para estúdios de tatuagem.",
		image: "/projects/pprtatto.webp",
		tags: ["Figma"],
		link: "#",
	},
];

export default function Projects() {
	return (
		<section id="project" className="py-32 relative overflow-hidden">
			{/* bg-glows */}
			<div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
			<div className="absolute top-1/4 left-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />

			<div className="absolute inset-0 overflow-hidden pointer-events-none">
				<SpaceBackground />
			</div>

			<div className="container mx-auto px-6 relative z-10">
				{/* section header */}
				<div className="text-center mx-auto max-w-3xl mb-16">
					<span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase animate-fade-in">
						Alguns projetos
					</span>
					<h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 leading-tight animate-fade-in animation-delay-100 text-secondary-foreground">
						Soluções que{" "}
						<span className="font-serif italic font-normal text-white">
							inovam a experiência
						</span>
					</h2>
					<p className="text-muted-foreground animate-fade-in animation-delay-200">
						Projetos selecionados que exemplificam minha abordagem estratégica
						de UX e design centrado no usuário. Cada case é uma jornada de
						transformação digital, onde desafios complexos foram convertidos em
						soluções intuitivas e impactantes.
					</p>
				</div>

				{/* projects grid */}
				<div className="grid md:grid-cols-2 gap-8">
					{projects.map((project, idx) => (
						<div
							// biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
							key={idx}
							className="w-full group glass p-3 rounded-2xl overflow-hidden animate-fade-in"
						>
							{/* image */}
							<div className="relative overflow-hidden aspect-video">
								{/** biome-ignore lint/suspicious/noArrayIndexKey: <explanation> */}
								<Lens key={idx}>
									<img src={project.image} alt={project.title} />
								</Lens>
							</div>
							{/* content */}
							<div className="space-y-4">
								<div className="flex items-start">
									<h3 className="text-xl mt-4 font-semibold hover:text-primary">
										{project.title}
									</h3>
								</div>
								<div>
									<p className="text-muted-foreground text-sm mb-4">
										{project.description}
									</p>
									<div className="flex flex-wrap gap-2">
										{project.tags.map((item, idx) => (
											<span
												// biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
												key={idx}
												className="bg-surface font-medium border border-border/50 text-muted-foreground px-4 py-1.5 text-xs rounded-full hover:border-primary hover:text-primary"
											>
												{item}
											</span>
										))}
									</div>
								</div>
							</div>
						</div>
					))}
				</div>
				<div className="container mx-auto mt-16 text-center">
					<BorderBeamButton
						size="md"
						className="animate-fade-in animation-delay-600"
					>
						<ArrowUpRight />
						Entrar em contato
					</BorderBeamButton>
				</div>
			</div>
		</section>
	);
}
