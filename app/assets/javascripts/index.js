let gameStart = true;
let setUp = true;
let setUpCounter = 0;
let p1Turn = true;
let p2Turn = false;
let firstTurn = true;
let p1HandArr = [];
let p2HandArr = [];
let p1BenchArr = [];
let p2BenchArr = [];
let p1ActiveCardInPlay;
let p2ActiveCardInPlay;
let p1DefeatedDoggoArr = [];
let p2DefeatedDoggoArr = [];
let bubbleText = "";
let heads = false;
let tails = false;
let gameEnd = false;
let p2AtkCounter = 0;


//=====================================SHUFFLE DECK======================================
//=======================================================================================

function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;
  while (0 !== currentIndex) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }
  return array;
}

p1Deck = shuffle(p1Deck);
p2Deck = shuffle(p2Deck);

//=============================DRAW CARDS FOR PLAYERS=======================================
//==========================================================================================
let drawnCardId;

function drawCard() {
  if(p1Turn === true && gameEnd !== true) {
    let drawnCard = p1Deck.pop();
    p1HandArr.push(drawnCard);
    drawnCardId = drawnCard;
    //create elements
    let newCard = document.createElement("li");
    let newCardImgContainer = document.createElement("div");
    let newCardImg = document.createElement("IMG");
    let newCardFront = document.createElement("div");
    let newCardBack = document.createElement("div");
    let newCardNameContainer = document.createElement("p");
    let newCardName = document.createTextNode(`${drawnCard.name}`);
    let newCardSpecialContainer = document.createElement("p");
    let newCardSpecial = document.createTextNode(`${drawnCard.special}`);
    let newCardAtkAndHpBox = document.createElement("p");
    let newCardAtkBox = document.createElement("span");
    let newCardAtkBoxSeparator = document.createTextNode('/');
    let newCardHpBox = document.createElement("span");
    let atkBoxAttack = document.createTextNode(`${drawnCard.attack}`);
    let atkBoxHealth = document.createTextNode(`${drawnCard.health}`);
    //add Id and/or className to elements
    newCard.setAttribute("id", "p1-new-card");
    newCard.className = "card-front flipCard p1-hcard";
    newCardImgContainer.className = "card-img-holder";
    newCardImg.className = "card-img";
    newCardImg.setAttribute("src", drawnCard.image);
    newCardFront.className = "card-front-background";
    newCardBack.className = "card-back-for-flip";
    newCardNameContainer.className = "card-name-container";
    newCardSpecialContainer.className = "card-special-container";
    newCardSpecial.className = "card-special";
    newCardAtkAndHpBox.className = "atk-hp-box";
    newCardAtkBox.className = "atk-box";
    newCardHpBox.className = "hp-box";
    // append elements to eachother
    newCard.append(newCardImgContainer);
    newCardImgContainer.append(newCardImg);
    newCard.append(newCardFront);
    newCard.append(newCardBack);
    newCardFront.append(newCardNameContainer);
    newCardNameContainer.append(newCardName);
    newCardFront.append(newCardSpecialContainer);
    newCardSpecialContainer.append(newCardAtkAndHpBox);
    newCardSpecialContainer.append(newCardSpecial);
    newCardAtkAndHpBox.append(newCardAtkBox);
    newCardAtkBox.append(atkBoxAttack);
    newCardAtkAndHpBox.append(newCardAtkBoxSeparator);
    newCardAtkAndHpBox.append(newCardHpBox);
    newCardHpBox.append(atkBoxHealth);
    document.getElementById('p1-add-new-card').appendChild(newCard);
    setTimeout(function(){
      placeInHand();
    },1000);
  } else if (p2Turn === true && gameEnd !== true) {
    let drawnCard = p2Deck.pop();
    p2HandArr.push(drawnCard);
    drawnCardId = drawnCard;
    //create elements
    let newCard = document.createElement("li");
    let newCardImgContainer = document.createElement("div");
    let newCardImg = document.createElement("IMG");
    let newCardFront = document.createElement("div");
    let newCardBack = document.createElement("div");
    let newCardNameContainer = document.createElement("p");
    let newCardName = document.createTextNode(`${drawnCard.name}`);
    let newCardSpecialContainer = document.createElement("p");
    let newCardSpecial = document.createTextNode(`${drawnCard.special}`);
    let newCardAtkAndHpBox = document.createElement("p");
    let newCardAtkBox = document.createElement("span");
    let newCardAtkBoxSeparator = document.createTextNode('/');
    let newCardHpBox = document.createElement("span");
    let atkBoxAttack = document.createTextNode(`${drawnCard.attack}`);
    let atkBoxHealth = document.createTextNode(`${drawnCard.health}`);
    //add Id and/or className to elements
    newCard.setAttribute("id", "p2-new-card");
    newCard.className = "card-front flipCard p2-hcard";
    newCardImgContainer.className = "card-img-holder";
    newCardImg.className = "card-img";
    newCardImg.setAttribute("src", drawnCard.image);
    newCardNameContainer.className = "card-name-container";
    newCardFront.className = "card-front-background";
    newCardBack.className = "card-back-for-flip";
    newCardSpecialContainer.className = "card-special-container";
    newCardSpecial.className = "card-special";
    newCardAtkAndHpBox.className = "atk-hp-box";
    newCardAtkBox.className = "atk-box";
    newCardHpBox.className = "hp-box";
    // append elements to eachother
    newCard.append(newCardImgContainer);
    newCardImgContainer.append(newCardImg);
    newCard.append(newCardFront);
    newCard.append(newCardBack);
    newCardFront.append(newCardSpecialContainer);
    newCardFront.append(newCardNameContainer);
    newCardNameContainer.append(newCardName);
    newCardSpecialContainer.append(newCardAtkAndHpBox);
    newCardSpecialContainer.append(newCardSpecial);
    newCardAtkAndHpBox.append(newCardAtkBox);
    newCardAtkBox.append(atkBoxAttack);
    newCardAtkAndHpBox.append(newCardAtkBoxSeparator);
    newCardAtkAndHpBox.append(newCardHpBox);
    newCardHpBox.append(atkBoxHealth);
    document.getElementById('p2-add-new-card').appendChild(newCard);
    setTimeout(function(){
      placeInHand();
    },1000);
  }
}

