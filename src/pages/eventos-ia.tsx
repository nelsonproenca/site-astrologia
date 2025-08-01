import { Links } from "./links";

export default function EventosIA() {
	return (
		<div>
			<Links />
			<div className="mx-auto max-w-4xl text-center">
				<p className="mt-2 text-5xl font-semibold tracking-tight text-balance text-gray-500 sm:text-6xl">
					Eventos
				</p>
			</div>

			<div>
				<div className="mx-auto max-w-2xl px-6 lg:max-w-7xl lg:px-8">
					<p className="mx-auto mt-2 text-center text-4xl font-semibold tracking-tight text-balance text-gray-500">
						Projetos de IA desenvolvidos com Python e n8n.
					</p>
					<div className="mt-10 grid gap-4 sm:mt-16 lg:grid-cols-3 lg:grid-rows-2">
						<div className="relative max-lg:row-start-1">
							<div className="absolute inset-px rounded-lg bg-white max-lg:rounded-t-4xl" />
							<div className="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)] max-lg:rounded-t-[calc(2rem+1px)]">
								<div className="px-8 pt-8 sm:px-10 sm:pt-10">
									<p className="mt-2 text-lg font-medium tracking-tight text-gray-950 max-lg:text-center">
										Performance
									</p>
									<p className="mt-2 max-w-lg text-sm/6 text-gray-600 max-lg:text-center">
										Lorem ipsum, dolor sit amet consectetur adipisicing elit
										maiores impedit.
									</p>
								</div>
								<div className="flex flex-1 items-center justify-center px-8 max-lg:pt-10 max-lg:pb-12 sm:px-10 lg:pb-2">
									<img
										alt=""
										src="https://tailwindcss.com/plus-assets/img/component-images/bento-03-performance.png"
										className="w-full max-lg:max-w-xs"
									/>
								</div>
							</div>
							<div className="pointer-events-none absolute inset-px rounded-lg shadow-sm outline outline-black/5 max-lg:rounded-t-4xl" />
						</div>
						<div className="relative max-lg:row-start-2">
							<div className="absolute inset-px rounded-lg bg-white" />
							<div className="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)]">
								<div className="px-8 pt-8 sm:px-10 sm:pt-10">
									<p className="mt-2 text-lg font-medium tracking-tight text-gray-950 max-lg:text-center">
										Security
									</p>
									<p className="mt-2 max-w-lg text-sm/6 text-gray-600 max-lg:text-center">
										Morbi viverra dui mi arcu sed. Tellus semper adipiscing
										suspendisse semper morbi.
									</p>
								</div>
								<div className="@container flex flex-1 items-center max-lg:py-6 lg:pb-2">
									<img
										alt=""
										src="https://tailwindcss.com/plus-assets/img/component-images/bento-03-security.png"
										className="h-[min(152px,40cqw)] object-cover"
									/>
								</div>
							</div>
							<div className="pointer-events-none absolute inset-px rounded-lg shadow-sm outline outline-black/5" />
						</div>
						<div className="relative max-lg:row-start-3">
							<div className="absolute inset-px rounded-lg bg-white" />
							<div className="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)]">
								<div className="px-8 pt-8 sm:px-10 sm:pt-10">
									<p className="mt-2 text-lg font-medium tracking-tight text-gray-950 max-lg:text-center">
										Advanced Flop
									</p>
									<p className="mt-2 max-w-lg text-sm/6 text-gray-600 max-lg:text-center">
										Morbi viverra dui mi arcu sed. Tellus semper adipiscing
										suspendisse semper morbi.
									</p>
								</div>
								<div className="@container flex flex-1 items-center max-lg:py-6 lg:pb-2">
									<img
										alt=""
										src="https://tailwindcss.com/plus-assets/img/component-images/bento-03-security.png"
										className="h-[min(152px,40cqw)] object-cover"
									/>
								</div>
							</div>
							<div className="pointer-events-none absolute inset-px rounded-lg shadow-sm outline outline-black/5" />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
