import emailjs from "@emailjs/browser";
import { Download, Loader, Mail, Send } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import BorderBeamButton from "@/components/animated-button";
import Button from "@/components/button";

const contactInfo = [
	{
		icon: Mail,
		label: "Email",
		value: "recrutador@exemplo.com",
		href: "mailto:contato.jefersonlrs@gmail.com",
	},
];

export default function Contact() {
	const [formData, setFormData] = useState({
		name: "",
		email: "",
		message: "",
	});
	const [isLoading, setIsLoading] = useState(false);
	const [submitStatus, setSubmitStatus] = useState({ type: null, message: "" });

	const downloadFile = () => {
		const itemUrl = "/curriculo/curriculo-ux-dev.pdf";
		const link = document.createElement("a");
		link.href = itemUrl;
		link.download = "Curriculo - UX Designer.pdf";
		document.body.appendChild(link);
		link.click();
		document.body.removeChild(link);
	};

	const handleSubmit = async (e) => {
		e.preventDefault();

		setIsLoading(true);
		setSubmitStatus({ type: null, message: "" });

		try {
			const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
			const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
			const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

			if (!serviceId || !templateId || !publicKey) {
				throw new Error("EmailJS configuration is missing.");
			}

			if (!formData.name || !formData.email || !formData.message) {
				setSubmitStatus({
					type: "error",
					message: "Por favor, preencha todos os campos.",
				});
				toast.error("Por favor, preencha todos os campos.");
				setIsLoading(false);
				return;
			}

			if (!/\S+@\S+\.\S+/.test(formData.email)) {
				setSubmitStatus({
					type: "error",
					message: "Por favor, insira um endereço de e-mail válido.",
				});
				toast.error("Por favor, insira um endereço de e-mail válido.");
				setIsLoading(false);
				return;
			}

			await emailjs.send(
				serviceId,
				templateId,
				{
					from_name: formData.name,
					from_email: formData.email,
					message: formData.message,
				},
				publicKey,
			);

			setSubmitStatus({
				type: "success",
				message: "Mensagem enviada com sucesso!",
			});
			toast.success("Mensagem enviada com sucesso!");
			setFormData({ name: "", email: "", message: "" });
		} catch (error) {
			console.log("EmailJS Error:", error);
			setSubmitStatus({
				type: "error",
				message: "Erro ao enviar a mensagem. Tente novamente.",
			});
			toast.error("Erro ao enviar a mensagem. Tente novamente.");
		} finally {
			setIsLoading(false);
		}
	};

	return (
		<section id="contact" className="py-32 relative overflow-hidden">
			<div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
			<div className="absolute top-1/4 left-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />

			<div className="container mx-auto px-6 relative z-10">
				<div className="text-center mx-auto max-w-3xl mb-16">
					<span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase">
						Contato
					</span>
					<h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 leading-tight animate-fade-in animation-delay-100 text-secondary-foreground">
						Vamos construir{" "}
						<span className="font-serif italic font-normal text-white">
							{" "}
							o futuro juntos
						</span>
					</h2>
					<p className="text-muted-foreground animate-fade-in animation-delay-200">
						Estou aberto a novas oportunidades e desafios. Sinta-se à vontade
						para entrar em contato comigo para discutir como posso contribuir
						para o sucesso do seu próximo projeto.
					</p>
				</div>

				<div className="mx-auto max-w-5xl">
					<div className="glass p-6 rounded-3xl border border-primary/30 animate-fade-in animation-delay-300">
						<form action="" className="space-y-6" onSubmit={handleSubmit}>
							<div>
								<label
									htmlFor="name"
									className="block text-sm font-medium mb-2"
								>
									Nome
								</label>
								<input
									type="text"
									id="name"
									name="name"
									placeholder="Digite seu nome..."
									value={formData.name}
									onChange={(e) =>
										setFormData({ ...formData, name: e.target.value })
									}
									className="w-full px-4 py-3 bg-surface rounded-xl border border-border focus:border-primary outline-none transition-all"
								/>
							</div>
							<div>
								<label
									htmlFor="email"
									className="block text-sm font-medium mb-2"
								>
									E-mail
								</label>
								<input
									type="text"
									id="email"
									name="email"
									placeholder="recrutador@exemplo.com"
									value={formData.email}
									onChange={(e) =>
										setFormData({ ...formData, email: e.target.value })
									}
									className="w-full px-4 py-3 bg-surface rounded-xl border border-border focus:border-primary outline-none transition-all"
								/>
							</div>
							<div>
								<label
									htmlFor="message"
									className="block text-sm font-medium mb-2"
								>
									Mensagem
								</label>
								<textarea
									type="text"
									id="message"
									name="message"
									placeholder="Digite sua mensagem..."
									value={formData.message}
									onChange={(e) =>
										setFormData({ ...formData, message: e.target.value })
									}
									className="w-full px-4 py-3 bg-surface rounded-xl border border-border focus:border-primary outline-none transition-all resize-none h-32"
								/>
							</div>
							<Button
								className="w-full"
								type="submit"
								size="lg"
								disabled={isLoading}
							>
								{isLoading ? (
									<Loader className="animate-spin" />
								) : (
									<>
										Enviar Mensagem
										<Send className="w-5 h-5" />
									</>
								)}
							</Button>
							<BorderBeamButton
								size="lg"
								className="w-full animate-fade-in animation-delay-600"
								onClick={downloadFile}
								type="button"
							>
								Baixar Currículo
								<Download className="h-5 w-5" />
							</BorderBeamButton>
						</form>
					</div>
				</div>
			</div>
		</section>
	);
}
