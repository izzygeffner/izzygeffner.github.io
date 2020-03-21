
function ifMobile () {
    if (window.innerWidth < 1000) {
        console.log(true);
        var mon = window.document.getElementById("mon");
        var wed = window.document.getElementById('wed');
        var fri = window.document.getElementById('fri');
    
        var remove = window.document.getElementById("mobileRemove");
        remove.remove();
    
        mon.insertAdjacentHTML('afterend', '<div class="break"></div>');
        wed.insertAdjacentHTML('afterend', '<div class="break"></div>');
        fri.insertAdjacentHTML('afterend', '<div class="break"></div>');    
    }
}

window.document.addEventListener("resize", ifMobile());