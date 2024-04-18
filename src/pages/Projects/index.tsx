import { Container } from "../../components/container";
import { CardProject } from "../../components/cardProject";
import { Title } from "../../components/title";

import devcarros from "../../assets/mockups/devcarros.png";
import chamadosdev from "../../assets/mockups/chamadosdev.png";
import biofit from "../../assets/mockups/biofit.png";
import pokedev from "../../assets/mockups/pokedev.png";
import seisemsete from "../../assets/mockups/seisemsete.png";
import { useEffect, useState } from "react";

export function Projects() {
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

  return (
    <Container>
      <main className={`${isMiniMobile ? "relative pl-2" : "relative"}`}>
        <Title title="Some Projects" subtitle="Click to see the live project" />

        <div className="mt-5">
          <div className="grid gap-3 md:grid lg:grid-cols-2 lg:gap-5">
            <CardProject
              img={seisemsete}
              title="Desafio 6em7"
              description="A landing page designed to capture potential attendees for a paid traffic event and generate millions in revenue."
              github="https://github.com/JefersonLRS/idg"
              deploy="https://desafio-ignicao-digital.vercel.app"
              tags={["Vite", "TypeScript", "TailWindCSS"]}
            />
            <CardProject
              img={devcarros}
              title="DevCarros"
              description="A website where the user can create their account and will be able to create their own ads and buy cars."
              github="https://github.com/JefersonLRS/devcarros"
              deploy="https://devcarros.netlify.app"
              tags={["Next", "TypeScript", "Firebase"]}
            />
            <CardProject
              img={chamadosdev}
              title="Chamados Dev"
              description="A website where the user creates their account and will be able to open tickets and register their clients."
              github="https://github.com/JefersonLRS/chamadosdev"
              deploy="https://jefersonlrs-chamados-dev.netlify.app"
              tags={["Next", "TypeScript", "Firebase"]}
            />
            <CardProject
              img={biofit}
              title="Biofit"
              description="Biofit is a platform that connects people with personal trainers."
              github="https://github.com/JefersonLRS/biofit"
              deploy="https://biofit-theta.vercel.app"
              tags={["React", "TailWindCSS"]}
            />
            <CardProject
              img={pokedev}
              title="PokeDev"
              description="A website where the user can view all Pokémon with their abilities and attributes."
              github="https://github.com/JefersonLRS/PokeDev"
              deploy="https://poke-dev-snowy.vercel.app"
              tags={["JavaScript", "HTML5", "CSS3"]}
            />
          </div>
        </div>
      </main>
    </Container>
  );
}