//================================PLACE CARDS IN HAND====================================
//=======================================================================================

function placeInHand () {
  let p1NewCard = document.getElementById('p1-new-card');
  let p1Hand = document.getElementById('p1-hand');
  let p2NewCard = document.getElementById('p2-new-card');
  let p2Hand = document.getElementById('p2-hand');

    if (firstTurn === true && p1Turn === true) {
      p1NewCard.setAttribute("draggable","true");
      p1NewCard.setAttribute("ondragstart","drag(event)");
      // p1NewCard.className += " first-turn-scale";
      p1NewCard.classList.remove("flipCard");
      p1NewCard.removeAttribute("id", 'p1-new-card');
      p1NewCard.setAttribute("id", `${drawnCardId.cardId}`);
      p1Hand.appendChild(p1NewCard);

      setTimeout(function(){
        // p1NewCard.classList.remove("first-turn-scale");
        p1NewCard.className += " p1-hover";
      }, 5000);

    } else if (firstTurn === true && p2Turn === true) {
        p2NewCard.classList.remove("flipCard");
        p2NewCard.removeAttribute("id", 'p2-new-card');
        p2NewCard.setAttribute("id", `${drawnCardId.cardId}`);
        p2Hand.appendChild(p2NewCard);

        setTimeout(function(){
          p2NewCard.className += " p2-hover";
        }, 1000);

  } else if (p1Turn === true && firstTurn === false) {
    setTimeout(function(){
       p1NewCard.setAttribute("draggable","true");
       p1NewCard.setAttribute("ondragstart","drag(event)");
       p1NewCard.className += " p1-hover";
       p1NewCard.classList.remove("flipCard");
       p1NewCard.removeAttribute("id", 'p1-new-card');
       p1NewCard.setAttribute("id", `${drawnCardId.cardId}`);
       p1Hand.appendChild(p1NewCard);
    }, 1500);
  } else if (p2Turn === true && firstTurn === false) {
    setTimeout(function(){
       p2NewCard.classList.remove("flipCard");
       p2NewCard.removeAttribute("id", 'p2-new-card');
       p2NewCard.setAttribute("id", `${drawnCardId.cardId}`);
       p2Hand.appendChild(p2NewCard);
       putActiveCardInPlay();
    }, 1500);
  }
}


//===============================FADE IN AND FADE OUT=======================================
//==========================================================================================

function fadeOut(element){
  element.style.opacity = 1;

  (function fade() {
    if ((element.style.opacity -= .1) < 0) {
      element.style.display = "none";
    } else {
      requestAnimationFrame(fade);
    }
  })();
}

