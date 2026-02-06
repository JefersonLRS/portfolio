import SpaceBackground from "@/components/space-background";
import { OrbitingCircles } from "@/components/ui/orbiting-circles";
import { ShineBorder } from "@/components/ui/shine-border";
import coding from "/skills/coding.png";
import designSystem from "/skills/design-system.png";
import mobile from "/skills/mobile.png";
import prototype from "/skills/prototipagem.png";
import testing from "/skills/testing.png";
import uxResearch from "/skills/ux-research.png";

const steps = [
	{
		title: "UX Research",
		description: "Investigação estratégica para validar hipóteses e ideias.",
		image: uxResearch,
	},
	{
		title: "Prototipagem",
		description: "Criação de protótipos interativos para validação e testes.",
		image: prototype,
	},
	{
		title: "Mobile First",
		description:
			"Design responsivo que prioriza a experiência em dispositivos móveis.",
		image: mobile,
	},
	{
		title: "Design System",
		description:
			"Sistema de design reutilizável que garante consistência e eficiência no desenvolvimento.",
		image: designSystem,
	},
	{
		title: "Testes de Usabilidade",
		description:
			"Validação prática da experiência do usuário com testes em ambientes reais.",
		image: testing,
	},
	{
		title: "Código Limpo",
		description:
			"Código bem estruturado e legível que facilita manutenção e colaboração.",
		image: coding,
	},
];

export default function Approach() {
	return (
		<section id="approach" className="py-32 relative overflow-hidden">
			{/* bg-glows */}
			<div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
			<div className="absolute top-1/4 left-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />

			<div className="absolute inset-0 overflow-hidden pointer-events-none">
				<SpaceBackground />
			</div>

			<div className="container mx-auto px-6 relative z-10">
				<div className="flex flex-col lg:flex-row items-center">
					{/* left-side */}
					<div className="text-left flex-1 mx-auto max-w-3xl mb-16">
						<span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase">
							Abordagem
						</span>

						<h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 leading-tight animate-fade-in animation-delay-100 text-secondary-foreground">
							Abordagens e táticas{" "}
							<span className="font-serif italic font-normal text-white">
								que geram resultados.
							</span>
						</h2>

						<div className="text-muted-foreground animate-fade-in animation-delay-200">
							<p>
								Essas abordagens não atuam isoladamente; elas formam um
								ecossistema integrado. Ao conectar a investigação (Research e
								Testes) diretamente à estrutura técnica (Design System e
								Código), elimino o abismo comum entre o que é desenhado e o que
								é desenvolvido. Essa união garante que o produto seja viável
								tecnicamente, consistente visualmente e focado em resolver
								problemas reais sem retrabalho.
							</p>
						</div>
					</div>

					{/* right-side */}

					{/* desktop content */}
					<div className="hidden md:flex flex-2 relative h-[900px] w-full flex-col items-center justify-center overflow-hidden">
						<OrbitingCircles>
							{steps.map((step, index) => (
								<div
									// biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
									key={index}
									className="flex flex-col items-center justify-center"
								>
									<img src={step.image} alt={step.title} />
									<div className="flex flex-col gap-1 justify-center items-center">
										<p className="font-semibold uppercase text-center text-[14px]">
											{index + 1}. {step.title}
										</p>
										<p className="text-[12px] text-muted-foreground text-center">
											{step.description}
										</p>
									</div>
								</div>
							))}
						</OrbitingCircles>
					</div>

					{/* mobile content */}
					<div className="md:hidden flex flex-col gap-6">
						{steps.map((step, idx) => (
							<div
								// biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
								key={idx}
								className="relative w-full overflow-hidden glass p-6 rounded-xl items-center justify-center"
							>
								<ShineBorder />
								<div>
									<img src={step.image} alt={step.title} />
								</div>
								<span className="flex flex-col gap-2">
									<h2 className="font-semibold uppercase text-center">
										{step.title}
									</h2>
									<p className="text-sm text-muted-foreground text-center">
										{step.description}
									</p>
								</span>
							</div>
						))}
					</div>
				</div>
			</div>
		</section>
	);
}
