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

function bgOnLoad() {
    for (i = 0; i < 8; i++) {
        var card = allCards[i];

        card.style.backgroundColor = "#000000";
        card.style.border = "1px solid rgba(255,255,255, .85)";
    }
}

function backgroundColor(cardElement) {
        var r = Math.floor((Math.random() * 255));
        var g = Math.floor((Math.random() * 255));
        var b = Math.floor((Math.random() * 255));

        console.log(cardElement);

        var card = document.getElementById(cardElement);
     

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

     
        

        switch(cardElement) {
            case 0: 
                console.log("skipped card 1");
                card.style.backgroundColor = randomColor;
                break;
            case 'card2': 
                console.log("card 2 = " + randomNum);
                card.style.backgroundColor = cFestival[randomNum];
                break;
            case 'card3':
                console.log("card 3 = " + randomNum);
                card.style.backgroundColor = cTreatment[randomNum];
                break;
            case 'card4': 
                card.style.backgroundColor = cFair[randomNum];
                break;
            case 'card5': 
                card.style.backgroundColor = cSolistalgia[randomNum];
                break;
            case 'card6':
                card.style.backgroundColor = cRadical[randomNum];
                break;
            case 'card7': 
                card.style.backgroundColor = cSpace[randomNum];
                break;
            case 'card8': 
                card.style.backgroundColor = randomColor;
                break;
        }
        //console.log(card);
        //card.style.backgroundColor = randomColor;
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
    var aboutButton = document.getElementById("about");
    var qButton = document.getElementById("switch");
    //console.log(image);
    headType.style.zIndex = "0";
    aboutButton.style.zIndex = "0";
    qButton.style.zIndex = "0";
    bg.classList.add(image);

    if( (ifMobile == true) || window.innerWidth <= 900) {
        //console.log('true');
        card.style.zIndex = "";
        headType.zIndex = "-1";
       }

    //card.style.border = "";
    backgroundColor(cardElement);
}

function hide (image, cardElement) {
    var headType = document.getElementById("head-type");
    var aboutButton = document.getElementById("about");
    var qButton = document.getElementById("switch");
    var bg = document.getElementById("bg");
    var card = document.getElementById(cardElement);

    bg.classList.remove(image);

    aboutButton.style.zIndex = "10";
    qButton.style.zIndex = "10";
    

    card.style.border = "1px solid white";

    setTimeout(function blackBG(){
        card.style.backgroundColor = "#000000";
    }, 10000);
    
    if (ifMobile == false) {
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
        type.innerHTML = mainCopy[arrayNum];
       type.style.textAlign = "left";
     //   type.classList.add("tester");
     
    //change back to original state    
    } else {
        type.innerHTML = "Mutlidisciplinary designer fueled by curiosity, process &amp; discovery"; 
        type.classList.remove("tester");
        type.style.animation = "moveLeft 0.5s all";
        
    }
     
    
}


function mobileFunction() {

    var cardsDiv = document.getElementsByClassName("card");
    var interactType = document.getElementById("intro");
    var footer = document.getElementById("footer");
    var about = document.getElementById("aboutContainer");
    

    if( (ifMobile == true) || window.innerWidth <= 900) {
        
        window.onload = console.log("mobileFunction running");

        var headType = document.getElementById("head-type");
        headType.style.zIndex = "0";
        

        
        //For non-touch devices
        if (!(ifMobile)) {
            console.log("not mobile");

        

            

            }
        }

        //Mobile devices only
        if (ifMobile) {
            console.log("on mobile");
            
            
            let formaBold = document.getElementsByClassName('formaBold');
            console.log(formaBold);

            for(i = 0; i < formaBold.length; i++) {
                formaBold[i].classList.add('formaMicroBold')
                formaBold[i].classList.remove('formaBold');
            }
            
            interactType.innerHTML = "Mutlidisciplinary designer fueled by curiosity, process &amp; discovery";
            
            footer.style.display = "none";
            
            about.style.zIndex = "0";

            }
        
    
    }

    var c = 0;

    function showAbout () {
        c++;
        var img1 = document.getElementById('face1');
        var img2 = document.getElementById('face2');
        var cards = document.getElementById("scroll");
        var about = document.getElementById("aboutContainer");
        var headType = document.getElementById("head-type");
        var topGrad = document.getElementById("topGrad");
        var bottomGrad = document.getElementById("bottomGrad");


        var width = window.innerWidth;
    
        if ((c % 2) != 0) {
            img1.style.opacity = "1";
            img2.style.opacity = "1";

            cards.classList.remove("showCards");
            about.classList.remove("hideAbout");

            cards.classList.add("hideCards");
            about.classList.add("showAbout");
            
            setTimeout(function showGrad () {
                topGrad.classList.add("show");
                bottomGrad.classList.add("show"); 
            }, 1500); 

           
            if(ifMobile == true) {
            about.onscroll = function () {
                
              
                var xMin = 0;
                var xMax = 1;

                var yMin = 0;
                var yMax = 160;

                var inputY = about.scrollTop;
                
                percent = (inputY - yMin) / (yMax - yMin);
                outputX = percent * (xMax - xMin);

                img1.style.opacity = 1 - outputX;
                console.log(outputX);
            }
            
            }

            if (width <= 900) {
                headType.classList.add("small-headtype");
                console.log("test tes t")
            }


        } else {
            img1.style.opacity = "0";
            img2.style.opacity = "0";

            cards.classList.remove("hideCards");
            cards.classList.add("showCards");
            about.classList.add("hideAbout");
           
        
            topGrad.classList.remove("show");
            bottomGrad.classList.remove("show");
          

            if (width <= 900) {
                headType.classList.remove("small-headtype");
            }
        }
    }



cardArray();
//backgroundColor();
window.onload = makeStack();
mobileType();
mobileFunction();
bgOnLoad();

window.addEventListener("resize", mobileType);


