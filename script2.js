.test {
    border: 1px solid white;
}

/* SHOW SCROLLBAR 
::-webkit-scrollbar {
    -webkit-appearance: none;
    width: 7px;
  }

::-webkit-scrollbar-thumb {
    background: #888;
}
*/

body {
    background-color: rgba(0,0,0,5);
    padding: 0px;
    margin: 0px;
}


.cards {
    position: absolute;
/*    justify-content: space-evenly; 
    overflow: scroll; 
    white-space: nowrap; */
    width: 100%;
    height: 100%;
    z-index: 3;
}
/* 
.scroll-block {
    position: absolute;
    display: flex;
    width: 100%;
    height: 45%;
    top: 28vh;
   justify-content: space-between;
    background-color: rgba(0,0,0,0);
} */

.card {
    background-color: white;
    position: relative;
    display: inline;
    top: 25vh;
    height: 45%;
    width: 33vh;
    margin-left: 11%;
/*    margin-right: 4%; */
    transition: all 1s;
}

.hover-top:hover {
    transition: all 1s;
    z-index: 5;
}


.card.onLoad {
    position: absolute;
    left: 26%;
}

#card1 {
    transform: rotate(0deg);
    background-color: rgba(255,255,255,1);
}


#card2 {
    transform: rotate(0deg);
    background-color: rgba(255,255,255,1);
}

#card3 {
    transform: rotate(0deg);
    background-color: rgba(255,255,255,1);
}

#card4 {
    transform: rotate(0deg);
    background-color: rgba(255,255,255,1);
}

#card5 {
    transform: rotate(0deg);
    background-color: rgba(255,255,255,1);
}

.bg-2 {
    z-index: 4;
    width: 100%;
    height: 100%;
    position: absolute;
    background-position: center center;
    background-image: url("images/Parkway.jpg");
    background-size: cover;
    transition: all 1s;
    -webkit-animation: fadeInFromNone 0.5s ease-out;
    -moz-animation: fadeInFromNone 0.5s ease-out;
    -o-animation: fadeInFromNone 0.5s ease-out;
    animation: fadeInFromNone 0.5s ease-out;
}

.bg-3 {
    z-index: 4;
    width: 100%;
    height: 100%;
    position: absolute;
    background-image: url("images/RadicalMedia.png");
    background-position: center center;
    background-size: cover;
    transition: all 1s;
    -webkit-animation: fadeInFromNone 0.5s ease-out;
    -moz-animation: fadeInFromNone 0.5s ease-out;
    -o-animation: fadeInFromNone 0.5s ease-out;
    animation: fadeInFromNone 0.5s ease-out;
}

@-webkit-keyframes fadeInFromNone {
    0% {
        display: none;
        opacity: 0;
    }

    1% {
        display: block;
        opacity: 0;
    }

    100% {
        display: block;
        opacity: 1;
    }
}

@-moz-keyframes fadeInFromNone {
    0% {
        display: none;
        opacity: 0;
    }

    1% {
        display: block;
        opacity: 0;
    }

    100% {
        display: block;
        opacity: 1;
    }
}

@-o-keyframes fadeInFromNone {
    0% {
        display: none;
        opacity: 0;
    }

    1% {
        display: block;
        opacity: 0;
    }

    100% {
        display: block;
        opacity: 1;
    }
}

@keyframes fadeInFromNone {
    0% {
        display: none;
        opacity: 0;
    }

    1% {
        display: block;
        opacity: 0;
    }

    100% {
        display: block;
        opacity: 1;
    }
}



/* MOBILE */

@media only screen 
  and (min-device-width: 320px) 
  and (max-device-width: 480px) 
  and (-webkit-min-device-pixel-ratio: 2)
  and (orientation: portrait){ 

      body {
          background-color: ;      }
      
      .cards {
        
      }
      
      .card {
            position: absolute;
            height: 46vh;
            width: 30vh;
            margin-left: 0%;
            margin-right: 8%; 
            top: 29%;
      }
}

/* IPHONE X */ 

 @media only screen 
  and (min-device-width: 375px) 
  and (max-device-width: 812px) 
  and (-webkit-min-device-pixel-ratio: 3)
  and (orientation: portrait) { 
      
       body {
          background-color: ;
      }
      
      .card { 
          margin-left: 0%;
      }
}
