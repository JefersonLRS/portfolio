import SpaceBackground from "../components/space-background";

export default function Hero() {
	return (
	<section className="relative min-h-screen flex items-center overflow-hidden">
		<div className="absolute inset-0">
			<img src="/hero-bg.png" alt="hero image" className="w-full h-full object-cover opacity-40"/>
		</div>
		<div className="absolute inset-0 bg-gradient-to-b from-background/20 via-background/80 to-background/80"/>

		<div className="absolute inset-0 overflow-hidden pointer-events-none">
			<SpaceBackground />		
		</div>

	</section>
	) 
}
