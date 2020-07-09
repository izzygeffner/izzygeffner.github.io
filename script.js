let allCards = [];
var degree = -40;

function cardArray () {
    for (i = 1; i < 8; i++) {
        
        var idTag = "card" + i;
        var card = document.getElementById(idTag);
         // testing
        var cardNum = card.innerHTML;
        //console.log(cardNum); 

        allCards.push(card);
    }
}

function backgroundColor() {
    for (i = 0; i < 7; i++) {
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
    for (i = 0; i < 7; i++) {
        var card = allCards[i];

        //Align in a stack 
        card.classList.add("onLoad");

        //Rotate
        degree = degree + 10;
        //console.log(degree);
        card.style.transform = "rotate("+ degree + "deg)";
    }
}

//unfurl
/* var button = document.getElementById("unfurl")
button.onclick = function() {
    for (i = 0; i < 5; i++) {
        var card = allCards[i];

        console.log("clicked");
        card.style.transform = "rotate(0deg)";
        card.classList.remove("onLoad");''
    }
    var scrollbar = document.getElementById("scroll");
    scrollbar.scrollLeft = 100;
} */

function bgShow (image, cardElement) {
    console.log(cardElement);
    var bg = document.getElementById("bg");
    var card = document.getElementById(cardElement);
    //console.log(image);
    bg.classList.add(image);

    if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
        console.log('true');
        card.classList.add.zIndex = "1";
       }
}

function hide (image, cardElement) {
   bg.classList.remove(image);
   var card = document.getElementById(cardElement);
   if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
    console.log('registed');
    card.classList.remove.zIndex;
   }
}

function mobileType () {
    var width = window.innerWidth;

    console.log(width);

    if (width <= 585) {
        var name = document.getElementById("izzy");
        name.innerHTML = "Izzy Geffner"
    } else {
        var name = document.getElementById("izzy");
        name.innerHTML = "Izzy<br>Geffner"
    }
}





cardArray();
backgroundColor();
window.onload = makeStack();
mobileType();

window.addEventListener("resize", mobileType);


