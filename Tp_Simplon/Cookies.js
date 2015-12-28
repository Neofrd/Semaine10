var bouton = document.getElementById('bouton');
var ladiv = document.getElementById('affichage');
var score = 0;
var multiplicateur = document.getElementById('multiplicateur');
var autoclick = document.getElementById('Autoclick');

var nbautoclick = 0;
var compteur=1;
var cout = 10;
//var intervalId = null;

setInterval(Rajoutauto,1000);

AffichageAutoclick();
multiplicateur.innerHTML= "Multiplicateur + " + compteur;

function AffichageAutoclick() {
  if (score<200) {
    autoclick.style.display='none';
  } else {
    autoclick.style.display='block';
  }
}

function Rajoutauto () {
  score = score + (nbautoclick * 1);
  //intervalId = window.setInterval ('bouton.addEventListener('click')',100);
  ladiv.innerHTML = score;
  affichageAutoclick();
}

bouton.addEventListener('click', function() {
  score = score + compteur ;
  ladiv.innerHTML = score;
  AffichageAutoclick();
}, true);

multiplicateur.addEventListener('click', function() {
  if (score >= cout) {
    compteur++;
    score = score - cout ;
    ladiv.innerHTML = score ;
    cout= cout*2;
    multiplicateur.innerHTML="Multiplicateur + " + compteur + ' coût ' + cout;
  }
  else {
    alert ('Ce click vaut ' + cout + ' points et la maison ne fait pas crédit')};
  AffichageAutoclick();
},true);

autoclick.addEventListener ('click', function () {
  if (score>=200) {
  score=score - 200 ;
  ladiv.innerHTML = score ;
  nbautoclick++;
  AffichageAutoclik();
  }
})