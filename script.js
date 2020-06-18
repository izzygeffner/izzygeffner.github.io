var degree = 0;

function getCard () {
    for (i = 1; i < 5; i++) {
        
        var idTag = "card" + i;
        var card = document.getElementById(idTag);
         // testing
        var cardNum = card.innerHTML;
        console.log(cardNum); 

        //BG Color
        var r = Math.floor((Math.random() * 255));
        var g = Math.floor((Math.random() * 255));
        var b = Math.floor((Math.random() * 255));

        var randomColor = "rgba(" + r + "," + g + "," + b + ", 1)";
        card.style.backgroundColor = randomColor;

        //Rotate
        degree = degree + 15;
        console.log(degree);
        card.style.transform = "rotate("+ degree + "deg)";

        

    }
}

getCard();