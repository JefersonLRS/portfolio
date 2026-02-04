export default function BorderBeamButton({
	className = "",
	size = "md",
	children,
	...props
}) {
	const sizeClasses = {
		sm: "px-4 py-2 text-sm",
		md: "px-6 py-3 text-base",
		lg: "px-8 py-4 text-lg",
	};

	return (
		// 1. O Container define o formato e a COR BASE da animação (text-primary)
		// p-[1px] define a espessura da borda animada.
		<div
			className={`relative inline-flex overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-slate-50 text-primary ${className}`}
		>
			{/* 2. O Animador: Um gradiente cônico que gira. 
          Note o uso de 'transparent' e 'currentColor' para criar o feixe de luz isolado.
      */}
			<span className="absolute inset-[-1000%] animate-[spin_3s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,transparent_0%,currentColor_50%,transparent_100%)]" />

			{/* 3. O Botão Real (Máscara):
          Ele precisa ter uma cor de fundo SÓLIDA (ex: bg-slate-950) igual ao fundo da sua página
          para cobrir o centro e deixar visível apenas o pixel da borda. 
      */}
			<button
				className={`inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-background text-primary-foreground backdrop-blur-3xl transition-all hover:bg-background/20 ${sizeClasses[size]}`}
				{...props}
			>
				<span className="flex items-center justify-center gap-2 font-normal z-10">
					{children}
				</span>
			</button>
		</div>
	);
}
