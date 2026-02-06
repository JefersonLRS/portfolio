import SpaceBackground from "@/components/space-background";
import { OrbitingCircles } from "@/components/ui/orbiting-circles";
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

			<div className="relative flex h-[1200px] w-full flex-col items-center justify-center overflow-hidden">
				<OrbitingCircles>
					{steps.map((step, index) => (
						<div
							key={index}
							className="flex flex-col items-center justify-center"
						>
							<img src={step.image} alt={step.title} />
							<div className="flex flex-col gap-1 justify-center items-center">
								<p className="font-semibold uppercase text-center text-[14px]">
									{index + 1}. {step.title}
								</p>
								<p className="text-[14px] text-muted-foreground text-center">
									{step.description}
								</p>
							</div>
						</div>
					))}
				</OrbitingCircles>
			</div>
		</section>
	);
}
