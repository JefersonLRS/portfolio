import { Menu, X } from "lucide-react";
import { useState } from "react";
import Button from "@/components/button";

const navLinks = [
	{ label: "Sobre mim", href: "#about" },
	{ label: "Projetos", href: "#project" },
	{ label: "Experiência", href: "#experience" },
	{ label: "Depoimentos", href: "#testimonials" },
];

export default function Navbar() {
	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

	return (
		<header className="fixed top-0 left-0 right-0 bg-transparent py-5 z-50">
			<nav className="container mx-auto px-6 flex items-center justify-between">
				<a
					// biome-ignore lint/a11y/useValidAnchor: <explanation>
					href="#"
					className="text-xl font-bold tracking-tight transition hover:text-primary"
				>
					JLRS
					<span className="text-primary">.</span>
				</a>

				{/* Desktop nav */}
				<div className="hidden md:flex items-center gap-1">
					<div className="glass rounded-full px-2 py-1 flex items-center gap-1">
						{navLinks.map((link) => (
							<a
								key={link.href}
								href={link.href}
								className="
									relative 
									px-4 py-2 
									text-sm text-muted-foreground 
									rounded-full 
									
									/* Configuração da Transição (Lenta e Suave) */
									transition-all 
									duration-500 
									ease-in-out 

									/* HOVER: O efeito de Luz Invertida */
									hover:text-black           /* Texto fica escuro para contrastar com a luz */
									hover:bg-white             /* O fundo vira a fonte de luz (branca) */
									
									/* O Glow: Sombra branca para parecer que a luz está vazando */
									hover:shadow-[0_0_20px_rgba(255,255,255,0.5)] 
									dark:hover:shadow-[0_0_25px_rgba(255,255,255,0.6)]
								"
							>
								{link.label}
							</a>
						))}
					</div>
				</div>

				{/* CTA button */}
				<div className="hidden md:block">
					<Button size="sm">Entrar em contato</Button>
				</div>

				{/* mobile nav */}
				{/** biome-ignore lint/a11y/useButtonType: <explanation> */}
				<button
					className="md:hidden p-2 text-foreground"
					onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
				>
					{!isMobileMenuOpen ? <Menu size={24} /> : <X size={24} />}
				</button>
			</nav>

			{/* mobile menu */}
			<div
				className={`md:hidden glass-strong animate-fade-in ${isMobileMenuOpen ? "block" : "hidden"}`}
			>
				<div className="container mx-auto p-6 flex flex-col gap-4">
					{navLinks.map((link) => (
						<a
							key={link.href}
							href={link.href}
							className="text-lg text-muted-foreground hover:text-foreground py-2"
						>
							{link.label}
						</a>
					))}
					<Button size="sm">Entrar em contato</Button>
				</div>
			</div>
		</header>
	);
}
