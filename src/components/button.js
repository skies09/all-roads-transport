import { motion } from "framer-motion";

const Button = ({ text, className, active = true, action }) => {
	const handleClick = (page) => {
		window.location.href = "#" + page;
	};

	return (
		<>
			{active && (
				<motion.button
					whileTap={{ scale: 0.9 }}
					whileHover={{
						scale: 1.1,
						backgroundColor: "#000000",
						color: "#C0C0C0",
						border: "solid #C0C0C0 2px",
					}}
					transition={{ bounceDamping: 10, bounceStiffness: 600 }}
					className={className}
					onClick={() => handleClick(action)}
				>
					{text}
				</motion.button>
			)}
		</>
	);
};

export default Button;
