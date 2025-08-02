import { Links } from "./links";

export function Home() {
	return (
		<div>
			<Links />
			<div className="mx-auto max-w-2xl py-12">
				<div className="hidden sm:mb-8 sm:flex sm:justify-center">
					<div className="relative rounded-full px-3 py-1 text-sm/6 text-gray-400 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
						Site de exempos de funcionalidades usando n8n e IA.
						<a href="#" className="font-semibold text-indigo-600">
							<span aria-hidden="true" className="absolute inset-0" />
							Saber mais <span aria-hidden="true">&rarr;</span>
						</a>
					</div>
				</div>
				<div className="text-center">
					<h1 className="text-5xl font-semibold tracking-tight text-balance text-gray-500 sm:text-7xl">
						Site de Astrolog[IA].
						<p className="text-3xl p-4">Seu Astrologo com IA</p>
					</h1>
					<p className="mt-8 text-lg font-medium text-pretty text-gray-800 sm:text-xl/8">
						Aqui você pode montar seus horoscopo diario, mapas astrais e outros
						itenz relacionados a astrologia.
					</p>
					<div className="mt-10 flex items-center justify-center gap-x-6">
						<a
							href="#"
							className="w-4 rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
						>
							Planos
						</a>
						<a
							href="#"
							className="w-4 rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
						>
							Usuários
						</a>
						<a
							href="#"
							className="w-4 rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
						>
							Eventos de IA
						</a>
						<a
							href="#"
							className="w-4 rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
						>
							E-commerce
						</a>
						<a
							href="#"
							className="w-4 rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
						>
							FAQ
						</a>
					</div>
				</div>
			</div>
		</div>
	);
}
