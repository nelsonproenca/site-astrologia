import { Links } from "./links";

const people = [
	{
		name: "Leslie Alexander",
		role: "Plano Basico",
		imageUrl:
			"https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
	},
	{
		name: "Michael Foster",
		role: "Plano Basico",
		imageUrl:
			"https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
	},
	{
		name: "Dries Vincent",
		role: "Plano Business",
		imageUrl:
			"https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
	},
	{
		name: "Lindsay Walton",
		role: "Plano Business",
		imageUrl:
			"https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
	},
	{
		name: "Courtney Henry",
		role: "Plano Business",
		imageUrl:
			"https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
	},
	{
		name: "Tom Cook",
		role: "Plano Director",
		imageUrl:
			"https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
	},
];

export function Usuarios() {
	const urlUsuarioCadastro: string =
		"https://n8n.nelson-proenca-info.com.br/form/f7eca1ed-59a1-4d45-8f83-3413b338b794";
	return (
		<div>
			<Links />
			<div className="mx-auto max-w-4xl text-center">
				<p className="mt-2 text-5xl font-semibold tracking-tight text-balance text-gray-500 sm:text-6xl">
					&nbsp;
				</p>
			</div>

			<div className="mx-auto grid max-w-7xl gap-20 px-6 lg:px-8 xl:grid-cols-3">
				<div className="max-w-xl">
					<h2 className="text-4xl font-semibold tracking-tight text-pretty text-gray-500 text-center">
						Usuários
					</h2>
					<h2 className="mt-16 text-3xl font-semibold tracking-tight text-pretty text-gray-500 ">
						Nossos principais usuários
					</h2>
					<p className="mt-10 text-lg/8 text-gray-600 text-center">
						Aqui estão os usuários com mais atividades no nosso site.
					</p>
					<div className="mt-10 flex items-center justify-center gap-x-6">
						<a
							href={urlUsuarioCadastro}
							className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
						>
							Cadastre-se
						</a>
					</div>
				</div>
				<ul
					role="list"
					className="grid gap-x-8 gap-y-12 sm:grid-cols-2 sm:gap-y-16 xl:col-span-2"
				>
					{people.map((person) => (
						<li key={person.name}>
							<div className="flex items-center gap-x-6">
								<img
									alt=""
									src={person.imageUrl}
									className="size-16 rounded-full outline-1 -outline-offset-1 outline-black/5"
								/>
								<div>
									<h3 className="text-base/7 font-semibold tracking-tight text-gray-300">
										{person.name}
									</h3>
									<p className="text-sm/6 font-semibold text-indigo-600">
										{person.role}
									</p>
								</div>
							</div>
						</li>
					))}
				</ul>
			</div>
		</div>
	);
}
