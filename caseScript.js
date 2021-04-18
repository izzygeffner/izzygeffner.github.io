// Get Card
var card = document.getElementById("card");
console.log(card);

//Card Styling
card.style.backgroundColor = "#000000";
card.style.border = "1px solid rgba(255,255,255, .85)";
card.classList.add("onLoad");

function descriptionSwitch(item) {
    var text = item;
    var peers = document.getElementById("peers");
    var parents = document.getElementById("parents");
    var description = document.getElementById("description");

    if (text == peers) {
        console.log('peers');

        peers.classList.remove('switchOff');
        parents.classList.remove('switchOn');

        parents.classList.add('switchOff');
        peers.classList.add('switchOn')

        description.innerHTML = "New York 2023 is a research-driven investigation into how we might approach our collective future. The fair seeks to create a system that values inclusivity by emphasizing open participation, asking the fairgoer not to imagine an idealized future, but to be a part of the reality we create."
    }
    if (text == parents) {
        console.log('parents');

        parents.classList.remove('switchOff');
        peers.classList.remove('switchOn');

        peers.classList.add('switchOff');
        parents.classList.add('switchOn');

        description.innerHTML = "New York 2023 combines research that asks, “What do we want from our future?” “What are our greatest issues today?” and “What does it mean to be a New Yorker?” The response, conceptually and graphically, reflects the diversity of those answers. Instead of finding a single solution, a framework is instead proposed to invite fairgoers themselves to be a part of The Reality We Create."
    }

}
window.addEventListener('scroll', function () {
    var xMin = 0;
    var xMax = 10;

    var yMin = 0;
    var yMax = 686;

    var inputY = window.scrollY;

    percent = (inputY - yMin) / (yMax - yMin);
    outputX = percent * (xMax - xMin);

    //console.log(outputX);

    var card = document.getElementById("card");
    card.style.top = 25 - outputX + "vh";

    var bg = document.getElementById("cards");


})

function onScroll() {
    var element = document.getElementById('introBox');

    // smooth scroll to element and align it at the bottom
    element.scrollIntoView({ behavior: 'smooth', block: 'end' });
}

const faders = document.querySelectorAll('.fade-in');

console.log(faders)

const appearOptions = {
    threshold: .15,
}

const appearOnScroll = new IntersectionObserver(function (entries, appearOnScroll) {
    entries.forEach(entry => {
        if (!entry.isIntersecting) {
            entry.target.classList.remove('appear');
        } else {
            entry.target.classList.add('appear');
            //appearOnScroll.unobserve(entry.target);
        }
    })
}, appearOptions)

faders.forEach(fader => {
    appearOnScroll.observe(fader);
})

//window.addEventListener("scroll", onScroll);
