import { useState } from "react";
import { Container } from "../../components/container";
import { Title } from "../../components/title";
import { IoMdSend } from "react-icons/io";
import { toast } from "react-toastify";
import emailjs from "emailjs-com";

export function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

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
      <Title title="Get in touch" subtitle="Follow me on social media." />

      <div className="w-full p-4 bg-[#171717] rounded-md border border-zinc-700 flex flex-col justify-center items-center">
        <h1 className="text-xl md:text-2xl font-bold mb-4">
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
            className="w-full h-24 py-3 border px-6 bg-[#282828] text-white placeholder-white placeholder-opacity-50 outline-none border-zinc-700 rounded-md resize-none"
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
      </div>
    </Container>
  );
}
