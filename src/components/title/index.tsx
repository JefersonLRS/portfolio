interface TitleProps {
  title: string;
  subtitle: string;
}

export function Title({ title, subtitle }: TitleProps) {
  return (
    <div>
      <h1 className="text-2xl md:text-3xl font-bold">{title}</h1>
      <h2 className="text-xl md:text-2xl font-bold opacity-80">{subtitle}</h2>
    </div>
  );
}
