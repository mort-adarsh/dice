var a = Math.random()*6;
a = Math.floor(a);
var b = Math.random()*6;
b = Math.floor(b);
var img = ["image/dice1.png","image/dice2.png","image/dice3.png","image/dice4.png","image/dice5.png","image/dice6.png" ];
document.querySelector(".img1").setAttribute("src", img[a]);
document.querySelector(".img2").setAttribute("src", img[b]);
if(a>b){
  document.querySelector("h1").textContent="Player One Win🦜";
}
else if (a<b) {
    document.querySelector("h1").textContent="🦜Player Two Win";
}
else{
  document.querySelector("h1").textContent="Drawwwnn";
}
