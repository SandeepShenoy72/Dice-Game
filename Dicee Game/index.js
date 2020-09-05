var randomNumber1 = Math.random();
randomNumber1=randomNumber1*6;
randomNumber1 = Math.floor(randomNumber1)+1;

var randomDice = "dice" + randomNumber1 + ".png";

var randomImage = "images/" + randomDice;

var imag1 = document.querySelector(".img1");

imag1.setAttribute("src", randomImage);


//img 2//

var randomNumber2 = Math.floor(Math.random()*6+1);

if(randomNumber2!=randomNumber1)
{
  var randomDice2 = "dice" + randomNumber2 + ".png";

  var randomImage2 = "images/" + randomDice2;

  var imag2 = document.querySelector(".img2");

  imag2.setAttribute("src", randomImage2);

}



if(randomNumber1>randomNumber2)
{
  document.querySelector("h1").textContent = "Player1 Wins"
}

else if(randomNumber1==randomNumber2){
  document.querySelector("h1").textContent = "Draw"
}
else{
document.querySelector("h1").textContent = "Player2 Wins"
}
