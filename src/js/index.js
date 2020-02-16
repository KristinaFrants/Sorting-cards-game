/* eslint-disable */

import "file-loader?name=[name].[ext]!../index.html";
import "../assets/img/rigo-baby.jpg";
import "../assets/img/4geeks.ico";
//import 'breathecode-dom'; //DOM override to make JS easier to use
import "../style/index.scss";

let buttonVar = document.querySelector(".reload");
buttonVar.addEventListener("click", theButtonWasClicked, true);
// reset flip

function theButtonWasClicked() {
  let rank = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];
  let types = ["&clubs;", "&diams;", "&hearts;", "&spades;"];

  let randomType = Math.floor(Math.random() * types.length);
  let randomRank = Math.floor(Math.random() * 9);
  let together = types[randomType];

  console.log(randomType);

  //   let theSymbol = document.querySelector(".symbol");
  //   theSymbol.innerHTML = "<span>" + together + "</span>";
  if (randomType == 0 || randomType == 3) {
    document.getElementById("cardMain").style.color = "black";
  } else {
    document.getElementById("cardMain").style.color = "red";
  }

  const selectSort = arr => {
    let min = 0;
    while (min <= arr.length - 1) {
      for (let i = min + 1; i <= arr.length - 1; i++) {
        if (arr[min] > arr[i]) {
          let aux = arr[min];
          arr[min] = arr[i];
          arr[i] = aux;
        }
      }
      min++;
    }
    return arr;
  };
  //Create new array cardz [] and push card values from array rank
  let cardz = [];
  for (let i = 0; i < 5; i++) {
    cardz.push(rank[Math.floor(Math.random() * 9)]);
  }

  console.log(cardz);

  const flipCards = () => {
    //card1
    document.getElementById("cardMain").style.WebkitAnimationPlayState =
      "running";
    document.getElementById("cardMain").style.backgroundImage =
      "url('https://i.gifer.com/g0e4.gif')";

    // document.getElementById("cardMain").style.webkitAnimationName = "none";
    // //timer to reset anumation
    // setTimeout(function() {
    //   document.getElementById("cardMain").style.webkitAnimationName = "";
    // }, 10);

    //card2
    document.getElementById("card2").style.WebkitAnimationPlayState = "running";
    document.getElementById("card2").style.backgroundImage =
      "url('https://i.gifer.com/g0e4.gif')";
    //card3
    document.getElementById("card3").style.WebkitAnimationPlayState = "running";
    document.getElementById("card3").style.backgroundImage =
      "url('https://i.gifer.com/g0e4.gif')";
    //card4
    document.getElementById("card4").style.WebkitAnimationPlayState = "running";
    document.getElementById("card4").style.backgroundImage =
      "url('https://i.gifer.com/g0e4.gif')";
    //card5
    document.getElementById("card5").style.WebkitAnimationPlayState = "running";
    document.getElementById("card5").style.backgroundImage =
      "url('https://i.gifer.com/g0e4.gif')";
  };

  const assingValues = () => {
    // assign new values to cards
    //

    let theUpperNumber = document.querySelector(".upper-number");
    theUpperNumber.innerHTML = "<span>" + cardz[0] + "</span>";

    let theLowerNumber = document.querySelector(".lower-number");
    theLowerNumber.innerHTML = "<span>" + cardz[0] + "</span>";

    let theSymbol = document.querySelector(".symbol");
    theSymbol.innerHTML = "<span>" + together + "</span>";

    //card 2
    let theUpperNumber2 = document.querySelector(".card2top");
    theUpperNumber2.innerHTML = "<span>" + cardz[1] + "</span>";

    let theLowerNumber2 = document.querySelector(".card2bot");
    theLowerNumber2.innerHTML = "<span>" + cardz[1] + "</span>";

    let theSymbol2 = document.querySelector(".symbol2");
    theSymbol2.innerHTML = "<span>" + together + "</span>";

    if (randomType == 0 || randomType == 3) {
      document.getElementById("card2").style.color = "black";
    } else {
      document.getElementById("card2").style.color = "red";
    }

    //card 3
    let theUpperNumber3 = document.querySelector(".card3top");
    theUpperNumber3.innerHTML = "<span>" + cardz[2] + "</span>";

    let theLowerNumber3 = document.querySelector(".card3bot");
    theLowerNumber3.innerHTML = "<span>" + cardz[2] + "</span>";

    let theSymbol3 = document.querySelector(".symbol3");
    theSymbol3.innerHTML = "<span>" + together + "</span>";

    if (randomType == 0 || randomType == 3) {
      document.getElementById("card3").style.color = "black";
    } else {
      document.getElementById("card3").style.color = "red";
    }

    //card 4
    let theUpperNumber4 = document.querySelector(".card4top");
    theUpperNumber4.innerHTML = "<span>" + cardz[3] + "</span>";

    let theLowerNumber4 = document.querySelector(".card4bot");
    theLowerNumber4.innerHTML = "<span>" + cardz[3] + "</span>";

    let theSymbol4 = document.querySelector(".symbol4");
    theSymbol4.innerHTML = "<span>" + together + "</span>";

    if (randomType == 0 || randomType == 3) {
      document.getElementById("card4").style.color = "black";
    } else {
      document.getElementById("card4").style.color = "red";
    }

    //card 5
    let theUpperNumber5 = document.querySelector(".card5top");
    theUpperNumber5.innerHTML = "<span>" + cardz[4] + "</span>";

    let theLowerNumber5 = document.querySelector(".card5bot");
    theLowerNumber5.innerHTML = "<span>" + cardz[4] + "</span>";

    let theSymbol5 = document.querySelector(".symbol5");
    theSymbol5.innerHTML = "<span>" + together + "</span>";

    if (randomType == 0 || randomType == 3) {
      document.getElementById("card5").style.color = "black";
    } else {
      document.getElementById("card5").style.color = "red";
    }
    //card 6
    // let theUpperNumber6 = document.querySelector(".card6top");
    // theUpperNumber6.innerHTML = "<span>" + cardz[5] + "</span>";

    // let theLowerNumber6 = document.querySelector(".card6bot");
    // theLowerNumber6.innerHTML = "<span>" + cardz[5] + "</span>";

    // let theSymbol6 = document.querySelector(".symbol6");
    // theSymbol6.innerHTML = "<span>" + together + "</span>";

    // if (randomType == 0 || randomType == 3) {
    //   document.getElementById("card6").style.color = "black";
    // } else {
    //   document.getElementById("card6").style.color = "red";
    // }
  };
  flipCards();
  assingValues();

  // button to sort cards
  let button2 = document.querySelector(".sortButton");
  button2.addEventListener("dblclick", sortButtonDblclick, false);

  function sortButtonDblclick() {
    selectSort(cardz);
    assingValues();
    button2.removeEventListener("dblclick", sortButtonDblclick, false);
    console.log(cardz);
  }
}
