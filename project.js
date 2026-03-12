// Pain tracker
function savePain(){

let pain = document.getElementById("painLevel").value;

localStorage.setItem("painLevel", pain);

document.getElementById("painResult").innerText =
"Pain level saved: " + pain;

}


// Medicine reminder
function setReminder(){

let time = document.getElementById("medTime").value;

document.getElementById("reminderStatus").innerText =
"Reminder set at " + time;

setInterval(function(){

let now = new Date();

let current =
now.getHours() + ":" +
String(now.getMinutes()).padStart(2,"0");

if(current === time){

alert("Time to take your medicine 💊");

}

},60000);

}


// AI assistant
function sendMessage(){

let input = document.getElementById("userInput").value;

let chatbox = document.getElementById("chatbox");

chatbox.innerHTML += "<p><b>You:</b> "+input+"</p>";

let reply="";

input=input.toLowerCase();

if(input.includes("pain")){
reply="Try turmeric milk and gentle yoga.";
}
else if(input.includes("diet")){
reply="Eat warm foods, ginger tea, and green vegetables.";
}
else if(input.includes("exercise")){
reply="Light yoga and stretching helps arthritis.";
}
else{
reply="Stay consistent with Ayurvedic treatment and healthy lifestyle.";
}

chatbox.innerHTML += "<p><b>AyurFlex AI:</b> "+reply+"</p>";

document.getElementById("userInput").value="";

}