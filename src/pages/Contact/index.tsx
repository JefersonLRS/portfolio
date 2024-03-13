import { useEffect, useState } from "react";
import { Container } from "../../components/container";
import { Title } from "../../components/title";
import { IoMdSend } from "react-icons/io";
import { toast } from "react-toastify";
import emailjs from "emailjs-com";
import { SocialMedia } from "../../components/socialMedia";
import { IoCloudDownloadOutline } from "react-icons/io5";

export function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isMiniMobile, setIsMiniMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMiniMobile(window.innerWidth <= 360);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const downloadFile = () => {
    const link = document.createElement("a");
    link.download = "cvJeferson.pdf";
    link.href =
      "https://drive.google.com/uc?export=download&id=1lJaB_oiQaLTtAmBXC66Z6Aj70947qRuV";
    link.click();
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (name === "" || email === "" || message === "") {
      toast.error("Please fill all fields");
      return;
    }

    setIsLoading(true);

    emailjs
      .send(
        "service_s97u1ch",
        "template_ddyx5kd",
        {
          from_name: name,
          from_email: email,
          message: message,
          to_name: "Jeferson Luís",
          to_email: "contato.jefersonlrs@gmail.com",
        },
        "y7JKTMizxsdkyqrXW"
      )
      .then(() => {
        setIsLoading(false);
        toast.dark("Message sent successfully");
        setName("");
        setEmail("");
        setMessage("");
      })
      .catch((error) => {
        setIsLoading(false);
        toast.error("Sorry, something went wrong! Try again later.");
        console.log(error.text);
        setName("");
        setEmail("");
        setMessage("");
      });
  };

  return (
    <Container>
      <main
        className={`${
          isMiniMobile ? "w-full relative pl-2" : "w-full relative"
        }`}
      >
        <Title title="Get in touch" subtitle="Follow me on social media." />

        <div className="w-full p-4 bg-[#171717] rounded-md border border-zinc-700 flex flex-col justify-center items-center md:mt-8 mt-6">
          <h1 className="text-center text-4xl font-bold mb-6 md:my-8">
            Send me a message
          </h1>

          <form
            className="md:w-[60%] w-full flex flex-col gap-3"
            onSubmit={(event) => handleSubmit(event)}
          >
            <input
              type="text"
              placeholder="Your name"
              className="w-full py-3 border px-6 bg-[#282828] text-white placeholder-white placeholder-opacity-50 outline-none border-zinc-700 rounded-md"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <input
              type="text"
              placeholder="Your email"
              className="w-full py-3 border px-6 bg-[#282828] text-white placeholder-white placeholder-opacity-50 outline-none border-zinc-700 rounded-md"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <textarea
              placeholder="Your message"
              className="w-full h-40 md:h-24 py-3 border px-6 bg-[#282828] text-white placeholder-white placeholder-opacity-50 outline-none border-zinc-700 rounded-md resize-none"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
            <button className="flex hover:bg-[#A133DA] transition-all duration-300 items-center justify-center bg-[#A611DA] py-3 rounded-md">
              {isLoading ? (
                <l-ring stroke={2} color="white" size={25} />
              ) : (
                <span className="flex items-center justify-center gap-3 md:text-lg">
                  Send <IoMdSend size={20} />
                </span>
              )}
            </button>
          </form>

          <div className="flex justify-center items-center">
            <SocialMedia />
          </div>
        </div>
        <div className="w-full p-4 bg-[#171717] rounded-md border border-zinc-700 flex flex-col justify-center items-center mt-3 py-8">
          <h1 className="text-4xl font-bold mb-10 text-center">
            Personal Information
          </h1>
          <div className="flex flex-col gap-10">
            <section className="flex flex-col gap-2 md:grid md:grid-cols-2 md:gap-3">
              <span>
                <span className="opacity-80">Name:</span>{" "}
                <span>Jeferson Luís</span>
              </span>
              <span>
                <span className="opacity-80">Email:</span>{" "}
                <span>contato.jefersonlrs@gmail.com</span>
              </span>
              <span>
                <span className="opacity-80">Age:</span> <span>22 Years</span>
              </span>
              <span>
                <span className="opacity-80">Address:</span>{" "}
                <span>Brasília - DF</span>
              </span>
              <span>
                <span className="opacity-80">Phone:</span>{" "}
                <span>+55 (61) 981449680</span>
              </span>
              <span>
                <span className="opacity-80">Languages: </span>
                <span>Portuguese, English, Spanish</span>
              </span>
            </section>
            <button
              className="h-12 px-10 py-2 rounded-md bg-white text-black hover:bg-[#A611DA] hover:text-white transition-all ease-in-out w-full"
              onClick={downloadFile}
            >
              <span className="flex items-center justify-center gap-5">
                Download CV <IoCloudDownloadOutline />
              </span>
            </button>
          </div>
        </div>
      </main>
    </Container>
  );
}
