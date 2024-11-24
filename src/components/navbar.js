import { faTruck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Navbar = ({ menuOpen, setMenuOpen }) => {
	return (
		<div className="w-full h-16 bg-colorThree fixed top-0 z-50">
			<div className="flex justify-between items-center px-4">
				<div className="flex items-center justify-center md:mt-2">
					<a
						href="#hero"
						className="hidden md:flex font-racing text-lg font-semibold text-colorOne ml-6 tracking-tight hover:text-colorFour mt-2"
					>
						All Road Transport
					</a>

					<a
						href="#hero"
						className="block md:hidden font-racing text-lg font-semibold text-colorOne ml-3 items-center justify-center hover:text-colorFour mt-2"
					>
						AR Transport
					</a>
					<FontAwesomeIcon
						icon={faTruck}
						size="sm"
						className="flex justify-center items-center ml-2 mt-2 text-colorOne hover:text-colorFour"
					/>
				</div>
				{/* Navigation links for large screens */}
				<div className="hidden md:flex items-center space-x-6 mr-6 mt-4">
					<a
						href="#about"
						className="font-fugaz text-colorOne font-medium hover:text-colorFour"
					>
						About
					</a>
					<a
						href="#services"
						className="font-fugaz text-colorOne font-medium hover:text-colorFour"
					>
						Services
					</a>
					<a
						href="#contact"
						className="font-fugaz text-colorOne font-medium hover:text-colorFour"
					>
						Contact
					</a>
				</div>
				{/* Mobile menu icon */}
				<div className="mr-4 mt-2 w-8 h-12 flex items-center md:hidden">
					<div
						className="w-8 h-6 flex flex-col justify-between cursor-pointer"
						onClick={() => setMenuOpen(!menuOpen)}
					>
						<span
							className={`block w-full h-1 bg-colorOne rounded-3xl transition-all duration-1000 ease-in-out origin-center ${
								menuOpen
									? "transform rotate-45 translate-y-2.5"
									: ""
							}`}
						></span>
						<span
							className={`block w-full h-1 bg-colorOne rounded-3xl transition-all duration-1000 ease-in-out ${
								menuOpen ? "opacity-0" : ""
							}`}
						></span>
						<span
							className={`block w-full h-1 bg-colorOne rounded-3xl transition-all duration-1000 ease-in-out origin-center ${
								menuOpen
									? "transform -rotate-45 -translate-y-2.5"
									: ""
							}`}
						></span>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Navbar;