function fadeIn(element, display){
  element.style.display = "inline";
  element.style.opacity = 0;

  (function fade() {
    let val = parseFloat(element.style.opacity);
    if (!((val += .1) > 1)) {
      element.style.opacity = val;
      requestAnimationFrame(fade);
    }
  })();
}

//=============================YOUR/OPPONENT TURN POP-UP====================================
//==========================================================================================


function yourTurnPopUp () {
  console.log("your turn is being run");
  let turn = document.getElementById('your-turn');
  let opponentTurn = document.getElementById('opponent-turn');
  let p1Buttons = document.querySelector('#p1-buttons-container');
  setTimeout(function(){
    if(p1Turn === true && gameEnd !== true) {
      p2AtkCounter = 0;
      turn.style.display = "inherit";
      setTimeout(function(){
        turn.style.display = 'none';
        fadeIn(p1Buttons);
      }, 2500);
    } else if(p2Turn === true && gameEnd !== true) {
      fadeOut(p1Buttons);
      opponentTurn.style.display = "inherit";
      setTimeout(function(){
        opponentTurn.style.display = 'none';
      }, 2500);
    }
  },1000)
}

//=====================================DRAG DROP=========================================
//=======================================================================================


function ignoreEvent(event) {
  event.preventDefault();
}

function drag(event) {
  event.dataTransfer.setData("text", event.target.id);
}

function dragleave(event){
  if(event.target.classList.contains("card-marker")){
    event.target.classList.add("droppable");
  }
}

function drop(event) {
  event.preventDefault();
  let data = event.dataTransfer.getData("text");
  let draggedCard = document.getElementById(data);
  console.log(data, "data");

  function checkCardId(card) {
      return card.cardId === data;
  }

  if(event.target.classList.contains("active-card-marker")) {
    draggedCard.setAttribute("draggable", "false");
    if(draggedCard.classList.contains("p1-hcard")) {
      let currentActiveCard = p1HandArr.filter(checkCardId);
      let removeCard = p1HandArr.indexOf(currentActiveCard);
      p1HandArr.splice(removeCard);
      p1ActiveCardInPlay = currentActiveCard.shift();
      event.target.appendChild(document.getElementById(data));
      draggedCard.classList.remove("p1-hover");
      event.target.classList.remove("droppable");
    } else if(draggedCard.classList.contains("p1-bcard")) {
      let currentActiveCard = p1BenchArr.filter(checkCardId);
      let removeCard = p1BenchArr.indexOf(currentActiveCard);
      p1BenchArr.splice(removeCard);
      p1ActiveCardInPlay = currentActiveCard.shift();
      event.target.appendChild(document.getElementById(data));
      currentActiveCard.classList.remove("p1-hover");
      event.target.classList.remove("droppable");
    }
  } else if(p1Turn === true && event.target.classList.contains("droppable")){
    if(event.target.classList.contains("p1-bench-marker")){
      if(draggedCard.classList.contains("p1-hcard")) {
        let newBenchCard = p1HandArr.filter(checkCardId);
        let removeCard = p1HandArr.indexOf(newBenchCard);
        let test = p1HandArr.splice(removeCard);
        p1BenchArr.push(newBenchCard[0]);
        event.target.appendChild(document.getElementById(data));
        draggedCard.classList.remove("p1-hover");
        draggedCard.classList.remove("p1-hcard");
        event.target.classList.remove("droppable");
        draggedCard.className += " p1-bcard";
      } else if(draggedCard.classList.contains("p1-bcard")) {
          event.target.appendChild(document.getElementById(data))
        }
    }
  }
}


//===============================FIRST TURN DRAW CARDS======================================
//==========================================================================================

function firstTurnDraw () {
  let p1Buttons = document.querySelector('#p1-buttons-container');
  if (p1Turn === true) {
    let setIntCounter = 0;
    let firstTurnInt = setInterval(function(){
      if(setIntCounter === 5){
        clearInterval(firstTurnInt);
      } else {
        drawCard();
        setIntCounter += 1;
      }
    }, 1150);
  } else if (p2Turn === true) {
    let setIntCounter = 0;
    let firstTurnInt = setInterval(function(){
      if(setIntCounter === 5){
        clearInterval(firstTurnInt);
        setTimeout(function(){
          firstTurnPutActiveCardInPlay();
        },1500)
      } else {
        drawCard();
        setIntCounter += 1;
      }
    }, 1150);
 }
}

//===============================PLAYER 1 BUTTONS========================================
//=======================================================================================


