var randomNumber1= Math.random();
randomNumber1= randomNumber1*6;
randomNumber1=Math.floor(randomNumber1)+1;
var diceImg1= "dice"+randomNumber1+".png";
var randomImage1=diceImg1;
var image1= document.querySelectorAll("img")[0].setAttribute("src", randomImage1);

var randomNumber2= Math.random();
randomNumber2= randomNumber2*6;
randomNumber2=Math.floor(randomNumber2)+1;
var diceImg2= "dice"+randomNumber2+".png";
var randomImage2=diceImg2;
var image2= document.querySelectorAll("img")[1].setAttribute("src", randomImage2);

if(randomNumber1>randomNumber2)
{
  document.querySelector("h1").innerHTML = "🚩Player 1 wins!!! 🚩";
}
else if(randomNumber2>randomNumber1)
{
  document.querySelector("h1").innerHTML="🚩Player 2 wins!!! 🚩";
}
else
{
  document.querySelector("h1").innerHTML="🚩DRAW!!! 🚩";
}
