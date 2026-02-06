import { BrainCircuit, Code2, Rocket, UserRoundSearch } from "lucide-react";
import { MagicCard } from "@/components/ui/magic-card";

const highlights = [
	{
		icon: Code2,
		title: "Design & Code",
		description:
			"Atuação híbrida real. Levo interfaces do Figma ao código com fidelidade visual e performance.",
	},
	{
		icon: Rocket,
		title: "Mindset de Produto",
		description:
			"Visão estratégica de produto. Entendo o problema do usuário e transformo em soluções inovadoras.",
	},
	{
		icon: BrainCircuit,
		title: "AI Engineering",
		description:
			"Experiência prática na integração de LLMs e Agentes de IA para automatizar processos e potencializar produtos SaaS.",
	},
	{
		icon: UserRoundSearch,
		title: "UX Research & Discovery",
		description:
			"Condução de testes de usabilidade e conversas estratégicas para validar hipóteses e resolver dores reais do usuário final.",
	},
];

export default function About() {
	return (
		<section id="about" className="py-32 relative overflow-hidden">
			<div className="container mx-auto px-6 relative z-10">
				<div className="grid lg:grid-cols-2 gap-16 items-center">
					{/* left column */}
					<div className="space-y-8">
						<div className="animate-fade-in">
							<span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase">
								Sobre mim
							</span>
						</div>

						<h2 className="text-4xl md:text-5xl font-bold leading-tight animate-fade-in animation-delay-100 text-secondary-foreground">
							Estratégias de UX{" "}
							<span className="font-serif italic font-normal text-white">
								que eliminam barreiras e escalam resultados.
							</span>
						</h2>

						<div className="flex flex-col gap-8 text-muted-foreground animate-fade-in animation-delay-200">
							<p>
								Olá, sou o Jeferson LRS - Formado em Análise e desenvolvimento
								de sistemas, sou especialista em diagnosticar gargalos de
								usabilidade que impedem a conversão e a retenção de usuários.
								Com 5 anos de experiência em produtos digitais complexos (SaaS e
								B2B),
							</p>
							<p>
								Utilizo UX Research e testes de usabilidade para fundamentar
								decisões estratégicas de arquitetura de informação. Minha
								abordagem elimina o "achismo": traduzo regras de negócio densas
								e processos burocráticos em jornadas fluidas, garantindo que
								cada interação tenha um propósito claro.
							</p>
							<p>
								Com background técnico e visão de produto, valido a viabilidade
								de cada solução ainda na fase de Discovery, entregando
								interfaces que não apenas encantam, mas funcionam como
								ferramentas eficientes de geração de valor.
							</p>
						</div>
					</div>

					{/* right column */}
					<div className="grid sm:grid-cols-2 gap-6">
						{highlights.map((item, idx) => (
							// biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
							<MagicCard
								// biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
								key={idx}
								className="glass p-6 rounded-2xl animate-fade-in"
								style={{
									animationDelay: `${(idx + 1) * 100}ms`,
								}}
							>
								<div className="w-12 h-12 rounded-xl bg-primary/10 flex justify-center items-center hover:bg-primary/20">
									<item.icon className="text-primary" />
								</div>
								<h3 className="text-lg font-semibold">{item.title}</h3>
								<p className="text-sm text-muted-foreground">
									{item.description}
								</p>
							</MagicCard>
						))}
					</div>
				</div>
			</div>
		</section>
	);
}
