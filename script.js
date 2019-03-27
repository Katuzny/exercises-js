var button = document.getElementById('clic');
var div = document.getElementById('affichage');
var score = 0;


function clic(){
	score ++;
	div.innerHTML = score;
}