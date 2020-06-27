let allCards = [];
var degree = 0;

function cardArray () {
    for (i = 1; i < 6; i++) {
        
        var idTag = "card" + i;
        var card = document.getElementById(idTag);
         // testing
        var cardNum = card.innerHTML;
        console.log(cardNum); 

        allCards.push(card);
    }
}

function backgroundColor() {
    for (i = 0; i < 5; i++) {
        var r = Math.floor((Math.random() * 255));
        var g = Math.floor((Math.random() * 255));
        var b = Math.floor((Math.random() * 255));

        var randomColor = "rgba(" + r + "," + g + "," + b + ", 1)";

        var card = allCards[i];
        //console.log(card);
        card.style.backgroundColor = randomColor;
    }
}

function makeStack() {
    for (i = 0; i < 5; i++) {
        var card = allCards[i];

        //Align in a stack 
        card.classList.add("onLoad");

        //Rotate
        degree = degree + 15;
        //console.log(degree);
        card.style.transform = "rotate("+ degree + "deg)";
    }
}

//unfurl
var button = document.getElementById("unfurl")
button.onclick = function() {
    for (i = 0; i < 5; i++) {
        var card = allCards[i];

        console.log("clicked");
        card.style.transform = "rotate(0deg)";
        card.classList.remove("onLoad");''
    }
    var scrollbar = document.getElementById("scroll");
    scrollbar.scrollLeft = 100;
}


cardArray();
backgroundColor();
window.onload = makeStack();