function attack () {
  if(setUp === true){
    let speechBubble = document.getElementById('speech-bubble');
    let speechBubbleContainer = document.getElementById('speech-bubble-container');
    speechBubbleContainer.style.display = "block";
    bubbleText = "You cannot attack during the setup round.";
    speechBubble.innerHTML = bubbleText;
    setTimeout(function(){
      speechBubbleContainer.style.display = "none";
    }, 3000);
  } else if(p1Turn === true && p1ActiveCardInPlay !== undefined ) {
    document.getElementById(p1ActiveCardInPlay.cardId).className += " p1-attack";
    document.getElementById('p1-explosion').style.display = "inherit";
    setTimeout(function(){
      let newHp = (p2ActiveCardInPlay.health = (p2ActiveCardInPlay.health - p1ActiveCardInPlay.attack));
      let target = document.getElementById('p2-active-card').getElementsByTagName("span")[1]
      target.innerHTML = newHp;
      document.getElementById('p1-explosion').style.display = "none";
      document.getElementById(p1ActiveCardInPlay.cardId).classList.remove("p1-attack");
      if(p2ActiveCardInPlay.health <= 0 ) {
        target.innerHTML = 0;
        p2DefeatedDoggoArr.push(p2ActiveCardInPlay);
        endGame();
        killCard(p2ActiveCardInPlay);
        p2ActiveCardInPlay = undefined;
      }
    },1000);
    setTimeout(function(){
      endTurn();
    },500);
  } else if(p1Turn === true && p1ActiveCardInPlay === undefined) {
    let speechBubble = document.getElementById('speech-bubble');
    let speechBubbleContainer = document.getElementById('speech-bubble-container');
    speechBubbleContainer.style.display = "block";
    bubbleText = "You must have an active doggo to attack.";
    speechBubble.innerHTML = bubbleText;
    setTimeout(function(){
      speechBubbleContainer.style.display = "none";
    }, 3000);
  }
}

function specialAttack () {
  let speechBubble = document.getElementById('speech-bubble');
  let speechBubbleContainer = document.getElementById('speech-bubble-container');
  speechBubbleContainer.style.display = "block";
  bubbleText = "Your doggo is not ready to use its special attack.";
  speechBubble.innerHTML = bubbleText;
  setTimeout(function(){
    speechBubbleContainer.style.display = "none";
  }, 3500);
}

function endTurn () {
  endGame();
  if (p1ActiveCardInPlay === undefined && endGame !== true) {
    let speechBubble = document.getElementById('speech-bubble');
    let speechBubbleContainer = document.getElementById('speech-bubble-container');
    speechBubbleContainer.style.display = "block";
    bubbleText = "You must have an active doggo before you can end your turn.";
    speechBubble.innerHTML = bubbleText;
    setTimeout(function(){
      speechBubbleContainer.style.display = "none";
    }, 3000);
    } else if(p1Turn === true && p1ActiveCardInPlay !== undefined && endGame !== true) {
      if( setUp === true && setUpCounter === 0) {
        setUpCounter += 1;
        endSetUpState();
        p2Turn = true;
        p1Turn = false;
        yourTurnPopUp();
        setTimeout(function(){
          firstTurnDraw();
        }, 2500)
      } else if( setUp === true && setUpCounter === 1) {
          setUpCounter += 1;
          endSetUpState();
          p2Turn = true;
          p1Turn = false;
          yourTurnPopUp();
          setTimeout(function(){
            drawCard();
          },2500)
          setTimeout(function(){
            putActiveCardInPlay();
          },5000);
        } else {
        p1Turn = false;
        p2Turn = true;
        yourTurnPopUp();
        setTimeout(function(){
          drawCard();
        },2500)
      }
    }
  }



//==================================P2 A.I.==============================================
//=======================================================================================
//===============================CHECK CARDTYPE==========================================
//=======================================================================================

function isDoggoCardType(element) {
  if(element.cardType === 'doggo'){
    return true;
  } else {
    return false;
  }
}

function isUseCardType(element) {
  if(element.cardType === 'use'){
    return true;
  } else {
    return false;
  }
}

//===========================P2 A.I. - PLACECARDS ON FIELD===============================
//=======================================================================================

function firstTurnPutActiveCardInPlay () {
  setTimeout(function(){
    putActiveCardInPlay();
  },2000)
}

