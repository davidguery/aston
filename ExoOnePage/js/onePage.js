var link1 = document.getElementById('link1');
var link2 = document.getElementById('link2');
var textContainer = document.getElementById('textContainer');

link1.addEventListener('click', function () {
	textContainer.innerHTML = 'Ceci est le contenu du menu 1';
});

link2.addEventListener('click', function () {
	textContainer.innerHTML = 'Voici ce qu\'affiche le menu 2';
})
