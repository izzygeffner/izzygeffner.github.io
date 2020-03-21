//Get Time String
var d = new Date();

var est = d.getTimezoneOffset();
console.log(est);

var time = window.document.getElementById("time");
var timeString = time.innerHTML;
console.log(timeString);
   
//am or pm
var ap = timeString.slice(5,6);
console.log(ap);

//Start Hour
var startTime = timeString.slice(0, 2)
var startHour = Number(startTime);
console.log("start hour = " + startHour);
    
if (ap == "p") {
    startHour = startHour + 12;
}
    
console.log(startHour);
    
//End Hour 
var endTime = timeString.slice(7, 9)
console.log("end time = " + endTime);
var endHour = Number(endTime);
console.log(endHour);
    
if (ap == "p") {
    endHour = endHour + 12;
}

console.log(endHour);


//Change type if event is on 
var hourNow = d.getHours();
console.log(hourNow);

if (hourNow >= startHour && hourNow < endHour) {
    console.log(true);
    var onNow = window.document.getElementById("time");
    onNow.innerHTML = "ON NOW till " + endHour + ap;
    onNow.className += " onNow";
}
    

    
 //   var timeNow = getHours()

// onNow();