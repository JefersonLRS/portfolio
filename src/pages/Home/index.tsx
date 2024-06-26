import { Container } from "../../components/container";
import { FaCircle } from "react-icons/fa6";
import { IoCloudDownloadOutline } from "react-icons/io5";
import { Title } from "../../components/title";
import { FaCheckCircle } from "react-icons/fa";
import { Card } from "../../components/card";
import { StacksCard } from "../../components/stacksCard";
import purpleEffect from "../../assets/purpleEffect.png";
import { useEffect, useState } from "react";

export function Home() {
  const [isMobile, setIsMobile] = useState(false);
  const [isMiniMobile, setIsMiniMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
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
    link.download = "JefersonCV-2024.pdf";
    link.href =
      "https://drive.google.com/uc?export=download&id=19dYxGemuq59Mwu4Y0Rvx3UPZPJplqqDC";

    link.click();
  };

  return (
    <Container>
      <div className={`${isMobile ? "hidden" : "fixed bottom-0"}`}>
        <img src={purpleEffect} alt="Purple Effect" />
      </div>
      <main
        className={`${
          isMiniMobile
            ? "w-full relative pl-2 pt-3 md:pt-0 md:px-0 flex flex-col"
            : "w-full relative pt-3 md:pt-0 md:px-0 flex flex-col"
        }`}
      >
        <div className="flex flex-col md:flex-row md:justify-between md:items-center">
          <div className="mb-4 md:mb-2">
            <Title title="Full Stack Developer" subtitle="& UI/UX Designer" />
            <span className="flex items-center gap-2 text-lg md:text-base text-[#00FF1A]">
              <FaCircle size={5} /> Open to work
            </span>
          </div>
          <button
            className="h-12 px-10 py-2 rounded-md bg-white text-black hover:bg-[#A611DA] hover:text-white transition-all ease-in-out"
            onClick={downloadFile}
          >
            <span className="flex items-center justify-center gap-5">
              Download CV <IoCloudDownloadOutline />
            </span>
          </button>
        </div>
        <section>
          <div className="flex flex-col md:flex-row mt-6 gap-3">
            <div className="w-full flex flex-col gap-3 lg:grid md:grid-cols-1 lg:grid-cols-2 lg:gap-4">
              <Card title="13+" subtitle="Projects" />
              <StacksCard />
              <div className="md:w-full h-[205px] rounded-xl shadow-xl bg-[#171717] flex flex-col justify-center items-center gap-4 border border-zinc-700">
                <span className="text-6xl font-bold flex gap-1 items-end">
                  2 <p className="text-lg">Years</p>
                </span>
                <p className="opacity-70">Developer Experience</p>
              </div>
              <Card title="25+" subtitle="Certificates" />
            </div>
            <div>
              <div className="md:w-96 md:h-full mb-4 md:mb-0 bg-[#171717] rounded-xl shadow-xl border border-zinc-700">
                <div className="p-6">
                  <div className="flex justify-between mb-6 items-center">
                    <span className="text-2xl md:text-[25px] font-bold">
                      Make the right choice
                    </span>
                    <FaCheckCircle color="white" size={25} />
                  </div>
                  <div className="flex flex-col gap-3 opacity-70 font-light md:text-[17px]">
                    <p>
                      Are you ready to elevate your digital presence to a new
                      level?
                    </p>
                    <p>
                      With a keen eye for design and unparalleled mastery of
                      programming languages, I create dynamic and flawless web
                      solutions, tailored especially for you.
                    </p>
                    <p>
                      Whether to build a sophisticated e-commerce platform or
                      optimize your existing website for maximum performance
                    </p>
                    <p>Get in touch today and embark on this journey.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </Container>
  );
}
