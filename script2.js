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
    var headType = document.getElementById("head-type");
    //console.log(image);
    headType.style.zIndex = "0";
    bg.classList.add(image);

    if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
        console.log('true');
        card.style.zIndex = "10";
       }
}

function hide (image, cardElement) {
    var headType = document.getElementById("head-type");
    var bg = document.getElementById("bg");

   bg.classList.remove(image);
   headType.style.zIndex = "5";
   var card = document.getElementById(cardElement);
   if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
    console.log('registed');
    card.style.zIndex = "";
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

var num = 0;
let checkNumbers = [-1, -1];
let mainCopy = ["Should be asleep ", 
                "Sucker for pinball ",
                "Abhorent ice skater ",
                "Buffy the Vampire Slayer fan ",
                "Dweeb for history "]

function textSwap () {
    num++; 
    console.log("click # " + num);

    var type = document.getElementById("intro");

    if (num % 2 == true) {
       // console.log("count odd");
        var arrayNum = Math.floor(Math.random() * mainCopy.length);

         //make sure items don't repeat immediately
       
        checkNumbers[1] = arrayNum;
        //testing
        //console.log('initial: ' + checkNumbers);
        //console.log("displaying " + arrayNum);

       
        if (checkNumbers[1] == checkNumbers[0]) {
            arrayNum = Math.floor(Math.random() * mainCopy.length);
            
        }

        checkNumbers[0] = arrayNum;
       //testing
       // console.log('following: ' + checkNumbers);

        type.innerHTML = mainCopy[arrayNum] + "<span class='switch' id='switch' onclick='textSwap()'></span>";
        type.style.animation = "moveLeft 0.5s all";
        type.style.textAlign = "left";
     
    } else {
        type.innerHTML = "Mutlidisciplinary Designer / Information Maniac <span class='switch' id='switch' onclick='textSwap()'></span>" 
        type.style.textAlign = "right";
        type.style.animation = "moveLeft 0.5s all";
        
    }
     
    
}




cardArray();
backgroundColor();
window.onload = makeStack();
mobileType();

window.addEventListener("resize", mobileType);


