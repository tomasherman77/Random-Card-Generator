/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

let suit = ["♦", "♥", "♠", "♣"];
let num = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "K", "Q", "J"];

window.onload = function() {
  document.querySelector("#btn_card").addEventListener("click", () => {
    let rand_suit = suit[Math.floor(Math.random() * 4)];
    let rand_num = num[Math.floor(Math.random() * num.length)];
    if (rand_suit == "♦" || rand_suit == "♥") {
      document.querySelector("#carta").innerHTML = `
      <div class="card mx-auto" id="carta" style="width: 400px; height: 450px;">
      <div class="card-body d-flex">
        <i class="d-flex align-items-start">${rand_suit}</i>
        <h1 class="d-flex align-items-center mx-auto" id="numero">
        ${rand_num}
        </h1>
        <i class="d-flex align-items-end">${rand_suit}</i>
      </div>
    </div>
  `;
    } else {
      document.querySelector("#carta").innerHTML = `
    <div class="card mx-auto" id="carta" style="width: 400px; height: 450px;">
    <div class="card-body d-flex">
      <i class="d-flex align-items-start" style="color:black">${rand_suit}</i>
      <h1 class="d-flex align-items-center mx-auto" id="numero">
      ${rand_num}
      </h1>
      <i class="d-flex align-items-end" style="color:black">${rand_suit}</i>
    </div>
  </div>
`;
    }
  });
};
