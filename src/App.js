import { useState } from "react";
import Menu from "./components/menu";
import Navbar from "./components/navbar";

import Contact from "./pages/contact";
import Hero from "./pages/hero";

export default function App() {
	const [menuOpen, setMenuOpen] = useState(false);
	// <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
	// <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />

	return (
		<div>
			<div className="relative w-full h-screen snap-mandatory snap-y -mt-8">
				<Hero />

				<Contact />
			</div>
		</div>
	);
}
