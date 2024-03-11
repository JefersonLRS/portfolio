import FigmaLogo from "../../assets/stacks/figma.png";
import JavaScriptLogo from "../../assets/stacks/javascript.png";
import NextLogo from "../../assets/stacks/next.png";
import NodeJSLogo from "../../assets/stacks/nodejs.png";
import ReactLogo from "../../assets/stacks/react.png";
import TypeScriptLogo from "../../assets/stacks/typescript.png";

export function StacksCard() {
  return (
    <div className="md:w-[290px] h-[205px] rounded-xl shadow-xl bg-[#171717] p-6 grid grid-cols-3 border border-zinc-700">
      <div className="flex justify-center items-center">
        <img src={JavaScriptLogo} alt="JavaScript" />
      </div>
      <div className="flex justify-center items-center">
        <img src={ReactLogo} alt="React" />
      </div>
      <div className="flex justify-center items-center">
        <img src={TypeScriptLogo} alt="TypeScript" />
      </div>
      <div className="flex justify-center items-center">
        <img src={NodeJSLogo} alt="NodeJS" />
      </div>
      <div className="flex justify-center items-center">
        <img src={NextLogo} alt="Next" />
      </div>
      <div className="flex justify-center items-center">
        <img src={FigmaLogo} alt="Figma" />
      </div>
    </div>
  );
}
