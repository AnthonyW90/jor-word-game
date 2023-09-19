import React from "react";
import Guess from "../Guess/Guess";

function GuessResults({ guesses, answer }) {
  return (
    <div className="guess-results">
      {guesses.map((guess) => (
        <Guess key={guess.id} guess={guess} answer={answer} />
      ))}
    </div>
  );
}

export default GuessResults;
