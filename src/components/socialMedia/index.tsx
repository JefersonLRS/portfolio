import whatsapp from "../../assets/socialMedia/whatsapp.svg";
import linkedin from "../../assets/socialMedia/linkedin.svg";
import instagram from "../../assets/socialMedia/instagram.svg";
import github from "../../assets/socialMedia/github.svg";

export function SocialMedia() {
  return (
    <div className="flex items-center gap-5 md:gap-10 pt-4 my-5">
      <a
        href="https://api.whatsapp.com/send/?phone=$+5561981449680&text=Olá, Jeferson! Vi seu portfolio e gostaria de mais informações."
        target="_blank"
        className="hover:opacity-70 duration-300"
      >
        <img src={whatsapp} alt="WhatsApp" className="w-[40px]" />
      </a>
      <a
        href="https://www.linkedin.com/in/contato-jeferson-luis/"
        target="_blank"
        className="hover:opacity-70 duration-300"
      >
        <img src={linkedin} alt="Linkedin" className="w-[40px]" />
      </a>
      <a
        href="https://www.instagram.com/drogajef/"
        target="_blank"
        className="hover:opacity-70 duration-300"
      >
        <img src={instagram} alt="Instagram" className="w-[50px]" />
      </a>
      <a
        href="https://github.com/JefersonLRS"
        target="_blank"
        className="hover:opacity-70 duration-300"
      >
        <img src={github} alt="Github" className="w-[50px]" />
      </a>
    </div>
  );
}
