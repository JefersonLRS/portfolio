export default function Button({ className = "", size = "md", children }) {
	const baseClass =
		"relative overflow-hidden rounded-full font-medium transition focus:outline-none focus-visible:ring-2 focus-visible:ring-primary bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg shadow-primary/25 cursor-pointer inline-flex items-center justify-center";

	const sizeClasses = {
		sm: "px-4 py-2 text-sm",
		md: "px-6 py-3 text-base",
		lg: "px-8 py-4 text-lg",
	};

	const classes = `${baseClass} ${sizeClasses[size]} ${className}`;

	return (
		// biome-ignore lint/a11y/useButtonType: <explanation>
		<button className={classes}>
			<span className="flex items-center justify-center gap-2">{children}</span>
		</button>
	);
}
