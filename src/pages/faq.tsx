import { Links } from "./links";

export function Faq() {
	const urlFaq: string =
		"https://n8n.nelson-proenca-info.com.br/webhook/cf442030-3ec5-4e38-b100-8d5b999566c1/chat";
	return (
		<div>
			<Links />
			<div className="mx-auto max-w-2xl py-16">
				<div className="text-center">
					<h1 className="text-5xl font-semibold tracking-tight text-balance text-gray-500 sm:text-7xl">
						FAQ
					</h1>
					<p className="mt-8 text-lg font-medium text-pretty text-gray-600 sm:text-xl/8">
						Perguntas e Respostas sobre nosso site e sobre nosso e-commerce
					</p>
					<div className="mt-10 flex items-center justify-center gap-x-6">
						<a
							href={urlFaq}
							className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
						>
							Acessar IA de FAQ
						</a>
					</div>
				</div>
			</div>
		</div>
	);
}
