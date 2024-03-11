import { Container } from "../../components/container";
import { CardProject } from "../../components/cardProject";
import { Title } from "../../components/title";

import devcarros from "../../assets/mockups/devcarros.png";
import chamadosdev from "../../assets/mockups/chamadosdev.png";
import biofit from "../../assets/mockups/biofit.png";
import pokedev from "../../assets/mockups/pokedev.png";

export function Projects() {
  return (
    <Container>
      <Title title="My Projects" subtitle="Click to see the live project" />

      <div className="flex justify-center items-center flex-col mt-9">
        <div className="grid gap-3 md:grid md:grid-cols-2 md:gap-5">
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
    </Container>
  );
}
