export function TechCard({
  picture,
  label,
}: {
  picture: string;
  label: string;
}) {
  return (
    <div className="w-full md:px-10 md:h-[130px] flex p-2 gap-2 flex-col justify-center items-center rounded-xl shadow-xl bg-[#171717] border border-zinc-700">
      <img src={picture} alt={label} className="w-[80%] md:w-[80%] p-1" />
      <span className="font-bold text-xs">{label}</span>
    </div>
  );
}
