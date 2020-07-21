let allCards = [];
var degree = -40;
var ifMobile = ( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) ; 


function cardArray () {
    for (i = 1; i < 9; i++) {
        
        var idTag = "card" + i;
        var card = document.getElementById(idTag);
         // testing
        var cardNum = card.innerHTML;
        //console.log(cardNum); 

        allCards.push(card);
    }
}

function backgroundColor() {
    for (i = 0; i < 8; i++) {
        var r = Math.floor((Math.random() * 255));
        var g = Math.floor((Math.random() * 255));
        var b = Math.floor((Math.random() * 255));

        var card = allCards[i];

        var randomNum = Math.floor((Math.random() * 4));
        //RANDOM COLOR
        var randomColor = "rgba(" + r + "," + g + "," + b + ", 1)";

        //F&A FEST
        let cFestival = ["#CA4E4E", "#D8687D", "#EC7E51", "#EEB63E"];
        let cTreatment = ["#0E3443", "#06587E", "#DB7F4C", "#8E7540"];
        let cFair = ["#1D2642", "#7BA25D", "#9FA677", "#056286"];
        let cSolistalgia = ["#5F82C1", "#62AAD6", "#2778B6", "#FBAA27"];
        let cRadical = ["#CD4234", "#132B49", "#CB6699", "#136495"];
        let cSpace = ["#522455", "#334862", "#DF85B3", "#8D5A9C"];

     
        

        switch(i) {
            case 0: 
                console.log("skipped card 1");
                card.style.backgroundColor = randomColor;
                break;
            case 1: 
                console.log("card 2 = " + randomNum);
                card.style.backgroundColor = cFestival[randomNum];
                break;
            case 2:
                console.log("card 3 = " + randomNum);
                card.style.backgroundColor = cTreatment[randomNum];
                break;
            case 3: 
                card.style.backgroundColor = cFair[randomNum];
                break;
            case 4: 
                card.style.backgroundColor = cSolistalgia[randomNum];
                break;
            case 5:
                card.style.backgroundColor = cRadical[randomNum];
                break;
            case 6: 
                card.style.backgroundColor = cSpace[randomNum];
                break;
            case 7: 
                card.style.backgroundColor = randomColor;
                break;
        }
        //console.log(card);
        //card.style.backgroundColor = randomColor;
    }
}

function makeStack() {
    for (i = 0; i < 8; i++) {
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

    if( (ifMobile == true) || window.innerWidth <= 900) {
        //console.log('true');
        card.style.zIndex = "";
        headType.zIndex = "-1";
       }
}

function hide (image, cardElement) {
    var headType = document.getElementById("head-type");
    var bg = document.getElementById("bg");
    var card = document.getElementById(cardElement);

    bg.classList.remove(image);
   
    
    
    if (!(ifMobile)) {
        headType.style.zIndex = "5";
    }
   
   
   if(ifMobile == true) {
    console.log('registed');
    card.style.zIndex = "";
    headType.style.zIndex = "-1";

   }
}

var c = 0;

function cardShowHide(image, cardElement) {
    var bg = document.getElementById("bg");
    var card = document.getElementById(cardElement);

    console.log('cardshowhide is running');
    
    c++;
    if ((c % 2) == true) {

        bg.classList.add(image);

    } else {
        bg.classList.remove(image);
        card.style.zIndex = "0";
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
                "Person who cares about the things other people don’t care about  ",
                "Buffy the Vampire Slayer fan ",
                "Wannabe architectural preservationist ",
                "quick brown fox who jumps over the lazy dog "]

function textSwap () {
    //click counter
    num++; 
    console.log("click # " + num);

    //get type from DOM
    var type = document.getElementById("intro");

    //every other click 
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


       
       //makes HTML Changes
        type.innerHTML = mainCopy[arrayNum] + "<span class='switch' id='switch' onclick='textSwap()'></span>";
       type.style.textAlign = "left";
     //   type.classList.add("tester");
     
    //change back to original state    
    } else {
        type.innerHTML = "Mutlidisciplinary Designer / Information Maniac <span class='switch' id='switch' onclick='textSwap()'></span>" 
        type.style.textAlign = "right";
        type.classList.remove("tester");
        type.style.animation = "moveLeft 0.5s all";
        
    }
     
    
}


function mobileFunction() {

    var cardsDiv = document.getElementsByClassName("card");
    var interactType = document.getElementById("intro");
    

    if( (ifMobile == true) || window.innerWidth <= 900) {
        
        window.onload = console.log("mobileFunction running");

        var headType = document.getElementById("head-type");
        headType.style.zIndex = "2";

        
        //For non-touch devices
        if (!(ifMobile)) {
            console.log("not mobile");

        

            

            }
        }

        //Mobile devices only
        if (ifMobile) {
            console.log("on mobile");

            
            interactType.innerHTML = "Mutlidisciplinary Designer / Information Maniac";


            }
        
    
    }




cardArray();
backgroundColor();
window.onload = makeStack();
mobileType();
mobileFunction();

window.addEventListener("resize", mobileType);


