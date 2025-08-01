export function UsuariosDetalhes() {
	return (
		<div>
			<div className="px-4 sm:px-0">
				<h3 className="text-base/7 font-semibold text-gray-900">
					Informações dos Usuários
				</h3>
				<p className="mt-1 max-w-2xl text-sm/6 text-gray-500">
					Detalhes dos usuários.
				</p>
			</div>
			<div className="mt-6 border-t border-gray-100">
				<dl className="divide-y divide-gray-100">
					<div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
						<dt className="text-sm/6 font-medium text-gray-900">
							Nome Completo
						</dt>
						<dd className="mt-1 text-sm/6 text-gray-700 sm:col-span-2 sm:mt-0">
							Margot Foster
						</dd>
					</div>
					<div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
						<dt className="text-sm/6 font-medium text-gray-900">
							Tipo do Plano
						</dt>
						<dd className="mt-1 text-sm/6 text-gray-700 sm:col-span-2 sm:mt-0">
							Plano Developer
						</dd>
					</div>
					<div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
						<dt className="text-sm/6 font-medium text-gray-900">E-mail</dt>
						<dd className="mt-1 text-sm/6 text-gray-700 sm:col-span-2 sm:mt-0">
							margotfoster@example.com
						</dd>
					</div>
					<div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
						<dt className="text-sm/6 font-medium text-gray-900">
							Valor do plano
						</dt>
						<dd className="mt-1 text-sm/6 text-gray-700 sm:col-span-2 sm:mt-0">
							R$ 120,00
						</dd>
					</div>
				</dl>
			</div>
		</div>
	);
}
