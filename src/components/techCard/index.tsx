export function TechCard({
  picture,
  label,
}: {
  picture: string;
  label: string;
}) {
  return (
    <div className="w-[130px] h-[130px] flex p-2 gap-2 flex-col justify-center items-center rounded-xl shadow-xl bg-[#171717] border border-zinc-700">
      <img src={picture} alt={label} className="w-[50%]" />
      <span className="font-bold">{label}</span>
    </div>
  );
}
