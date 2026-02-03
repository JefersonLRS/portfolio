import Navbar from "@/layout/navbar";
import About from "@/sections/about";
import Contact from "@/sections/contact";
import Experience from "@/sections/experience";
import Hero from "@/sections/hero";
import Projects from "@/sections/projects";
import Testimonials from "@/sections/testimonials";

function App() {
	return (
		<div className="min-h-screen overflow-x-hidden">
			<Navbar />
			<main>
				<Hero />
				<About />
				<Projects />
				<Experience />
				<Testimonials />
				<Contact />
			</main>
		</div>
	);
}

export default App;