function putActiveCardInPlay(){
  let p2ActiveCardNode = document.getElementById('p2-active-card');
  let randomNum = Math.floor((Math.random() * p2HandArr.length - 1) + 1);

  if(p2Turn === true && p2ActiveCardInPlay === undefined) {
    if (p2BenchArr.length === 0 && isDoggoCardType(p2HandArr[randomNum]) === true) {
      let removeCardFromHand = p2HandArr.splice(randomNum,1);
      p2ActiveCardInPlay = removeCardFromHand.shift();
      p2ActiveCardNode.appendChild(document.getElementById(p2ActiveCardInPlay.cardId));
      setTimeout(function(){
        putCardsOnBench();
      },2000);
    } else if (p2BenchArr.length > 0 && p2ActiveCardInPlay === undefined) {
      let randomBenchNum = Math.floor((Math.random() * p2BenchArr.length - 1) + 1);
      let removeCardFromBench = p2BenchArr.splice(randomBenchNum,1);
      p2ActiveCardInPlay = removeCardFromBench.shift();
      p2ActiveCardNode.appendChild(document.getElementById(p2ActiveCardInPlay.cardId));
      console.log("attacking 2");
      setTimeout(function(){
        p2Attack();
      },2000);
    } else if(p2BenchArr.length === 0 && isUseCardType(p2HandArr[randomNum]) === true && p2ActiveCardInPlay === undefined){
      putActiveCardInPlay();
    }
  }  else if(p2BenchArr.length >= 1 && p2ActiveCardInPlay !== undefined){
    console.log("attacking 3");
    setTimeout(function(){
      p2Attack();
    },2000);
  } else if(p2BenchArr.length === 0){
    putCardsOnBench();
  }
}

  function putCardsOnBench () {
    let newBenchCardToPlace;
    let p2BenchNode;
    if(p2Turn === true && p2ActiveCardInPlay !== undefined && p2BenchArr.length === 0){
      let randomNumBench = Math.floor((Math.random() * 3) + 2);
      let i = 0;
      let benchPlacement = setInterval(function(){
        i += 1;
        if(p2HandArr === []){
          setTimeout(function(){
            p2Attack();
          }, 1500);
          clearInterval(benchPlacement);
        } else if( i >= randomNumBench){
          setTimeout(function(){
            p2Attack();
          }, 1500);
          clearInterval(benchPlacement);
        } else {
          newBenchCardToPlace = document.getElementById(p2HandArr[0].cardId);
          let removeCard = p2HandArr.shift();
          p2BenchArr.push(removeCard);
          if(  i === 1 && p2HandArr !== [] && document.getElementById(`p2-bench-2`).hasChildNodes() === false){
            p2BenchNode = document.getElementById(`p2-bench-2`);
            p2BenchNode.appendChild(newBenchCardToPlace);
          } else if( i === 2 && p2HandArr !== [] && document.getElementById(`p2-bench-2`).hasChildNodes() === false){
            p2BenchNode = document.getElementById(`p2-bench-3`);
            p2BenchNode.appendChild(newBenchCardToPlace);
          } else if( i === 3 && p2HandArr !== [] && document.getElementById(`p2-bench-2`).hasChildNodes() === false){
            p2BenchNode = document.getElementById(`p2-bench-1`);
            p2BenchNode.appendChild(newBenchCardToPlace);
          } else if( i === 3 && p2HandArr !== [] && document.getElementById(`p2-bench-2`).hasChildNodes() === false){
            p2BenchNode = document.getElementById(`p2-bench-4`);
            p2BenchNode.appendChild(newBenchCardToPlace);
          }
        }
    },1500);
  } else {
    console.log('attacking 4')
      setTimeout(function(){
        p2Attack();
      },2000)
    }
  }

//===========================P2 A.I. - ATTACK/SPECIAL/ENDTURN============================
//=======================================================================================

function p2Attack () {
  if(setUp === true){
    p2EndTurn();
  } else if(p2Turn === true && p2ActiveCardInPlay !== undefined && p1ActiveCardInPlay !== undefined && p2AtkCounter === 0) {
    p2AtkCounter += 1
    console.log('p2Attacking')
    document.getElementById(p2ActiveCardInPlay.cardId).className += " p2-attack";
    document.getElementById('p2-explosion').style.display = "inherit";
    setTimeout(function(){
      document.getElementById('p2-explosion').style.display = "none";
      let newHp = (p1ActiveCardInPlay.health = (p1ActiveCardInPlay.health - p2ActiveCardInPlay.attack));
      let target = document.getElementById('p1-active-card').getElementsByTagName("span")[1]
      target.innerHTML = newHp;
      document.getElementById('p2-explosion').style.display = "none";
      document.getElementById(p2ActiveCardInPlay.cardId).classList.remove("p2-attack");
      if(p1ActiveCardInPlay.health <= 0 ) {
        p1DefeatedDoggoArr.push(p1ActiveCardInPlay);
        endTurn();
        target.innerHTML = 0;
        killCard(p1ActiveCardInPlay);
        p1ActiveCardInPlay = undefined;
        document.getElementById('p1-active-card').classList.add("droppable")
      }
    },1000);
    setTimeout(function(){
      p2EndTurn();
    }, 1500);
  }
}


