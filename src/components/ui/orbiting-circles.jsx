import React from "react";

import { cn } from "@/lib/utils";

export function OrbitingCircles({
	className,
	children,
	reverse,
	duration = 30,
	radius = 280,
	path = true,
	iconSize = 120,
	speed = 0.4,
	...props
}) {
	const calculatedDuration = duration / speed;
	return (
		<>
			{path && (
				// biome-ignore lint/a11y/noSvgWithoutTitle: <explanation>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					version="1.1"
					className="pointer-events-none absolute inset-0 size-full"
				>
					<circle
						className="stroke-white/20 stroke-1 dark:stroke-white/10"
						cx="50%"
						cy="50%"
						r={radius}
						fill="none"
					/>
				</svg>
			)}
			{React.Children.map(children, (child, index) => {
				const angle = (360 / React.Children.count(children)) * index;
				return (
					<div
						style={{
							"--duration": calculatedDuration,
							"--radius": radius,
							"--angle": angle,
							"--icon-size": `${iconSize}px`,
						}}
						className={cn(
							`animate-orbit absolute flex size-[var(--icon-size)] transform-gpu`,
							{ "[animation-direction:reverse]": reverse },
							className,
						)}
						{...props}
					>
						{child}
					</div>
				);
			})}
		</>
	);
}
