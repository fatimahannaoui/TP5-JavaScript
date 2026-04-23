var reponse;
var score=0;
reponse=prompt("Quelle est la capitale de la France?");

if(reponse=="Paris")
{
alert("Réponse juste");
score++;
}
else
{
alert("Réponse fausse");
}
reponse=prompt("Combien font 5+3 ?");

if(reponse=="8")
{
alert("Réponse juste");
score++;
}
else
{
alert("Réponse fausse");
}
reponse=prompt("JavaScript est-il un langage web ? oui/non");

if(reponse=="oui")
{
alert("Réponse juste");
score++;
}
else
{
alert("Réponse fausse");
}

alert("Vous avez répondu correctement à "
+score+
" questions sur 3");
