//COPIED FROM GAME JS(slightly altered for this purpose) --REFACTOR LATER
  let cardList = p1Deck.map(function(){
    let card = cardList.pop();
    for(let i = 0 ; i < cardList.length - 1 ; i++) {
    let cardId = card;
    //create elements
    let newCard = document.createElement("li");
    let newCardImgContainer = document.createElement("div");
    let newCardImg = document.createElement("IMG");
    let newCardFront = document.createElement("div");
    let newCardBack = document.createElement("div");
    let newCardSpecial = document.createElement("p");
    let newCardAtkAndHpBox = document.createElement("p");
    let newCardAtkBox = document.createElement("span");
    let newCardAtkBoxSeparator = document.createTextNode('/');
    let newCardHpBox = document.createElement("span");
    let atkBoxAttack = document.createTextNode(`${card.attack}`);
    let atkBoxHealth = document.createTextNode(`${card.health}`);
    //add Id and/or className to elements
    newCard.setAttribute("id", "p1-new-card");
    newCard.className = "card-front flipCard p1-hcard";
    newCardImgContainer.className = "card-img-holder";
    newCardImg.className = "card-img";
    newCardImg.setAttribute("src", card.image);
    newCardFront.className = "card-front-background";
    newCardBack.className = "card-back-for-flip";
    newCardSpecial.className = "card-special";
    newCardAtkAndHpBox.className = "atk-hp-box";
    newCardAtkBox.className = "atk-box";
    newCardHpBox.className = "hp-box";
    // append elements to eachother
    newCard.append(newCardImgContainer);
    newCardImgContainer.append(newCardImg);
    newCard.append(newCardFront);
    newCard.append(newCardBack);
    newCardFront.append(newCardSpecial);
    newCardSpecial.append(newCardAtkAndHpBox);
    newCardAtkAndHpBox.append(newCardAtkBox);
    newCardAtkBox.append(atkBoxAttack);
    newCardAtkAndHpBox.append(newCardAtkBoxSeparator);
    newCardAtkAndHpBox.append(newCardHpBox);
    newCardHpBox.append(atkBoxHealth);
    document.getElementById('p1-add-new-card').appendChild(newCard);
    //put card in the list
    let p1NewCard = document.getElementById('p1-new-card');
    let p1Hand = document.getElementById('card-list');
    p1NewCard.setAttribute("draggable","true");
    p1NewCard.setAttribute("ondragstart","drag(event)");
    p1NewCard.className += " first-turn-scale";
    p1NewCard.classList.remove("flipCard");
    p1NewCard.removeAttribute("id", 'p1-new-card');
    p1NewCard.setAttribute("id", `${drawnCardId.cardId}`);
    p1Hand.appendChild(p1NewCard);
    p1NewCard.classList.remove("first-turn-scale");
    p1NewCard.className += " p1-hover";
  }
})
