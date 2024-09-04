import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { message } from "antd";
import "../style2.css";
import { useGlobal } from "./GlobalContext";
import img1 from "../images/img-1.png";
import img2 from "../images/img-2.png";
import img3 from "../images/img-3.png";
import img4 from "../images/img-4.png";
import img5 from "../images/img-5.png";
import img6 from "../images/img-6.png";
import img7 from "../images/img-7.png";
import img8 from "../images/img-8.png";
import img9 from "../images/img-9.png";
import img10 from "../images/img-10.png";
import img11 from "../images/img-11.png";
import img12 from "../images/img-12.png";
import img13 from "../images/img-13.png";
import img14 from "../images/img-14.png";
import img15 from "../images/img-15.png";
import img16 from "../images/img-16.png";

function Pairs() {
  const { globalVariable, setGlobalVariable } = useGlobal();
  const navigate = useNavigate();

  useEffect(() => {
    const cards = document.querySelectorAll(".card");

    let matched = 0;
    let cardOne = null;
    let cardTwo = null;
    let disableDeck = false;

    function resetCards() {
      cardOne.classList.remove("flip");
      cardTwo.classList.remove("flip");
      cardOne = cardTwo = null;
      disableDeck = false;
    }

    function flipCard({ target: clickedCard }) {
      if (clickedCard === cardOne || disableDeck) return;

      clickedCard.classList.add("flip");
      if (!cardOne) {
        cardOne = clickedCard;
      } else {
        cardTwo = clickedCard;
        disableDeck = true;

        const cardOneImg = cardOne.querySelector(".back-view img").src;
        const cardTwoImg = cardTwo.querySelector(".back-view img").src;

        if (isMatch(cardOneImg, cardTwoImg)) {
          matched++;
          console.log(matched);
          if (matched === 8) {
            setTimeout(success, 1000);
          }
          cardOne.removeEventListener("click", flipCard);
          cardTwo.removeEventListener("click", flipCard);
          cardOne = cardTwo = null;
          disableDeck = false;
        } else {
          setTimeout(resetCards, 1200);
        }
      }
    }

    function isMatch(img_1, img_2) {
      console.log(img_1);
      console.log(img_2);
      return (
        (img_1 === img1 && img_2 === img2) ||
        (img_1 === img2 && img_2 === img1) ||
        (img_1 === img3 && img_2 === img4) ||
        (img_1 === img4 && img_2 === img3) ||
        (img_1 === img5 && img_2 === img6) ||
        (img_1 === img6 && img_2 === img5) ||
        (img_1 === img7 && img_2 === img8) ||
        (img_1 === img8 && img_2 === img7) ||
        (img_1 === img9 && img_2 === img10) ||
        (img_1 === img10 && img_2 === img9) ||
        (img_1 === img12 && img_2 === img11) ||
        (img_1 === img11 && img_2 === img12) ||
        (img_1 === img13 && img_2 === img14) ||
        (img_1 === img14 && img_2 === img13) ||
        (img_1 === img15 && img_2 === img16) ||
        (img_1 === img16 && img_2 === img15)
      );
    }
    function success() {
      message.success("¡Lo Lograste! Buen Trabajo", 2.5);
      setGlobalVariable(globalVariable + 10);
      navigate("/Lobby");
    }

    function shuffleCard() {
      matched = 0;
      cardOne = cardTwo = null;
      disableDeck = false;

      const arr = [
        img1,
        img2,
        img3,
        img4,
        img5,
        img6,
        img7,
        img8,
        img9,
        img10,
        img11,
        img12,
        img13,
        img14,
        img15,
        img16,
      ];
      arr.sort(() => Math.random() - 0.5);
      cards.forEach((card, i) => {
        card.classList.remove("flip");
        const imgTag = card.querySelector(".back-view img");
        imgTag.src = arr[i];
        console.log(arr[i]);
        card.addEventListener("click", flipCard);
      });
    }

    shuffleCard();
    cards.forEach((card) => card.addEventListener("click", flipCard));
  }, [globalVariable, navigate, setGlobalVariable]);
  return (
    <div className="pairs_body">
      <div class="wrapper">
        <ul class="cards">
          <li class="card">
            <div class="view front-view">
              <img src={require("../images/que_icon.svg")} alt="?" />
            </div>
            <div class="view back-view">
              <img src={require("../images/img-1.png")} alt="card-img" />
            </div>
          </li>
          <li class="card">
            <div class="view front-view">
              <img src={require("../images/que_icon.svg")} alt="?" />
            </div>
            <div class="view back-view">
              <img src={require("../images/img-6.png")} alt="card-img" />
            </div>
          </li>
          <li class="card">
            <div class="view front-view">
              <img src={require("../images/que_icon.svg")} alt="?" />
            </div>
            <div class="view back-view">
              <img src={require("../images/img-3.png")} alt="card-img" />
            </div>
          </li>
          <li class="card">
            <div class="view front-view">
              <img src={require("../images/que_icon.svg")} alt="?" />
            </div>
            <div class="view back-view">
              <img src={require("../images/img-2.png")} alt="card-img" />
            </div>
          </li>
          <li class="card">
            <div class="view front-view">
              <img src={require("../images/que_icon.svg")} alt="?" />
            </div>
            <div class="view back-view">
              <img src={require("../images/img-1.png")} alt="card-img" />
            </div>
          </li>
          <li class="card">
            <div class="view front-view">
              <img src={require("../images/que_icon.svg")} alt="?" />
            </div>
            <div class="view back-view">
              <img src={require("../images/img-5.png")} alt="card-img" />
            </div>
          </li>
          <li class="card">
            <div class="view front-view">
              <img src={require("../images/que_icon.svg")} alt="?" />
            </div>
            <div class="view back-view">
              <img src={require("../images/img-2.png")} alt="card-img" />
            </div>
          </li>
          <li class="card">
            <div class="view front-view">
              <img src={require("../images/que_icon.svg")} alt="?" />
            </div>
            <div class="view back-view">
              <img src={require("../images/img-6.png")} alt="card-img" />
            </div>
          </li>
          <li class="card">
            <div class="view front-view">
              <img src={require("../images/que_icon.svg")} alt="?" />
            </div>
            <div class="view back-view">
              <img src={require("../images/img-3.png")} alt="card-img" />
            </div>
          </li>
          <li class="card">
            <div class="view front-view">
              <img src={require("../images/que_icon.svg")} alt="?" />
            </div>
            <div class="view back-view">
              <img src={require("../images/img-4.png")} alt="card-img" />
            </div>
          </li>
          <li class="card">
            <div class="view front-view">
              <img src={require("../images/que_icon.svg")} alt="?" />
            </div>
            <div class="view back-view">
              <img src={require("../images/img-5.png")} alt="card-img" />
            </div>
          </li>
          <li class="card">
            <div class="view front-view">
              <img src={require("../images/que_icon.svg")} alt="?" />
            </div>
            <div class="view back-view">
              <img src={require("../images/img-4.png")} alt="card-img" />
            </div>
          </li>
          <li class="card">
            <div class="view front-view">
              <img src={require("../images/que_icon.svg")} alt="?" />
            </div>
            <div class="view back-view">
              <img src={require("../images/img-4.png")} alt="card-img" />
            </div>
          </li>
          <li class="card">
            <div class="view front-view">
              <img src={require("../images/que_icon.svg")} alt="?" />
            </div>
            <div class="view back-view">
              <img src={require("../images/img-4.png")} alt="card-img" />
            </div>
          </li>
          <li class="card">
            <div class="view front-view">
              <img src={require("../images/que_icon.svg")} alt="?" />
            </div>
            <div class="view back-view">
              <img src={require("../images/img-4.png")} alt="card-img" />
            </div>
          </li>
          <li class="card">
            <div class="view front-view">
              <img src={require("../images/que_icon.svg")} alt="?" />
            </div>
            <div class="view back-view">
              <img src={require("../images/img-4.png")} alt="card-img" />
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Pairs;
