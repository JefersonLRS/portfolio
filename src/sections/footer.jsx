import { Github, Linkedin } from "lucide-react";

export default function Footer() {
	return (
		<footer>
			<nav className="flex flex-col md:flex-row md:justify-between md:px-6 items-center justify-center gap-8 py-16 border-t-2">
				<div className="flex flex-col justify-center items-center gap-1 md:items-start">
					<a
						// biome-ignore lint/a11y/useValidAnchor: <explanation>
						href="#"
						className="text-xl font-bold tracking-tight transition hover:text-primary"
					>
						JLRS
						<span className="text-primary">.</span>
					</a>
					<p className="text-sm text-muted-foreground">
						© 2026 Jeferson LRS | Todos os direitos reservados.
					</p>
				</div>

				<div className="flex items-center gap-2">
					{[
						{ icon: Github, url: "https://github.com/JefersonLRS" },
						{ icon: Linkedin, url: "https://www.linkedin.com/in/jefersonlrs/" },
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
			</nav>
		</footer>
	);
}