function p2SpecialAttack () {
}

function p2EndTurn () {
  endGame();
  if (p2ActiveCardInPlay === undefined && endGame !== true) {
      putActiveCardInPlay();
    } else if(p2Turn === true && p2ActiveCardInPlay !== undefined && endGame !== true) {
      if( setUp === true && setUpCounter === 0) {
        setUpCounter += 1;
        endSetUpState();
        p1Turn = true;
        p2Turn = false;
        yourTurnPopUp();
        setTimeout(function(){
          firstTurnDraw();
        },2500)
      } else if( setUp === true && setUpCounter === 1) {
          setUpCounter += 1;
          endSetUpState();
          p1Turn = true;
          p2Turn = false;
          yourTurnPopUp();
          setTimeout(function(){
            drawCard();
          },2500)
        } else {
        p2Turn = false;
        p1Turn = true;
        yourTurnPopUp();
        setTimeout(function(){
          drawCard();
        },2500)
      }
    }
  }

//=======================================================================================
//=================================END OF P2 AI==========================================
//=======================================================================================


// IF CARDS HP <= 0 MAKE THAT CARD TURN 45 DEGREES WAIT THEN FADE OUT
//=======================================================================================

function killCard(card) {
    let deadCard = document.getElementById(card.cardId);
    deadCard.className += " death";
    setTimeout(function(){
      deadCard.remove();
    }, 3500);
    endGame();
}

function endGame (){
  if(p2DefeatedDoggoArr.length === 1){
    gameEnd = true;
    p1Turn = false;
    p2Turn = false;
    setTimeout(function(){
    document.getElementById('you-win').style.display = "inherit";
  },1000)
  } else if(p1DefeatedDoggoArr.length === 1){
    gameEnd = true;
    p1Turn = false;
    p2Turn = false;
    setTimeout(function(){
    document.getElementById('you-lose').style.display = "inherit";
  },1000)
  }
}
//===========================GAME SETUP STATE============================================
//=======================================================================================
function endSetUpState(){
  if(setUpCounter === 2){
    setUp = false;
    firstTurn = false;
  }
}


//===========================GAME START - COIN TOSS FOR WHO GOES FIRST===================
//=======================================================================================

function tailsSelected() {
  tails = true;
  heads = false;
  let ht = document.getElementById('heads-or-tails');
  fadeOut(ht);
  chooseWhoGoesFirst();
}

function headsSelected() {
  heads = true;
  tails = false;
  let ht = document.getElementById('heads-or-tails');
  fadeOut(ht);
  chooseWhoGoesFirst();
}

function chooseWhoGoesFirst() {
  if(gameStart === true){
    gameStart = false;
    let coinContainer = document.getElementById('coin-container');
    let coin = document.getElementById('coin-img');
    fadeIn(coinContainer);
    var flipCoin = Math.floor((Math.random() * 2) + 1);
    if(flipCoin === 2){
      setTimeout(function(){
        coin.className += (' coin-img-tails');
      },1000)
      if(tails === false) {
        p2Turn  = true;
        p1Turn  = false;
      } else if(tails === true) {
        p2Turn  = false;
        p1Turn  = true;
      } setTimeout(function(){
          coin.classList.remove('coin-img-tails');
          fadeOut(coinContainer);
          firstTurnDraw();
          yourTurnPopUp();
        }, 4500);
    } else {
      setTimeout(function(){
        coin.className += (' coin-img-heads');
      },1000)
      if(heads === false) {
        p2Turn  = true;
        p1Turn  = false;
      } else if(heads === true) {
        p2Turn  = false;
        p1Turn  = true;
      }
      setTimeout(function(){
        coin.classList.remove('coin-img-heads');
        fadeOut(coinContainer);
        firstTurnDraw();
        yourTurnPopUp();
      }, 4500);
    }
  }
}
