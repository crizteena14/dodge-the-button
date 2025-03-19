import { useState } from "react";
import { motion } from "framer-motion";

export default function DodgeButton() {
  const [position, setPosition] = useState({ top: "50%", left: "50%" });

  const moveButton = () => {
    const newTop = Math.random() * 80 + 10 + "%";
    const newLeft = Math.random() * 80 + 10 + "%";
    setPosition({ top: newTop, left: newLeft });
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-br from-purple-300 to-purple-600 relative overflow-hidden">
      <h1 className="text-6xl font-cursive text-white mb-4">Nope! 🎀💖✨</h1>
      <p className="text-white text-lg mb-6 italic">
        "Not today, human! 🎀✨ This button is on a mission to escape! 💖🏃‍♀️💨"
      </p>
      <motion.button
        className="absolute px-6 py-3 bg-white text-purple-600 font-semibold rounded-full shadow-lg text-lg transition-transform border-4 border-purple-500 hover:border-purple-700 hover:bg-purple-100 hover:text-purple-700 flex items-center gap-2"
        style={{ top: position.top, left: position.left, position: "absolute" }}
        onMouseEnter={moveButton}
        whileHover={{ scale: 1.1 }}
      >
        💜 Click Me! 💜
      </motion.button>
      <div className="absolute bottom-0 w-full flex justify-center">
        <img src="https://i.imgur.com/OYJtGjx.png" alt="Cute Doodle" className="w-32 opacity-50" />
      </div>
    </div>
  );
}
