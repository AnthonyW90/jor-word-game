import React from "react";

import { sample } from "../../utils";
import { WORDS } from "../../data";
import GameForm from "../GameForm/GameForm";
import GuessResults from "../GuessResults/GuessResults";
import { range } from "../../utils";
import { NUM_OF_GUESSES_ALLOWED, SIZE_OF_WORD } from "../../constants";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function initalGuesses() {
  const blankWord = range(0, SIZE_OF_WORD)
    .map((_) => " ")
    .join("");
  const grid = range(0, NUM_OF_GUESSES_ALLOWED).map((guess) => {
    return { label: blankWord, id: crypto.randomUUID() };
  });
  return grid;
}

function Game() {
  const [guesses, setGuesses] = React.useState(() => initalGuesses());
  const [gameStatus, setGameStatus] = React.useState("playing");
  const [guessesMade, setGuessesMade] = React.useState(0);

  function handleGuessSubmit(guess) {
    if (guess.length !== 5) return;
    if (guesses.find((obj) => obj.label === guess)) return;

    const nextGuessCount = guessesMade + 1;

    if (nextGuessCount > NUM_OF_GUESSES_ALLOWED) return;
    if (guess === answer) {
      setGameStatus("won");
    } else if (nextGuessCount === NUM_OF_GUESSES_ALLOWED) {
      setGameStatus("lost");
    }

    setGuessesMade(nextGuessCount);
    const newGuessList = [...guesses];
    newGuessList[guessesMade].label = guess;

    setGuesses(newGuessList);
  }

  console.log({ guesses });

  return (
    <div>
      {gameStatus === "won" && (
        <div className="happy banner">
          <p>
            <strong>Congratulations!</strong> Got it in{" "}
            <strong>{guessesMade} guesses</strong>.
          </p>
        </div>
      )}
      {gameStatus === "lost" && (
        <div className="sad banner">
          <p>
            Sorry, the correct answer is <strong>{answer}</strong>.
          </p>
        </div>
      )}
      <GuessResults guesses={guesses} answer={answer} />
      <GameForm guesses={guesses} handleGuessSubmit={handleGuessSubmit} />
    </div>
  );
}

export default Game;
