var query = document.querySelector('#menu .item span'),
    queryAll = document.querySelectorAll('#menu .item span');

alert(query.innerHTML); // Affiche : "Élément 1"

alert(queryAll.length); // Affiche : "2"
alert(queryAll[0].innerHTML + ' - ' + queryAll[1].innerHTML); // Affiche : "Élément 1 - Élément 2"

// Pour récupérer les classes "imbriquées" comme class="External red u"
var classes    = document.getElementById('myLink').className;
var classesNew = [];
classes = classes.split(' ');

for (var i = 0, c = classes.length; i < c; i++) {
    if (classes[i]) {
       classesNew.push(classes[i]);
    }
}

alert(classesNew);
//*********************************************
//autre méthode avec classlist (valable à partir de IE10)

var div = document.querySelector('div');

// Ajoute une nouvelle classe
div.classList.add('new-class');

// Retire une classe
div.classList.remove('new-class');

// Retire une classe si elle est présente ou bien l'ajoute si elle est absente
div.classList.toggle('toggled-class');

// Indique si une classe est présente ou non
if (div.classList.contains('old-class')) {
    alert('La classe .old-class est présente !');
}

// Parcourt et affiche les classes CSS
var result = '';

for (var i = 0 ; i < div.classList.length ; i++) {
    result += '.' + div.classList[i] + '\n';
}

alert(result);
//******************************