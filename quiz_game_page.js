
var lsp1 = localStorage.getItem("Player 1 Name");
var lsp2 = localStorage.getItem("Player 2 Name");

var P1S = 0;
var P2S = 0;

document.getElementById("P1NScore").innerHTML=lsp1;
document.getElementById("P2NScore").innerHTML=lsp2;

document.getElementById("P1#S").innerHTML=P1S;
document.getElementById("P2#S").innerHTML=P2S;

document.getElementById("P1Q@A").innerHTML="Question Turn:" + lsp1;
document.getElementById("P2Q@A").innerHTML="Answer Turn:" + lsp2;
