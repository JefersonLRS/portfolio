import { Container } from "../../components/container";
import { Title } from "../../components/title";

import cssLogo from "../../assets/stacks/css.png";
import tailwindcssLogo from "../../assets/stacks/tailwind.png";
import angularLogo from "../../assets/stacks/angular.png";
import figmaLogo from "../../assets/stacks/figma.png";
import nodejsLogo from "../../assets/stacks/nodejs.png";
import typescriptLogo from "../../assets/stacks/typescript.png";
import nextLogo from "../../assets/stacks/next.png";
import javascriptLogo from "../../assets/stacks/javascript.png";
import reactLogo from "../../assets/stacks/react.png";
import javaLogo from "../../assets/stacks/java.png";
import gitLogo from "../../assets/stacks/git.png";
import firebaseLogo from "../../assets/stacks/firebase.png";
import { TechCard } from "../../components/techCard";

export function About() {
  return (
    <Container>
      <Title title="About me" subtitle="See the evolution." />

      <p className="my-6 font-light">
        Hello, I'm Jeferson, a technology enthusiast! Since childhood, I always
        knew this would be my place! I find it fascinating how logic works and,
        especially, how it's enhanced. I'm a student of Systems Analysis and
        Development, delving deeper into Front-end and Back-end. When I'm not
        studying, during my free time, I enjoy watching YouTube videos about
        development with React, TypeScript, Node, Java, among others. As I
        mentioned: a technology enthusiast!
      </p>

      <section>
        <h1 className="font-bold text-2xl mb-6">My Technologies</h1>
        <div className="w-full flex justify-center md:justify-start">
          <div className="grid grid-cols-3 gap-5 md:grid-cols-6 md:gap-3">
            <TechCard picture={cssLogo} label="CSS" />
            <TechCard picture={tailwindcssLogo} label="TailWind CSS" />
            <TechCard picture={angularLogo} label="Angular" />
            <TechCard picture={figmaLogo} label="Figma" />
            <TechCard picture={nodejsLogo} label="NodeJS" />
            <TechCard picture={typescriptLogo} label="TypeScript" />
            <TechCard picture={nextLogo} label="Next" />
            <TechCard picture={javascriptLogo} label="JavaScript" />
            <TechCard picture={reactLogo} label="React" />
            <TechCard picture={javaLogo} label="Java" />
            <TechCard picture={gitLogo} label="Git" />
            <TechCard picture={firebaseLogo} label="Firebase" />
          </div>
        </div>
      </section>
    </Container>
  );
}
