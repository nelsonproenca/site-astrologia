import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Ecommerce } from "./pages/ecommerce";
import EventosIA from "./pages/eventos-ia";
import { Faq } from "./pages/faq";
import { Home } from "./pages/home";
import { Planos } from "./pages/planos";
import { Usuarios } from "./pages/usuarios";
import { UsuariosDetalhes } from "./pages/usuarios-detalhes";

export function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route element={<Home />} index />
				<Route element={<Ecommerce />} path="/ecommerce" />
				<Route element={<Faq />} path="/faq" />
				<Route element={<Planos />} path="/planos" />
				<Route element={<EventosIA />} path="/eventosia" />
				<Route element={<Usuarios />} path="/usuarios" />
				<Route element={<UsuariosDetalhes />} path="/usuarios/:usuarioId" />
			</Routes>
		</BrowserRouter>
	);
}
