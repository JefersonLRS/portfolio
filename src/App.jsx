import { Toaster } from "@/components/ui/sonner";
import Navbar from "@/layout/navbar";
import About from "@/sections/about";
import Approach from "@/sections/approach";
import Contact from "@/sections/contact";
import Experience from "@/sections/experience";
import Hero from "@/sections/hero";
import Projects from "@/sections/projects";

function App() {
	return (
		<div className="min-h-screen overflow-x-hidden">
			<Navbar />
			<main>
				<Toaster position={"top-center"} />
				<Hero />
				<About />
				<Projects />
				<Experience />
				<Approach />
				<Contact />
			</main>
		</div>
	);
}

export default App;
