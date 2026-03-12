/* typing animation */

const words = [
"I am a Web Developer",
"I Love Building UI",
"I Solve DSA Problems"
];

let wordIndex = 0;
let charIndex = 0;

function typeEffect(){

let currentWord = words[wordIndex];

document.getElementById("typing").textContent =
currentWord.substring(0, charIndex);

charIndex++;

if(charIndex > currentWord.length){

wordIndex++;

charIndex = 0;

if(wordIndex >= words.length){
wordIndex = 0;
}

setTimeout(typeEffect,1000);

}else{
setTimeout(typeEffect,100);
}

}

typeEffect();


/* particles background */

particlesJS("particles-js",{

particles:{

number:{
value:80
},

size:{
value:3
},

color:{
value:"#00e5ff"
},

line_linked:{
enable:true,
distance:150,
color:"#00e5ff",
opacity:0.4
},

move:{
speed:2
}

}

});