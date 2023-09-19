import React from "react";

function GameForm({ handleGuessSubmit }) {
  const [userGuess, setUserGuess] = React.useState("");

  function handleGuessChange(event) {
    setUserGuess(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    handleGuessSubmit(userGuess.toLocaleUpperCase());
    setUserGuess("");
  }

  return (
    <div>
      <form className="guess-input-wrapper" onSubmit={handleSubmit}>
        <label htmlFor="guess-input">Enter guess:</label>
        <input
          id="guess-input"
          type="text"
          value={userGuess}
          onChange={handleGuessChange}
          pattern="[a-zA-Z]{5}"
          title="5 letter word"
          required
        />
      </form>
    </div>
  );
}

export default GameForm;
