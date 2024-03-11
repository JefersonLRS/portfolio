interface CardProps {
  title: string;
  subtitle: string;
}

export function Card({ title, subtitle }: CardProps) {
  return (
    <div className="md:w-full h-[205px] rounded-xl shadow-xl bg-[#171717] flex flex-col justify-center items-center gap-4 border border-zinc-700">
      <p className="text-6xl font-bold">{title}</p>
      <p className="opacity-70">{subtitle}</p>
    </div>
  );
}
