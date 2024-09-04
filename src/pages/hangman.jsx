import React, { useEffect } from "react";
import "../style.css";
import { useNavigate } from "react-router-dom";
import { useGlobal } from "./GlobalContext";

function Hangman() {
  const { globalVariable, setGlobalVariable } = useGlobal();
  const navigate = useNavigate();

  useEffect(() => {
    const wordDisplay = document.querySelector(".word-display");
    const guessesText = document.querySelector(".guesses-text b");
    const keyboardDiv = document.querySelector(".keyboard");
    const hangmanImage = document.querySelector(".hangman-box img");
    const gameModal = document.querySelector(".game-modal");
    const playAgainBtn = gameModal.querySelector("button");

    const wordList = [
      { word: "ahorro", hint: "Guardar dinero, no gastar dinero" },
      {
        word: "inversion",
        hint: "Es el acto de asignar recursos para la compra o creación de activos o de capital",
      },
      { word: "ganancia", hint: "Ingresos menos gastos" },
      {
        word: "activo",
        hint: "Tiene valor monetario y que la persona posee, obtiene un beneficio o usa",
      },
      { word: "pasivo", hint: "Las deudas y obligaciones de la empresa" },
      {
        word: "deuda",
        hint: "Compromiso de pago obligado entre dos entidades",
      },
      {
        word: "interes",
        hint: "Mide la rentabilidad de los ahorros y de las inversiones",
      },
      {
        word: "emprendimiento",
        hint: "Desarrollar un negocio o proyecto, con el objetivo de generar valor económico y social",
      },
      {
        word: "impuesto",
        hint: "Tributo que se exige en función de la capacidad económica de los obligados a su pago",
      },
      {
        word: "finanzas",
        hint: "Evaluan el uso de recursos por parte de individuos u organizaciones",
      },
    ];

    let currentWord, correctLetters, wrongGuessCount;
    const maxGuesses = 6;

    const getRandomWord = () => {
      const randomIndex = Math.floor(Math.random() * wordList.length);
      const { word, hint } = wordList[randomIndex];

      // Debugging logs
      console.log("Selected Word:", word);
      console.log("Selected Hint:", hint);

      currentWord = word;
      document.querySelector(".hint-text b").innerText = hint;
    };

    const resetGame = () => {
      console.log("Resetting game...");

      correctLetters = [];
      wrongGuessCount = 0;
      hangmanImage.src = require("../images/hangman-0.svg");
      guessesText.innerText = `${wrongGuessCount} / ${maxGuesses}`;
      wordDisplay.innerHTML = "";
      wordDisplay.innerHTML = currentWord
        .split("")
        .map(() => `<li class="letter"></li>`)
        .join("");
      keyboardDiv
        .querySelectorAll("button")
        .forEach((btn) => (btn.disabled = false));
      gameModal.classList.remove("show");
    };

    const gameOver = (isVictory) => {
      const modalText = isVictory
        ? `Encontraste la palabra:`
        : "La palabra correcta era:";
      gameModal.querySelector("img").src = require(`../images/${
        isVictory ? "victory" : "lost"
      }.gif`);
      gameModal.querySelector("h4").innerText = isVictory
        ? "¡Felicidades!"
        : "¡Game Over!";
      gameModal.querySelector(
        "p"
      ).innerHTML = `${modalText} <b>${currentWord}</b>`;
      gameModal.classList.add("show");
      setGlobalVariable(globalVariable + 10);
    };

    const initGame = (button, clickedLetter) => {
      if (currentWord.includes(clickedLetter)) {
        [...currentWord].forEach((letter, index) => {
          if (letter === clickedLetter) {
            correctLetters.push(letter);

            console.log("index:", index);
            console.log(
              "wordDisplay length:",
              wordDisplay.querySelectorAll("li").length
            );

            wordDisplay.querySelectorAll("li")[index].innerText = letter;
            wordDisplay.querySelectorAll("li")[index].classList.add("guessed");
          }
        });
      } else {
        wrongGuessCount++;
        hangmanImage.src = require(`../images/hangman-${wrongGuessCount}.svg`);
      }
      button.disabled = true;
      guessesText.innerText = `${wrongGuessCount} / ${maxGuesses}`;

      if (wrongGuessCount === maxGuesses) return gameOver(false);
      if (
        [...wordDisplay.querySelectorAll("li")].every((li) =>
          li.classList.contains("guessed")
        )
      ) {
        return gameOver(true);
      }
    };

    // Create keyboard only once
    if (keyboardDiv.children.length === 0) {
      for (let i = 97; i <= 122; i++) {
        const button = document.createElement("button");
        button.innerText = String.fromCharCode(i);
        keyboardDiv.appendChild(button);
        button.addEventListener("click", (e) =>
          initGame(e.target, String.fromCharCode(i))
        );
      }
    }

    // Initialize the game
    const initializeGame = () => {
      console.log("Initializing game...");
      getRandomWord(); // Set the word and hint
      resetGame(); // Initialize the game with the selected word
      console.log("Game initialized.");
    };

    // Initialize the game on first render
    initializeGame();
    console.log("First render completed.");

    // Attach the event listener for "Play Again" button
    playAgainBtn.addEventListener("click", () => {
      console.log("Play Again button clicked.");
      initializeGame();
    });

    // Cleanup function to remove the event listener when the component unmounts
    return () => {
      playAgainBtn.removeEventListener("click", initializeGame);
      console.log("Cleanup completed.");
    };
  }, []); // The empty array ensures useEffect runs only once

  return (
    <div className="example_body">
      <div className="game-modal">
        <div className="content">
          <img src="#" alt="gif" />
          <h4>¡Game Over!</h4>
          <p>
            La palabra correcta era: <b>rainbow</b>
          </p>
          <button className="PlayAgain" onClick={() => navigate("/Lobby")}>
            Regresar
          </button>
        </div>
      </div>
      <div className="container">
        <div className="hangman-box">
          <img src="#" draggable="false" alt="hangman-img" />
          <h1>Hangman Game</h1>
        </div>
        <div className="game-box">
          <ul className="word-display"></ul>
          <h4 className="hint-text">
            Pista: <b></b>
          </h4>
          <h4 className="guesses-text">
            Errores Cometidos: <b></b>
          </h4>
          <div className="keyboard"></div>
        </div>
      </div>
    </div>
  );
}

export default Hangman;
