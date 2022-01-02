// for first player 
var randomNUmber1 = Math.floor(Math.random() * 6) + 1;
console.log(randomNUmber1);

var randomDiceImage = "dice" + randomNUmber1  + ".png";

var randomImageSrc = "image/" + randomDiceImage;

var image1= document.querySelectorAll("img")[0];
 
 image1.setAttribute("src", randomImageSrc);
 

//  for second player 
 var randomNUmber2 =  Math.floor (Math.random()*6) + 1;
 console.log(randomNUmber2);

 var randomImageSrc2 = "image/dice" + randomNUmber2 + ".png";

 document.querySelectorAll("img")[1].setAttribute("src", randomImageSrc2);

if(randomNUmber1 > randomNUmber2){
    document.querySelector("h3").innerHTML = "Player 1 Win 🎉";
}
else if(randomNUmber1 < randomNUmber2){
    document.querySelector("h3").innerHTML = "Player 2 win 🎉"
}
else{
    document.querySelector("h3").innerHTML = "Draw! 🚩"
}