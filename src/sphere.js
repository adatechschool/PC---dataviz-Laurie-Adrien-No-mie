var canvas = document.querySelector('.myCanvas');
// calque les dimensions sur la fenêtre du navigateur
var width = canvas.width = window.innerWidth;
var height = canvas.height = window.innerHeight;
//précise le contexte 2D
var ctx = canvas.getContext('2d');
//La variable ctx contient désormais un objet CanvasRenderingContext2D, et toutes les opérations de dessin sur le canvas impliqueront de manipuler cet objet.

// possible de reprendre le background créé sur css (même propriétés)
ctx.fillStyle = 'rgb(0, 0, 0)';
ctx.fillRect(0, 0, width, height);

ctx.fillStyle = 'rgb(0, 0, 255)';
ctx.beginPath();
ctx.arc(150, 106, 50, degToRad(0), degToRad(360), false);
ctx.fill();