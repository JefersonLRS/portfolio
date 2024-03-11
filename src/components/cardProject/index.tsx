import { FaGithub } from "react-icons/fa";

interface cardProjectProps {
  img: string;
  title: string;
  description: string;
  github: string;
  deploy: string;
  tags: string[];
}

export function CardProject({
  img,
  title,
  description,
  github,
  deploy,
  tags,
}: cardProjectProps) {
  return (
    <div className="flex flex-col w-[330px] border border-zinc-700 rounded-2xl md:w-full shadow-lg">
      <a
        href={deploy}
        target="_blank"
        className="brightness-100 hover:brightness-50 transition-all duration-500 ease-in-out"
      >
        <img src={img} alt={title} className="rounded-t-2xl" />
      </a>
      <div className="w-full flex items-center justify-between p-4 rounded-b-2xl bg-[#101010] h-[150px]">
        <div className="flex flex-col gap-2">
          <span className="font-bold md:text-xl">{title}</span>
          <p className="font-light opacity-80 text-xs md:text-sm w-[90%]">
            {description}
          </p>
          <div className="w-[70%] flex gap-2">
            {tags.map((tag) => (
              <div className="w-[80px] md:w-[100px] h-[30px] bg-[#151515] border border-zinc-700 flex justify-center text-xs md:text-sm px-3 items-center text-zinc-400">
                {tag}
              </div>
            ))}
          </div>
        </div>
        <a href={github} target="_blank">
          <FaGithub className="h-[30px] w-[30px] hover:text-[#A611DA] transition-all duration-300 md:h-[60px] md:w-[60px] text-white" />
        </a>
      </div>
    </div>
  );
}
