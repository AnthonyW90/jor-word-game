import React from "react";
import { checkGuess } from "../../game-helpers";

function Guess({ guess, answer }) {
  const guessStatus = checkGuess(guess.label, answer);

  return (
    <div>
      <p className="guess">
        {guessStatus.map(({ letter, status }, idx) => (
          <span
            key={letter + idx}
            className={`cell ${letter !== " " ? status : ""}`}
          >
            {letter}
          </span>
        ))}
      </p>
    </div>
  );
}

export default Guess;
