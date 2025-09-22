import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const hobbies = [
  "Music/Concerts",
  "Tabletop RPGs",
  "Gaming",
  "Horror Movies",
  "Drumming",
  "Reading",
  "Editing",
  "Nature",
  "Cooking",
];

const characters = Array.from({ length: 94 }, (_, i) =>
  String.fromCharCode(33 + i)
);

const getRandomChar = () =>
  characters[Math.floor(Math.random() * characters.length)];

const ROWS = 15;
const COLS = 30;

const HackIntoHobbies = () => {
  const [input, setInput] = useState("");
  const [streams, setStreams] = useState([]);
  const [highlighted, setHighlighted] = useState([]);

  // Initialize streams
  useEffect(() => {
    const arr = Array.from({ length: ROWS * COLS }, (_, i) => ({
      char: getRandomChar(),
      row: Math.floor(i / COLS),
      col: i % COLS,
      highlight: false,
    }));
    setStreams(arr);
  }, []);

  // Animate random characters falling
  useEffect(() => {
    const interval = setInterval(() => {
      setStreams((prev) =>
        prev.map((c) =>
          c.highlight || c.locked ? c : { ...c, char: getRandomChar() }
        )
      );
    }, 100);
    return () => clearInterval(interval);
  }, [highlighted]);

  const hackHobby = () => {
    const index = parseInt(input) - 1;
    if (index >= 0 && index < hobbies.length) {
      const word = hobbies[index].split("");
      const middleRow = Math.floor(ROWS / 2);
      const startCol = Math.floor((COLS - word.length) / 2);
      const newHighlighted = [];

      // Reset highlights first
      setStreams((prev) =>
        prev.map((c) => ({ ...c, highlight: false, locked: false }))
      );

      word.forEach((char, i) => {
        const targetCol = startCol + i;
        const targetIndex = middleRow * COLS + targetCol;

        let fallingRow = 0;
        const fallInterval = setInterval(() => {
          setStreams((prev) =>
            prev.map((s, idx) => {
              if (idx === targetIndex) {
                if (fallingRow <= middleRow) {
                  return {
                    ...s,
                    char, // always correct letter
                    highlight: true,
                    locked: true, // prevent random overwrite
                    row: fallingRow++,
                  };
                } else {
                  clearInterval(fallInterval);
                  newHighlighted.push(targetIndex);
                  setHighlighted([...newHighlighted]);
                  return { ...s, row: middleRow, locked: true };
                }
              }
              return s;
            })
          );
        }, 50 + Math.random() * 50);
      });
    }
    setInput("");
  };

  return (
    <div className="relative w-full h-full flex flex-col font-mono text-cyan-400 bg-transparent">
      {/* Instruction line */}
      <div className="absolute top-2 left-2 w-full text-cyan-400 font-mono text-sm md:text-base z-10 flex items-center gap-1">
        <span>❯ DECRYPT MY HOBBIES: ENTER A NUMBER (1-9)</span>
      </div>

      {/* Matrix area */}
      <div className="flex-1 relative overflow-hidden">
        <div className="absolute inset-0 grid grid-rows-[repeat(15,_1fr)] grid-cols-[repeat(30,_1fr)] gap-0 select-none">
          {streams.map((c, i) => (
            <motion.span
              key={i}
              className={`${
                c.highlight
                  ? "text-lg md:text-xl font-bold text-cyan-100 drop-shadow-[0_0_12px_cyan]"
                  : "text-sm md:text-base text-cyan-500/40"
              }`}
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{
                duration: 1,
                repeat: Infinity,
                delay: Math.random(),
              }}
              style={{ gridRowStart: c.row + 1, gridColumnStart: c.col + 1 }}
            >
              {c.char}
            </motion.span>
          ))}
        </div>
      </div>

      {/* Input area */}
      <div className="h-1/5 flex-shrink-0 flex items-center justify-center p-2 bg-black/50 border-t border-cyan-400/50">
        <div className="flex items-center gap-1 w-full max-w-md">
          <span className="text-cyan-400">❯</span>
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && hackHobby()}
            className="bg-transparent flex-1 outline-none text-cyan-200 placeholder:text-cyan-500 px-2 py-1"
            placeholder="Enter code..."
          />
        </div>
      </div>
    </div>
  );
};

export default HackIntoHobbies;
