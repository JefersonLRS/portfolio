import React from "react";

const SpaceBackground = () => {
	const random = (min, max) => Math.random() * (max - min) + min;

	const stars = [...Array(80)].map((_, i) => {
		const size = random(1, 3);
		const duration = random(3, 10);
		const delay = random(0, 5);

		return {
			id: i,
			top: `${random(0, 100)}%`,
			left: `${random(0, 100)}%`,
			size: size,
			duration: duration,
			delay: delay,
			opacity: random(0.3, 1),
			color: Math.random() > 0.7 ? "#20b2a6" : "#ffffff",
		};
	});

	return (
		<div className="relative w-full h-screen overflow-hidden">
			<div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-slate-800 via-slate-900 to-black z-0" />

			<div className="absolute inset-0 z-10 pointer-events-none">
				{stars.map((star) => (
					<div
						key={star.id}
						className="absolute rounded-full animate-pulse-slow"
						style={{
							top: star.top,
							left: star.left,
							width: `${star.size}px`,
							height: `${star.size}px`,
							backgroundColor: star.color,
							opacity: star.opacity,
							boxShadow: `0 0 ${star.size * 2}px ${star.color}`,
							animation: `twinkle ${star.duration}s infinite ease-in-out ${star.delay}s, float ${star.duration * 2}s infinite ease-in-out ${star.delay}s`,
						}}
					/>
				))}
			</div>

			<style>{`
        @keyframes twinkle {
          0%, 100% { opacity: 0.3; transform: scale(1); }
          50% { opacity: 1; transform: scale(1.2); }
        }
        @keyframes float {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-10px); } // Flutua levemente para cima
          100% { transform: translateY(0px); }
        }
      `}</style>
		</div>
	);
};

export default SpaceBackground;
