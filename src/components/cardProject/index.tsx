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
    <main>
      <div className="flex flex-col justify-center items-center border border-zinc-700 rounded-2xl md:w-full shadow-lg">
        <a
          href={deploy}
          target="_blank"
          className="brightness-100 hover:brightness-50 transition-all duration-500 ease-in-out"
        >
          <img src={img} alt={title} className="rounded-t-2xl" />
        </a>
        <div className="flex w-full items-center justify-between rounded-b-2xl bg-[#101010] gap-3 py-3 px-4">
          <div className="flex flex-col gap-3">
            <span className="font-bold md:text-xl">{title}</span>
            <p className="font-light opacity-80 text-xs md:text-sm w-[70%]">
              {description}
            </p>
            <div className="flex gap-2">
              {tags.map((tag) => (
                <div className="w-[60px] md:w-[100px] py-1 bg-[#151515] border rounded-full border-zinc-700 flex justify-center text-[8px] md:text-sm px-2 items-center text-zinc-400">
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
    </main>
  );
}
